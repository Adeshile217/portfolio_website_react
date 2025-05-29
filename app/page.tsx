"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { AIChatbot } from "@/components/ai-chatbot"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => setIsSidebarOpen(true)

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row">
      <Sidebar />
      <NavigationSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="flex-1 md:ml-80">
        <Hero />
        <Stats />
        <Services onBookNow={openSidebar} />
      </main>
      <AIChatbot />
    </div>
  )
}
