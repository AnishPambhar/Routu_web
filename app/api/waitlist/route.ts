import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir, appendFile, readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

type Payload = {
  name?: string
  email?: string
  phone?: string
  interest?: "waitlist" | "vendor" | "notify" | "traveler"
  shopName?: string
  shopType?: string
}

const CSV_HEADERS = ["timestamp","name","email","phone","interest","shopName","shopType"]

function toCsvLine(values: string[]) {
  return values
    .map((v) => {
      const s = v ?? ""
      if (s.includes(",") || s.includes("\n") || s.includes('"')) {
        return '"' + s.replace(/"/g, '""') + '"'
      }
      return s
    })
    .join(",") + "\n"
}

function parseCsv(content: string): string[][] {
  const rows: string[][] = []
  let i = 0
  const n = content.length
  let current: string[] = []
  let field = ""
  let inQuotes = false

  while (i < n) {
    const char = content[i]
    if (inQuotes) {
      if (char === '"') {
        if (i + 1 < n && content[i + 1] === '"') {
          field += '"'
          i += 2
          continue
        } else {
          inQuotes = false
          i++
          continue
        }
      } else {
        field += char
        i++
        continue
      }
    } else {
      if (char === '"') {
        inQuotes = true
        i++
        continue
      }
      if (char === ',') {
        current.push(field)
        field = ""
        i++
        continue
      }
      if (char === '\n') {
        current.push(field)
        rows.push(current)
        current = []
        field = ""
        i++
        continue
      }
      // handle \r (windows newlines) by skipping it
      if (char === '\r') {
        i++
        continue
      }
      field += char
      i++
    }
  }
  // push last field/row if any
  if (field.length > 0 || current.length > 0) {
    current.push(field)
    rows.push(current)
  }
  return rows
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload
    const { name = "", email = "", phone = "", interest = "waitlist", shopName = "", shopType = "" } = body

    if (!email && !phone) {
      return NextResponse.json({ error: "Email or phone is required" }, { status: 400 })
    }

    const timestamp = new Date().toISOString()

    // Ensure output directory
    const outDir = path.join(process.cwd(), "public")
    const outFile = path.join(outDir, "submissions.csv")
    if (!existsSync(outDir)) {
      await mkdir(outDir, { recursive: true })
    }
    // Ensure file with headers exists
    if (!existsSync(outFile)) {
      const header = toCsvLine(CSV_HEADERS)
      await writeFile(outFile, header, { encoding: "utf8" })
    }

    // Read existing CSV and deduplicate by email OR phone (case-insensitive for email)
    const csvContent = await readFile(outFile, { encoding: "utf8" })
    const rows = parseCsv(csvContent)
    if (rows.length === 0) {
      rows.push(CSV_HEADERS)
    }

    const header = rows[0]
    const idxEmail = header.indexOf("email")
    const idxPhone = header.indexOf("phone")

    const targetEmail = (email || "").trim().toLowerCase()
    const targetPhone = (phone || "").trim()

    let replaced = false
    // Build the new data row
    const newRow = [timestamp, name, email, phone, interest, shopName, shopType]

    // Iterate and replace the first matching row by email or phone
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r]
      const existingEmail = (row[idxEmail] || "").trim().toLowerCase()
      const existingPhone = (row[idxPhone] || "").trim()
      if ((targetEmail && existingEmail === targetEmail) || (targetPhone && existingPhone === targetPhone)) {
        rows[r] = newRow
        replaced = true
        break
      }
    }

    // If no match, append
    if (!replaced) {
      rows.push(newRow)
    }

    // Rewrite the CSV (headers + rows)
    const rebuilt = rows.map((r) => toCsvLine(r)).join("")
    await writeFile(outFile, rebuilt, { encoding: "utf8" })

    // Optional forward to webhook (e.g., Google Apps Script or Make/Zapier)
    const webhook = process.env.SHEETS_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ timestamp, name, email, phone, interest, shopName, shopType })
        })
      } catch {
        // Ignore webhook errors; CSV write already succeeded
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


