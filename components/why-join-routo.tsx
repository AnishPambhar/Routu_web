import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, ShoppingCart, Truck } from "lucide-react"

export default function WhyJoinRouto() {
  const reasons = [
    {
      icon: ShoppingCart,
      title: "Order & Reduce Carbon",
      description:
        "Every order you place contributes to carbon reduction by optimizing delivery routes and supporting local businesses.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      priority: "highest",
    },
    {
      icon: Truck,
      title: "Send Parcels Sustainably",
      description: "Send parcels through our eco-friendly network and be part of the carbon reduction movement.",
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      priority: "high",
    },
    {
      icon: Users,
      title: "Travel & Earn",
      description:
        "Complete delivery tasks as a traveler and contribute to carbon reduction while earning extra income.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      priority: "medium",
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description:
        "Join a community that prioritizes sustainability and makes every delivery count towards a greener future.",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      priority: "medium",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6 text-balance">
            Why Join{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Routo?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Be part of India's first carbon-conscious delivery platform that connects communities while protecting the
            environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden ${
                reason.priority === "highest"
                  ? "ring-2 ring-blue-200 ring-offset-2"
                  : reason.priority === "high"
                    ? "ring-1 ring-green-200 ring-offset-1"
                    : ""
              }`}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${reason.bgGradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                  <div className="relative z-10 flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <reason.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{reason.title}</h3>
                      {reason.priority === "highest" && (
                        <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          TOP PRIORITY
                        </span>
                      )}
                      {reason.priority === "high" && (
                        <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          HIGH PRIORITY
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">Join the Carbon Reduction Movement</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every action on Routo contributes to a more sustainable future. Be part of the change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
