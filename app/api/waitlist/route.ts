import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"

type Payload = {
  name?: string
  email?: string
  phone?: string
  interest?: "waitlist" | "vendor" | "notify" | "traveler"
  shopName?: string
  shopType?: string
}


export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload
    const { name = "", email = "", phone = "", interest = "waitlist", shopName = "", shopType = "" } = body

    if (!email && !phone) {
      return NextResponse.json({ error: "Email or phone is required" }, { status: 400 })
    }

    const timestamp = new Date().toISOString()

    // Send to Google Apps Script Web App (direct sheet append handled by your script)
    try {
      const appsScriptUrl = process.env.SHEETS_WEBHOOK_URL || process.env.APPS_SCRIPT_URL
      if (appsScriptUrl) {
        const resp = await fetch(appsScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ timestamp, name, email, phone, interest, shopName, shopType })
        })
        if (!resp.ok) {
          return NextResponse.json({ ok: false, error: "Apps Script returned non-200" }, { status: 502 })
        }
        return NextResponse.json({ ok: true, storage: "apps_script" })
      }
    } catch {}
    // If we reach here, webhook was not configured or failed
    return NextResponse.json({ ok: false, error: "SHEETS_WEBHOOK_URL not set or request failed" }, { status: 502 })
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


