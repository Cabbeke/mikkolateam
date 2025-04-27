"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const [isHovering, setIsHovering] = useState(false)
  const pathname = usePathname()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Functie om de juiste link te genereren
  const getNavLink = (section: string) => {
    // Als we op de homepage zijn, gebruik een anchor link
    if (pathname === "/") {
      return `#${section}`
    }
    // Anders, ga naar de homepage met de anchor
    return `/#${section}`
  }

  return (
    <footer className="bg-black/90 text-white py-12 mt-16 relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-mcpink-600 hover:bg-mcpink-700 rounded-full p-3 shadow-lg focus-visible:focus"
        aria-label="Scroll naar boven"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-xl font-bold mb-4 gradient-text">MC MIKKOLA</h3>
          <p className="text-gray-300 mb-4">Motorcross team opgericht in 1990 door familie Declercq.</p>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-mcpink-500" />
            <span className="text-gray-300">Kluisbergen, België</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="h-4 w-4 text-mcpink-500" />
            <span className="text-gray-300">+32 477 77 21 57</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-mcpink-500" />
            <span className="text-gray-300">heikkideclercq@hotmail.com</span>
          </div>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-bold mb-4 gradient-text">Nieuws</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Nieuwe website</p>
                <p className="text-sm text-gray-400">
                  We zijn verheugd om onze nieuwe website te lanceren, ontworpen om u beter te informeren over ons team,
                  onze rijders en komende evenementen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Seizoensstart</p>
                <p className="text-sm text-gray-400">
                  Het nieuwe seizoen van MC MIKKOLA is officieel van start gegaan op 23 maart 2025.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-xl font-bold mb-4 gradient-text">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://speedhive.mylaps.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-mcpink-500 transition-colors focus-visible:focus"
              >
                Bekijk alle resultaten op Speedhive
              </Link>
            </li>
            <li>
              <Link
                href={getNavLink("sponsors")}
                className="text-gray-300 hover:text-mcpink-500 transition-colors focus-visible:focus"
              >
                Onze sponsors
              </Link>
            </li>
            <li>
              <Link
                href="/bestuur"
                className="text-gray-300 hover:text-mcpink-500 transition-colors focus-visible:focus"
              >
                Bestuur
              </Link>
            </li>
            <li>
              <Link
                href={getNavLink("contact")}
                className="text-gray-300 hover:text-mcpink-500 transition-colors focus-visible:focus"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Website ontwikkeld door:</p>
            <Link
              href="https://webworxcabbeke.be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block focus-visible:focus"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative bg-white rounded-md p-2 inline-flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-mcpink-500/30">
                {isHovering ? (
                  <div className="relative h-8 w-32 animate-fadeIn">
                    <Image src="/logo1.png" alt="WebworX Cabbeke Logo" fill className="object-contain" />
                  </div>
                ) : (
                  <span className="text-black font-bold">WebWorx Cabbeke</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-6 border-t border-gray-800">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MC MIKKOLA. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  )
}

