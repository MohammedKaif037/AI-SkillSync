import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query") || ""
  const location = searchParams.get("location") || ""
  const page = Number.parseInt(searchParams.get("page") || "1")
  const datePosted = searchParams.get("datePosted") || ""
  const salaryMin = searchParams.get("salaryMin") || ""
  const salaryMax = searchParams.get("salaryMax") || ""
  const remote = searchParams.get("remote") || ""
  const sortBy = searchParams.get("sortBy") || ""
  const category = searchParams.get("category") || ""
  const contractType = searchParams.get("contractType") || ""
  const hours = searchParams.get("hours") || ""

  const appId = process.env.ADZUNA_APP_ID
  const appKey = process.env.ADZUNA_APP_KEY
  const country = "in" // ISO 3166-1 alpha-2 code for India

  let url = `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=${appId}&app_key=${appKey}&results_per_page=20&what=${query}&content-type=application/json`

  if (location) url += `&where=${location}`
  if (datePosted) url += `&max_days_old=${datePosted}`
  if (salaryMin) url += `&salary_min=${salaryMin}`
  if (salaryMax) url += `&salary_max=${salaryMax}`
  if (remote === "true") url += `&remote=1`
  if (sortBy) url += `&sort_by=${sortBy}`
  if (category) url += `&category=${category}`
  if (contractType) url += `&contract=${contractType}`
  if (hours) url += `&hours=${hours}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 })
  }
}
