import { client as sanityClient } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { createClient } from "next-sanity"

export const clientInstance = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this environment variable is set
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true,
})

async function getNewsItem(slug: string) {
  return await clientInstance.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
      0u29u9fd_id,
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

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8">
          <Image src={urlFor(value).url() || "/placeholder.svg"} alt="" fill className="object-contain" />
        </div>
      )
    },
  },
}

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const newsItem = await getNewsItem(slug)

  if (!newsItem) {
    return <div>Nieuws item niet gevonden</div>
  }

  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(newsItem.publishedAt).toLocaleDateString("nl-NL")}</p>

      {newsItem.mainImage && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={urlFor(newsItem.mainImage).url() || "/placeholder.svg"}
            alt={newsItem.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div className="prose max-w-none">
        <PortableText value={newsItem.body} components={ptComponents} />
      </div>
    </div>
  )
}

