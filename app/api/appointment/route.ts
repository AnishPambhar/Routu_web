import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"

type AppointmentPayload = {
  name: string
  email: string
  phone?: string
  note?: string
}

const CSV_HEADERS = ["timestamp","name","email","phone","note"]

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AppointmentPayload
    const { name = "", email = "", phone = "", note = "" } = body
    if (!name || (!email && !phone)) {
      return NextResponse.json({ error: "Name and email or phone required" }, { status: 400 })
    }

    const timestamp = new Date().toISOString()

    // Send to Apps Script webhook; error if fails
    const appsScriptUrl = process.env.SHEETS_WEBHOOK_URL || process.env.APPS_SCRIPT_URL
    if (!appsScriptUrl) {
      return NextResponse.json({ ok: false, error: "SHEETS_WEBHOOK_URL not set" }, { status: 502 })
    }
    const resp = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "appointment", timestamp, name, email, phone, note })
    })
    if (!resp.ok) {
      return NextResponse.json({ ok: false, error: "Apps Script returned non-200" }, { status: 502 })
    }

    // Optional: forward via email/webhook
    const webhook = process.env.APPOINTMENT_WEBHOOK_URL
    if (webhook) {
      try { await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ to: "anishpambhar@gmail.com", name, email, phone, note }) }) } catch {}
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


