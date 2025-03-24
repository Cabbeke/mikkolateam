import Hero from "@/components/hero"
import About from "@/components/about"
import Pilots from "@/components/pilots"
import Articles from "@/components/articles"
import Sponsors from "@/components/sponsors"
import CalendarSection from "@/components/calendar"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Pilots />
      <Articles />
      <Sponsors />
      <CalendarSection />
      <Contact />
    </main>
  )
}

