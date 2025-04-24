import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import JobDetails from "@/components/job-details"
import JobDetailsSkeleton from "@/components/job-details-skeleton"
import RelatedJobs from "@/components/related-jobs"
import AIJobInsights from "@/components/ai-job-insights"

//create job id page for initial rendering with mock data

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Suspense fallback={<JobDetailsSkeleton />}>
          <JobDetails id={params.id} />
        </Suspense>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AIJobInsights jobId={params.id} />
          </div>
          <div className="lg:col-span-1">
            <RelatedJobs jobId={params.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
