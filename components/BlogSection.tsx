import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, User } from "lucide-react"

// Dados simulados para os posts do blog
const blogPosts = [
  {
    id: 1,
    title: "O Futuro da IA Generativa em 2024",
    excerpt:
      "Descubra as tendências e avanços mais recentes em inteligência artificial generativa e como elas estão transformando indústrias.",
    category: "Tendências",
    date: "12 Jun 2024",
    author: "Dr. Decifra",
    image: "/placeholder.svg?height=400&width=600",
    slug: "futuro-ia-generativa-2024",
  },
  {
    id: 2,
    title: "Prompts Avançados para Gerar Imagens Perfeitas",
    excerpt: "Aprenda técnicas avançadas de engenharia de prompts para criar imagens impressionantes com IA.",
    category: "Tutoriais",
    date: "8 Jun 2024",
    author: "Ana Silva",
    image: "/placeholder.svg?height=400&width=600",
    slug: "prompts-avancados-imagens",
  },
  {
    id: 3,
    title: "Como a IA Está Revolucionando o Marketing Digital",
    excerpt: "Estratégias práticas para implementar IA em suas campanhas de marketing e aumentar o ROI.",
    category: "Marketing",
    date: "3 Jun 2024",
    author: "Carlos Mendes",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ia-revolucionando-marketing",
  },
  {
    id: 4,
    title: "Ética na IA: Desafios e Soluções",
    excerpt:
      "Uma análise profunda sobre os dilemas éticos da inteligência artificial e como podemos criar sistemas mais justos.",
    category: "Ética",
    date: "29 Mai 2024",
    author: "Dra. Patrícia Lopes",
    image: "/placeholder.svg?height=400&width=600",
    slug: "etica-ia-desafios-solucoes",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-[#0B0E12]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Últimas do Blog</h2>
            <p className="text-gray-400 max-w-2xl">
              Artigos, tutoriais e análises sobre as últimas tendências em inteligência artificial.
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="mt-4 md:mt-0 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
          >
            <Link href="/blog">
              Ver todos os artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Card className="bg-[#181B22] border-gray-800 overflow-hidden card-glow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-gradient-to-r from-[#00FFFF] to-[#0080FF] text-black">{post.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold hover:text-cyan-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 line-clamp-2">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between text-xs text-gray-500">
        <div className="flex items-center">
          <User className="h-3 w-3 mr-1" />
          {post.author}
        </div>
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {post.date}
        </div>
      </CardFooter>
    </Card>
  )
}
