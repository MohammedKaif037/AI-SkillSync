"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, XCircle, Brain, FileText, MessageSquare } from "lucide-react"

interface AIJobInsightsProps {
  jobId: string
}

export default function AIJobInsights({ jobId }: AIJobInsightsProps) {
  const [activeTab, setActiveTab] = useState("analysis")
  const [resume, setResume] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResumeForm, setShowResumeForm] = useState(false)

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 2000)
  }

  // Mock data for job analysis
  const jobAnalysis = {
    keySkills: ["JavaScript", "React", "Node.js", "TypeScript", "REST APIs"],
    qualifications: ["Bachelor's degree", "5+ years experience", "Strong communication skills"],
    redFlags: ["Mentions 'fast-paced environment' which might indicate long hours"],
    cultureInsights: ["Values collaboration", "Results-oriented", "Emphasis on innovation"],
    salaryExpectations: {
      range: "₹15-25 LPA",
      factors: ["Experience level", "Location", "Industry standards"],
    },
  }

  // Mock data for interview preparation
  const interviewPrep = {
    technicalQuestions: [
      {
        question: "Can you explain your experience with React and state management?",
        tip: "Focus on specific projects and challenges you've solved",
      },
      {
        question: "How do you approach API design and implementation?",
        tip: "Discuss RESTful principles and security considerations",
      },
      {
        question: "Describe your experience with TypeScript and its benefits",
        tip: "Highlight type safety and developer experience improvements",
      },
    ],
    behavioralQuestions: [
      {
        question: "Tell me about a time you had to meet a tight deadline",
        tip: "Use the STAR method: Situation, Task, Action, Result",
      },
      {
        question: "How do you handle disagreements with team members?",
        tip: "Emphasize communication and finding common ground",
      },
    ],
  }

  // Mock data for resume feedback
  const resumeFeedback = {
    strengths: ["Strong technical skills", "Clear project descriptions", "Quantified achievements"],
    improvements: [
      "Add more keywords from the job description",
      "Highlight leadership experience",
      "Include relevant certifications",
    ],
    keywordsToAdd: ["Full-stack development", "Agile methodologies", "Microservices", "CI/CD"],
    overallScore: 75,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-primary" />
          AI Job Insights
        </CardTitle>
        <CardDescription>
          Get AI-powered insights to help you understand this job and prepare for the application process
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="analysis" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="analysis">Job Analysis</TabsTrigger>
            <TabsTrigger value="interview">Interview Prep</TabsTrigger>
            <TabsTrigger value="resume">Resume Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Key Skills Required</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {jobAnalysis.keySkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Qualifications</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {jobAnalysis.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Potential Red Flags</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {jobAnalysis.redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="h-4 w-4 mr-1 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Company Culture Insights</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {jobAnalysis.cultureInsights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Salary Expectations</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Expected range: <span className="font-medium">{jobAnalysis.salaryExpectations.range}</span>
              </p>
              <p className="text-sm text-muted-foreground">Factors affecting salary:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {jobAnalysis.salaryExpectations.factors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="interview" className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Technical Questions</h3>
              <div className="space-y-3">
                {interviewPrep.technicalQuestions.map((q, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <p className="font-medium mb-1">{q.question}</p>
                    <p className="text-sm text-muted-foreground flex items-start">
                      <MessageSquare className="h-4 w-4 mr-1 text-primary mt-0.5 flex-shrink-0" />
                      Tip: {q.tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Behavioral Questions</h3>
              <div className="space-y-3">
                {interviewPrep.behavioralQuestions.map((q, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <p className="font-medium mb-1">{q.question}</p>
                    <p className="text-sm text-muted-foreground flex items-start">
                      <MessageSquare className="h-4 w-4 mr-1 text-primary mt-0.5 flex-shrink-0" />
                      Tip: {q.tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={() => setActiveTab("resume")} className="w-full">
              Get Resume Tips for This Job
            </Button>
          </TabsContent>

          <TabsContent value="resume" className="space-y-4">
            {!showResumeForm ? (
              <div className="text-center py-4">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Get Personalized Resume Feedback</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload your resume to get AI-powered suggestions to improve your chances of landing this job.
                </p>
                <Button onClick={() => setShowResumeForm(true)}>Analyze My Resume</Button>
              </div>
            ) : isAnalyzing ? (
              <div className="text-center py-8">
                <div className="animate-pulse">
                  <Brain className="h-12 w-12 mx-auto text-primary mb-4" />
                  <p className="text-sm font-medium">Analyzing your resume...</p>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    Resume Strengths
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {resumeFeedback.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <XCircle className="h-4 w-4 mr-1 text-red-500" />
                    Areas for Improvement
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {resumeFeedback.improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Keywords to Add</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeFeedback.keywordsToAdd.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Overall Match Score</h3>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${resumeFeedback.overallScore}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 text-right">{resumeFeedback.overallScore}%</p>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResumeForm(false)
                    setResume("")
                  }}
                  className="w-full"
                >
                  Analyze Another Resume
                </Button>
              </>
            )}

            {showResumeForm && !isAnalyzing && (
              <form onSubmit={handleResumeSubmit} className="mt-4">
                <Textarea
                  placeholder="Paste your resume text here..."
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  rows={8}
                  className="mb-4"
                />
                <Button type="submit" disabled={!resume.trim()}>
                  Analyze Resume
                </Button>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
