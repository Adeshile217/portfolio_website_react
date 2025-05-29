"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Menu, Mail, Phone, MessageSquare, Linkedin, Github, Instagram } from "lucide-react"

interface NavigationSidebarProps {
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
}

export function NavigationSidebar({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: NavigationSidebarProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = externalSetIsOpen || setInternalIsOpen

  const toggleSidebar = () => setIsOpen(!isOpen)

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setFormData({ name: "", email: "", message: "" })
    // You could show a success message here
  }

  // WhatsApp SVG Icon Component
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
    </svg>
  )

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={toggleSidebar}
        className="fixed top-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white"
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />}

      {/* Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Contact Me</h2>
            <Button onClick={toggleSidebar} variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Message Form */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  SEND
                </Button>
              </form>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Contact</h3>

              {/* Email Card */}
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a
                        href="mailto:ibraheemadeshile.q@gmail.com"
                        className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                      >
                        ibraheemadeshile.q@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <div className="space-y-1">
                        <a
                          href="tel:+97433693911"
                          className="flex items-center text-gray-300 text-sm hover:text-orange-500 transition-colors"
                        >
                          <Phone className="h-3 w-3 mr-1 inline" />
                          +974 3369 3911
                          <span className="ml-1 text-xs text-gray-400">(Call)</span>
                        </a>
                        <a
                          href="sms:+2348127423610"
                          className="flex items-center text-gray-300 text-sm hover:text-orange-500 transition-colors"
                        >
                          <MessageSquare className="h-3 w-3 mr-1 inline" />
                          +234 812 742 3610
                          <span className="ml-1 text-xs text-gray-400">(Text)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Socials:</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#0077B5] text-[#0077B5] hover:border-[#005885] hover:text-[#005885] hover:bg-[#0077B5]/10 bg-transparent"
                  onClick={() => window.open("https://www.linkedin.com/in/adeshile-ibraheem-6133a5326/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#333333] text-[#333333] hover:border-[#000000] hover:text-[#000000] hover:bg-[#333333]/10 bg-transparent"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#E4405F] text-[#E4405F] hover:border-[#C13584] hover:text-[#C13584] hover:bg-[#E4405F]/10 bg-transparent"
                  onClick={() => window.open("https://www.instagram.com/", "_blank")} // Update with actual Instagram URL when available
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#25D366] text-[#25D366] hover:border-[#128C7E] hover:text-[#128C7E] hover:bg-[#25D366]/10 bg-transparent"
                  onClick={() => window.open("https://wa.me/97433693911", "_blank")}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
