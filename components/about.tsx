import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dedicated frontend developer with a passion for creating exceptional digital experiences and innovative
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Originally from Nigeria and currently based in Doha, Qatar, I bring a unique perspective to every project.
              My journey in technology started with a curiosity about how digital experiences are crafted, leading me to
              specialize in frontend development and expand into various digital services.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in the power of clean code, intuitive design, and innovative solutions that not only meet client
              requirements but exceed expectations. Every project is an opportunity to learn, grow, and create something
              meaningful.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clean Code</h4>
                    <p className="text-gray-600">Writing maintainable, scalable solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Creative Design</h4>
                    <p className="text-gray-600">Blending aesthetics with functionality</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Staying ahead with latest technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
