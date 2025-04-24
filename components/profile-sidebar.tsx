import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, FileText, Briefcase, Bell, Settings, LogOut } from "lucide-react"

export default function ProfileSidebar() {
  const menuItems = [
    { icon: <User className="h-4 w-4 mr-2" />, label: "My Profile", href: "/profile" },
    { icon: <FileText className="h-4 w-4 mr-2" />, label: "My Resume", href: "/profile/resume" },
    { icon: <Briefcase className="h-4 w-4 mr-2" />, label: "Saved Jobs", href: "/profile/saved-jobs" },
    { icon: <Bell className="h-4 w-4 mr-2" />, label: "Job Alerts", href: "/profile/job-alerts" },
    { icon: <Settings className="h-4 w-4 mr-2" />, label: "Settings", href: "/profile/settings" },
  ]

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col items-center mb-6 pt-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <User className="h-10 w-10 text-primary" />
          </div>
          <h3 className="font-medium">John Doe</h3>
          <p className="text-sm text-muted-foreground">Software Developer</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}

          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </nav>
      </CardContent>
    </Card>
  )
}
