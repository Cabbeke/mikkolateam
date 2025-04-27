import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function KalenderPage() {
  const events = [
    {
      id: 1,
      title: "Lommel",
      date: "23 Maart 2025",
      location: "Lommel, België",
      federation: "VMCF",
      special: "Openingsweekend",
    },
    {
      id: 2,
      title: "Retie",
      date: "30 Maart 2025",
      location: "Retie, België",
      federation: "VMCF",
      special: "Ouverture FFM",
    },
    {
      id: 3,
      title: "Plomion",
      date: "6 April 2025",
      location: "Plomion, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 4,
      title: "Appelterre",
      date: "13 April 2025",
      location: "Appelterre, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 5,
      title: "Herk De Stad",
      date: "20 April 2025",
      location: "Herk De Stad, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 6,
      title: "Gierle",
      date: "27 April 2025",
      location: "Gierle, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 7,
      title: "Avesnes-sur-Helpe",
      date: "1 Mei 2025",
      location: "Avesnes-sur-Helpe, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 8,
      title: "Genk",
      date: "4 Mei 2025",
      location: "Genk, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 9,
      title: "Maricourt",
      date: "11 Mei 2025",
      location: "Maricourt, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 10,
      title: "Blargies",
      date: "18 Mei 2025",
      location: "Blargies, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 11,
      title: "Lille",
      date: "25 Mei 2025",
      location: "Lille, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 12,
      title: "Axel",
      date: "29 Mei 2025",
      location: "Axel, Nederland",
      federation: "VMCF",
      special: "",
    },
    {
      id: 13,
      title: "Isbergues",
      date: "1 Juni 2025",
      location: "Isbergues, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 14,
      title: "Cassel",
      date: "9 Juni 2025",
      location: "Cassel, Frankrijk",
      federation: "FFM",
      special: "GEEN PRESTIGE 450",
    },
    {
      id: 15,
      title: "Moresnet",
      date: "9 Juni 2025",
      location: "Moresnet, België",
      federation: "VMCF",
      special: "450 CC",
    },
    {
      id: 16,
      title: "Avesnes sur Helpe",
      date: "21 Juni 2025",
      location: "Avesnes sur Helpe, Frankrijk",
      federation: "FFM",
      special: "SUPERCROSS",
    },
    {
      id: 17,
      title: "Oirschot",
      date: "22 Juni 2025",
      location: "Oirschot, Nederland",
      federation: "VMCF",
      special: "",
    },
    {
      id: 18,
      title: "Poederlee",
      date: "29 Juni 2025",
      location: "Poederlee, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 19,
      title: "Rozoy",
      date: "6 Juli 2025",
      location: "Rozoy, Frankrijk",
      federation: "FFM",
      special: "85+250+450 CC",
    },
    {
      id: 20,
      title: "Blargies",
      date: "6 Juli 2025",
      location: "Blargies, Frankrijk",
      federation: "FFM",
      special: "TROFEE",
    },
    {
      id: 21,
      title: "Geetbets",
      date: "6 Juli 2025",
      location: "Geetbets, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 22,
      title: "Reusel",
      date: "13 Juli 2025",
      location: "Reusel, Nederland",
      federation: "VMCF",
      special: "",
    },
    {
      id: 23,
      title: "Le Quesnoy",
      date: "14 Juli 2025",
      location: "Le Quesnoy, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 24,
      title: "Gouy en Artois",
      date: "20 Juli 2025",
      location: "Gouy en Artois, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 25,
      title: "Lierneux",
      date: "21 Juli 2025",
      location: "Lierneux, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 26,
      title: "Warsage",
      date: "27 Juli 2025",
      location: "Warsage, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 27,
      title: "Werchter",
      date: "3 Augustus 2025",
      location: "Werchter, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 28,
      title: "Balen",
      date: "10 Augustus 2025",
      location: "Balen, België",
      federation: "BMB",
      special: "65+85 CC",
    },
    {
      id: 29,
      title: "Balen",
      date: "11 Augustus 2025",
      location: "Balen, België",
      federation: "BMB",
      special: "",
    },
    {
      id: 30,
      title: "Koningshooikt",
      date: "17 Augustus 2025",
      location: "Koningshooikt, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 31,
      title: "Isbergues",
      date: "23 Augustus 2025",
      location: "Isbergues, Frankrijk",
      federation: "FFM",
      special: "Supercross",
    },
    {
      id: 32,
      title: "Hoeleden",
      date: "24 Augustus 2025",
      location: "Hoeleden, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 33,
      title: "St-Justs-en Chausse",
      date: "31 Augustus 2025",
      location: "St-Justs-en Chausse, Frankrijk",
      federation: "FFM",
      special: "",
    },
    {
      id: 34,
      title: "Conde sur l'Escaut",
      date: "7 September 2025",
      location: "Conde sur l'Escaut, Frankrijk",
      federation: "FFM",
      special: "ORG mcc Condé",
    },
    {
      id: 35,
      title: "Wachtebeke",
      date: "14 September 2025",
      location: "Wachtebeke, België",
      federation: "VMCF",
      special: "Clasters 85 cc",
    },
    {
      id: 36,
      title: "Halen",
      date: "21 September 2025",
      location: "Halen, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 37,
      title: "Wambeek",
      date: "28 September 2025",
      location: "Wambeek, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 38,
      title: "Baissieux",
      date: "5 Oktober 2025",
      location: "Baissieux, België",
      federation: "VMCF",
      special: "",
    },
    {
      id: 39,
      title: "Lommel",
      date: "12 Oktober 2025",
      location: "Lommel, België",
      federation: "VMCF",
      special: "",
    },
  ]

  // Groepeer evenementen per maand
  const eventsByMonth = events.reduce((acc: { [key: string]: typeof events }, event) => {
    const dateParts = event.date.split(" ")
    const month = dateParts[1]

    if (!acc[month]) {
      acc[month] = []
    }

    acc[month].push(event)
    return acc
  }, {})

  // Sorteer de maanden in chronologische volgorde
  const monthOrder = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December",
  ]

  const sortedMonths = Object.keys(eventsByMonth).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))

  return (
    <main className="py-16 bg-black">
      <div className="container">
        <div className="mb-8">
          <Button
            asChild
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-mcpink-700/20 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcpink-500 focus-visible:ring-offset-2"
          >
            <Link href="/#kalender" className="flex items-center text-lg font-bold">
              <ChevronLeft className="mr-2 h-5 w-5 animate-pulse" /> Terug naar Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12 bg-black/80 p-6 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Kalender 2025</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Volledige kalender van wedstrijden en evenementen voor het 2025 seizoen waar MC MIKKOLA aan zal deelnemen.
          </p>
        </div>

        {sortedMonths.map((month) => (
          <div key={month} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white bg-mcpink-900/50 p-3 rounded-lg shadow-lg inline-block">
              {month} 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsByMonth[month].map((event) => (
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
          </div>
        ))}
      </div>
    </main>
  )
}

