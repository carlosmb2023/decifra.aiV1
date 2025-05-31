import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, company } = await request.json()

    // Insert contact form data into database
    const result = await sql`
      INSERT INTO contacts (name, email, message, company, created_at)
      VALUES (${name}, ${email}, ${message}, ${company}, NOW())
      RETURNING id, created_at
    `

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      data: result[0],
    })
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to submit contact form" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Get all contacts (for admin dashboard)
    const contacts = await sql`
      SELECT id, name, email, company, message, created_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT 50
    `

    return NextResponse.json({
      success: true,
      data: contacts,
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch contacts" }, { status: 500 })
  }
}
