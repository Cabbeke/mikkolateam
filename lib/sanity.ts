import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0u29u9fd',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-03-04', // use current UTC date - see "Handling dates"
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export { client };