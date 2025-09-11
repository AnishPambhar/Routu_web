"use client"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Mail, Phone, MessageCircle } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Support",
      details: ["Quick response guaranteed", "support@routo.com"],
      bgColor: "bg-gradient-to-br from-[#6a0dad] to-purple-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["Speak with our team", "+91 97375 45084"],
      bgColor: "bg-gradient-to-br from-[#6a0dad] to-violet-500",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: ["Instant assistance", "9 AM - 6 PM IST"],
      bgColor: "bg-gradient-to-br from-[#6a0dad] to-fuchsia-500",
      action: {
        label: "Chat on WhatsApp",
        href: "https://wa.me/919737542910?text=Hello%20Routo%20Team",
      },
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Surat headquarters", "By appointment"],
      bgColor: "bg-gradient-to-br from-[#6a0dad] to-pink-500",
      action: {
        label: "Request appointment",
        href: "#open-appointment",
      },
    },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-200">
            <Phone className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Multiple ways to connect</span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 text-lg">Surat based. Currently servicing Surat.</p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 ${detail.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <detail.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">{detail.title}</h3>
                    <div className="space-y-2">
                      {detail.details.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 flex-shrink-0"></span>
                          {item}
                        </p>
                      ))}
                      {"action" in detail && detail.action ? (
                        <div className="pt-2 flex flex-wrap gap-2">
                          <button
                            onClick={() => {
                              if ((detail as any).title === "Visit Us") {
                                window.dispatchEvent(new CustomEvent("open-appointment"))
                              } else if ((detail as any).action?.href) {
                                const href = (detail as any).action.href as string
                                if (href.startsWith("http") || href.startsWith("mailto:")) {
                                  window.open(href, href.startsWith("http") ? "_blank" : "_self")
                                }
                              }
                            }}
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#6a0dad] text-white hover:opacity-90 transition-colors text-sm"
                          >
                            {(detail as any).action.label}
                          </button>
                          {((detail as any).title === "Visit Us") && (
                            <a
                              href="mailto:anishpambhar@gmail.com?subject=Appointment%20Request%20with%20Routo&body=Hi%20Routo%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20an%20appointment.%20My%20preferred%20date%2Ftime%20is%3A%20__%0AMy%20contact%20number%20is%3A%20__%0A%0AThanks!"
                              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-[#6a0dad] border border-[#6a0dad] hover:bg-[#6a0dad]/5 transition-colors text-sm"
                            >
                              Email for appointment
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
