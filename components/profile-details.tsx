import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Mail, Phone, Calendar, Edit } from "lucide-react"

export default function ProfileDetails() {
  // Mock user data
  const user = {
    name: "John Doe",
    title: "Senior Software Developer",
    location: "Bangalore, India",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    joinDate: "January 2023",
    about:
      "Experienced software developer with over 8 years of experience in full-stack development. Passionate about creating efficient, scalable, and user-friendly applications.",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "GraphQL"],
    experience: [
      {
        title: "Senior Software Developer",
        company: "Tech Innovations",
        period: "2020 - Present",
        description:
          "Leading development of web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
      },
      {
        title: "Software Developer",
        company: "Global Solutions",
        period: "2016 - 2020",
        description: "Developed and maintained various client projects using JavaScript, React, and Express.",
      },
    ],
    education: [
      {
        degree: "Master of Computer Applications",
        institution: "University of Technology",
        year: "2016",
      },
      {
        degree: "Bachelor of Computer Science",
        institution: "City College",
        year: "2013",
      },
    ],
    jobPreferences: {
      roles: ["Software Developer", "Full Stack Developer", "Frontend Developer"],
      locations: ["Bangalore", "Remote", "Hyderabad"],
      salary: "₹20-30 LPA",
      workType: "Full-time",
    },
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
              <p className="text-lg text-muted-foreground mb-3">{user.title}</p>

              <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {user.location}
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {user.phone}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Member since {user.joinDate}
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" className="flex items-center">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          <div>
            <h3 className="font-medium mb-2">About</h3>
            <p className="text-sm text-muted-foreground">{user.about}</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="experience">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="preferences">Job Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="space-y-4">
          {user.experience.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-medium">{exp.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-sm">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full">
            <Edit className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          {user.education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-medium">{edu.degree}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{edu.institution}</span>
                  <span>{edu.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full">
            <Edit className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {user.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Skills
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Preferred Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {user.jobPreferences.roles.map((role) => (
                    <Badge key={role} variant="outline">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Preferred Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {user.jobPreferences.locations.map((location) => (
                    <Badge key={location} variant="outline">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Expected Salary</h3>
                <p className="text-sm text-muted-foreground">{user.jobPreferences.salary}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Work Type</h3>
                <p className="text-sm text-muted-foreground">{user.jobPreferences.workType}</p>
              </div>

              <Button variant="outline" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
