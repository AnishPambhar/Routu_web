"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Row = string[]

export default function AdminPage() {
  const [type, setType] = useState<"waitlist" | "appointment" | "contact">("waitlist")
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [authed, setAuthed] = useState<boolean>(false)
  const [input, setInput] = useState<string>("")
  const [counts, setCounts] = useState<{ waitlist: number; appointment: number; contact: number}>({ waitlist: 0, appointment: 0, contact: 0 })

  const fetchRows = async () => {
    setLoading(true)
    setError(null)
    try {
      const key = process.env.NEXT_PUBLIC_ADMIN_KEY || ""
      const res = await fetch(`/api/admin?type=${type}&key=${encodeURIComponent(key)}`)
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setRows(Array.isArray(data?.rows) ? data.rows : [])
    } catch (e: any) {
      setError(e?.message || "Failed to load data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const ok = typeof window !== "undefined" ? localStorage.getItem("routo_admin_ok") === "1" : false
    setAuthed(ok)
  }, [])

  useEffect(() => {
    if (authed) fetchRows()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, authed])

  useEffect(() => {
    if (authed) fetchCounts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed])

  const headers = rows?.[0] || []
  const body = rows?.slice(1) || []

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border p-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Admin Access</h1>
          <p className="text-sm text-gray-600 mb-4">Enter password to continue.</p>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mb-3"
            placeholder="Password"
          />
          <Button className="w-full" onClick={() => {
            const pw = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Anish@3456"
            if (input === pw) {
              localStorage.setItem("routo_admin_ok", "1")
              setAuthed(true)
            } else {
              alert("Wrong password")
            }
          }}>Unlock</Button>
        </div>
      </div>
    )
  }

  const fetchCounts = async () => {
    try {
      const key = process.env.NEXT_PUBLIC_ADMIN_KEY || ""
      const [w, a, c] = await Promise.all([
        fetch(`/api/admin?type=waitlist&key=${encodeURIComponent(key)}`).then(r=>r.json()).catch(()=>({ rows: [] })),
        fetch(`/api/admin?type=appointment&key=${encodeURIComponent(key)}`).then(r=>r.json()).catch(()=>({ rows: [] })),
        fetch(`/api/admin?type=contact&key=${encodeURIComponent(key)}`).then(r=>r.json()).catch(()=>({ rows: [] })),
      ])
      setCounts({
        waitlist: Array.isArray(w.rows) ? Math.max((w.rows.length||0)-1, 0) : 0,
        appointment: Array.isArray(a.rows) ? Math.max((a.rows.length||0)-1, 0) : 0,
        contact: Array.isArray(c.rows) ? Math.max((c.rows.length||0)-1, 0) : 0,
      })
    } catch {}
  }

  

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                Waitlist: <strong>{counts.waitlist}</strong>
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Appointments: <strong>{counts.appointment}</strong>
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                Contact: <strong>{counts.contact}</strong>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["waitlist","appointment","contact"] as const).map((t) => (
              <Button key={t} variant={type === t ? "default" : "outline"} onClick={() => setType(t)}>
                {t === "waitlist" ? "Waitlist" : t === "appointment" ? "Appointments" : "Contact"}
              </Button>
            ))}
            <Button onClick={() => { fetchRows(); fetchCounts(); }} disabled={loading}>{loading ? "Refreshing…" : "Refresh"}</Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-4 md:p-6 overflow-auto">
            {error ? (
              <div className="text-red-600 text-sm">{error}</div>
            ) : (
              <table className="min-w-full text-sm">
                <thead>
                  <tr>
                    {headers.map((h: string, i: number) => (
                      <th key={i} className="text-left font-semibold text-gray-700 border-b py-2 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((r: Row, ri: number) => (
                    <tr key={ri} className="hover:bg-gray-50">
                      {r.map((c: string, ci: number) => (
                        <td key={ci} className="py-2 pr-4 text-gray-800 align-top">{c}</td>
                      ))}
                    </tr>
                  ))}
                  {!loading && body.length === 0 && (
                    <tr><td className="text-gray-500 py-6">No data</td></tr>
                  )}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>

        <p className="text-xs text-gray-500">Protected via ADMIN_KEY. Do not share this URL.</p>
      </div>
    </div>
  )
}


