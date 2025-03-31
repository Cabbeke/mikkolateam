import { sanityClient } from "./sanity"
import { groq } from "next-sanity"

// Voorbeeld query voor het ophalen van artikelen
export async function getArticles() {
  return sanityClient.fetch(
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

// Voorbeeld query voor het ophalen van piloten
export async function getPilots() {
  return sanityClient.fetch(
    groq`*[_type == "pilot"] | order(name asc) {
      _id,
      name,
      category,
      number,
      bio,
      "image": image.asset->url,
      achievements
    }`,
  )
}

// Voorbeeld query voor het ophalen van sponsors
export async function getSponsors() {
  return sanityClient.fetch(
    groq`*[_type == "sponsor"] | order(name asc) {
      _id,
      name,
      description,
      address,
      phone,
      website,
      "logo": logo.asset->url
    }`,
  )
}

// Voorbeeld query voor het ophalen van kalender evenementen
export async function getCalendarEvents() {
  return sanityClient.fetch(
    groq`*[_type == "event"] | order(date asc) {
      _id,
      title,
      date,
      location,
      federation,
      special
    }`,
  )
}

