import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  userType?: string
}

const CSV_HEADERS = ["timestamp","name","email","phone","userType","subject","message"]

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload
    const { name = "", email = "", phone = "", userType = "", subject = "", message = "" } = body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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
      body: JSON.stringify({ type: "contact", timestamp, name, email, phone, userType, subject, message })
    })
    if (!resp.ok) {
      return NextResponse.json({ ok: false, error: "Apps Script returned non-200" }, { status: 502 })
    }

    // Optional email via webhook or SMTP relay (environment provided)
    const webhook = process.env.CONTACT_WEBHOOK_URL
    if (webhook) { try { await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ to: "anishpambhar@gmail.com", name, email, phone, userType, subject, message }) }) } catch {} }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


