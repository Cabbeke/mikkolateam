import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

export default function Contact() {
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
            <div className="lg:row-span-2 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-[300px] md:h-full rounded-lg overflow-hidden">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2075.7793481017397!2d3.5006139759408814!3d50.78547107165808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c319f90851cdf5%3A0xf33f373caaa16cd7!2sMeulesaevel%2013%2C%209690%20Kluisbergen!5e1!3m2!1snl!2sbe!4v1742827402496!5m2!1snl!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MC MIKKOLA locatie"
              className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <Link
              href="https://maps.google.com/?q=Brugge,België"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-mcpink-500 hover:text-mcpink-400 transition-colors"
              >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in Google Maps
              </Link>
            </div>
            </div>

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
                      <p className="text-gray-300">heikkideclercq@gmail.com</p>
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

