import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 animated-bg overflow-hidden">
      {/* Partículas animadas (placeholders) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500 opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-500 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-70 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-purple-500 opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cyan-500 opacity-70 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight neon-flicker">
            <span className="gradient-text">Decifra Aí!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            O hub definitivo de inteligência artificial que transforma complexidade em clareza. Explore tendências,
            ferramentas e recursos para potencializar sua jornada digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00FFFF] to-[#0080FF] hover:opacity-90 text-black font-medium px-8 py-6 text-lg"
            >
              <Link href="/portal">
                Acessar Portal IA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#C724B1] text-[#C724B1] hover:bg-[#C724B1]/10 px-8 py-6 text-lg"
            >
              <Link href="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
