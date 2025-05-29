"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, Linkedin, Github, Instagram } from "lucide-react"

export function Sidebar() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "Coreldraw", level: 85 },
    { name: "Wordpress", level: 85 },
    { name: "Primavera P6", level: 70 },
  ]

  const languages = [
    { name: "English", level: 90 },
    { name: "Yoruba", level: 100 },
    { name: "Arabic", level: 25 },
  ]

  const tools = [
    "Bootstrap, Materialize",
    "React",
    "Next JS",
    "GIT knowledge",
    "PowerBI",
    "SQL",
    "Figma",
    "Balsamiq",
    "Adobe Photoshop",
  ]

  // Function to create circular progress
  const CircularProgress = ({ percentage, size = 48 }: { percentage: number; size?: number }) => {
    const radius = (size - 4) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgb(75 85 99)" // gray-600
            strokeWidth="2"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgb(249 115 22)" // orange-500
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-orange-500 text-xs font-bold">{percentage}%</span>
        </div>
      </div>
    )
  }

  // WhatsApp SVG Icon Component
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
    </svg>
  )

  return (
    <div className="w-full md:w-80 md:fixed md:left-0 md:top-0 md:h-full bg-gray-800 flex flex-col">
      {/* Fixed Profile Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500">
            <img src="/images/profile.jpg" alt="ADESHILE IBRAHEEM" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-white mb-1">ADESHILE IBRAHEEM</h2>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
        </div>
      </div>

      {/* Scrollable Middle Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Personal Info */}
        <div className="mb-8 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Residence:</span>
            <span className="text-white text-sm">Qatar</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">City:</span>
            <span className="text-white text-sm">Doha</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Nationality:</span>
            <span className="text-white text-sm">Nigerian</span>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            {languages.map((lang, index) => (
              <div key={index} className="text-center">
                <CircularProgress percentage={lang.level} />
                <span className="text-gray-400 text-xs mt-1 block">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400 text-sm">{skill.name}</span>
                  <span className="text-orange-500 text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-1 bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Tools & Technologies</h3>
          <div className="space-y-2">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-gray-400 text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV */}
        <a href="/Adeshile_Ibraheem_CV.docx" download>
        <Button className="w-full mb-6 bg-orange-500 hover:bg-orange-600 text-white">
          <Download className="mr-2 h-4 w-4" />
          DOWNLOAD CV
        </Button>
        </a>
      </div>

      {/* Fixed Social Links */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex justify-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#0077B5] hover:text-[#005885] hover:bg-[#0077B5]/10"
            onClick={() => window.open("https://www.linkedin.com/in/adeshile-ibraheem-6133a5326/", "_blank")}
          >
            <Linkedin className="h-4 w-4" />
          </Button>

          {/* <Button
           variant="ghost" 
           size="icon" 
           className="text-[#333333] hover:text-[#000000] hover:bg-[#333333]/10"
           onClick={() => window.open("https://www.github.com/Adeshile217"), "_blank"}>
            <Github className="h-4 w-4" />
          </Button> */}

          <Button
            variant="ghost"
            size="icon"
            className="text-[#333333] hover:text-[#000000] hover:bg-[#333333]/10"
            onClick={() => window.open("https://www.github.com/Adeshile217", "_blank")} // Update with actual Instagram URL when available
          >
            <Github className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#E4405F] hover:text-[#C13584] hover:bg-[#E4405F]/10"
            onClick={() => window.open("https://www.instagram.com/ade_adeshile__?igsh=MXVjaWkzcHJhbmJkeA%3D%3D&utm_source=qr", "_blank")} // Update with actual Instagram URL when available
          >
            <Instagram className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#25D366] hover:text-[#128C7E] hover:bg-[#25D366]/10"
            onClick={() => window.open("https://wa.me/97433693911", "_blank")}
          >
            <WhatsAppIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
