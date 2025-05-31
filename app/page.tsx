import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Brain } from "lucide-react"
import Link from "next/link"
import { BarChart3, Users, Database, Server } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { BlogSection } from "@/components/BlogSection"
import { SocialSection } from "@/components/SocialSection"
import { AboutSection } from "@/components/AboutSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <HeroSection />
      {/* AI Technology Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="outline" className="mb-4">
              AI-Powered
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cutting-Edge AI Technology
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 dark:border dark:border-gray-800">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Smart Automation</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Automate repetitive tasks and workflows with AI-powered intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Intelligent task prioritization
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Automated workflow triggers
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Predictive resource allocation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 dark:border dark:border-gray-800">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">AI Analytics</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Get deep insights with machine learning-powered analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Predictive performance metrics
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Natural language queries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 dark:border dark:border-gray-800">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-500">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">AI Assistant</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Your personal AI assistant for project management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Intelligent recommendations
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Automated status updates
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    Smart meeting scheduling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Integrations Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Professional Grade
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Enterprise-Ready Integrations
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Connect with the tools your team already uses. Seamless integration with professional platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="h-12 w-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Groq</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="h-12 w-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Grok</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="h-12 w-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">fal</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">fal AI</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="h-12 w-12 bg-amber-600 dark:bg-amber-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-xs">DI</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Deep Infra</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="h-12 w-12 bg-cyan-600 dark:bg-cyan-500 rounded-lg flex items-center justify-center mb-3">
                <Database className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Neon</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
              <div className="h-12 w-12 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center mb-3">
                <Server className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Supabase</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/integrations">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <BlogSection />
      <SocialSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
