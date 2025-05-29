import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { AboutContent } from "@/components/about-content"
import { AIChatbot } from "@/components/ai-chatbot"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row">
      {/* Hide sidebar on mobile for About page */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <NavigationSidebar />
      <main className="flex-1 ml-0 md:ml-80">
        {/* Header with Home Button */}
        <div className="p-6 border-b border-gray-700">
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
        <AboutContent />
      </main>
      <AIChatbot />
    </div>
  )
}
