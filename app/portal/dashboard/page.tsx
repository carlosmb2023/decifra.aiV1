import type React from "react"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, ImageIcon, Video, Code, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0B0E12]">
      <Sidebar />

      <div className="md:ml-64 p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-gray-400">Bem-vindo ao seu portal de IA. Explore as ferramentas disponíveis.</p>
        </header>

        {/* Agentes de IA */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Agentes de IA</h2>
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AgentCard
              title="Chat IA"
              description="Converse com uma IA avançada para obter respostas e assistência"
              icon={<MessageSquare className="h-5 w-5" />}
              href="/portal/chat"
              gradient="from-[#00FFFF] to-[#0080FF]"
            />
            <AgentCard
              title="Gerador de Conteúdo"
              description="Crie artigos, posts e textos otimizados para SEO"
              icon={<FileText className="h-5 w-5" />}
              href="/portal/conteudo"
              gradient="from-[#C724B1] to-[#8A2BE2]"
            />
            <AgentCard
              title="Gerador de Imagens"
              description="Crie imagens impressionantes a partir de descrições textuais"
              icon={<ImageIcon className="h-5 w-5" />}
              href="/portal/imagens"
              gradient="from-[#00FFFF] to-[#C724B1]"
            />
            <AgentCard
              title="Gerador de Vídeos"
              description="Transforme textos e imagens em vídeos profissionais"
              icon={<Video className="h-5 w-5" />}
              href="/portal/videos"
              gradient="from-[#0080FF] to-[#8A2BE2]"
              badge="Novo"
            />
          </div>
        </section>

        {/* Atividade Recente e Recursos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Atividade Recente */}
          <Card className="lg:col-span-2 bg-[#181B22] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="mr-2 h-5 w-5 text-cyan-400" />
                Atividade Recente
              </CardTitle>
              <CardDescription>Suas interações recentes com os agentes de IA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Chat sobre estratégias de marketing digital",
                    time: "Hoje, 14:32",
                    type: "Chat IA",
                    icon: <MessageSquare className="h-4 w-4" />,
                  },
                  {
                    title: "Geração de imagem: 'Cidade futurista com elementos de cyberpunk'",
                    time: "Hoje, 11:15",
                    type: "Gerador de Imagens",
                    icon: <ImageIcon className="h-4 w-4" />,
                  },
                  {
                    title: "Artigo: '10 Tendências de IA para 2024'",
                    time: "Ontem, 18:45",
                    type: "Gerador de Conteúdo",
                    icon: <FileText className="h-4 w-4" />,
                  },
                  {
                    title: "Prompt: 'Análise de sentimento em comentários'",
                    time: "Ontem, 15:20",
                    type: "Biblioteca de Prompts",
                    icon: <Code className="h-4 w-4" />,
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="mr-4 mt-0.5 bg-gray-800 p-2 rounded-md">{activity.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{activity.title}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-400">{activity.time}</span>
                        <span className="mx-2 text-gray-600">•</span>
                        <span className="text-xs text-cyan-400">{activity.type}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recursos Rápidos */}
          <Card className="bg-[#181B22] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Recursos Rápidos</CardTitle>
              <CardDescription>Acesse rapidamente suas ferramentas favoritas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-left hover:bg-gray-800" asChild>
                  <Link href="/portal/prompts">
                    <Code className="mr-3 h-4 w-4 text-cyan-400" />
                    <div>
                      <div className="font-medium">Biblioteca de Prompts</div>
                      <div className="text-xs text-gray-400">500+ prompts prontos</div>
                    </div>
                  </Link>
                </Button>

                <Button variant="ghost" className="w-full justify-start text-left hover:bg-gray-800" asChild>
                  <Link href="/portal/chat">
                    <MessageSquare className="mr-3 h-4 w-4 text-purple-400" />
                    <div>
                      <div className="font-medium">Chat IA Avançado</div>
                      <div className="text-xs text-gray-400">GPT-4 + Claude</div>
                    </div>
                  </Link>
                </Button>

                <Button variant="ghost" className="w-full justify-start text-left hover:bg-gray-800" asChild>
                  <Link href="/portal/imagens">
                    <ImageIcon className="mr-3 h-4 w-4 text-green-400" />
                    <div>
                      <div className="font-medium">Gerador de Imagens</div>
                      <div className="text-xs text-gray-400">DALL-E + Midjourney</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Estatísticas de Uso */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white mb-6">Estatísticas de Uso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#181B22] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Chats Realizados</p>
                    <p className="text-2xl font-bold text-white">127</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181B22] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Imagens Geradas</p>
                    <p className="text-2xl font-bold text-white">43</p>
                  </div>
                  <ImageIcon className="h-8 w-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181B22] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Artigos Criados</p>
                    <p className="text-2xl font-bold text-white">18</p>
                  </div>
                  <FileText className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181B22] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Prompts Salvos</p>
                    <p className="text-2xl font-bold text-white">89</p>
                  </div>
                  <Code className="h-8 w-8 text-amber-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

interface AgentCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  gradient: string
  badge?: string
}

function AgentCard({ title, description, icon, href, gradient, badge }: AgentCardProps) {
  return (
    <Card className="bg-[#181B22] border-gray-800 card-glow relative overflow-hidden">
      {badge && (
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-gradient-to-r from-[#C724B1] to-[#8A2BE2] text-white text-xs px-2 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}
      <CardHeader>
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${gradient} mb-4`}
        >
          <span className="text-white">{icon}</span>
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          asChild
          className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border-0"
        >
          <Link href={href}>
            Acessar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
