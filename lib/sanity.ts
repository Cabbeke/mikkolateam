// In lib/sanity.ts
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: true, // Gebruik het CDN voor betere prestaties
  withCredentials: false // Geen cookies nodig voor alleen-lezen
}