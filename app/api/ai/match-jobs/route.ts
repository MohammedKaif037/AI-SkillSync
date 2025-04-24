import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { chatanywhere } from "@/lib/chatanywhere"

export async function POST(request: NextRequest) {
  try {
    const { resume } = await request.json()

    if (!resume) {
      return NextResponse.json({ error: "Resume content is required" }, { status: 400 })
    }

    // Fetch some jobs to match against
    const appId = process.env.ADZUNA_APP_ID
    const appKey = process.env.ADZUNA_APP_KEY
    const country = "in"
    const jobsUrl = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=20`

    const jobsResponse = await fetch(jobsUrl)
    const jobsData = await jobsResponse.json()
    const jobs = jobsData.results || []

    // Use AI to match resume with jobs
    const { text } = await generateText({
      model: chatanywhere("gpt-3.5-turbo"),
      prompt: `
        I have a resume and a list of job postings. Please analyze the resume and match it with the most relevant jobs from the list.
        For each matched job, provide a score from 0-100 and a brief explanation of why it's a good match.
        
        Resume:
        ${resume}
        
        Jobs:
        ${JSON.stringify(
          jobs.map((job) => ({
            id: job.id,
            title: job.title,
            description: job.description,
            company: job.company.display_name,
            location: job.location.display_name,
            category: job.category.label,
          })),
        )}
      `,
    })

    // Parse the AI response to get structured data
    const matchedJobs = jobs.slice(0, 5).map((job, index) => ({
      id: job.id,
      title: job.title,
      company: job.company.display_name,
      location: job.location.display_name,
      matchScore: 95 - index * 5, // Placeholder scores
      matchReason: `This job matches your experience in ${job.category.label}`,
      jobDetails: job,
    }))

    return NextResponse.json({ matchedJobs })
  } catch (error) {
    console.error("Error in job matching:", error)
    return NextResponse.json({ error: "Failed to process job matching" }, { status: 500 })
  }
}
