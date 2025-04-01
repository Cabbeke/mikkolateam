import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StudioRedirectPage() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6 gradient-text">MC MIKKOLA Content Studio</h1>

      <div className="bg-black/40 border border-mcpink-700 rounded-lg p-8 max-w-2xl mx-auto">
        <p className="text-white mb-8">
          Gebruik onze externe Sanity Studio om de website content te beheren. Hier kun je artikelen, piloten, sponsors
          en evenementen toevoegen en bewerken.
        </p>

        <div className="space-y-6">
          <a
            href={`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.sanity.studio/`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-6 py-3 rounded-lg shadow-lg inline-block transition-all"
          >
            Open Sanity Studio
          </a>

          <div className="pt-6 border-t border-mcpink-900/50">
            <h2 className="text-xl font-bold text-white mb-4">Hulp nodig?</h2>
            <p className="text-gray-300 mb-4">
              Bekijk de Sanity documentatie of neem contact op met de beheerder voor ondersteuning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.sanity.io/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mcpink-400 hover:text-mcpink-300 underline"
              >
                Sanity Documentatie
              </a>
              <Link href="/contact" className="text-mcpink-400 hover:text-mcpink-300 underline">
                Contact Beheerder
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button asChild variant="outline">
          <Link href="/">Terug naar Website</Link>
        </Button>
      </div>
    </div>
  )
}

