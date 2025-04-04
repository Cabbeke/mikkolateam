import { client } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import Image from "next/image"

type PageParams = {
    params: {
      slug: string
    }
  }
// Functie om pagina data op te halen uit Sanity
async function getPage(slug: string) {
  return await client.fetch(
    `
    *[_type == "pagina" && slug.current == $slug][0]
  `,
    { slug },
  )
}

// Portable Text componenten voor rijke content
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 my-8">
        <Image src={urlFor(value).url() || "/placeholder.svg"} alt="" fill className="object-contain" />
      </div>
    ),
  },
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Haal de pagina op uit Sanity
  const page = await getPage(params.slug)

  // Als de pagina niet bestaat, toon 404
  if (!page) {
    return notFound()
  }

  // Gebruik je bestaande layout, maar vul het met Sanity data
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>

      <div className="prose max-w-none">
        <PortableText value={page.content} components={ptComponents} />
      </div>
    </div>
  )
}

