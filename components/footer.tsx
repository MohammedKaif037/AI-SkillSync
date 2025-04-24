import Link from "next/link"
import { Briefcase, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-primary" />
              <span className="text-xl font-bold">JobConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI-powered job search platform that connects you with the perfect opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/jobs" className="hover:text-primary">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-primary">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/resume-builder" className="hover:text-primary">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/career-insights" className="hover:text-primary">
                  Career Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/post-job" className="hover:text-primary">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/employer-dashboard" className="hover:text-primary">
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Github className="h-4 w-4 mr-2" />
                <Link href="https://github.com/MohammedKaif037" target="_blank" className="hover:text-primary">
                  Github
                </Link>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2" />
                <Link
                  href="https://www.linkedin.com/in/mohammed-kaif-a7793923a"
                  target="_blank"
                  className="hover:text-primary"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <Link href="mailto:kaifmohammmed037@example.com" className="hover:text-primary">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} JobConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
