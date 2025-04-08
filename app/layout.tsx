import type React from "react"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <header className="bg-gray-800 text-white">
          <div className="container mx-auto py-4">
            <nav className="flex flex-wrap justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                McMikkola Team
              </Link>
              <div className="flex space-x-4">
                <Link href="/nieuws" className="hover:text-gray-300">
                  Nieuws
                </Link>
                <Link href="/kalender" className="hover:text-gray-300">
                  Kalender
                </Link>
                <Link href="/bestuur" className="hover:text-gray-300">
                  Bestuur
                </Link>
                <Link href="/piloten" className="hover:text-gray-300">
                  Piloten
                </Link>
                <Link href="/sponsors" className="hover:text-gray-300">
                  Sponsors
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} McMikkola Team. Alle rechten voorbehouden.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
