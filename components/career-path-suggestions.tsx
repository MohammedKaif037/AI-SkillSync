"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, BookOpen } from "lucide-react"

export default function CareerPathSuggestions() {
  const [activeTab, setActiveTab] = useState("software-architect")

  // Mock career path data
  const careerPaths = {
    "software-architect": {
      title: "Software Architect",
      match: 85,
      description: "Lead technical design and architecture decisions for complex software systems.",
      skillsToAcquire: ["System Design", "Cloud Architecture", "Technical Leadership", "Microservices"],
      nextRoles: ["Lead Software Architect", "Chief Technology Officer", "VP of Engineering"],
      timeline: "2-3 years",
      resources: [
        { name: "System Design Interview", type: "Book" },
        { name: "AWS Solutions Architect", type: "Certification" },
        { name: "Microservices Architecture", type: "Course" },
      ],
    },
    "product-manager": {
      title: "Product Manager",
      match: 72,
      description: "Define product vision, strategy, and roadmap to deliver successful products.",
      skillsToAcquire: ["Product Strategy", "User Research", "Agile Methodologies", "Data Analysis"],
      nextRoles: ["Senior Product Manager", "Director of Product", "VP of Product"],
      timeline: "1-2 years",
      resources: [
        { name: "Inspired: How to Create Products Customers Love", type: "Book" },
        { name: "Product Management Certification", type: "Certification" },
        { name: "User Research Fundamentals", type: "Course" },
      ],
    },
    "data-scientist": {
      title: "Data Scientist",
      match: 68,
      description: "Apply statistical analysis and machine learning to extract insights from data.",
      skillsToAcquire: ["Python", "Machine Learning", "Statistical Analysis", "Data Visualization"],
      nextRoles: ["Senior Data Scientist", "Machine Learning Engineer", "Data Science Manager"],
      timeline: "1-2 years",
      resources: [
        { name: "Python for Data Science Handbook", type: "Book" },
        { name: "TensorFlow Developer Certificate", type: "Certification" },
        { name: "Machine Learning Specialization", type: "Course" },
      ],
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Career Path Suggestions</CardTitle>
        <CardDescription>AI-recommended career paths based on your profile</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="software-architect" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="software-architect">Architect</TabsTrigger>
            <TabsTrigger value="product-manager">Product</TabsTrigger>
            <TabsTrigger value="data-scientist">Data Science</TabsTrigger>
          </TabsList>

          {Object.entries(careerPaths).map(([key, path]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium">{path.title}</h3>
                  <Badge variant="outline">Match: {path.match}%</Badge>
                </div>
                <Progress value={path.match} className="h-1.5 mb-2" />
                <p className="text-sm text-muted-foreground">{path.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1 text-primary" />
                  Skills to Acquire
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {path.skillsToAcquire.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Potential Next Roles</h4>
                  <ul className="text-sm space-y-1 pl-5 list-disc text-muted-foreground">
                    {path.nextRoles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Timeline</h4>
                  <p className="text-sm text-muted-foreground">{path.timeline}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-1 text-primary" />
                  Learning Resources
                </h4>
                <div className="space-y-2">
                  {path.resources.map((resource, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Badge variant="outline" className="mr-2 text-xs">
                        {resource.type}
                      </Badge>
                      {resource.name}
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                Explore This Path
              </Button>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
