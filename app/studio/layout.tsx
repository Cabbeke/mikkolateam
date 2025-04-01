import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MC MIKKOLA - Studio",
  description: "Content Management System voor MC MIKKOLA website",
}

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>
        {/* Geen header of footer hier, alleen de children */}
        {children}
      </body>
    </html>
  )
}

