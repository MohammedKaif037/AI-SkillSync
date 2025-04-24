import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { chatanywhere } from "@/lib/chatanywhere"

export async function POST(request: NextRequest) {
  try {
    const { jobDescription } = await request.json()

    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: chatanywhere("gpt-3.5-turbo"),
      prompt: `
        Analyze the following job description and provide insights:
        1. Key skills and qualifications required
        2. Potential red flags or concerns
        3. Company culture insights based on language and requirements
        4. Salary expectations based on role and responsibilities
        5. Growth opportunities implied in the description
        
        Job Description:
        ${jobDescription}
        
        Format the response as a structured JSON with categories for each type of insight.
      `,
    })

    // For demonstration, creating a structured response
    const jobAnalysis = {
      keySkills: ["Project Management", "Communication", "Leadership", "Technical Writing"],
      qualifications: ["Bachelor's degree", "5+ years experience", "PMP Certification"],
      redFlags: [
        "Mentions 'fast-paced environment' which might indicate long hours",
        "Multiple responsibilities might suggest understaffing",
      ],
      cultureInsights: ["Values collaboration based on team mentions", "Results-oriented with emphasis on metrics"],
      salaryExpectations: {
        range: "$80,000 - $110,000",
        factors: ["Experience level", "Location", "Industry standards"],
      },
      growthOpportunities: ["Mentions advancement paths", "Cross-functional exposure", "Leadership development"],
    }

    return NextResponse.json({
      jobAnalysis,
      aiResponse: text,
    })
  } catch (error) {
    console.error("Error in job analysis:", error)
    return NextResponse.json({ error: "Failed to process job analysis" }, { status: 500 })
  }
}
