import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Functie om environment variables veilig te laden
function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] || fallback
  if (!value && fallback === undefined) {
    console.warn(`Missing environment variable: ${name}`)
    return "" // Leeg in plaats van een fallback ID
  }
  return value || ""
}

// Laad environment variables met fallbacks
const projectId = getEnv("NEXT_PUBLIC_SANITY_PROJECT_ID")
const dataset = getEnv("NEXT_PUBLIC_SANITY_DATASET", "production")
const token = getEnv("SANITY_API_READ_TOKEN", "")

// Maak een client met token
export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: true, // Altijd CDN gebruiken voor statische export
  token, // Gebruik altijd de token
  perspective: "published", // Alleen gepubliceerde content
})

// Helper functie voor afbeeldingen
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// Functie om nieuws items op te halen met foutafhandeling
export async function getNewsItems() {
  try {
    return await client.fetch(`
      *[_type == "nieuws"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        mainImage
      }
    `)
  } catch (error) {
    console.error("Error fetching news items:", error)
    return [] // Leeg array teruggeven bij fouten
  }
}

// Functie om een specifiek nieuws item op te halen met foutafhandeling
export async function getNewsItem(slug: string) {
  try {
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
  } catch (error) {
    console.error(`Error fetching news item with slug ${slug}:`, error)
    return null // Null teruggeven bij fouten
  }
}

// Functie om een pagina op te halen met foutafhandeling
export async function getPage(slug: string) {
  try {
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
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error)
    return null // Null teruggeven bij fouten
  }
}

// Functie om alle pagina's op te halen met foutafhandeling
export async function getPages() {
  try {
    return await client.fetch(`
      *[_type == "pagina"] {
        "slug": slug.current
      }
    `)
  } catch (error) {
    console.error("Error fetching pages:", error)
    return [] // Leeg array teruggeven bij fouten
  }
}

