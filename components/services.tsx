"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServicesProps {
  onBookNow?: () => void
}

export function Services({ onBookNow }: ServicesProps) {
  const services = [
    {
      title: "Web Development",
      description:
        "I build fast, secure, and fully responsive websites tailored to meet your business goals. From simple landing pages to dynamic, database-driven platforms, I create web solutions that look great and perform even better.",
      color: "border-orange-500",
    },
    {
      title: "App Development",
      description:
        "I develop user-friendly mobile and web applications that bring your ideas to life. Whether it's iOS, Android, or cross-platform, I deliver clean, scalable apps designed to provide seamless user experiences.",
      color: "border-green-500",
    },
    {
      title: "Graphics Design",
      description:
        "Visual identity is everything. I design eye-catching logos, banners, flyers, and digital creatives that tell your brand's story and leave a lasting impression on your audience.",
      color: "border-purple-500",
    },
    {
      title: "Project Planning",
      description:
        "From concept to completion, I offer detailed project planning services that ensure your ideas are executed smoothly. I help businesses stay on track with clear timelines, resource allocation, and strategy.",
      color: "border-pink-500",
    },
    {
      title: "Advertising",
      description:
        "Boost your brand's visibility with tailored advertising strategies. I create and manage digital campaigns that drive real engagement and measurable results across platforms like Google, Facebook, and Instagram.",
      color: "border-blue-500",
    },
    {
      title: "AI Chatbot Integration",
      description:
        "I integrate smart conversational bots that can handle inquiries, book appointments, provide product recommendations and more into social media DMs, websites and apps. These bots are tailored to your brand and business goals, delivering instant responses and improving user experience",
      color: "border-cyan-500",
    },
  ]

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-gray-800 border-2 ${service.color} hover:bg-gray-750 transition-colors group flex flex-col h-full`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{service.description}</p>
                <Button
                  onClick={onBookNow}
                  variant="ghost"
                  className="text-orange-500 hover:text-orange-400 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform mt-auto"
                >
                  BOOK NOW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
