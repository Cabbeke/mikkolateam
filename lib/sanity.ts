import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Functie om environment variables veilig te laden
function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] || fallback
  if (!value && fallback === undefined) {
    console.warn(`Missing environment variable: ${name}`)
    return "0u29u9fd" // Fallback naar je project ID als het niet gevonden wordt
  }
  return value || ""
}

// Laad environment variables met fallbacks
const projectId = getEnv("NEXT_PUBLIC_SANITY_PROJECT_ID")
const dataset = getEnv("NEXT_PUBLIC_SANITY_DATASET", "production")
const token = getEnv("SANITY_API_READ_TOKEN", undefined)

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
  token: token || undefined,
})

// Helper functie voor afbeeldingen
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// Functie om nieuws items op te halen
export async function getNewsItems() {
  return await client.fetch(`
    *[_type == "nieuws"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage
    }
  `)
}

// Functie om een specifiek nieuws item op te halen
export async function getNewsItem(slug: string) {
  return await client.fetch(
    `
    *[_type == "nieuws" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      body
    }
  `,
    { slug },
  )
}

// Functie om een pagina op te halen
export async function getPage(slug: string) {
  return await client.fetch(
    `
    *[_type == "pagina" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      content
    }
  `,
    { slug },
  )
}

// Functie om alle pagina's op te halen (voor generateStaticParams)
export async function getPages() {
  return await client.fetch(`
    *[_type == "pagina"] {
      "slug": slug.current
    }
  `)
}

