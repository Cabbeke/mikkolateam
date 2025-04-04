import { client } from "./sanity"

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

// Voeg meer functies toe voor andere content types

