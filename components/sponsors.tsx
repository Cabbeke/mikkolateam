import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Phone, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Sponsors() {
  // Toon alleen de eerste 8 sponsors op de homepage
  const sponsors = [
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
      logo: "/sponsors/bouwwerken jurgen delbeke.png",
      address: "Rollegem",
      website: "https://www.bouwwerken-delbeke.be/",
      phone: "0495 93 98 23",
    },
    {
      id: 3,
      name: "C-worx",
      address: "Wevelgem",
      website: "",
      phone: "0475 96 60 80",
    },
    {
      id: 4,
      name: "Denicol",
      logo: "/sponsors/denicol.png",
      address: "Ranst",
      website: "https://www.denicol.com/",
      phone: "+32 3 485 81 91",
    },
    {
      id: 5,
      name: "DM Consult",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 6,
      name: "EKS-brillen",
      logo: "/sponsors/eks-brillen.avif",
      address: "Genk",
      website: "https://eksbrand.com",
      phone: "",
    },
    {
      id: 7,
      name: "Elektriciteit Van Den Broeke",
      address: "Kruishoutem",
      website: "",
      phone: "",
    },
    {
      id: 8,
      name: "Fidufac",
      logo: "/sponsors/fidufac.png",
      address: "Marke",
      website: "https://www.fidufac.be/",
      phone: "056 25 88 76",
    },
  ]

  return (
    <section id="sponsors" className="py-16 pt-24 -mt-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Onze Sponsors</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            MC MIKKOLA wordt trots ondersteund door deze geweldige partners die ons helpen om te excelleren in de
            motorcross sport.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id} className="bg-black/80 border-mcpink-700 overflow-hidden glow-card shadow-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {sponsor.logo && (
                  <div className="relative h-24 w-24 mb-4">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
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

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-mcpink-700/20 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcpink-500 focus-visible:ring-offset-2"
          >
            <Link href="/sponsors" className="flex items-center text-lg font-bold">
              Bekijk Alle Sponsors
              <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
