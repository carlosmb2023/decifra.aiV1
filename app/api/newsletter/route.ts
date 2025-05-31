import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Check if email already exists
    const existing = await sql`
      SELECT id FROM newsletter_subscribers WHERE email = ${email}
    `

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already subscribed",
        },
        { status: 400 },
      )
    }

    // Insert new subscriber
    const result = await sql`
      INSERT INTO newsletter_subscribers (email, subscribed_at)
      VALUES (${email}, NOW())
      RETURNING id, subscribed_at
    `

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
      data: result[0],
    })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ success: false, message: "Failed to subscribe" }, { status: 500 })
  }
}
