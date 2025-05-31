"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Database, Mail, MessageSquare, TrendingUp, Activity, Zap, RefreshCw } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { getTranslation, type Locale } from "@/lib/i18n"
import Link from "next/link"

interface Contact {
  id: number
  name: string
  email: string
  company: string | null
  message: string
  created_at: string
}

interface DashboardStats {
  totalContacts: number
  totalSubscribers: number
  monthlyGrowth: number
  activeIntegrations: number
}

interface PageProps {
  params: {
    locale: Locale
  }
}

export default function DashboardPage({ params: { locale } }: PageProps) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    totalSubscribers: 0,
    monthlyGrowth: 0,
    activeIntegrations: 8,
  })
  const [loading, setLoading] = useState(true)

  const t = (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(locale, key)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)

      // Fetch contacts
      const contactsResponse = await fetch("/api/contact")
      if (contactsResponse.ok) {
        const contactsData = await contactsResponse.json()
        setContacts(contactsData.data || [])

        // Update stats
        setStats((prev) => ({
          ...prev,
          totalContacts: contactsData.data?.length || 0,
          monthlyGrowth: 12.5, // Mock data
        }))
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-gray-200 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <Link
              href={`/${locale}`}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              StreamLine AI
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={fetchDashboardData} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <LanguageToggle currentLocale={locale} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your StreamLine AI platform and monitor key metrics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSubscribers}</div>
              <p className="text-xs text-muted-foreground">+{stats.monthlyGrowth}% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Integrations</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeIntegrations}</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{stats.monthlyGrowth}%</div>
              <p className="text-xs text-muted-foreground">Compared to last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>Recent messages from your contact form</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin" />
                  </div>
                ) : contacts.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell className="font-medium">{contact.name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.company || "-"}</TableCell>
                          <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                          <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No contacts found. Create the contacts table first.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Neon Database", status: "Connected", color: "green", icon: Database },
                { name: "Groq AI", status: "Available", color: "blue", icon: Activity },
                { name: "Grok AI", status: "Available", color: "purple", icon: Activity },
                { name: "fal AI", status: "Available", color: "green", icon: Activity },
                { name: "Deep Infra", status: "Available", color: "amber", icon: Activity },
                { name: "Supabase", status: "Available", color: "emerald", icon: Database },
              ].map((integration, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{integration.name}</CardTitle>
                    <integration.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <Badge
                      variant={integration.status === "Connected" ? "default" : "secondary"}
                      className={
                        integration.status === "Connected"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : ""
                      }
                    >
                      {integration.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      {integration.status === "Connected" ? "Active and ready to use" : "Ready to connect"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Overview</CardTitle>
                  <CardDescription>Website visits and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Page Views</span>
                      <span className="font-semibold">12,543</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Unique Visitors</span>
                      <span className="font-semibold">8,921</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</span>
                      <span className="font-semibold">23.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Session</span>
                      <span className="font-semibold">4m 32s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Usage Statistics</CardTitle>
                  <CardDescription>AI features utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Smart Automation</span>
                      <span className="font-semibold">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">AI Analytics</span>
                      <span className="font-semibold">76%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">AI Assistant</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Content Generation</span>
                      <span className="font-semibold">67%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure your StreamLine AI platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">AI Features</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Enable AI-powered automation</p>
                    </div>
                    <Badge variant="default">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Database Backups</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Automatic daily backups</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">API Rate Limiting</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Protect against abuse</p>
                    </div>
                    <Badge variant="default">Enabled</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Configuration</CardTitle>
                  <CardDescription>Manage API keys and endpoints</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Available Endpoints</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">POST /api/contact</code>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex justify-between">
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">POST /api/newsletter</code>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex justify-between">
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">GET /api/analytics</code>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
