"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm Adeshile's AI assistant. How can i help you today",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const toggleChat = () => setIsOpen(!isOpen)

  // Knowledge base for the chatbot
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Services related
    if (message.includes("service") || message.includes("what do you do") || message.includes("what can you do")) {
      return "We offer 6 main services:\n\n1. 🌐 Web Development - Modern websites using React, Next.js, TypeScript\n2. 🎨 UI/UX Design - Creative and intuitive user interfaces\n3. 📱 App Development - Cross-platform mobile apps for iOS and Android\n4. 🎯 Graphics Design - Professional branding and marketing materials\n5. 📋 Project Planning - Strategic project management\n6. 🤖 AI Chatbot Integration - Intelligent chatbot solutions\n\nWould you like to know more about any specific service?"
    }

    // Contact information
    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("email") ||
      message.includes("phone")
    ) {
      return "You can contact us through:\n\n📧 Email: ibraheemadeshile.q@gmail.com\n\n📞 Phone (Call): +974 3369 3911\n\n💬 Phone (Text): +234 812 742 3610\n\n📍 Location: Doha, Qatar\n\nFeel free to reach out for any project inquiries or collaborations!"
    }

    // Experience and skills
    if (message.includes("experience") || message.includes("skill") || message.includes("technology")) {
      return "We have 2+ years of experience with impressive skills:\n\n💻 Technical Skills:\n• HTML (90%)\n• CSS (95%)\n• JavaScript (80%)\n• Coreldraw (85%)\n• Wordpress (85%)\n• Primavera P6 (70%)\n\n🛠️ Tools & Technologies:\n• Bootstrap, Materialize\n• React\n• Next JS\n• GIT knowledge\n• PowerBI\n• SQL\n• Figma\n• Balsamiq\n• Adobe Photoshop\n\n📊 Our Track Record:\n• 10 Completed Projects\n• 7 Happy Customers\n• 2 Honors and Awards"
    }

    // Languages
    if (message.includes("language") || message.includes("speak")) {
      return "We speak multiple languages:\n\n🗣️ Languages:\n• Yoruba (100%) - Native\n• English (90%) - Fluent\n• Arabic (25%) - Basic\n\nThis multilingual ability helps us work with diverse international clients!"
    }

    // Location and background
    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("from") ||
      message.includes("background")
    ) {
      return "🌍 About Our Background:\n\n• Originally from Nigeria\n• Currently based in Doha, Qatar\n• We bring a unique international perspective\n• Available for remote work and local collaborations in the Middle East region\n\nOur diverse background helps us create solutions that resonate with global audiences!"
    }

    // Pricing or cost
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("rate") ||
      message.includes("budget")
    ) {
      return "For pricing information and project quotes, I'd recommend contacting us directly:\n\n📧 ibraheemadeshile.q@gmail.com\n📞 +974 3369 3911\n\nWe'll be happy to discuss your specific project requirements and provide a customized quote based on your needs and timeline!"
    }

    // Portfolio or projects
    if (
      message.includes("portfolio") ||
      message.includes("project") ||
      message.includes("work") ||
      message.includes("example")
    ) {
      return "We have completed 10+ successful projects across various industries:\n\n🎯 Project Types:\n• Responsive websites\n• Mobile applications\n• E-commerce platforms\n• Corporate branding\n• UI/UX designs\n\nFor specific portfolio examples and case studies, please contact us at ibraheemadeshile.q@gmail.com. We'd love to share relevant work samples!"
    }

    // Web development specific
    if (
      message.includes("react") ||
      message.includes("next") ||
      message.includes("javascript") ||
      message.includes("web development")
    ) {
      return "🚀 Our Web Development Expertise:\n\n• Bootstrap, Materialize - Responsive CSS frameworks\n• React - Building dynamic user interfaces\n• Next.js - Full-stack React applications\n• JavaScript (80% proficiency) - Modern ES6+ development\n• HTML/CSS (90%+ proficiency) - Semantic, responsive layouts\n• GIT knowledge - Version control and collaboration\n\nWe specialize in creating modern, fast, and user-friendly web applications. Need a web project built? Contact us!"
    }

    // Tools and design specific
    if (
      message.includes("design") ||
      message.includes("figma") ||
      message.includes("photoshop") ||
      message.includes("balsamiq") ||
      message.includes("powerbi") ||
      message.includes("bootstrap") ||
      message.includes("materialize")
    ) {
      return "🎨 Our Design & Development Tools:\n\n• Bootstrap, Materialize - Responsive CSS frameworks\n• Figma - UI/UX design and prototyping\n• Balsamiq - Wireframing and mockups\n• Adobe Photoshop - Graphics and image editing\n• PowerBI - Data visualization and analytics\n• SQL - Database management\n• Coreldraw (85% proficiency) - Vector graphics\n\nWe combine modern frameworks with creative design tools to create compelling user experiences!"
    }

    // General greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! 👋 Great to meet you! I'm here to help you learn about our services and expertise. Whether you're looking for web development, design services, or just want to know more about our background, feel free to ask anything!"
    }

    // Thank you
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're very welcome! 😊 If you have any more questions about our services or would like to start a project, don't hesitate to reach out to us directly. We're always excited to work on new and interesting projects!"
    }

    // Hiring or collaboration
    if (message.includes("hire") || message.includes("work together") || message.includes("collaborate")) {
      return "That's fantastic! 🎉 We would love to work with you. Here's how to get started:\n\n1. 📧 Email us at: ibraheemadeshile.q@gmail.com\n2. 📞 Call: +974 3369 3911\n3. 💬 Describe your project needs\n4. 📅 Schedule a consultation\n\nWe're experienced with clients from individuals to large enterprises and can adapt to your specific requirements!"
    }

    // Default response for unmatched queries
    const defaultResponses = [
      "That's an interesting question! While I have extensive knowledge about our services and web development, for specific details about that topic, I'd recommend contacting us directly at ibraheemadeshile.q@gmail.com. We'll be happy to help!",
      "I'd love to help with that! For detailed information beyond what's in our portfolio, please reach out to us at +974 3369 3911 or ibraheemadeshile.q@gmail.com. We're very responsive and knowledgeable!",
      "Great question! While I can share information about our services, experience, and contact details, for specific technical or project-related queries, I'd suggest contacting us directly. We're always happy to discuss your needs!",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: getAIResponse(input.trim()),
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsLoading(false)
      },
      1000 + Math.random() * 1500,
    ) // Random delay between 1-2.5 seconds
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition-all duration-200 hover:scale-105"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white shadow-xl border-orange-200 animate-in slide-in-from-bottom-2 duration-200">
          <CardHeader className="bg-orange-500 text-white p-4 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5" />
              AI Assistant
              <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-2 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user" ? "bg-orange-500" : "bg-gray-200"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-gray-600" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg shadow-sm ${
                        message.role === "user"
                          ? "bg-orange-500 text-white rounded-br-sm"
                          : "bg-gray-100 text-gray-800 rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg rounded-bl-sm shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t bg-gray-50 p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me about our services..."
                  className="flex-1 border-gray-300 focus:border-orange-500 bg-white"
                  disabled={isLoading}
                  maxLength={500}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">Ask about services, experience, or contact info!</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
