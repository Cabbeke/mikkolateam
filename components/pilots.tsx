import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ChevronRight } from "lucide-react"

export default function Pilots() {
  const pilots = [
    {
      id: 1,
      image: "/rijdersvoorstelling1.jpg",
    },
    {
      id: 2,
      image: "/rijdersvoorstelling8.jpg",
    },
    {
      id: 3,
      image: "/rijdersvoorstelling15.jpg",
    },
    {
      id: 4,
      image: "/rijdersvoorstelling20.jpg",
    },
  ]

  return (
    <section id="piloten" className="py-16 pt-24 -mt-16">
      <div className="container">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Onze Piloten</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Maak kennis met de getalenteerde rijders die MC MIKKOLA vertegenwoordigen in nationale en internationale
            competities.
          </p>
          <div className="mt-4">
            <Link
              href="https://speedhive.mylaps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-mcpink-500 hover:text-mcpink-400 transition-colors focus-visible:focus"
            >
              Bekijk alle resultaten op Speedhive
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilots.map((pilot, index) => (
            <div
              key={pilot.id}
              className="relative h-80 animate-fadeIn"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Image
                src={pilot.image || "/placeholder.svg"}
                alt="Piloot afbeelding"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-mcpink-700/20 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcpink-500 focus-visible:ring-offset-2"
          >
            <Link href="/piloten" className="flex items-center text-lg font-bold">
              Bekijk Alle Piloten
              <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
