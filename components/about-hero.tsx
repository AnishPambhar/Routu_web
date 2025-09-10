import { Users, Target, Lightbulb } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6 text-balance">
            About <span className="text-blue-600">Routo</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            We're revolutionizing the delivery industry by connecting local riders, vendors, and customers in a
            sustainable, community-driven ecosystem that benefits everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600">Building stronger local communities through shared economic opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Purpose Driven</h3>
            <p className="text-gray-600">Every delivery creates value for riders, vendors, and customers alike</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Leveraging technology to create smarter, more efficient delivery solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
