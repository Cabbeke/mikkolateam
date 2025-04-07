import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Welkom bij McMikkola Team</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welkom op de website van McMikkola Team. Hier vindt u informatie over ons team, nieuws en evenementen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link href="/nieuws">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">Nieuws</h2>
              <p>Bekijk het laatste nieuws en updates van ons team.</p>
            </div>
          </Link>

          <Link href="/kalender">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">Kalender</h2>
              <p>Bekijk onze komende evenementen en wedstrijden.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

