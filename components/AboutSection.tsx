import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-[#0B0E12]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Card className="bg-[#181B22] border-gray-800 overflow-hidden card-glow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/30">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Dr. Decifra"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">Dr. Decifra</h3>
                    <p className="text-gray-400 mb-4">
                      Especialista em Inteligência Artificial e Tecnologias Emergentes
                    </p>
                    <p className="text-gray-300">
                      Com mais de 15 anos de experiência em pesquisa e desenvolvimento de IA, o Dr. Decifra tem como
                      missão tornar a tecnologia acessível e compreensível para todos, decifrando os mistérios da
                      inteligência artificial.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Conheça o Decifra Aí!</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Nascemos com a missão de democratizar o acesso à inteligência artificial, tornando conceitos complexos em
              ferramentas práticas e acessíveis.
            </p>
            <p className="text-gray-400 mb-8">
              Nossa plataforma reúne conteúdo educativo, ferramentas práticas e uma comunidade vibrante de entusiastas e
              profissionais de IA. Acreditamos que a tecnologia deve servir às pessoas, e não o contrário.
            </p>
            <Button asChild className="bg-gradient-to-r from-[#C724B1] to-[#8A2BE2] hover:opacity-90">
              <Link href="/sobre">
                Saiba mais sobre nós
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
