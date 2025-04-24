"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Building, Clock } from "lucide-react"

interface Job {
  id: string
  title: string
  company: {
    display_name: string
  }
  location: {
    display_name: string
  }
  description: string
  created: string
  category: {
    label: string
  }
}

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await fetch("/api/jobs?featured=true")
        const data = await response.json()
        setJobs(data.results || [])
      } catch (error) {
        console.error("Error fetching featured jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedJobs()
  }, [])

  if (loading) {
    return (
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-2">
                  <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </CardContent>
                <CardFooter>
                  <div className="h-9 bg-muted rounded w-full"></div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // If no jobs are available, use sample data
  const sampleJobs: Job[] =
    jobs.length > 0
      ? jobs
      : [
          {
            id: "1",
            title: "Senior Software Engineer",
            company: { display_name: "Tech Innovations" },
            location: { display_name: "Bangalore, India" },
            description: "Join our team to build cutting-edge web applications using React and Node.js.",
            created: new Date().toISOString(),
            category: { label: "IT Jobs" },
          },
          {
            id: "2",
            title: "Product Manager",
            company: { display_name: "Global Solutions" },
            location: { display_name: "Mumbai, India" },
            description: "Lead product development for our SaaS platform, working with cross-functional teams.",
            created: new Date().toISOString(),
            category: { label: "Management" },
          },
          {
            id: "3",
            title: "Data Scientist",
            company: { display_name: "Analytics Pro" },
            location: { display_name: "Hyderabad, India" },
            description: "Analyze large datasets and build machine learning models to drive business insights.",
            created: new Date().toISOString(),
            category: { label: "IT Jobs" },
          },
          {
            id: "4",
            title: "UX/UI Designer",
            company: { display_name: "Creative Designs" },
            location: { display_name: "Delhi, India" },
            description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
            created: new Date().toISOString(),
            category: { label: "Design" },
          },
          {
            id: "5",
            title: "Marketing Specialist",
            company: { display_name: "Growth Hackers" },
            location: { display_name: "Pune, India" },
            description: "Develop and execute marketing campaigns to drive user acquisition and engagement.",
            created: new Date().toISOString(),
            category: { label: "Marketing" },
          },
          {
            id: "6",
            title: "DevOps Engineer",
            company: { display_name: "Cloud Systems" },
            location: { display_name: "Chennai, India" },
            description: "Build and maintain CI/CD pipelines and cloud infrastructure using AWS and Kubernetes.",
            created: new Date().toISOString(),
            category: { label: "IT Jobs" },
          },
        ]

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleJobs.map((job) => (
            <Card key={job.id} className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building className="h-4 w-4 mr-1" />
                  {job.company.display_name}
                </div>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location.display_name}
                </div>
                <p className="text-sm line-clamp-3">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">
                    {job.category.label}
                  </Badge>
                  <Badge variant="outline" className="text-xs flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    New
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/jobs/${job.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Job
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/jobs">
            <Button variant="outline">View All Jobs</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
