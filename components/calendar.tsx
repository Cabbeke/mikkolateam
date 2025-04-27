import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CalendarSection() {
  const events = [
    {
      id: 1,
      title: "Gierle",
      date: "27 April 2025",
      location: "Gierle, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 2,
      title: "Genk",
      date: "4 Mei 2025",
      location: "Genk, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 3,
      title: "Maricourt",
      date: "11 Mei 2025",
      location: "Maricourt, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 4,
      title: "Blargies",
      date: "18 Mei 2025",
      location: "Blargies, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 5,
      title: "Lille",
      date: "25 Mei 2025",
      location: "Lille, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 6,
      title: "Axel",
      date: "29 Mei 2025",
      location: "Axel, Nederland",
      federation: "VMCF",
      special: "",
    },
  ]

  // Toon alleen de eerste 6 evenementen, de rest kan op een aparte pagina
  const displayedEvents = events

  return (
    <section id="kalender" className="py-16 pt-24 -mt-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Kalender 2025</h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            Bekijk de geplande wedstrijden en evenementen voor het 2025 seizoen waar MC MIKKOLA aan zal deelnemen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((event) => (
            <Card key={event.id} className="bg-black/80 border-mcpink-700 glow-card shadow-xl">
              <CardHeader className="pb-2 bg-mcpink-900/30 rounded-t-lg">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">Motorcross {event.title}</h3>
                  <Badge variant="outline" className="bg-mcpink-700 text-white border-mcpink-500 shadow-sm">
                    {event.federation}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-mcpink-500" />
                    <span className="text-white font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-mcpink-500" />
                    <span className="text-white">{event.location}</span>
                  </div>
                  {event.special && (
                    <div className="flex items-center gap-3 bg-mcpink-900/20 p-2 rounded-md">
                      <Award className="h-5 w-5 text-mcpink-400" />
                      <span className="text-white font-medium">{event.special}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-mcpink-700/20 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcpink-500 focus-visible:ring-offset-2"
          >
            <Link href="/kalender" className="flex items-center text-lg font-bold">
              Bekijk Volledige Kalender
              <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
