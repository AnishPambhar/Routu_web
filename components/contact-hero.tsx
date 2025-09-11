"use client"
import { useState } from "react"
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactHero() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const submitAppointment = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setLoading(true)
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, note })
      })
      if (!res.ok) throw new Error("Failed to submit appointment")
      setMsg("Request sent. We'll email you to confirm.")
      setName("")
      setEmail("")
      setPhone("")
      setNote("")
      setTimeout(() => setOpen(false), 800)
    } catch (e: any) {
      setMsg(e?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  // Listen for global event from ContactInfo to open dialog
  // useEffect is safe in client components
  // eslint-disable-next-line react-hooks/exhaustive-deps
  if (typeof window !== "undefined") {
    window.addEventListener("open-appointment", () => setOpen(true))
  }
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full blur-xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-200">
            <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">We're here to help</span>
          </div>

          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6 text-balance">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>{" "}
            With <span className="text-green-600">Routo</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            Have questions about <strong>Routo</strong>? Want to join our network of riders and vendors? We'd love to
            hear from you. Reach out and let's build the future of peer-to-peer delivery together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-3">Quick response guaranteed</p>
            <a href="mailto:support@routo.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              support@routo.com
            </a>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 text-sm mb-3">Speak with our team</p>
            <a href="tel:+919737545084" className="text-green-600 hover:text-green-700 font-medium text-sm">
              +91 97375 45084
            </a>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-3">Instant assistance</p>
            <div className="space-y-1">
              <a href="https://wa.me/919737542910?text=Hello%20Routo%20Team" target="_blank" rel="noopener noreferrer" className="text-[#6a0dad] hover:opacity-90 font-medium text-sm">Chat on WhatsApp</a>
              <div className="text-gray-500 text-xs">9 AM - 6 PM IST</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm mb-3">Surat headquarters</p>
            <button onClick={() => setOpen(true)} className="text-orange-600 font-medium text-sm hover:underline">By appointment</button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-700 font-medium">
              We typically respond within 2 hours during business hours
            </span>
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request an appointment</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitAppointment} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="ap-name">Full name</Label>
              <Input id="ap-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ap-email">Email</Label>
              <Input id="ap-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ap-phone">Phone</Label>
              <div className="flex items-stretch rounded-md border border-gray-300 overflow-hidden">
                <span className="inline-flex items-center gap-2 px-3 bg-gray-50 text-gray-700 text-sm select-none border-r border-gray-200">+91</span>
                <Input id="ap-phone" type="tel" inputMode="numeric" value={phone} onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 10)
                  const formatted = digits.replace(/(\d{5})(\d{0,5})/, (_, a, b) => (b ? `${a} ${b}` : a))
                  setPhone(formatted)
                }} placeholder="98765 43210" className="border-0 focus-visible:ring-0" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ap-note">Preferred date/time & notes</Label>
              <Textarea id="ap-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Share preferred date/time and any notes" rows={4} />
            </div>
            {msg && <p className={`text-sm ${msg.startsWith("Request sent") ? "text-green-600" : "text-red-600"}`}>{msg}</p>}
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>Cancel</Button>
              <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send request"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
