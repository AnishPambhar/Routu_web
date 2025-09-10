import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Truck,
  Store,
  Shield,
  CreditCard,
  AlertTriangle,
  FileText,
  Phone,
  Gavel,
  Lock,
  UserCheck,
  Clock,
} from "lucide-react"

export default function TermsContent() {
  const sections = [
    {
      id: "acceptance",
      icon: UserCheck,
      title: "1. Acceptance of Terms",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      content: [
        "By accessing and using Routo's platform, you accept and agree to be bound by these Terms and Conditions.",
        "If you do not agree to these terms, please do not use our services.",
        "These terms apply to all users including riders, vendors, and customers.",
        "We reserve the right to modify these terms at any time with prior notice.",
      ],
    },
    {
      id: "services",
      icon: Truck,
      title: "2. Platform Services",
      color: "text-green-600",
      bgColor: "bg-green-50",
      content: [
        "Routo provides a peer-to-peer delivery platform connecting riders, vendors, and customers.",
        "We facilitate connections but are not directly responsible for the delivery service itself.",
        "Services include ride & vendor delivery, personal parcel service, and pickup & drop services.",
        "Service availability may vary by location and is subject to rider availability.",
      ],
    },
    {
      id: "user-responsibilities",
      icon: Users,
      title: "3. User Responsibilities",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      content: [
        "All users must provide accurate and complete information during registration.",
        "Users are responsible for maintaining the confidentiality of their account credentials.",
        "Prohibited items include illegal substances, hazardous materials, and perishable goods without proper packaging.",
        "Users must comply with all applicable local, state, and national laws.",
      ],
    },
    {
      id: "rider-terms",
      icon: Users,
      title: "4. Rider Terms",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      content: [
        "Riders must possess valid driving licenses and vehicle registration documents.",
        "Riders are independent contractors, not employees of Routo.",
        "Riders earn 15% commission on successful deliveries plus applicable bonuses.",
        "Riders must maintain professional conduct and handle parcels with care.",
        "Background verification is mandatory for all riders.",
      ],
    },
    {
      id: "vendor-terms",
      icon: Store,
      title: "5. Vendor Terms",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      content: [
        "Vendors pay a 20% platform fee plus ₹6.99 base service charge per delivery.",
        "Vendors must provide accurate product descriptions and packaging.",
        "Vendors are responsible for product quality and customer satisfaction.",
        "Payment processing occurs within 7 business days of successful delivery.",
        "Vendors must comply with all applicable business licenses and regulations.",
      ],
    },
    {
      id: "payments",
      icon: CreditCard,
      title: "6. Payment Terms",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      content: [
        "All payments are processed securely through our payment partners.",
        "Refunds are processed according to our refund policy within 5-7 business days.",
        "Disputed transactions will be investigated and resolved within 14 business days.",
        "Users are responsible for any applicable taxes on their transactions.",
        "Payment failures may result in service suspension until resolved.",
      ],
    },
    {
      id: "liability",
      icon: Shield,
      title: "7. Liability & Insurance",
      color: "text-red-600",
      bgColor: "bg-red-50",
      content: [
        "All deliveries are insured up to ₹5,000 for loss or damage.",
        "Routo's liability is limited to the insurance coverage amount.",
        "Users acknowledge that delivery services carry inherent risks.",
        "Routo is not liable for indirect, incidental, or consequential damages.",
        "Insurance claims must be reported within 24 hours of delivery completion.",
      ],
    },
    {
      id: "privacy",
      icon: Lock,
      title: "8. Privacy & Data Protection",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      content: [
        "We collect and process personal data in accordance with our Privacy Policy.",
        "User data is protected using industry-standard security measures.",
        "Location data is collected only during active delivery sessions.",
        "Users can request data deletion by contacting our support team.",
        "We do not sell personal information to third parties.",
      ],
    },
    {
      id: "prohibited",
      icon: AlertTriangle,
      title: "9. Prohibited Activities",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      content: [
        "Using the platform for illegal activities or transporting prohibited items.",
        "Attempting to circumvent platform fees or payment systems.",
        "Harassment, discrimination, or inappropriate behavior towards other users.",
        "Creating multiple accounts or providing false information.",
        "Reverse engineering or attempting to access unauthorized areas of the platform.",
      ],
    },
    {
      id: "termination",
      icon: Clock,
      title: "10. Account Termination",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      content: [
        "Either party may terminate their account with 30 days written notice.",
        "Routo reserves the right to suspend or terminate accounts for violations.",
        "Upon termination, all pending transactions will be completed or refunded.",
        "Users remain liable for any outstanding fees or obligations.",
        "Terminated users may appeal the decision through our support channels.",
      ],
    },
    {
      id: "dispute",
      icon: Gavel,
      title: "11. Dispute Resolution",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      content: [
        "Disputes should first be reported through our in-app support system.",
        "Mediation will be attempted before any legal proceedings.",
        "All disputes are subject to the jurisdiction of Mumbai courts.",
        "Users agree to binding arbitration for disputes exceeding ₹50,000.",
        "Legal proceedings must be initiated within one year of the dispute arising.",
      ],
    },
    {
      id: "contact",
      icon: Phone,
      title: "12. Contact Information",
      color: "text-green-600",
      bgColor: "bg-green-50",
      content: [
        "For questions about these terms, contact us at legal@routo.com",
        "Support is available Monday-Friday, 9 AM - 6 PM IST.",
        "Emergency support: +91 98765 43212 (24/7)",
        "Mailing address: Routo Technologies, Mumbai, Maharashtra 400001",
        "Response time for legal inquiries is typically 3-5 business days.",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Table of Contents */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-gray-900 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <section.icon className={`h-4 w-4 mr-2 ${section.color}`} />
                  {section.title}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <Card key={section.id} id={section.id} className="border-0 shadow-lg scroll-mt-20">
              <CardHeader className={`${section.bgColor} rounded-t-lg`}>
                <CardTitle className="font-heading text-xl text-gray-900 flex items-center">
                  <section.icon className={`h-6 w-6 mr-3 ${section.color}`} />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Notice */}
        <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-4">Important Notice</h3>
            <p className="mb-4 opacity-90">
              These terms and conditions constitute a legally binding agreement between you and Routo Technologies
              Private Limited.
            </p>
            <p className="text-sm opacity-80">
              By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound
              by these terms.
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact Legal Team
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  )
}
