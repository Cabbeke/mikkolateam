import { client } from "@/lib/sanity/sanity"
import { urlFor } from "@/lib/sanity/sanity"
import Image from "next/image"
import { PortableText } from "@portabletext/react"

async function getNewsItem(slug: string) {
  return await client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
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

export default async function NewsItemPage({ params }: { params: { slug: string } }) {
  const newsItem = await getNewsItem(params.slug)

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

