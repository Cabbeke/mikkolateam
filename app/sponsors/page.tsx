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
      logo: "/sponsors/bouwwerken jurgen delbeke.png",
      address: "Rollegem",
      website: "https://www.bouwwerken-delbeke.be/",
      phone: "0495 93 98 23",
    },
    {
      id: 3,
      name: "C-worx",
      logo: "/sponsors/thumbnail_Logo Cworx.png",
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
    {
      id: 9,
      name: "Gemeente Deerlijk",
      logo: "/sponsors/gemeente deerlijk.avif",
      address: "Deerlijk",
      website: "https://www.deerlijk.be/",
      phone: "056 69 47 20",
    },
    {
      id: 10,
      name: "HDC Products",
      logo: "/sponsors/logo-hdc-products - kopie.png",
      address: "Kluisbergen",
      website: "",
      phone: "",
    },
    {
      id: 11,
      name: "Homet BVBA",
      logo: "/sponsors/homet.png",
      address: "Izegem",
      website: "https://www.homet.be",
      phone: "0478/90.38.56",
    },
    {
      id: 12,
      name: "Luc Wybon BVBA",
      logo: "/sponsors/logoluc wybon-1.png",
      address: "Marke",
      website: "https://www.wybon.be/",
      phone: "+32 (0)479 55 05 41",
    },
    {
      id: 13,
      name: "Monster Energy Drink",
      logo: "/sponsors/monster.webp",
      address: "Verenigde Staten",
      website: "https://www.monsterenergy.com/",
      phone: "1-866-322-4466",
    },
    {
      id: 14,
      name: "Motor 2000 KTM",
      logo: "/sponsors/motor2000ktm.png",
      address: "Heinkenszand",
      website: "https://www.motor2000.nl",
      phone: "+31 113 567200",
    },
    {
      id: 15,
      name: "Motorgazet",
      logo: "/sponsors/motorgazet.png",
      address: "",
      website: "https://motorgazet.be/",
      phone: "",
    },
    {
      id: 16,
      name: "MX 477",
      logo: "/sponsors/mx477.png",
      address: "Genk",
      website: "https://www.mx477.be",
      phone: "0475 66 00 81",
    },
    {
      id: 17,
      name: "N M P Fotografie",
      logo: "/sponsors/nmpfoto.png",
      address: "Limal",
      website: "",
      phone: "",
    },
    {
      id: 18,
      name: "Nubus",
      logo: "/sponsors/nubus.jpg",
      address: "Kuurne",
      website: "https://nubus.be/",
      phone: "056 36 15 55",
    },
    {
      id: 19,
      name: "Red Animals",
      logo: "/sponsors/red animals.webp",
      address: "Ere",
      website: "https://red-animals.com",
      phone: "+32 (0) 69 648 372",
    },
    {
      id: 20,
      name: "Support4You",
      logo: "/sponsors/logo suport.png",
      address: "Wevelgem",
      website: "",
      phone: "0472 08 28 76",
    },
    {
      id: 21,
      name: "neerhofvoeders Debaillie",
      logo: "/sponsors/T-shirtLogo debaillie.png",
      address: "Roeselare",
      website: "http://www.debaillie.be/",
      phone: "051 24 49 20",
    },
    {
      id: 22,
      name: "Leon Sagaert",
      logo: "/sponsors/logo sagaert.png",
      address: "Meulebeke",
      website: "https://www.leonsagaert.be/",
      phone: "051 48 90 45",
    },
    {
      id: 23,
      name: "Skyspan",
      logo: "/sponsors/logo SKYSPAN (1)-1.png",
      address: "Bellegem",
      website: "https://skyspan.be/",
      phone: "0479 96 99 68",
    },
    {
      id: 24,
      name: "ESjot",
      logo: "/sponsors/logo_Esjot_Sprockets_200x80.png",
      address: "Ense-Höingen",
      website: "https://www.esjot.com/en/",
      phone: "0049 - (0) 29 38 - 97 51 - 0",
    },
    {
      id: 25,
      name: "Suspensions ARP",
      logo: "/sponsors/ARP LOGO.jpg",
      address: "Frasnoy",
      website: "https://alexracingparts.com/",
      phone: "+33 7 60 76 99 54",
    },
    {
      id: 26,
      name: "Paulke",
      logo: "/sponsors/P.09 logopaulke.jpg",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 27,
      name: "Laurence Wybon",
      logo: "/sponsors/logowybon.jpg",
      address: "",
      website: "",
      phone: "",
    },
    {
      id: 28,
      name: "Rougraff",
      logo: "/sponsors/Logo-Rougraff.jpg",
      address: "Dour",
      website: "https://www.rougraff.be/",
      phone: "0472 08 28 76",
    },
    {
      id: 29,
      name: "Condé",
      logo: "/sponsors/logoconde.jpg",
      address: "",
      website: "https://www.mc-conde.fr/",
      phone: "",
    },
    {
      id: 30,
      name: "Mariman",
      logo: "/sponsors/logomariman2023.jpg",
      address: "Stekene",
      website: "https://mariman-dakwerken.be/",
      phone: "03 296 67 62",
    },
    {
      id: 31,
      name: "Maxpac",
      logo: "/sponsors/logo_Maxpac - Logo - Dark.png",
      address: "Temse",
      website: "https://maxpac.be/",
      phone: "03 710 51 70",
    },
    {
      id: 32,
      name: "Ovaamoter",
      logo: "/sponsors/logo ovaamotor.webp",
      address: "Nederland",
      website: "https://www.ovaamotors.nl/",
      phone: "+31 118 461 485",
    },
    {
      id: 33,
      name: "WLM sportswear",
      logo: "/sponsors/logo wlm.jpg",
      address: "Mill",
      website: "https://www.wlm-design.nl/",
      phone: "(+32) 012-216117",
    },
    {
      id: 34,
      name: "Immerfix",
      logo: "/sponsors/logo Immerfix.png",
      address: "Begijnendijk",
      website: "https://immerfix.be/",
      phone: "+32 (0)495 500 755",
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
              className="bg-gray-800 border-mcpink-700 overflow-hidden glow-card shadow-xl animate-fadeIn"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
              {sponsor.logo && sponsor.name !== "" && sponsor.name !== "DM Consult" && sponsor.name !== "Elektriciteit Van Den Broeke" && sponsor.name !== "" && sponsor.name !== "" && sponsor.name !== "" && (
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
      </div>
    </main>
  )
}
