import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { chatanywhere } from "@/lib/chatanywhere"

export async function POST(request: NextRequest) {
  try {
    const { resume, jobDescription } = await request.json()

    if (!resume || !jobDescription) {
      return NextResponse.json({ error: "Resume and job description are required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: chatanywhere("gpt-3.5-turbo"),
      prompt: `
        I have a resume and a job description. Please analyze the resume and provide suggestions to improve it specifically for this job.
        Focus on:
        1. Skills that should be highlighted
        2. Experience that should be emphasized
        3. Keywords from the job description that should be included
        4. Formatting or structure improvements
        5. Specific sections that could be added or enhanced
        
        Resume:
        ${resume}
        
        Job Description:
        ${jobDescription}
        
        Please provide the suggestions in a structured format that can be easily displayed to the user.
      `,
    })

    // For demonstration, creating a structured response
    const suggestions = {
      skillsToHighlight: ["Communication", "Project Management", "Data Analysis"],
      experienceToEmphasize: ["Team leadership", "Client relationship management"],
      keywordsToInclude: ["agile methodology", "cross-functional", "stakeholder management"],
      formattingImprovements: ["Use bullet points for achievements", "Add a professional summary"],
      sectionsToEnhance: ["Education", "Professional Experience"],
    }

    return NextResponse.json({
      suggestions,
      aiResponse: text,
    })
  } catch (error) {
    console.error("Error in resume enhancement:", error)
    return NextResponse.json({ error: "Failed to process resume enhancement" }, { status: 500 })
  }
}
