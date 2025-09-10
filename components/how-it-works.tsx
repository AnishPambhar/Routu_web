import { Card, CardContent } from "@/components/ui/card"
import { Store, Bike, Users, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Store,
      title: "Vendors Register",
      description: "Local businesses and vendors register their delivery needs on our platform",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      number: "01",
    },
    {
      icon: Bike,
      title: "Riders Deliver",
      description: "Riders pick up parcels along their daily routes and earn money for each delivery",
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      number: "02",
    },
    {
      icon: Users,
      title: "Customers Save",
      description: "Customers get affordable delivery services while supporting local riders",
      color: "gray",
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      number: "03",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6 text-balance">
            How{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Routo Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Our simple three-step process connects vendors, riders, and customers in a seamless delivery ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden bg-white">
                <CardContent className="p-0">
                  {/* Card Header with Gradient Background */}
                  <div className={`bg-gradient-to-br ${step.bgGradient} p-8 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      {/* Step Number */}
                      <div className="absolute top-4 right-4 text-6xl font-bold text-white/20 font-heading">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <step.icon className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">{step.title}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed text-lg text-center">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10 items-center">
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">Ready to join the revolution?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a vendor looking to expand your reach, a rider wanting to earn extra income, or a customer
              seeking affordable delivery, Routo has you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 flex-1 max-w-xs">
                <div className="text-2xl mb-2">🏪</div>
                <div className="font-semibold text-gray-900 mb-1">For Vendors</div>
                <div className="text-sm text-gray-600">Expand your delivery reach</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 flex-1 max-w-xs">
                <div className="text-2xl mb-2">🚴‍♂️</div>
                <div className="font-semibold text-gray-900 mb-1">For Riders</div>
                <div className="text-sm text-gray-600">Earn on your daily route</div>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 flex-1 max-w-xs">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-semibold text-gray-900 mb-1">For Customers</div>
                <div className="text-sm text-gray-600">Save on delivery costs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
