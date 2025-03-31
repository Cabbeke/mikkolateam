import StudioPageClient from "./StudioPageClient"

// Deze functie is nodig voor statische export
export async function generateStaticParams() {
  // Dit is een workaround - we genereren alleen de basis route
  return [{ index: [] }]
}

export default function StudioPage() {
  return <StudioPageClient />
}

