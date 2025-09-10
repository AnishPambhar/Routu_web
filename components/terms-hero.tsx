import { Shield, FileText, Scale } from "lucide-react"

export default function TermsHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6 text-balance">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            Please read these terms and conditions carefully before using Routo's services. These terms govern your use
            of our platform and services.
          </p>
          <div className="text-sm text-gray-500 mt-4">Last updated: December 2024</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Clear Terms</h3>
            <p className="text-gray-600">Easy to understand terms and conditions for all users</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Your Protection</h3>
            <p className="text-gray-600">Comprehensive coverage and protection for all platform users</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Fair & Legal</h3>
            <p className="text-gray-600">Compliant with Indian laws and regulations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
