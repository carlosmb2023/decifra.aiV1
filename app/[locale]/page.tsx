import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Check, Brain, BarChart3, Users, Database, Server, Cpu, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { getTranslation, type Locale } from "@/lib/i18n"

interface PageProps {
  params: {
    locale: Locale
  }
}

export default function LandingPage({ params: { locale } }: PageProps) {
  const t = (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(locale, key)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-gray-200 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StreamLine AI
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}#features`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t("header.features")}
            </Link>
            <Link
              href={`/${locale}#testimonials`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t("header.testimonials")}
            </Link>
            <Link
              href={`/${locale}#pricing`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t("header.pricing")}
            </Link>
            <Link
              href={`/${locale}/integrations`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t("header.integrations")}
            </Link>
            <Link
              href={`/${locale}/dashboard`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t("header.dashboard")}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageToggle currentLocale={locale} />
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              {t("header.signIn")}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {t("header.getStarted")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 py-20 sm:py-32">
        {/* Background AI Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 border-0"
            >
              {t("hero.badge")}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              {t("hero.title")}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {t("hero.titleHighlight")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {t("hero.startTrial")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("hero.watchDemo")}
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{t("hero.disclaimer")}</p>
          </div>

          {/* AI Dashboard Preview */}
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="relative rounded-xl bg-white dark:bg-gray-800 p-2 shadow-2xl ring-1 ring-gray-900/10 dark:ring-gray-100/10">
              <div className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 shadow-lg">
                {/* AI Dashboard Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* AI Analytics Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">AI Analytics</h3>
                      <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Productivity</span>
                        <span className="text-sm font-medium text-green-600">+24%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: "74%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Assistant Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                      <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Latest suggestion:</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        "Schedule team sync for tomorrow at 2 PM"
                      </div>
                    </div>
                  </div>

                  {/* Smart Automation Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">Automation</h3>
                      <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Cpu className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Active workflows:</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="outline" className="mb-4 border-blue-200 dark:border-blue-800">
              {t("ai.badge")}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("ai.title")}</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t("ai.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 dark:border dark:border-gray-800 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{t("ai.automation.title")}</CardTitle>
                <CardDescription className="dark:text-gray-300">{t("ai.automation.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.prioritization")}
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.triggers")}
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.allocation")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 dark:border dark:border-gray-800 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{t("ai.analytics.title")}</CardTitle>
                <CardDescription className="dark:text-gray-300">{t("ai.analytics.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.metrics")}
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.detection")}
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.queries")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 dark:border dark:border-gray-800 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{t("ai.assistant.title")}</CardTitle>
                <CardDescription className="dark:text-gray-300">{t("ai.assistant.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.recommendations")}
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.updates")}
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
                    {t("features.scheduling")}
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
            <Badge variant="outline" className="mb-4 border-purple-200 dark:border-purple-800">
              {t("integrations.badge")}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t("integrations.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t("integrations.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Groq", color: "from-blue-600 to-blue-700", icon: "AI" },
              { name: "Grok", color: "from-purple-600 to-purple-700", icon: "AI" },
              { name: "fal AI", color: "from-green-600 to-green-700", icon: "fal" },
              { name: "Deep Infra", color: "from-amber-600 to-amber-700", icon: "DI" },
              { name: "Neon", color: "from-cyan-600 to-cyan-700", icon: Database },
              { name: "Supabase", color: "from-emerald-600 to-emerald-700", icon: Server },
            ].map((integration, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`h-12 w-12 bg-gradient-to-br ${integration.color} rounded-lg flex items-center justify-center mb-3`}
                >
                  {typeof integration.icon === "string" ? (
                    <span className="text-white font-bold text-xs">{integration.icon}</span>
                  ) : (
                    <integration.icon className="h-6 w-6 text-white" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{integration.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href={`/${locale}/integrations`}>
                {t("integrations.viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
