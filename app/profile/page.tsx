import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProfileSidebar from "@/components/profile-sidebar"
import ProfileDetails from "@/components/profile-details"
import ProfileSkeleton from "@/components/profile-skeleton"
import ResumeAnalysis from "@/components/resume-analysis"
import CareerPathSuggestions from "@/components/career-path-suggestions"

//create profile page for initial rendering with mock data
export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ProfileSidebar />
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<ProfileSkeleton />}>
              <ProfileDetails />
            </Suspense>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResumeAnalysis />
              <CareerPathSuggestions />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
