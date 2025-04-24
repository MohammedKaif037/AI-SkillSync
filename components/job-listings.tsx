import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, MapPin, Clock } from "lucide-react"

interface JobListingsProps {
  page: number
  query: string
  location: string
}

async function getJobs(page: number, query: string, location: string) {
  // In a real app, this would fetch from your API
  // For demo purposes, we'll return mock data
  const jobs = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: { display_name: "Tech Innovations" },
      location: { display_name: "Bangalore, India" },
      description: "Join our team to build cutting-edge web applications using React and Node.js.",
      created: new Date().toISOString(),
      category: { label: "IT Jobs" },
      salary_min: 1500000,
      salary_max: 2500000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "2",
      title: "Product Manager",
      company: { display_name: "Global Solutions" },
      location: { display_name: "Mumbai, India" },
      description: "Lead product development for our SaaS platform, working with cross-functional teams.",
      created: new Date().toISOString(),
      category: { label: "Management" },
      salary_min: 1800000,
      salary_max: 2800000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "3",
      title: "Data Scientist",
      company: { display_name: "Analytics Pro" },
      location: { display_name: "Hyderabad, India" },
      description: "Analyze large datasets and build machine learning models to drive business insights.",
      created: new Date().toISOString(),
      category: { label: "IT Jobs" },
      salary_min: 1600000,
      salary_max: 2400000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "4",
      title: "UX/UI Designer",
      company: { display_name: "Creative Designs" },
      location: { display_name: "Delhi, India" },
      description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
      created: new Date().toISOString(),
      category: { label: "Design" },
      salary_min: 1200000,
      salary_max: 1800000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "5",
      title: "Marketing Specialist",
      company: { display_name: "Growth Hackers" },
      location: { display_name: "Pune, India" },
      description: "Develop and execute marketing campaigns to drive user acquisition and engagement.",
      created: new Date().toISOString(),
      category: { label: "Marketing" },
      salary_min: 1000000,
      salary_max: 1500000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "6",
      title: "DevOps Engineer",
      company: { display_name: "Cloud Systems" },
      location: { display_name: "Chennai, India" },
      description: "Build and maintain CI/CD pipelines and cloud infrastructure using AWS and Kubernetes.",
      created: new Date().toISOString(),
      category: { label: "IT Jobs" },
      salary_min: 1400000,
      salary_max: 2200000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "7",
      title: "Frontend Developer",
      company: { display_name: "Web Solutions" },
      location: { display_name: "Bangalore, India" },
      description: "Create responsive and interactive user interfaces using React, Next.js, and Tailwind CSS.",
      created: new Date().toISOString(),
      category: { label: "IT Jobs" },
      salary_min: 1200000,
      salary_max: 1800000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
    {
      id: "8",
      title: "Backend Developer",
      company: { display_name: "Server Tech" },
      location: { display_name: "Hyderabad, India" },
      description: "Build scalable and secure APIs and services using Node.js, Express, and MongoDB.",
      created: new Date().toISOString(),
      category: { label: "IT Jobs" },
      salary_min: 1300000,
      salary_max: 2000000,
      contract_time: "full_time",
      contract_type: "permanent",
    },
  ]

  // Filter by query and location if provided
  let filteredJobs = jobs
  if (query) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase()),
    )
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.display_name.toLowerCase().includes(location.toLowerCase()),
    )
  }

  // Paginate results
  const startIndex = (page - 1) * 10
  const endIndex = startIndex + 10
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex)

  return {
    jobs: paginatedJobs,
    total: filteredJobs.length,
  }
}

export default async function JobListings({ page, query, location }: JobListingsProps) {
  const { jobs, total } = await getJobs(page, query, location)

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No jobs found</h3>
        <p className="text-muted-foreground">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {jobs.length} of {total} jobs
        </p>
      </div>

      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">
                  <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                    {job.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Building className="h-4 w-4 mr-1" />
                  {job.company.display_name}
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {job.category.label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {job.location.display_name}
            </div>
            <p className="text-sm line-clamp-2 mb-3">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                ₹{(job.salary_min / 100000).toFixed(1)} - {(job.salary_max / 100000).toFixed(1)} LPA
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {job.contract_type === "permanent" ? "Permanent" : "Contract"}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {job.contract_time === "full_time" ? "Full Time" : "Part Time"}
              </Badge>
              <Badge variant="outline" className="text-xs flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                New
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/jobs/${job.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Job
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
