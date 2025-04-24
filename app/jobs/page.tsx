import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import JobSearchFilters from "@/components/job-search-filters"
import JobListings from "@/components/job-listings"
import JobListingsSkeleton from "@/components/job-listings-skeleton"
import Pagination from "@/components/pagination"

//create job page for initial rendering with mock data

export default function JobsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const query = typeof searchParams.query === "string" ? searchParams.query : ""
  const location = typeof searchParams.location === "string" ? searchParams.location : ""

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <JobSearchFilters />
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<JobListingsSkeleton />}>
              <JobListings page={page} query={query} location={location} />
            </Suspense>

            <div className="mt-8">
              <Pagination totalPages={10} currentPage={page} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
