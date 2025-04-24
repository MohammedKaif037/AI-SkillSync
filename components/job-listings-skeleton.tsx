import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function JobListingsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <div className="h-5 bg-muted rounded w-40"></div>
      </div>

      {[...Array(5)].map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="h-6 bg-muted rounded w-64 mb-2"></div>
                <div className="h-4 bg-muted rounded w-40"></div>
              </div>
              <div className="h-5 bg-muted rounded w-20"></div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-4 bg-muted rounded w-48 mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-5 bg-muted rounded w-24"></div>
              <div className="h-5 bg-muted rounded w-20"></div>
              <div className="h-5 bg-muted rounded w-16"></div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="h-9 bg-muted rounded w-full"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
