import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { Collection } from "@/components/site/collection"
import { Spotlight } from "@/components/site/spotlight"
import { Features } from "@/components/site/features"
import { Lookbook } from "@/components/site/lookbook"
import { Testimonials } from "@/components/site/testimonials"
import { CTA } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { CursorGlow } from "@/components/site/cursor-glow"
import { BackToTop } from "@/components/site/back-to-top"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10 flex-1">
        <Hero />
        <Marquee />
        <Collection />
        <Spotlight />
        <Features />
        <Lookbook />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
