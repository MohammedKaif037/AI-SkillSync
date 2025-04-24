import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import JobSearch from "@/components/job-search"
import FeaturedJobs from "@/components/featured-jobs"
import AIFeatures from "@/components/ai-features"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <JobSearch />
        <FeaturedJobs />
        <AIFeatures />
      </main>
      <Footer />
    </div>
  )
}
