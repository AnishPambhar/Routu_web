"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, ShoppingCart, Package, ArrowRight, CheckCircle, Car } from "lucide-react"

export default function Services() {
  const vendorCategories = [
    { name: "Santoy Shops", icon: "🧸", description: "Toys and children's items" },
    { name: "Kirana Stores", icon: "🛒", description: "Groceries and daily essentials" },
    { name: "Bakeries", icon: "🍞", description: "Fresh bread and baked goods" },
    { name: "Pharmacies", icon: "💊", description: "Medicines and health products" },
    { name: "Electronics", icon: "📱", description: "Mobile and gadgets" },
    { name: "Stationery", icon: "📚", description: "Books and office supplies" },
    { name: "Food", icon: "🍽️", description: "Restaurants and ready-to-eat meals" },
    { name: "Beauty Products", icon: "💄", description: "Cosmetics and personal care" },
  ]

  const services = [
    {
      icon: ShoppingCart,
      title: "Order from Local Vendors",
      emoji: "🛍️",
      description:
        "Order from multiple vendor categories in your area — one platform for all your local business needs.",
      features: ["50+ vendor categories", "Same-day delivery", "Real-time tracking", "Support local businesses"],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      priority: "highest",
    },
    {
      icon: Package,
      title: "Send Parcels Eco-Friendly",
      emoji: "📦",
      description: "Send parcels through our carbon-conscious network with travelers heading the same way.",
      features: ["Carbon reduction", "Secure handling", "Insurance coverage", "Route optimization"],
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      priority: "high",
    },
    {
      icon: Store,
      title: "Vendor Partnership",
      emoji: "🏪",
      description: "Join our platform as a vendor and reach more customers in your area.",
      features: ["Low commission", "Easy setup", "Marketing support", "Analytics dashboard"],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      priority: "medium",
    },
    {
      icon: Car,
      title: "Traveler Pick & Drop Jobs",
      emoji: "🚗",
      description:
        "Earn extra income by completing small pick-and-drop tasks along your regular travel routes. Help others while making your commute more rewarding.",
      features: [
        "Flexible earning",
        "Verified requests",
        "Secure payments",
        "Help local community",
      ],
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
      priority: "high",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6 text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Your all-in-one platform to order from trusted local vendors across multiple categories while contributing to a greener future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden ${
                service.priority === "highest"
                  ? "ring-2 ring-blue-200 ring-offset-2"
                  : service.priority === "high"
                  ? "ring-1 ring-green-200 ring-offset-1"
                  : ""
              }`}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${service.bgGradient} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl mb-3">{service.emoji}</div>
                    <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">{service.title}</h3>
                  
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className={`w-5 h-5 text-${service.color}-500 mr-3 flex-shrink-0`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-semibold py-6 rounded-xl transition-all duration-300 group-hover:scale-105`}
                    onClick={() => {
                      const context = service.title === "Vendor Partnership" ? "vendor" : service.title.includes("Traveler") ? "traveler" : "notify"
                      window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context } }))
                    }}
                  >
                    {service.priority === "highest" ? "Join Waitlist" : "Get Notified"}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">Vendors from Multiple Categories</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Routo connects you with all kinds of trusted local businesses — making shopping easier, faster, and closer to home.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vendorCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 font-medium">And many more categories coming soon!</p>
          </div>
        </div>

       
      </div>
    </section>
  )
}
