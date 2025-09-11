"use client"
import { useState } from "react"
import { ShoppingBag, Package, Car, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screens = [
  {
    key: "shopping",
    title: "Shopping",
    description: "Order from trusted local vendors across categories.",
    icon: ShoppingBag,
    image: "/shopping.png",
    cta: { label: "Browse local shops", context: "notify" as const },
  },
  {
    key: "parcel",
    title: "Send Parcel",
    description: "Book eco‑friendly pick & drop at fair prices.",
    icon: Package,
    image: "/send_parcel.png",
    cta: { label: "Send a parcel", context: "notify" as const },
  },
  {
    key: "traveler",
    title: "Traveler",
    description: "Earn by pick & drop along your regular route.",
    icon: Car,
    image: "/traveler.png",
    cta: { label: "Become a traveler", context: "traveler" as const },
  },
]

export default function AppOverview() {
  const [active, setActive] = useState(0)
  const activeScreen = screens[active]

  const openModal = (context: "waitlist" | "vendor" | "notify" | "traveler") => {
    window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context } }))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6a0dad]/10 text-[#6a0dad] font-medium">All‑in‑one: Shop • Send • Travel</div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mt-4">One app. Three powers.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">Shop local, send parcels, and earn as a traveler — all in Routo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D phone mock with swappable screen images */}
          <div className="flex justify-center">
            <div className="relative w-[330px] h-[660px] rounded-[2.0rem] shadow-2xl overflow-hidden transition-transform duration-500 [transform-style:preserve-3d] hover:-rotate-x-2 hover:rotate-y-2"
                 style={{ background: "linear-gradient(160deg,#6a0dad, #4e31a5)" }}>
              {/* Camera notch / pill */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/30 rounded-full" />
              {/* Screen container */}
              <div className="absolute inset-3 rounded-[1.6rem] bg-black/5 overflow-hidden">
                <img
                  src={activeScreen.image}
                  alt={activeScreen.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Centered, professional CTA buttons */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-heading text-2xl lg:text-3xl text-gray-900 mb-3">Explore Routo</h3>
            <p className="text-gray-600 max-w-xl mb-8">
              Shop local, send parcels, or earn as a traveler. Pick a mode to preview.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              {screens.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActive(i)}
                  className={`group rounded-2xl border p-5 transition-all shadow-sm hover:shadow-lg ${
                    active === i ? "border-[#6a0dad] bg-[#6a0dad]/5" : "border-gray-200 bg-white hover:border-[#6a0dad]"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <s.icon className={`h-6 w-6 ${active === i ? "text-[#6a0dad]" : "text-gray-700"}`} />
                    <div className="font-semibold text-gray-900">{s.key === 'parcel' ? 'Send Parcel' : s.title}</div>
                    <div className="text-xs text-gray-500 text-balance">
                      {s.key === 'shopping' && 'Discover nearby shops'}
                      {s.key === 'parcel' && 'Book eco‑friendly delivery'}
                      {s.key === 'traveler' && 'Earn on your route'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-8">
              <Button onClick={() => openModal(activeScreen.cta.context)} className="bg-[#6a0dad] hover:opacity-90">
                {activeScreen.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


