import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const type = (url.searchParams.get("type") || "waitlist").toLowerCase()
  const key = url.searchParams.get("key") || ""

  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const appsScriptUrl = process.env.SHEETS_WEBHOOK_URL || process.env.APPS_SCRIPT_URL
  if (!appsScriptUrl) {
    return NextResponse.json({ error: "Apps Script URL not configured" }, { status: 500 })
  }

  // Expect Apps Script doGet to support ?type=waitlist|appointment|contact&key=...
  const fetchUrl = `${appsScriptUrl}?type=${encodeURIComponent(type)}&key=${encodeURIComponent(key)}`
  try {
    const resp = await fetch(fetchUrl, { method: "GET" })
    const text = await resp.text()
    if (!resp.ok) {
      return NextResponse.json({ error: `Apps Script error`, status: resp.status, body: text }, { status: 502 })
    }
    // Try parse JSON, else forward text
    try {
      const data = JSON.parse(text)
      return NextResponse.json(data)
    } catch {
      return new NextResponse(text, { status: 200, headers: { "Content-Type": resp.headers.get("Content-Type") || "text/plain" } })
    }
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Fetch failed" }, { status: 502 })
  }
}


