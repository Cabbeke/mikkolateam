import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, MapPin, Phone, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SponsorsPage() {
  const allSponsors = [
    {
      id: 1,
      name: "All Fire Security",
      logo: "/sponsors/all fire security.png",
      address: "Wevelgem",
      website: "https://allfiresecurity.be/",
      phone: "+32 (0)56 42 32 29",
    },
    {
      id: 2,
      name: "Bouwwerken Jurgen Delbeke",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Rollegem",
      website: "https://www.bouwwerken-delbeke.be/",
      phone: "0495 93 98 23",
    },
    {
      id: 3,
      name: "C-worx",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Wevelgem",
      website: "",
      phone: "",
    },
    {
      id: 4,
      name: "Denicol",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Ranst",
      website: "https://www.denicol.com/",
      phone: "+32 3 485 81 91",
    },
    {
      id: 5,
      name: "DM Consult",
      logo: "/placeholder.svg?height=200&width=200",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 6,
      name: "EKS-brillen",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Genk",
      website: "https://eksbrand.com",
      phone: "",
    },
    {
      id: 7,
      name: "Elektriciteit Van Den Broeke",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Kruishoutem",
      website: "",
      phone: "",
    },
    {
      id: 8,
      name: "Fidufac",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Cyriel Verschaevestraat 100, 8510 Marke",
      website: "",
      phone: "056 25 88 76",
    },
    {
      id: 9,
      name: "Gemeente Deerlijk",
      logo: "/placeholder.svg?height=200&width=200",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 10,
      name: "HDC Products",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Kluisbergen",
      website: "",
      phone: "",
    },
    {
      id: 11,
      name: "Homet BVBA",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Izegem",
      website: "https://www.homet.be",
      phone: "",
    },
    {
      id: 12,
      name: "Luc Wybon BVBA",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Arenastraat 6, 8510 Marke",
      website: "",
      phone: "0475 20 11 37",
    },
    {
      id: 13,
      name: "Monster Energy Drink",
      logo: "/placeholder.svg?height=200&width=200",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 14,
      name: "Motor 2000 KTM",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Schouwersweg 28, 4451 HT Heinkenszand",
      website: "https://www.motor2000.nl",
      phone: "+31 113 567200",
    },
    {
      id: 15,
      name: "Motorgazet",
      logo: "/placeholder.svg?height=200&width=200",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 16,
      name: "MX 477",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Zouwstraat 28, 3600 Genk",
      website: "https://www.mx477.be",
      phone: "",
    },
    {
      id: 17,
      name: "N M P Fotografie",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Limal",
      website: "",
      phone: "",
    },
    {
      id: 18,
      name: "Nubus",
      logo: "/placeholder.svg?height=200&width=200",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 19,
      name: "Red Animals",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Rue des Pères 1, 7500 Ere",
      website: "https://red-animals.com",
      phone: "+32 (0) 69 648 372",
    },
    {
      id: 20,
      name: "Rouwcentrum Ter Heide",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Gentsesteenweg 276, 1730 Asse",
      website: "https://www.rouwcentrumterheide.be",
      phone: "02/306 66 61",
    },
    {
      id: 21,
      name: "Sanrobi",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Hoofdwegnoord 38, 4574 RB Zuiddorpe",
      website: "https://www.sanrobi.nl",
      phone: "+31(0)6-53 12 27 03",
    },
    {
      id: 22,
      name: "Support4You",
      logo: "/placeholder.svg?height=200&width=200",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 23,
      name: "Technicross",
      logo: "/placeholder.svg?height=200&width=200",
      address: "Havinnes",
      website: "",
      phone: "",
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
            <Link href="/#sponsors" className="flex items-center text-lg font-bold">
              <ChevronLeft className="mr-2 h-5 w-5 animate-pulse" /> Terug naar Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12 bg-black/80 p-6 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Onze Sponsors</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            MC MIKKOLA wordt trots ondersteund door deze geweldige partners die ons helpen om te excelleren in de
            motorcross sport.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allSponsors.map((sponsor, index) => (
            <Card
              key={sponsor.id}
              className="bg-black/80 border-mcpink-700 overflow-hidden glow-card shadow-xl animate-fadeIn"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{sponsor.name}</h3>

                <div className="mt-2 space-y-2 w-full">
                  {sponsor.address && (
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
                      <span className="text-white text-sm text-left">{sponsor.address}</span>
                    </div>
                  )}

                  {sponsor.phone && (
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
                      <span className="text-white text-sm text-left">{sponsor.phone}</span>
                    </div>
                  )}

                  {sponsor.website && (
                    <div className="mt-3">
                      <Link
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm bg-mcpink-600 hover:bg-mcpink-700 text-white px-3 py-1 rounded-md transition-colors"
                      >
                        Website
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

