"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Twitter, Mail, Lock, User, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulação de login
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/portal/dashboard"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#0B0E12] flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md">
          <Card className="bg-[#181B22] border-gray-800">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold gradient-text">Portal Decifra Aí!</CardTitle>
              <CardDescription className="text-gray-400">
                Entre para acessar ferramentas exclusivas de IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-[#10131A]">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Cadastro</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="email"
                          placeholder="seu@email.com"
                          type="email"
                          required
                          className="pl-10 bg-[#10131A] border-gray-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Senha</Label>
                        <Link href="/portal/recuperar" className="text-xs text-cyan-400 hover:text-cyan-300">
                          Esqueceu a senha?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="password"
                          placeholder="••••••••"
                          type="password"
                          required
                          className="pl-10 bg-[#10131A] border-gray-700"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00FFFF] to-[#0080FF] hover:opacity-90 text-black"
                      disabled={isLoading}
                    >
                      {isLoading ? "Entrando..." : "Entrar"}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="name"
                          placeholder="Seu nome"
                          required
                          className="pl-10 bg-[#10131A] border-gray-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="register-email"
                          placeholder="seu@email.com"
                          type="email"
                          required
                          className="pl-10 bg-[#10131A] border-gray-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="register-password"
                          placeholder="••••••••"
                          type="password"
                          required
                          className="pl-10 bg-[#10131A] border-gray-700"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#C724B1] to-[#8A2BE2] hover:opacity-90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Cadastrando..." : "Cadastrar"}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#181B22] px-2 text-gray-400">ou continue com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="bg-[#10131A] border-gray-700 hover:bg-gray-800">
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Button>
                <Button variant="outline" className="bg-[#10131A] border-gray-700 hover:bg-gray-800">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </CardContent>
            <CardFooter className="text-center text-xs text-gray-500">
              Ao continuar, você concorda com nossos{" "}
              <Link href="/termos" className="text-cyan-400 hover:text-cyan-300">
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-cyan-400 hover:text-cyan-300">
                Política de Privacidade
              </Link>
              .
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
