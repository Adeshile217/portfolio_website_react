import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/mountain-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 w-full">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Discover my Amazing
          <br />
          <span className="text-orange-500">Art Space!</span>
        </h1>

        <div className="mb-6">
          <code className="text-orange-400 bg-gray-900/80 px-3 py-2 rounded text-sm md:text-base lg:text-lg">
            {"<code>"} I build web and mobile applications. {"</code>"}
          </code>
        </div>

        <div className="flex justify-start">
          <Link href="/about">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-semibold">
              ABOUT ME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
