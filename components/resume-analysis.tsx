"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FileUp, CheckCircle, AlertCircle } from "lucide-react"

export default function ResumeAnalysis() {
  const [isUploaded, setIsUploaded] = useState(true)

  // Mock resume analysis data
  const resumeAnalysis = {
    score: 78,
    strengths: ["Technical skills", "Project descriptions", "Education"],
    improvements: ["Add more keywords", "Quantify achievements", "Add certifications"],
    keywordMatches: [
      { keyword: "JavaScript", count: 8, status: "good" },
      { keyword: "React", count: 6, status: "good" },
      { keyword: "Node.js", count: 4, status: "good" },
      { keyword: "TypeScript", count: 2, status: "low" },
      { keyword: "AWS", count: 1, status: "low" },
      { keyword: "Docker", count: 0, status: "missing" },
    ],
  }

  if (!isUploaded) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resume Analysis</CardTitle>
          <CardDescription>Upload your resume to get AI-powered insights and improvement suggestions</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-6">
          <FileUp className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Drag and drop your resume file here or click to browse
          </p>
          <Button onClick={() => setIsUploaded(true)}>Upload Resume</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Analysis</CardTitle>
        <CardDescription>AI-powered insights to improve your resume</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Overall Score</span>
            <span className="text-sm font-medium">{resumeAnalysis.score}%</span>
          </div>
          <Progress value={resumeAnalysis.score} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
              Strengths
            </h3>
            <ul className="text-sm space-y-1 pl-5 list-disc text-muted-foreground">
              {resumeAnalysis.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
              Improvements
            </h3>
            <ul className="text-sm space-y-1 pl-5 list-disc text-muted-foreground">
              {resumeAnalysis.improvements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Keyword Analysis</h3>
          <div className="flex flex-wrap gap-2">
            {resumeAnalysis.keywordMatches.map((keyword) => (
              <Badge
                key={keyword.keyword}
                variant={keyword.status === "good" ? "default" : keyword.status === "low" ? "secondary" : "outline"}
                className={keyword.status === "missing" ? "border-dashed" : ""}
              >
                {keyword.keyword} {keyword.count > 0 && `(${keyword.count})`}
              </Badge>
            ))}
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full">
          View Detailed Analysis
        </Button>
      </CardContent>
    </Card>
  )
}
