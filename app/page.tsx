import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import IdeaShowcase from "@/components/idea-showcase"
import WhyJoinRouto from "@/components/why-join-routo"
import HowItWorks from "@/components/how-it-works"
import Services from "@/components/services"
import Benefits from "@/components/benefits"
import AppOverview from "@/components/app-overview"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AppOverview />
        <IdeaShowcase />
        <WhyJoinRouto />
        <HowItWorks />
        <Services />
        <Benefits />
      </main>
      <Footer />
    </div>
  )
}
