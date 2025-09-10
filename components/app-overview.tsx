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
    image: "/image1.png",
    cta: { label: "Browse local shops", context: "notify" as const },
  },
  {
    key: "parcel",
    title: "Send Parcel",
    description: "Book eco‑friendly pick & drop at fair prices.",
    icon: Package,
    image: "/image2.png",
    cta: { label: "Send a parcel", context: "notify" as const },
  },
  {
    key: "traveler",
    title: "Traveler",
    description: "Earn by pick & drop along your regular route.",
    icon: Car,
    image: "/image3.png",
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
          {/* Left: Phone mock matching provided UI */}
          <div className="flex justify-center">
            <div className="relative w-[330px] h-[660px] rounded-[2.0rem] shadow-2xl overflow-hidden" style={{ background: "linear-gradient(160deg,#6a0dad, #4e31a5)" }}>
              {/* status pill */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-xs opacity-80">Routo</div>
              {/* header name/wallet */}
              <div className="px-5 pt-10 pb-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{activeScreen.key === "parcel" ? "Anish Pambhar" : activeScreen.key === "traveler" ? "Wallet ₹250" : "Delivery in 6 mins"}</div>
                  <div className="opacity-80 text-sm">{activeScreen.key === "traveler" ? "History" : ""}</div>
                </div>
              </div>
              {/* body card */}
              <div className="absolute inset-x-0 bottom-0 p-4 pb-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  {activeScreen.key === "parcel" && (
                    <div>
                      <h4 className="text-[#2b2b2b] font-semibold text-lg mb-3">Let's Get Your Parcel Moving!</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-3 text-sm text-gray-700">
                          <span className="text-red-500">📍</span>
                          <span>32 Samwell Sq, Chevron</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-3 text-sm text-gray-700">
                          <span className="text-green-500">📍</span>
                          <span>21b, Karimu Kotun Street, Victoria…</span>
                        </div>
                        <button className="w-full mt-2 bg-gradient-to-r from-[#6a0dad] to-[#5b19c4] text-white rounded-xl py-3 font-semibold">Next</button>
                      </div>
                    </div>
                  )}
                  {activeScreen.key === "traveler" && (
                    <div>
                      <h4 className="text-[#2b2b2b] font-semibold text-lg mb-3">Find a task in route</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-xl px-3 py-3 text-sm text-gray-700">Where are you going from?</div>
                        <div className="bg-gray-100 rounded-xl px-3 py-3 text-sm text-gray-700">Where do you want to go?</div>
                        <button className="w-full mt-2 bg-gradient-to-r from-[#6a0dad] to-[#5b19c4] text-white rounded-xl py-3 font-semibold">Go</button>
                      </div>
                    </div>
                  )}
                  {activeScreen.key === "shopping" && (
                    <div>
                      <h4 className="text-[#2b2b2b] font-semibold text-lg mb-3">Search for shops or items</h4>
                      <div className="bg-gray-100 rounded-xl px-3 py-3 text-sm text-gray-700">e.g., Grocery, Bakery, Masala…</div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-gray-700">
                        <div className="bg-gray-100 rounded-xl px-2 py-2">Stationery</div>
                        <div className="bg-gray-100 rounded-xl px-2 py-2">Bakery</div>
                        <div className="bg-gray-100 rounded-xl px-2 py-2">Grocery</div>
                      </div>
                    </div>
                  )}
                </div>
                {/* bottom nav */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className={`rounded-xl py-2 ${activeScreen.key === "shopping" ? "text-[#6a0dad] bg-white" : "text-white/80"}`}>Shop</div>
                  <div className={`rounded-xl py-2 ${activeScreen.key === "parcel" ? "text-[#6a0dad] bg-white" : "text-white/80"}`}>Send</div>
                  <div className={`rounded-xl py-2 ${activeScreen.key === "traveler" ? "text-[#6a0dad] bg-white" : "text-white/80"}`}>Traveler</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tabs and CTAs */}
          <div>
            <div className="flex gap-3 mb-8">
              {screens.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    active === i ? "bg-[#6a0dad] text-white border-[#6a0dad]" : "bg-white border-gray-200 text-gray-700 hover:border-[#6a0dad]"
                  }`}
                >
                  <s.icon className="h-4 w-4" />
                  <span className="font-medium">{s.title}</span>
                </button>
              ))}
            </div>
            <div className="space-y-5">
              <h3 className="font-heading text-2xl text-gray-900">{activeScreen.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {activeScreen.key === "shopping" && "Discover nearby shops, fresh produce, essentials and more with same‑day delivery."}
                {activeScreen.key === "parcel" && "Schedule doorstep pickup and eco‑friendly delivery with transparent pricing."}
                {activeScreen.key === "traveler" && "Going somewhere? Pick and drop small parcels on your route, earn extra, offset fuel, and reduce carbon."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => openModal(activeScreen.cta.context)} className="bg-[#6a0dad] hover:opacity-90">
                  {activeScreen.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {activeScreen.key === "shopping" && (
                  <Button variant="outline" onClick={() => openModal("waitlist")}>Join waitlist</Button>
                )}
                {activeScreen.key === "traveler" && (
                  <Button variant="outline" onClick={() => openModal("vendor")}>Become a vendor</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


