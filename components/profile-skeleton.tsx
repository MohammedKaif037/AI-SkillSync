import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="w-3/4">
              <div className="h-8 bg-muted rounded w-1/2 mb-1"></div>
              <div className="h-6 bg-muted rounded w-1/3 mb-3"></div>

              <div className="space-y-2 mb-4">
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-4 bg-muted rounded w-1/3"></div>
              </div>
            </div>

            <div className="h-9 bg-muted rounded w-24"></div>
          </div>

          <div>
            <div className="h-5 bg-muted rounded w-20 mb-2"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full mt-1"></div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="experience">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="experience" disabled>
            Experience
          </TabsTrigger>
          <TabsTrigger value="education" disabled>
            Education
          </TabsTrigger>
          <TabsTrigger value="skills" disabled>
            Skills
          </TabsTrigger>
          <TabsTrigger value="preferences" disabled>
            Job Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="space-y-4">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="h-5 bg-muted rounded w-1/3 mb-2"></div>
                <div className="flex justify-between mb-2">
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                  <div className="h-4 bg-muted rounded w-1/5"></div>
                </div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-3/4 mt-1"></div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
