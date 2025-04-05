import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Hardcoded waarden voor testen (ALLEEN VOOR ONTWIKKELING)
// Gebruik de waarde die je in je Vercel dashboard ziet (0u29u9fd)
const projectId = "4a0enxp6s" // Vervang dit door je echte Project ID uit je Vercel dashboard
const dataset = "Production"

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN || undefined,
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

