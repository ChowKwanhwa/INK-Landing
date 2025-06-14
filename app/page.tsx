import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { VisionSection } from "@/components/vision-section" // Import VisionSection
import { RoadmapSection } from "@/components/roadmap-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <VisionSection /> {/* Add VisionSection here */}
      <RoadmapSection />
      <PartnersSection />
      <Footer />
    </div>
  )
}
