import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir, appendFile, readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  userType?: string
}

const CSV_HEADERS = ["timestamp","name","email","phone","userType","subject","message"]

function toCsvLine(values: string[]) {
  return values.map((v) => {
    const s = v ?? ""
    if (s.includes(",") || s.includes("\n") || s.includes('"')) {
      return '"' + s.replace(/"/g, '""') + '"'
    }
    return s
  }).join(",") + "\n"
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload
    const { name = "", email = "", phone = "", userType = "", subject = "", message = "" } = body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const outDir = path.join(process.cwd(), "public")
    const outFile = path.join(outDir, "contact_messages.csv")
    if (!existsSync(outDir)) {
      await mkdir(outDir, { recursive: true })
    }
    if (!existsSync(outFile)) {
      await writeFile(outFile, toCsvLine(CSV_HEADERS), { encoding: "utf8" })
    }
    const timestamp = new Date().toISOString()
    const row = toCsvLine([timestamp, name, email, phone, userType, subject, message])
    await appendFile(outFile, row, { encoding: "utf8" })

    // Optional email via webhook or SMTP relay (environment provided)
    const webhook = process.env.CONTACT_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ to: "anishpambhar@gmail.com", name, email, phone, userType, subject, message }) })
      } catch {}
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


