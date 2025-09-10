import { Card, CardContent } from "@/components/ui/card"
import { Shield, DollarSign, Clock, Users, Leaf, Smartphone } from "lucide-react"

export default function WhyRouto() {
  const differentiators = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Up to 40% cheaper than traditional delivery services",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Supporting local riders and businesses in your neighborhood",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Clock,
      title: "Flexible & Fast",
      description: "Same-day delivery with flexible pickup and drop-off times",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "All deliveries are tracked, insured, and handled with care",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reducing carbon footprint by utilizing existing commute routes",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Smartphone,
      title: "Tech-Enabled",
      description: "Smart matching algorithms and real-time tracking technology",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-balance">
            Why Choose Routo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            We're not just another delivery service. Here's what makes Routo different from traditional logistics
            companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">The Routo Difference</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-pretty">
            Unlike traditional delivery companies that rely on dedicated fleets, Routo harnesses the power of existing
            commuter routes to create a more efficient, affordable, and sustainable delivery network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-sm opacity-90">Lower Costs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">More Efficient</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-sm opacity-90">Less Carbon Footprint</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
