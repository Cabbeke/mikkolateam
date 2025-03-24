"use client"

import Link from "next/link"
import { Calendar, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
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
            <span className="text-gray-300">Brugge, België</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="h-4 w-4 text-mcpink-500" />
            <span className="text-gray-300">+32 123 45 67 89</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-mcpink-500" />
            <span className="text-gray-300">info@mcmikkola.be</span>
          </div>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-bold mb-4 gradient-text">Komende Evenementen</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Motorcross Lommel</p>
                <p className="text-sm text-gray-400">15 April 2025</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Belgisch Kampioenschap</p>
                <p className="text-sm text-gray-400">2 Mei 2025</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-mcpink-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Motorcross Gent</p>
                <p className="text-sm text-gray-400">20 Mei 2025</p>
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
                href="#sponsors"
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
                href="#contact"
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
              className="inline-block hover:opacity-80 transition-opacity focus-visible:focus"
            >
              <div className="bg-white rounded-md p-2 inline-flex items-center">
                <span className="text-black font-bold">WebworX Cabbeke</span>
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

