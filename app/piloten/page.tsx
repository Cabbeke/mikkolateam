import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PilotenPage() {
  const allPilots = [
    {
      id: 1,
      category: "MX1",
      number: "#",
      image: "/rijdersvoorstelling1.jpg",
    },
    {
      id: 2,
      name: "Mathias Verstraete",
      category: "MX2",
      number: "#47",
      image: "/rijdersvoorstelling2.jpg",
    },
    {
      id: 3,
      name: "Kevin Vandamme",
      category: "MX1",
      number: "#13",
      image: "/rijdersvoorstelling3.jpg",
    },
    {
      id: 4,
      name: "Seppe Maertens",
      category: "MX2",
      number: "#84",
      image: "/rijdersvoorstelling4.jpg",
    },
    {
      id: 5,
      name: "Jens Peeters",
      category: "MX2",
      number: "#29",
      image: "/rijdersvoorstelling5.jpg",
    },
    {
      id: 6,
      name: "Bart Janssens",
      category: "MX1",
      number: "#55",
      image: "/rijdersvoorstelling6.jpg",
    },
    {
      id: 7,
      name: "Niels Vermeulen",
      category: "MX3",
      number: "#71",
      image: "/rijdersvoorstelling7.jpg",
    },
    {
      id: 8,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling8.jpg",
    },
    {
      id: 9,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling9.jpg",
    },
    {
      id: 10,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling10.jpg",
    },
    {
      id: 11,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling11.jpg",
    },
    {
      id: 12,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling12.jpg",
    },
    {
      id: 13,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling13.jpg",
    },
    {
      id: 14,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling14.jpg",
    },
    {
      id: 15,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling15.jpg",
    },
    {
      id: 16,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling16.jpg",
    },
    {
      id: 17,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling17.jpg",
    },
    {
      id: 18,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling18.jpg",
    },
    {
      id: 19,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling19.jpg",
    },
    {
      id: 20,
      name: "Tim Coppens",
      category: "MX3",
      number: "#38",
      image: "/rijdersvoorstelling20.jpg",
    },
  ]

  return (
    <main className="py-16 bg-black">
      <div className="container">
        <div className="mb-8">
          <Button
            asChild
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-mcpink-700/20 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcpink-500 focus-visible:ring-offset-2"
          >
            <Link href="/#piloten" className="flex items-center text-lg font-bold">
              <ChevronLeft className="mr-2 h-5 w-5 animate-pulse" /> Terug naar Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12 bg-black/80 p-6 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Onze Piloten</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Maak kennis met alle getalenteerde rijders die MC MIKKOLA vertegenwoordigen in nationale en internationale
            competities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allPilots.map((pilot, index) => (
            <Card
              key={pilot.id}
              className="bg-black/80 overflow-hidden glow-card animate-fadeIn shadow-xl border-none"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-80"> {/* Vergroot de hoogte van de kaart */}
                <Image
                  src={pilot.image || "/placeholder.svg"}
                  alt="Piloot afbeelding"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
