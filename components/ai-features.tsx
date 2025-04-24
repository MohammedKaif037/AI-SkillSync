import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FileText, MessageSquare, Briefcase, TrendingUp, Search } from "lucide-react"

export default function AIFeatures() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Smart Job Matching",
      description: "Our AI analyzes your resume to match you with relevant jobs based on your skills and experience.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Resume Enhancement",
      description: "Get AI-powered suggestions to improve your resume for specific job applications.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Interview Preparation",
      description: "Practice with AI-generated interview questions tailored to the job you're applying for.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Career Path Suggestions",
      description: "Discover potential career paths based on your background and interests.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Conversational Search",
      description: "Search for jobs using natural language instead of keywords and filters.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Skill Gap Analysis",
      description: "Identify skills you need to develop for your desired positions.",
    },
  ]

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform uses advanced AI to help you find the perfect job and advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
