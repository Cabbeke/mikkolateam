import type React from "react"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity"

// Verwijder de problematische import en gebruik een dynamische import
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <html lang="nl">
      <body>
        {children}
        {/* Gebruik een client component voor Visual Editing */}
        {isDraftMode && <VisualEditingComponent />}
      </body>
    </html>
  )
}
// Maak een aparte client component voor Visual Editing
;("use client")
function VisualEditingComponent() {
  // Importeer en gebruik Visual Editing alleen aan de client-side
  // Dit voorkomt problemen met server-side rendering
  import("@sanity/visual-editing").then(({ enableVisualEditing }) => {
    return <VisualEditing />
  })

  // Render niets zichtbaars
  return null
}

