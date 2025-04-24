import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function JobDetailsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-8">
        <div className="h-10 bg-muted rounded w-3/4 mb-2"></div>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="h-5 bg-muted rounded w-40"></div>
          <div className="h-5 bg-muted rounded w-32"></div>
          <div className="h-5 bg-muted rounded w-36"></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-6 bg-muted rounded w-28"></div>
          <div className="h-6 bg-muted rounded w-24"></div>
          <div className="h-6 bg-muted rounded w-20"></div>
          <div className="h-6 bg-muted rounded w-16"></div>
        </div>

        <div className="flex gap-4">
          <div className="h-10 bg-muted rounded w-32"></div>
          <div className="h-10 bg-muted rounded w-32"></div>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <div className="h-7 bg-muted rounded w-40 mb-4"></div>
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
        </div>

        <Separator className="my-6" />

        <div className="h-6 bg-muted rounded w-36 mb-3"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-6 bg-muted rounded w-20"></div>
          <div className="h-6 bg-muted rounded w-24"></div>
          <div className="h-6 bg-muted rounded w-16"></div>
          <div className="h-6 bg-muted rounded w-28"></div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="h-7 bg-muted rounded w-48 mb-4"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-full mt-2"></div>
        <div className="h-4 bg-muted rounded w-2/3 mt-2"></div>
      </Card>
    </div>
  )
}
