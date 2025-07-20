import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Speakers } from "@/components/speakers"
import { Details } from "@/components/details"
import { Committee } from "@/components/committee"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Details />
        <Committee />
      </main>
      <Footer />
    </div>
  )
}
