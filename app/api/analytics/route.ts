import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: NextRequest) {
  try {
    // Get analytics data
    const contactsCount = await sql`SELECT COUNT(*) as count FROM contacts`
    const subscribersCount = await sql`SELECT COUNT(*) as count FROM newsletter_subscribers`

    // Get recent activity (last 30 days)
    const recentContacts = await sql`
      SELECT DATE(created_at) as date, COUNT(*) as count 
      FROM contacts 
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `

    const analytics = {
      totalContacts: contactsCount[0]?.count || 0,
      totalSubscribers: subscribersCount[0]?.count || 0,
      recentActivity: recentContacts,
      monthlyGrowth: 12.5, // Mock calculation
      activeIntegrations: 8,
      systemHealth: {
        database: "healthy",
        api: "healthy",
        integrations: "healthy",
      },
    }

    return NextResponse.json({
      success: true,
      data: analytics,
    })
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch analytics" }, { status: 500 })
  }
}
