import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03", // Gebruik de huidige datum of een vaste datum
  useCdn: process.env.NODE_ENV === "production",
}

// Standaard client voor het ophalen van data (alleen lezen)
export const sanityClient = createClient(config)

// Client met token voor mutaties (schrijven)
export const sanityWriteClient = createClient({
  ...config,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

// Helper functie voor het werken met afbeeldingen
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

