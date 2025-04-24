import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, MapPin } from "lucide-react"

interface RelatedJobsProps {
  jobId: string
}

export default function RelatedJobs({ jobId }: RelatedJobsProps) {
  // In a real app, this would fetch related jobs based on the current job
  const relatedJobs = [
    {
      id: "101",
      title: "Full Stack Developer",
      company: { display_name: "Web Solutions" },
      location: { display_name: "Bangalore, India" },
    },
    {
      id: "102",
      title: "Frontend Engineer",
      company: { display_name: "UI Experts" },
      location: { display_name: "Hyderabad, India" },
    },
    {
      id: "103",
      title: "Backend Developer",
      company: { display_name: "Server Tech" },
      location: { display_name: "Pune, India" },
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Similar Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {relatedJobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="block">
              <div className="p-3 rounded-md hover:bg-muted transition-colors">
                <h3 className="font-medium mb-1">{job.title}</h3>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center mb-1">
                    <Building className="h-3 w-3 mr-1" />
                    {job.company.display_name}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location.display_name}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
