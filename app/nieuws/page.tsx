import { getNewsItems } from "@/lib/sanity-utils"
import { urlFor } from "@/lib/sanity"
import Link from "next/link"
import Image from "next/image"

export default async function NewsPage() {
  const news = await getNewsItems()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Nieuws</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item: any) => (
          <Link href={`/nieuws/${item.slug.current}`} key={item._id}>
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {item.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(item.mainImage).url() || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{new Date(item.publishedAt).toLocaleDateString("nl-NL")}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

