import { NextStudio } from "next-sanity/studio"
import config from "@/sanity.config"

// Voorkom dat deze pagina statisch wordt gegenereerd
export const dynamic = "force-dynamic"

export default function StudioPage() {
  return <NextStudio config={config} />
}

