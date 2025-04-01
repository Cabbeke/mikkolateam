"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, BookOpen, Mail } from "lucide-react"

export default function StudioRedirectPage() {
  const [projectId, setProjectId] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Haal het project ID op uit de environment variabelen
    const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""
    setProjectId(id)
    setIsLoading(false)
  }, [])

  const studioUrl = `https://${projectId}.sanity.studio/`

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header met logo */}
      <header className="border-b border-mcpink-700/50 bg-black/60 backdrop-blur-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 relative">
              <Image src="/Website logo.png" alt="MC MIKKOLA Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">MC MIKKOLA</h1>
              <p className="text-xs text-mcpink-400">Content Management</p>
            </div>
          </div>
          <Button asChild variant="outline" size="sm" className="border-mcpink-700 text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar Website
            </Link>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Content Studio</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Beheer alle content van de MC MIKKOLA website via het Sanity Content Management Systeem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Studio card */}
            <div className="bg-black/40 border border-mcpink-700 rounded-lg p-6 shadow-lg hover:shadow-mcpink-700/20 transition-all duration-300 hover:scale-[1.02] glow-card">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-mcpink-900/50 mx-auto mb-6">
                <ExternalLink className="h-8 w-8 text-mcpink-400" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">Sanity Studio</h3>
              <p className="text-gray-300 mb-6 text-center">
                Open de Sanity Studio om artikelen, piloten, sponsors en evenementen toe te voegen of te bewerken.
              </p>

              {isLoading ? (
                <div className="flex justify-center">
                  <div className="animate-pulse bg-mcpink-700/50 h-10 w-40 rounded-md"></div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <a
                    href={studioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-mcpink-700 to-mcpink-500 hover:from-mcpink-800 hover:to-mcpink-600 text-white px-6 py-3 rounded-md shadow-lg shadow-mcpink-700/20 transition-all duration-300 inline-flex items-center"
                  >
                    Open Studio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Help card */}
            <div className="bg-black/40 border border-mcpink-700 rounded-lg p-6 shadow-lg hover:shadow-mcpink-700/20 transition-all duration-300 hover:scale-[1.02] glow-card">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-mcpink-900/50 mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-mcpink-400" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">Hulp & Documentatie</h3>
              <p className="text-gray-300 mb-6 text-center">
                Bekijk de Sanity documentatie of neem contact op met de beheerder voor ondersteuning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.sanity.io/docs/getting-started-with-sanity-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/60 hover:bg-black/80 text-mcpink-400 border border-mcpink-700 px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Documentatie
                </a>
                <Link
                  href="/contact"
                  className="bg-black/60 hover:bg-black/80 text-mcpink-400 border border-mcpink-700 px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Tips section */}
          <div className="mt-12 bg-black/30 border border-mcpink-900/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Tips voor Content Beheer</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-mcpink-500 font-bold">•</span>
                <span>Log in met je Sanity account om content te kunnen bewerken.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mcpink-500 font-bold">•</span>
                <span>
                  Afbeeldingen worden automatisch geoptimaliseerd, maar gebruik bij voorkeur afbeeldingen met een hoge
                  resolutie.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mcpink-500 font-bold">•</span>
                <span>Wijzigingen worden direct gepubliceerd op de website na het opslaan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mcpink-500 font-bold">•</span>
                <span>Gebruik de preview functie om wijzigingen te bekijken voordat je ze publiceert.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-mcpink-700/50 bg-black/60 backdrop-blur-sm p-4 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} MC MIKKOLA - Powered by Sanity</p>
      </footer>
    </div>
  )
}

