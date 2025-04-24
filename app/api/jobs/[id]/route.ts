import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const appId = process.env.ADZUNA_APP_ID
  const appKey = process.env.ADZUNA_APP_KEY
  const country = "in" // ISO 3166-1 alpha-2 code for India

  try {
    const url = `https://api.adzuna.com/v1/api/jobs/${country}/${id}?app_id=${appId}&app_key=${appKey}`
    const response = await fetch(url)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching job details:", error)
    return NextResponse.json({ error: "Failed to fetch job details" }, { status: 500 })
  }
}
