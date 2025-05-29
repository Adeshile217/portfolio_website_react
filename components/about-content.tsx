import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Award, Users, Code, Palette, Zap } from "lucide-react"

export function AboutContent() {
  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500">
            <img src="/images/profile.jpg" alt="ADESHILE IBRAHEEM" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">ADESHILE IBRAHEEM</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nigerian-born website and application developer with expertise in building and managing frontend, graphics
            and planning the development of digital products.
          </p>
        </div>

        {/* Personal Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gray-800 border-orange-500">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">2+</h3>
              <p className="text-gray-400">Years Experience</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-blue-500">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">10</h3>
              <p className="text-gray-400">Completed Projects</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-green-500">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">7</h3>
              <p className="text-gray-400">Happy Customers</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-purple-500">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">2</h3>
              <p className="text-gray-400">Honors & Awards</p>
            </CardContent>
          </Card>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Professional Background</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I am ADESHILE IBRAHEEM, a Nigerian-born website and application developer with expertise in building and
                managing frontend, graphics and planning the development of digital products.
              </p>
              <p>
                I have over 2 years of experience in web design, software engineering, and creative design. My focus is
                on creating seamless, efficient, and user-friendly websites and applications that contribute to the
                overall success of each project.
              </p>
              <p>
                Currently based in Doha, Qatar, I bring a unique perspective to every project, combining my Nigerian
                heritage with international experience to create solutions that resonate with diverse audiences.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">My Passion & Vision</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I am passionate about developing exceptional software that enhances the lives of the users and visitors.
                I specialize in crafting solutions for a diverse range of clients, from individuals and small businesses
                to large enterprise corporations.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring that every project not
                only meets functional requirements but also delivers an outstanding user experience.
              </p>
              <p>
                Imagine what you could achieve with a software expert right at your fingertips. Whether you're looking
                to establish your digital presence, enhance your existing platforms, or create innovative solutions, I'm
                here to turn your vision into reality.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-orange-500">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
                <p className="text-gray-400 text-sm">
                  Building responsive, modern web applications using the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-blue-500">
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Graphics & Design</h3>
                <p className="text-gray-400 text-sm">
                  Creating visually appealing designs that enhance user experience and brand identity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-green-500">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Project Planning</h3>
                <p className="text-gray-400 text-sm">
                  Strategic planning and management of digital product development from concept to deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Client Range */}
        <Card className="bg-gray-800 border-gray-700 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Client Diversity</h2>
            <div className="text-center">
              <p className="text-gray-400 mb-4">I specialize in crafting solutions for a diverse range of clients:</p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Individuals</h3>
                  <p className="text-gray-400 text-sm">Personal projects and portfolios</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Small Businesses</h3>
                  <p className="text-gray-400 text-sm">Startups and growing companies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-400 text-sm">Large corporations and organizations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Info */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Current Location</h2>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                <span className="text-white font-semibold">Based in:</span> Doha, Qatar
              </p>
              <p className="text-gray-400 mb-4">
                <span className="text-white font-semibold">Originally from:</span> Nigeria
              </p>
              <p className="text-gray-400">
                Available for remote work and local collaborations in the Middle East region.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
