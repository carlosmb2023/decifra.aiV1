import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Youtube, TwitterIcon as TikTok } from "lucide-react"

export function SocialSection() {
  return (
    <section className="py-20 bg-[#10131A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Decifra nas Redes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acompanhe nosso conteúdo nas principais plataformas sociais e fique por dentro das novidades.
          </p>
        </div>

        <Tabs defaultValue="tiktok" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#181B22] border border-gray-800">
              <TabsTrigger
                value="tiktok"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00FFFF] data-[state=active]:to-[#0080FF] data-[state=active]:text-black"
              >
                <TikTok className="h-4 w-4 mr-2" />
                TikTok
              </TabsTrigger>
              <TabsTrigger
                value="youtube"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#C724B1] data-[state=active]:to-[#8A2BE2] data-[state=active]:text-white"
              >
                <Youtube className="h-4 w-4 mr-2" />
                YouTube
              </TabsTrigger>
              <TabsTrigger
                value="instagram"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00FFFF] data-[state=active]:to-[#C724B1] data-[state=active]:text-white"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="tiktok">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-[#181B22] border-gray-800 overflow-hidden card-glow">
                  <CardContent className="p-0">
                    <div className="aspect-[9/16] bg-gray-900 flex items-center justify-center">
                      {/* Placeholder para o embed do TikTok */}
                      <div className="text-center p-4">
                        <TikTok className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                        <p className="text-gray-400">Embed do TikTok #{item}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {/* Comentário para integração futura */}
                          {/* Aqui entraria o código de embed do TikTok */}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="youtube">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <Card key={item} className="bg-[#181B22] border-gray-800 overflow-hidden card-glow-purple">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-900 flex items-center justify-center">
                      {/* Placeholder para o embed do YouTube */}
                      <div className="text-center p-4">
                        <Youtube className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                        <p className="text-gray-400">Embed do YouTube #{item}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {/* Comentário para integração futura */}
                          {/* Aqui entraria o código de embed do YouTube */}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instagram">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="bg-[#181B22] border-gray-800 overflow-hidden card-glow">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-900 flex items-center justify-center">
                      {/* Placeholder para o embed do Instagram */}
                      <div className="text-center p-4">
                        <Instagram className="h-12 w-12 mx-auto mb-4 text-pink-400" />
                        <p className="text-gray-400">Post do Instagram #{item}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {/* Comentário para integração futura */}
                          {/* Aqui entraria o código de embed do Instagram */}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
