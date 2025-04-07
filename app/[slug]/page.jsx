import { getPage, getPages, urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import Image from "next/image"

// Voeg deze functie toe om alle mogelijke slugs vooraf te genereren
export async function generateStaticParams() {
  try {
    const pages = await getPages()
    // Als er geen pagina's zijn of er is een fout, geef een lege array terug
    if (!pages || !Array.isArray(pages) || pages.length === 0) {
      console.warn("No pages found or error fetching pages, using fallback static paths")
      return [{ slug: "home" }, { slug: "over-ons" }, { slug: "contact" }]
    }
    return pages.map((page) => ({
      slug: page.slug,
    }))
  } catch (error) {
    console.error("Error generating static params for pages:", error)
    // Fallback naar enkele standaard pagina's
    return [{ slug: "home" }, { slug: "over-ons" }, { slug: "contact" }]
  }
}

export default async function Page({ params }) {
  try {
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
          {page.content && (
            <PortableText
              value={page.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="relative w-full h-96 my-8">
                      <Image
                        src={(value && urlFor(value).url()) || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  ),
                },
              }}
            />
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error rendering page:", error)
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Pagina kon niet worden geladen</h1>
        <p>Er is een fout opgetreden bij het laden van deze pagina.</p>
      </div>
    )
  }
}

