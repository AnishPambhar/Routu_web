import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactFAQ from "@/components/contact-faq"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  )
}
