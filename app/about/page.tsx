import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import Mission from "@/components/mission"
import Vision from "@/components/vision"
import WhyRouto from "@/components/why-routo"
import Values from "@/components/values"
import Team from "@/components/team"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero />
        <Mission />
        <Vision />
        <WhyRouto />
        <Values />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
