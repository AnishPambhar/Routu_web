import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Zap } from "lucide-react"

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900">About Routo</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-pretty">
              Routo is creating a smarter way to connect people with local shops and services. From groceries and
              bakeries to parcels and essentials, Routo brings your community closer while reducing carbon emissions.
              Our mission is to empower local vendors and make everyday transactions simple, sustainable, and reliable.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Empower Local Communities</h4>
                  <p className="text-gray-600 text-sm">
                    Supporting local vendors and businesses to create stronger, more connected communities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sustainable Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Making deliveries sustainable and environmentally responsible for everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600 mb-6">Lives Impacted</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Active Riders</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Partner Vendors</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
