import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Gebruik de environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

// Controleer of de projectId bestaat
if (!projectId) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID")
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
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

