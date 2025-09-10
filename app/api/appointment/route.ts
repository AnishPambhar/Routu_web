import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir, appendFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

type AppointmentPayload = {
  name: string
  email: string
  phone?: string
  note?: string
}

const CSV_HEADERS = ["timestamp","name","email","phone","note"]

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
    const body = (await req.json()) as AppointmentPayload
    const { name = "", email = "", phone = "", note = "" } = body
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const outDir = path.join(process.cwd(), "public")
    const outFile = path.join(outDir, "appointments.csv")
    if (!existsSync(outDir)) {
      await mkdir(outDir, { recursive: true })
    }
    if (!existsSync(outFile)) {
      await writeFile(outFile, toCsvLine(CSV_HEADERS), { encoding: "utf8" })
    }
    const timestamp = new Date().toISOString()
    await appendFile(outFile, toCsvLine([timestamp, name, email, phone, note]), { encoding: "utf8" })

    // Optional: forward via webhook/email
    const webhook = process.env.APPOINTMENT_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ to: "anishpambhar@gmail.com", name, email, phone, note }) })
      } catch {}
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


