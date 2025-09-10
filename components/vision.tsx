import { Card, CardContent } from "@/components/ui/card"
import { Eye, Globe, Rocket } from "lucide-react"

export default function Vision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-heading font-semibold text-lg text-gray-900">Global Expansion</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Expanding our peer-to-peer delivery model to cities across India and beyond
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Rocket className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-heading font-semibold text-lg text-gray-900">Technology Innovation</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Leveraging AI and machine learning to optimize routes and improve delivery efficiency
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-pretty">
              To become the leading peer-to-peer delivery platform that transforms how communities connect, trade, and
              support each other through innovative logistics solutions.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl">
              <h4 className="font-heading font-semibold text-xl mb-3">2030 Goals</h4>
              <ul className="space-y-2 text-sm">
                <li>• 100,000+ active riders across 50+ cities</li>
                <li>• 10,000+ partner vendors and businesses</li>
                <li>• 1 million+ successful deliveries monthly</li>
                <li>• Carbon-neutral delivery operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
