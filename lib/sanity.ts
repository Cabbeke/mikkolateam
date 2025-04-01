import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03", // Gebruik de huidige datum of een vaste datum
  useCdn: true,
  withCredentials: false, // Geen cookies nodig voor alleen-lezen
}

// Standaard client voor het ophalen van data (alleen lezen)
export const client = createClient(config)

// Client met token voor mutaties (schrijven)
export const writeClient = createClient({
  ...config,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  withCredentials: false,
})

// Helper functie voor het werken met afbeeldingen
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

