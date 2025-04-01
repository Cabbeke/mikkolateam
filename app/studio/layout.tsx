import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

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
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-black to-gray-900 min-h-screen`}>
        {/* Geen navbar of footer hier, alleen de children */}
        {children}
      </body>
    </html>
  )
}

