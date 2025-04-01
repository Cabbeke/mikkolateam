import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MC MIKKOLA - Content Studio",
  description: "Content Management System voor MC MIKKOLA website",
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${inter.className} bg-black`}>
        {/* Eenvoudige header */}
        <header className="bg-black border-b border-mcpink-700 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">MC MIKKOLA</span>
              <span className="text-white text-sm">Content Studio</span>
            </Link>
            <Link href="/" className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-4 py-2 rounded-md text-sm">
              Terug naar Website
            </Link>
          </div>
        </header>

        {/* Studio content */}
        <main className="w-full min-h-screen">{children}</main>

        {/* Eenvoudige footer */}
        <footer className="bg-black border-t border-mcpink-700 p-4 text-center text-white text-sm">
          <p>© {new Date().getFullYear()} MC MIKKOLA - Powered by Sanity</p>
        </footer>
      </body>
    </html>
  )
}

