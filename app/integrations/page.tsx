import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Database,
  Server,
  Cpu,
  Cloud,
  Braces,
  Lock,
  MessageSquare,
  FileText,
  BarChart3,
  Layers,
  Zap,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-gray-200 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              StreamLine
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/integrations"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 py-20">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              🔌 Powerful Integrations
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Supercharge Your Workflow with
              <span className="text-blue-600 dark:text-blue-400"> AI & Data Integrations</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Connect your favorite tools and services to StreamLine. Leverage the power of AI, databases, and
              third-party services to create a seamless workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Dashboard */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <Tabs defaultValue="ai" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span>AI Integrations</span>
                </TabsTrigger>
                <TabsTrigger value="storage" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span>Storage</span>
                </TabsTrigger>
                <TabsTrigger value="features" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span>Features</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* AI Integrations Tab */}
            <TabsContent value="ai" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  AI-Powered Solutions
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Enhance your workflow with cutting-edge AI technologies. Integrate with leading AI providers to
                  automate tasks, generate content, and gain valuable insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                        <Cpu className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                      >
                        AI
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Groq</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Ultra-fast Language Processing Unit (LPU) architecture for AI inference
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400">•</div>
                        <span>High-performance AI inference</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400">•</div>
                        <span>Blazing fast response times</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400">•</div>
                        <span>Advanced language models</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect Groq
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                      >
                        AI
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Grok</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Advanced AI service with efficient text and image understanding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                        <span>Efficient text processing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                        <span>Wide context image understanding</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                        <span>Real-time data analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect Grok
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 dark:bg-green-500">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
                      >
                        AI
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">fal</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Serverless AI inferencing platform for creative processes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-green-600 dark:text-green-400">•</div>
                        <span>Image generation & editing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-green-600 dark:text-green-400">•</div>
                        <span>Creative AI workflows</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-green-600 dark:text-green-400">•</div>
                        <span>Serverless deployment</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect fal
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 dark:bg-amber-500">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800"
                      >
                        AI
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Deep Infra</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Platform with access to a vast library of open-source models
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-400">•</div>
                        <span>Open-source model access</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-400">•</div>
                        <span>Customizable AI solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-400">•</div>
                        <span>Scalable infrastructure</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect Deep Infra
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Storage Integrations Tab */}
            <TabsContent value="storage" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Storage Solutions</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Connect to powerful database and storage solutions to manage your data efficiently. Scale with ease
                  and ensure your data is always available.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600 dark:bg-cyan-500">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800"
                      >
                        Active
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Neon</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Serverless Postgres database with branching capabilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-cyan-600 dark:text-cyan-400">•</div>
                        <span>Serverless PostgreSQL</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-cyan-600 dark:text-cyan-400">•</div>
                        <span>Database branching</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-cyan-600 dark:text-cyan-400">•</div>
                        <span>Auto-scaling storage</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full">
                      Manage Neon
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 dark:bg-emerald-500">
                        <Server className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                      >
                        Storage
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Supabase</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Open source Firebase alternative with PostgreSQL
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400">•</div>
                        <span>Authentication & authorization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400">•</div>
                        <span>Real-time subscriptions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400">•</div>
                        <span>Storage & edge functions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect Supabase
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 dark:bg-red-500">
                        <Cloud className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                      >
                        Storage
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Blob</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Vercel Blob for global file storage and serving
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-red-600 dark:text-red-400">•</div>
                        <span>Global edge network</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-red-600 dark:text-red-400">•</div>
                        <span>Image optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-red-600 dark:text-red-400">•</div>
                        <span>Secure file uploads</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect Blob
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50 dark:border dark:border-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                      >
                        Storage
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Upstash</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Serverless Redis and Kafka for real-time applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                        <span>Serverless Redis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                        <span>Kafka messaging</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                        <span>Pay-per-request pricing</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Connect Upstash
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Integration Features Tab */}
            <TabsContent value="features" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Integration Features
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Build powerful features with your integrations. Create dashboards, forms, authentication systems, and
                  API endpoints.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border dark:border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Database Dashboard</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Create a custom dashboard to manage your Neon database
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Database Dashboard"
                        width={400}
                        height={200}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Build a custom dashboard to visualize and manage your database. Monitor performance, run
                        queries, and manage your data all in one place.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Create Dashboard</Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border dark:border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 dark:bg-green-500">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Database Forms</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Build forms that connect directly to your database
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Database Forms"
                        width={400}
                        height={200}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Create custom forms that save data directly to your Neon database. Perfect for contact forms,
                        surveys, and data collection.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Create Form</Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border dark:border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500">
                        <Lock className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">Authentication</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Set up authentication with your existing integrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Authentication"
                        width={400}
                        height={200}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Implement secure authentication using your database. Support email/password, social logins, and
                        multi-factor authentication.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Set Up Authentication</Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border dark:border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 dark:bg-amber-500">
                        <Braces className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">API Endpoints</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Create API endpoints that use your integrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="API Endpoints"
                        width={400}
                        height={200}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Build custom API endpoints that connect to your database and other integrations. Perfect for
                        building custom applications and services.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Create API</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Database Management Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Your Neon Database
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your Neon database is ready to use. Create tables, run queries, and build powerful applications with your
              data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Database Explorer</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Create and manage your database tables
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] overflow-hidden">
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 h-full bg-white dark:bg-gray-800 p-4 overflow-auto">
                    <pre className="text-xs text-gray-800 dark:text-gray-200 font-mono">
                      {`-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tasks table
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  project_id INTEGER REFERENCES projects(id),
  assigned_to INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                    </pre>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4">
                    <Button variant="outline">Run Query</Button>
                    <Button>Create Table</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Database Stats</CardTitle>
                  <CardDescription className="dark:text-gray-300">Monitor your database performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Storage Used</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">24%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: "24%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">CPU Usage</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">12%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="h-2 bg-green-600 dark:bg-green-500 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Connections</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">3/20</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-purple-600 dark:bg-purple-500 rounded-full"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Database Information</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Status</span>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">Online</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Version</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">PostgreSQL 15.3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Region</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">us-east-1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">AI-Powered Features</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Leverage the power of AI to enhance your workflow and automate tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border dark:border-gray-800">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">AI Content Generation</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Generate high-quality content for your marketing campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Prompt:</span> Write a product
                    description for a new AI-powered productivity tool.
                  </p>
                  <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Generated:</span> Introducing
                      StreamLine AI, the revolutionary productivity tool that transforms how you work. Powered by
                      advanced artificial intelligence, StreamLine learns your workflow patterns and automates
                      repetitive tasks, saving you hours each week. With intelligent prioritization, smart scheduling,
                      and contextual suggestions, you'll accomplish more in less time while reducing cognitive load.
                      Experience the future of productivity today.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Try Content Generation</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border dark:border-gray-800">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">AI Data Analysis</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Extract insights from your data with AI-powered analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=350"
                    alt="AI Data Analysis"
                    width={350}
                    height={150}
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                      <span>Automated trend detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                      <span>Predictive analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400">•</div>
                      <span>Natural language data queries</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Analyze Your Data</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border dark:border-gray-800">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 dark:bg-green-500">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl text-gray-900 dark:text-white">AI Chatbot</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Build custom chatbots for customer support and engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800 h-[180px] overflow-y-auto">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium mr-3 shrink-0">
                        U
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 max-w-[80%]">
                        How do I connect my database to StreamLine?
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <div className="bg-blue-600 rounded-lg p-2 text-sm text-white max-w-[80%]">
                        You can connect your database by going to the Integrations page and selecting your database
                        provider. We support Neon, Supabase, and more.
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-medium ml-3 shrink-0">
                        AI
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium mr-3 shrink-0">
                        U
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 max-w-[80%]">
                        What can I do with the AI features?
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Chatbot</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to supercharge your workflow?
            </h2>
            <p className="mt-4 text-lg text-blue-100 dark:text-blue-200">
              Connect your favorite tools and services to StreamLine and start building powerful applications today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-700"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md">
                Empowering teams to work smarter, collaborate better, and achieve more with our comprehensive project
                management platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-300 text-sm">© 2024 StreamLine. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
