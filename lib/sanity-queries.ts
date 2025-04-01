import { client } from "./sanity"
import { groq } from "next-sanity"

// Voorbeeld query voor het ophalen van artikelen
export async function getArticles() {
  return client.fetch(
    groq`*[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      publishedAt,
      "image": mainImage.asset->url,
      body
    }`,
  )
}

// Rest van de functies...

