import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { chatanywhere } from "@/lib/chatanywhere"

export async function POST(request: NextRequest) {
  try {
    const { resume, interests } = await request.json()

    if (!resume) {
      return NextResponse.json({ error: "Resume is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: chatanywhere("gpt-3.5-turbo"),
      prompt: `
        Based on the following resume and interests, suggest potential career paths and skills to develop.
        Include:
        1. 3-5 potential career paths based on current skills and experience
        2. For each path, list skills to develop and potential next roles
        3. Estimated timeline for progression
        4. Learning resources or certifications that would be valuable
        
        Resume:
        ${resume}
        
        Interests:
        ${interests || "Not specified"}
        
        Format the response as a structured JSON with career paths, skills, and resources.
      `,
    })

    // For demonstration, creating a structured response
    const careerPaths = [
      {
        path: "Data Science",
        currentFit: 75,
        skillsToAcquire: ["Python", "Machine Learning", "Statistical Analysis"],
        nextRoles: ["Junior Data Scientist", "Data Analyst", "Business Intelligence Analyst"],
        timeline: "1-2 years",
        learningResources: [
          { name: "DataCamp Python Data Science Track", type: "Course" },
          { name: "Google Data Analytics Certificate", type: "Certification" },
        ],
      },
      {
        path: "Product Management",
        currentFit: 65,
        skillsToAcquire: ["User Research", "Agile Methodologies", "Product Strategy"],
        nextRoles: ["Associate Product Manager", "Product Owner", "Business Analyst"],
        timeline: "1-3 years",
        learningResources: [
          { name: "Product School - Product Management Certificate", type: "Certification" },
          { name: "Coursera - Digital Product Management", type: "Course" },
        ],
      },
    ]

    return NextResponse.json({
      careerPaths,
      aiResponse: text,
    })
  } catch (error) {
    console.error("Error in career path suggestions:", error)
    return NextResponse.json({ error: "Failed to process career path suggestions" }, { status: 500 })
  }
}
