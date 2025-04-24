import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Building, MapPin, Calendar, Briefcase, Clock, DollarSign } from "lucide-react"

interface JobDetailsProps {
  id: string
}

async function getJobDetails(id: string) {
  // In a real app, this would fetch from your API
  // For demo purposes, we'll return mock data
  const job = {
    id,
    title: "Senior Software Engineer",
    company: {
      display_name: "Tech Innovations",
      description:
        "Tech Innovations is a leading software development company specializing in cutting-edge web and mobile applications. We work with clients across various industries to deliver innovative solutions that drive business growth.",
    },
    location: { display_name: "Bangalore, India" },
    description:
      "We are looking for a Senior Software Engineer to join our growing team. You will be responsible for developing high-quality applications, collaborating with cross-functional teams, and mentoring junior developers.\n\nResponsibilities:\n- Design, develop, and maintain efficient, reusable, and reliable code\n- Collaborate with product managers, designers, and other developers to create feature-rich applications\n- Implement security and data protection measures\n- Write unit and integration tests to ensure code quality\n- Mentor junior developers and conduct code reviews\n\nRequirements:\n- 5+ years of experience in software development\n- Strong proficiency in JavaScript, TypeScript, React, and Node.js\n- Experience with RESTful APIs and microservices architecture\n- Knowledge of database systems and ORM technologies\n- Excellent problem-solving and communication skills",
    created: new Date().toISOString(),
    category: { label: "IT Jobs" },
    salary_min: 1500000,
    salary_max: 2500000,
    contract_time: "full_time",
    contract_type: "permanent",
    redirect_url: "https://example.com/apply",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "REST APIs", "MongoDB"],
  }

  return job
}

export default async function JobDetails({ id }: JobDetailsProps) {
  const job = await getJobDetails(id)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-1" />
            {job.company.display_name}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location.display_name}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(job.created).toLocaleDateString()}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="text-sm">
            <DollarSign className="h-3 w-3 mr-1" />₹{(job.salary_min / 100000).toFixed(1)} -{" "}
            {(job.salary_max / 100000).toFixed(1)} LPA
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Briefcase className="h-3 w-3 mr-1" />
            {job.contract_type === "permanent" ? "Permanent" : "Contract"}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Clock className="h-3 w-3 mr-1" />
            {job.contract_time === "full_time" ? "Full Time" : "Part Time"}
          </Badge>
          <Badge className="text-sm">{job.category.label}</Badge>
        </div>

        <div className="flex gap-4">
          <Button size="lg">Apply Now</Button>
          <Button variant="outline" size="lg">
            Save Job
          </Button>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Job Description</h2>
        <div className="whitespace-pre-line text-muted-foreground">{job.description}</div>

        <Separator className="my-6" />

        <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">About {job.company.display_name}</h2>
        <p className="text-muted-foreground">{job.company.description}</p>
      </Card>
    </div>
  )
}
