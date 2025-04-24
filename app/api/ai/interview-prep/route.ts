import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { chatanywhere } from "@/lib/chatanywhere"

export async function POST(request: NextRequest) {
  try {
    const { jobDescription, resume } = await request.json()

    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: chatanywhere("gpt-3.5-turbo"),
      prompt: `
        Based on the following job description${resume ? " and resume" : ""}, generate a set of likely interview questions and suggested answers.
        Include:
        1. Technical questions specific to the role
        2. Behavioral questions relevant to the company culture and role requirements
        3. Questions about experience and skills mentioned in the job description
        4. Questions about handling challenges related to the role
        5. Questions the candidate should ask the interviewer
        
        Job Description:
        ${jobDescription}
        
        ${resume ? `Resume:\n${resume}` : ""}
        
        Format the response as a structured JSON with categories of questions and answers.
      `,
    })

    // For demonstration, creating a structured response
    const interviewPrep = {
      technicalQuestions: [
        {
          question: "Can you explain your experience with data analysis tools?",
          suggestedAnswer:
            "I have extensive experience with tools like Excel, Tableau, and SQL for data analysis. In my previous role, I used these tools to create dashboards that improved decision-making by 30%.",
        },
      ],
      behavioralQuestions: [
        {
          question: "Tell me about a time you had to work under pressure to meet a deadline.",
          suggestedAnswer:
            "In my previous role, we had a critical client presentation with only three days to prepare. I organized the team, delegated tasks based on strengths, and we successfully delivered a polished presentation that won the client's approval.",
        },
      ],
      experienceQuestions: [
        {
          question: "How have you applied project management methodologies in your previous roles?",
          suggestedAnswer:
            "I've implemented Agile methodologies in my last two positions, leading to a 25% reduction in project delivery time and improved team collaboration through daily stand-ups and sprint planning.",
        },
      ],
      challengeQuestions: [
        {
          question: "How would you handle conflicting priorities from different stakeholders?",
          suggestedAnswer:
            "I would first understand the business impact of each priority, then facilitate a discussion with stakeholders to align on objectives and create a prioritized roadmap that balances different needs while focusing on the highest business value items.",
        },
      ],
      questionsToAsk: [
        "What does success look like in this role after 90 days?",
        "How does this role contribute to the company's overall strategy?",
        "What are the biggest challenges the team is currently facing?",
      ],
    }

    return NextResponse.json({
      interviewPrep,
      aiResponse: text,
    })
  } catch (error) {
    console.error("Error in interview preparation:", error)
    return NextResponse.json({ error: "Failed to process interview preparation" }, { status: 500 })
  }
}
