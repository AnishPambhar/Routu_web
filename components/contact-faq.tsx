import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function ContactFAQ() {
  const faqs = [
    {
      question: "How do I join as a rider?",
      answer:
        "Simply fill out our rider application form, provide necessary documents (ID, vehicle registration), and complete our brief onboarding process. Once approved, you can start earning immediately.",
    },
    {
      question: "What are the fees for vendors?",
      answer:
        "Vendors pay a 20% platform fee on successful deliveries plus a base service charge of ₹6.99 per delivery. There are no monthly subscription fees or hidden charges.",
    },
    {
      question: "How is delivery safety ensured?",
      answer:
        "All deliveries are tracked in real-time, insured up to ₹5,000, and our riders undergo background verification. We also provide 24/7 customer support for any issues.",
    },
    {
      question: "What areas do you currently serve?",
      answer: "We are Surat-based and currently servicing Surat. We'll announce new cities soon.",
    },
    {
      question: "How quickly can I get a response to my inquiry?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line for immediate assistance.",
    },
    {
      question: "Can I track my parcel in real-time?",
      answer:
        "Yes! All parcels are tracked from pickup to delivery. You'll receive SMS updates and can track your parcel's location through our mobile app or website.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Find quick answers to common questions about Routo's services
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@routo.com" className="inline-flex items-center justify-center px-6 py-3 bg-[#6a0dad] text-white rounded-lg hover:opacity-90 transition-colors">Email Support</a>
            <a href="tel:+919737545084" className="inline-flex items-center justify-center px-6 py-3 border border-[#6a0dad] text-[#6a0dad] rounded-lg hover:bg-purple-50 transition-colors">Call Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
