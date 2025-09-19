"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Package, Users, Clock } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  const [ctaContext, setCtaContext] = useState<"waitlist" | "vendor" | "notify" | "traveler">("waitlist")
  const [name, setName] = useState("")
  const [shopName, setShopName] = useState("")
  const [shopType, setShopType] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const openForm = (context: "waitlist" | "vendor" | "notify" | "traveler") => {
    setCtaContext(context)
    setMessage(null)
    setOpen(true)
  }

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ context: "waitlist" | "vendor" | "notify" | "traveler" }>
      if (ce?.detail?.context) {
        openForm(ce.detail.context)
      }
    }
    window.addEventListener("routo:open-modal", handler as EventListener)
    return () => window.removeEventListener("routo:open-modal", handler as EventListener)
  }, [])

  const searchParams = useSearchParams()
  useEffect(() => {
    const open = searchParams.get("open") as typeof ctaContext | null
    if (open === "waitlist" || open === "vendor" || open === "notify" || open === "traveler") {
      openForm(open)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    const phoneDigits = phone.replace(/\D/g, "")
    const hasValidPhone = phoneDigits.length === 10
    if (!email && !hasValidPhone) {
      setMessage("Please provide an email or a 10‑digit Indian phone number.")
      return
    }
    setLoading(true)
    try {
      const phoneToSend = hasValidPhone ? `+91${phoneDigits}` : ""
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: phoneToSend, interest: ctaContext, shopName: ctaContext === "vendor" ? shopName : undefined, shopType: ctaContext === "vendor" ? shopType : undefined })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || "Failed to submit. Please try again.")
      }
      setMessage("Thanks! We received your details.")
      setName("")
      setShopName("")
      setShopType("")
      setEmail("")
      setPhone("")
      setTimeout(() => setOpen(false), 800)
    } catch (err: any) {
      setMessage(err?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md border border-gray-200 ring-1 ring-black/5" aria-label="Routo launching soon">
          <span className="flex items-center gap-2 text-gray-800">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <span className="font-semibold">Routo · Launching soon</span>
          </span>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-green-100 rounded-full opacity-10 animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-5xl lg:text-7xl text-gray-900 leading-tight text-balance">
              Order From Local Vendors &
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                Reduce Carbon
              </span>
              <span className="text-4xl lg:text-5xl"> 🌱📦</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed text-pretty max-w-4xl mx-auto">
              Routo helps you order from trusted local vendors while contributing to a greener future 🌱📦
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => openForm("waitlist")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Join Waitlist - Order Soon
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => openForm("vendor")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Become a Vendor
              <Package className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => openForm("traveler")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Become a Traveler
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => openForm("notify")}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-transparent"
            >
              Get Notified
              <Clock className="ml-2 h-5 w-5" />
            </Button>
          </div>



          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {ctaContext === "waitlist" && "Join the Routo waitlist"}
                  {ctaContext === "vendor" && "Become a vendor"}
                  {ctaContext === "notify" && "Get launch updates"}
                  {ctaContext === "traveler" && "Become a traveler"}
                </DialogTitle>
                <DialogDescription>
                  Share your details and we'll reach out with next steps.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Aarav Sharma" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {ctaContext === "vendor" && (
                  <>
                    <div className="grid gap-2">
                      <Label htmlFor="shopName">Shop name</Label>
                      <Input id="shopName" placeholder="Sharma Fresh Mart" value={shopName} onChange={(e) => setShopName(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="shopType">Shop type</Label>
                      <Input id="shopType" placeholder="Groceries, Pharmacy, Bakery…" value={shopType} onChange={(e) => setShopType(e.target.value)} />
                    </div>
                  </>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone (India)</Label>
                  <div className="flex items-stretch rounded-xl border border-gray-300 bg-white overflow-hidden shadow-sm focus-within:border-blue-500">
                    <span className="inline-flex items-center gap-2 pl-3 pr-2 bg-gray-50 text-gray-700 text-sm select-none border-r border-gray-200">
                      <span className="text-base">🇮🇳</span>
                      <span className="font-medium">+91</span>
                    </span>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10)
                        const formatted = digits.replace(/(\d{5})(\d{0,5})/, (_, a, b) => (b ? `${a} ${b}` : a))
                        setPhone(formatted)
                      }}
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <p className="text-xs text-gray-500">10‑digit mobile number. Example: 98765 43210</p>
                </div>
                <input type="hidden" name="interest" value={ctaContext} />
                {message && (
                  <p className={`text-sm ${message.startsWith("Thanks!") ? "text-green-600" : "text-red-600"}`}>{message}</p>
                )}
                <div className="flex justify-end gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>Cancel</Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="text-3xl mb-3">🌱</div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-2">Carbon Reduction</div>
              <div className="text-sm text-gray-600">Every order helps reduce carbon footprint</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="text-3xl mb-3">🏪</div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-2">Local Vendors</div>
              <div className="text-sm text-gray-600">Support your neighborhood businesses</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-3xl mb-3">🤝</div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-2">Community First</div>
              <div className="text-sm text-gray-600">Connecting neighbors and local businesses</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="font-heading font-bold text-3xl text-gray-900 mb-1">10+</div>
              <div className="text-sm text-gray-600">Vendors Ready</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div className="font-heading font-bold text-3xl text-gray-900 mb-1">6+</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="font-heading font-bold text-3xl text-gray-900 mb-1">1-2</div>
              <div className="text-sm text-gray-600">Months to Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
