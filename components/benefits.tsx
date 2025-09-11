"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Store, Heart, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Benefits() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null)
  const benefits = [
    {
      category: "For Riders",
      icon: TrendingUp,
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      title: "Earn Extra Income",
      description: "Turn your daily commute into a profitable journey",
      features: [
        "Flexible earning opportunities",
        "No additional fuel costs",
        "Weekly guaranteed payouts",
        "Performance-based bonuses",
      ],
      cta: "Start Earning Today",
      emoji: "💰",
    },
    {
      category: "For Vendors",
      icon: Store,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      title: "Grow Your Sales",
      description: "Expand your reach with affordable delivery solutions",
      features: [
        "Cost-effective delivery network",
        "Increased customer reach",
        "Real-time order tracking",
        "Dedicated vendor support",
      ],
      cta: "Boost Your Business",
      emoji: "📈",
    },
    {
      category: "For Customers",
      icon: Heart,
      color: "gray",
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      title: "Affordable Service",
      description: "Get reliable delivery at unbeatable prices",
      features: ["Lower delivery costs", "Support local riders", "Reliable service", "Easy order tracking"],
      cta: "Send Your Parcel",
      emoji: "❤️",
    },
  ]

  const additionalBenefits = [
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "All deliveries are insured and tracked for your peace of mind",
      color: "blue",
      emoji: "🛡️",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your parcels in real-time from pickup to delivery",
      color: "green",
      emoji: "⏰",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Supporting local riders and businesses in your community",
      color: "gray",
      emoji: "🤝",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Launching overlay */}
        {loadingIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative z-10 w-[90%] max-w-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white text-center">
                <div className="text-4xl mb-2">🚀</div>
                <h4 className="font-heading font-bold text-2xl">Launching Soon</h4>
                <p className="opacity-90 mt-1">Please wait a moment…</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-green-600 animate-[progress_900ms_ease-in-out_forwards]" />
                </div>
                <style jsx>{`
                  @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                  }
                `}</style>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <span className="inline-block h-4 w-4 rounded-full border-2 border-gray-300 border-t-blue-600 animate-spin" />
                  Getting things ready…
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6 text-balance">
            Benefits for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Routo creates value for riders, vendors, and customers through our innovative peer-to-peer delivery platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${benefit.bgGradient} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{benefit.emoji}</div>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className={`text-sm font-bold text-${benefit.color}-600 mb-2 uppercase tracking-wide`}>
                      {benefit.category}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">{benefit.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg text-center">{benefit.description}</p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className={`w-5 h-5 text-${benefit.color}-500 mr-3 flex-shrink-0`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    disabled={loadingIndex === index}
                    onClick={() => {
                      setLoadingIndex(index)
                      // brief launch animation, then route to appropriate flow
                      setTimeout(() => {
                        setLoadingIndex(null)
                        const category = benefit.category
                        // Map to modal contexts
                        const context = category === "For Riders" ? "traveler" : category === "For Vendors" ? "vendor" : "notify"
                        window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context } }))
                      }, 900)
                    }}
                    className={`w-full bg-gradient-to-r ${benefit.gradient} hover:shadow-lg text-white font-semibold py-6 rounded-xl transition-all duration-300 group-hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {loadingIndex === index ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-block h-4 w-4 rounded-full border-2 border-white/50 border-t-white animate-spin" />
                        Launching…
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        {benefit.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">Why Choose Routo?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with trust, security, and community at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl mb-4">{benefit.emoji}</div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="bg-blue-600 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white shadow-xl">
            <h3 className="font-heading font-bold text-3xl mb-4 text-white">🚀 Coming Soon with Routo!</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white">
              India's most innovative peer-to-peer delivery network is launching soon. Be the first to know!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold"
                onClick={() => window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context: "notify" } }))}
              >
                Get Notified
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold bg-transparent"
                asChild
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
