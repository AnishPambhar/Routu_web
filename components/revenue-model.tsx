import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Percent, IndianRupee, TrendingUp, Shield, Clock, Star } from "lucide-react"

export default function RevenueModel() {
  const pricingCards = [
    {
      title: "Riders Earn",
      percentage: "15%",
      description: "Commission on each successful delivery",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "Per delivery commission",
        "Weekly payouts via UPI",
        "Performance bonuses",
        "Fuel allowance included",
        "No hidden deductions",
      ],
      example: "Earn ₹75 on a ₹500 delivery",
    },
    {
      title: "Vendors Pay",
      percentage: "18-20%",
      description: "Platform fee for delivery services",
      icon: Percent,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Transparent pricing",
        "No setup or monthly fees",
        "Volume-based discounts",
        "Real-time order tracking",
        "Customer support included",
      ],
      example: "Pay ₹90-100 on a ₹500 order",
    },
    {
      title: "Platform Fee",
      percentage: "₹6.99",
      description: "Base service charge per delivery",
      icon: IndianRupee,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "Fixed base rate",
        "Insurance coverage",
        "24/7 customer support",
        "GPS tracking system",
        "Dispute resolution",
      ],
      example: "Same fee regardless of order value",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-balance">
            Transparent Pricing Model
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Fair and transparent pricing that benefits everyone in our delivery ecosystem. No hidden charges, no
            surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingCards.map((card, index) => (
            <Card
              key={index}
              className={`${card.borderColor} border-2 ${card.bgColor} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <card.icon className={`h-8 w-8 ${card.color}`} />
                </div>
                <CardTitle className="font-heading text-xl text-gray-900">{card.title}</CardTitle>
                <div className={`text-3xl font-bold ${card.color} mb-2`}>{card.percentage}</div>
                <p className="text-sm text-gray-600">{card.description}</p>
                <div className="mt-3 p-2 bg-white rounded-lg">
                  <p className="text-xs font-medium text-gray-700">{card.example}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div
                        className={`w-2 h-2 ${card.color.replace("text-", "bg-")} rounded-full mr-3 flex-shrink-0`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Badge
                  className={`w-full justify-center mt-6 ${card.color.replace("text-", "bg-")} text-white hover:${card.color.replace("text-", "bg-")}`}
                >
                  {index === 0 ? "Earn More" : index === 1 ? "Grow Sales" : "Best Value"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-2xl text-center text-gray-900 mb-8">
            Why Our Pricing is Different
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">No Hidden Fees</h4>
              <p className="text-gray-600 text-sm">
                What you see is what you pay. Complete transparency in all transactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">Quick Settlements</h4>
              <p className="text-gray-600 text-sm">
                Riders get paid within 24 hours. Vendors receive settlements weekly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">Fair for Everyone</h4>
              <p className="text-gray-600 text-sm">
                Competitive rates that ensure sustainable earnings for all partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
