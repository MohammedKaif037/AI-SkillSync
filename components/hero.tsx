import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Dream Job with <span className="text-primary">AI-Powered</span> Matching
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          JobConnect uses advanced AI to match your skills and experience with the perfect job opportunities. Upload
          your resume and let our intelligent system do the work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/jobs">
            <Button size="lg" className="gap-2">
              Browse Jobs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/profile">
            <Button size="lg" variant="outline">
              Upload Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
