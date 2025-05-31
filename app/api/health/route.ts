import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    // Test database connection
    await sql`SELECT 1`

    const health = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      services: {
        database: "healthy",
        api: "healthy",
        integrations: "healthy",
      },
      version: "1.0.0",
    }

    return NextResponse.json(health)
  } catch (error) {
    console.error("Health check failed:", error)
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Database connection failed",
      },
      { status: 500 },
    )
  }
}
