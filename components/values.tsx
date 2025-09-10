import { Card, CardContent } from "@/components/ui/card"
import { Heart, Handshake, Award, Zap } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize the needs and growth of our local communities above all else",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Handshake,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication and reliable service",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuously improving our platform to deliver exceptional experiences",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing new technologies and ideas to solve real-world problems",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-balance">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            The core principles that guide everything we do at Routo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
