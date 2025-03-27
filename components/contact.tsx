import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, FileText } from "lucide-react"
import Link from "next/link"
import PhotoCarousel from "./photo-carousel"

export default function Contact() {
  // Archieffoto's voor de carousel
  const archivePhotos = [
    {
      src: "/archief/1996.jpg",
      alt: "Teamfoto 1996",
    },
    {
      src: "/archief/1997.jpg",
      alt: "Teamfoto 1997",
    },
    {
      src: "/archief/1998.jpg",
      alt: "Teamfoto 1998",
    },
    {
      src: "/archief/1999.jpg",
      alt: "Teamfoto 1999",
    },
    {
      src: "/archief/2000.jpg",
      alt: "Teamfoto 2000",
    },
    {
      src: "/archief/2001.jpg",
      alt: "Teamfoto 2001",
    },
    {
      src: "/archief/2002.jpg",
      alt: "Teamfoto 2002",
    },
    {
      src: "/archief/2003.jpg",
      alt: "Teamfoto 2003",
    },
    {
      src: "/archief/2004.jpg",
      alt: "Teamfoto 2004",
    },
    {
      src: "/archief/2005.jpg",
      alt: "Teamfoto 2005",
    },
    {
      src: "/archief/2006.jpg",
      alt: "Teamfoto 2006",
    },
    {
      src: "/archief/2007.jpg",
      alt: "Teamfoto 2007",
    },
    {
      src: "/archief/2008.jpg",
      alt: "Teamfoto 2008",
    },
    {
      src: "/archief/2009.jpg",
      alt: "Teamfoto 2009",
    },
    {
      src: "/archief/2010.jpg",
      alt: "Teamfoto 2010",
    },
    {
      src: "/archief/2011.jpg",
      alt: "Teamfoto 2011",
    },
    {
      src: "/archief/2012.jpg",
      alt: "Teamfoto 2012",
    },
    {
      src: "/archief/2013.jpg",
      alt: "Teamfoto 2013",
    },
    {
      src: "/archief/2014.jpg",
      alt: "Teamfoto 2014",
    },
    {
      src: "/archief/2015.jpg",
      alt: "Teamfoto 2015",
    },
    {
      src: "/archief/2016.jpg",
      alt: "Teamfoto 2016",
    },
    {
      src: "/archief/2017.jpg",
      alt: "Teamfoto 2017",
    },
    {
      src: "/archief/2018.jpg",
      alt: "Teamfoto 2018",
    },
    {
      src: "/archief/2019.jpg",
      alt: "Teamfoto 2019",
    },
    {
      src: "/archief/2020.jpg",
      alt: "Teamfoto 2020",
    },
    {
      src: "/archief/2021.jpg",
      alt: "Teamfoto 2021",
    },
    {
      src: "/archief/2022.jpg",
      alt: "Teamfoto 2022",
    },
    {
      src: "/archief/2023.jpg",
      alt: "Teamfoto 2023",
    },
    {
      src: "/archief/2024.jpg",
      alt: "Teamfoto 2024",
    },
  ]

  return (
    <section id="contact" className="py-16 pt-24 -mt-16">
      <div className="container">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Contact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Heeft u vragen of wilt u meer informatie over MC MIKKOLA? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            className="bg-black/40 border-mcpink-700 glow-card animate-fadeIn h-full"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Archief Foto's</h3>
              <PhotoCarousel photos={archivePhotos} interval={4000} />
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-black/40 border-mcpink-700 glow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contactgegevens</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Adres</p>
                      <p className="text-gray-300">Meulesaevel 13</p>
                      <p className="text-gray-300">9690 Kluisbergen, België</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Telefoon</p>
                      <p className="text-gray-300">+32 477 77 21 57</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">E-mail</p>
                      <p className="text-gray-300">heikkideclercq@hotmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">BTW-nummer</p>
                      <p className="text-gray-300">BE0456.190.505</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-mcpink-700 glow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sociale Media</h3>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="https://www.facebook.com/groups/307560309295960/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mcpink-600 hover:bg-mcpink-700 text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCxSeGrnEalDnJ5j36Cyra5A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mcpink-600 hover:bg-mcpink-700 text-white p-3 rounded-full transition-colors"
                    aria-label="YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

