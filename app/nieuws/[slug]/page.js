import { getNewsItem, getNewsItems, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Functie om alle mogelijke slugs vooraf te genereren
export async function generateStaticParams() {
  try {
    const news = await getNewsItems()
    return news.map((item) => ({
      slug: item.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function NewsItemPage({ params }) {
  try {
    const newsItem = await getNewsItem(params.slug)
    
    if (!newsItem) {
      return notFound()
    }
    
    return (
      <div className="container mx-auto py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(newsItem.publishedAt).toLocaleDateString('nl-NL')}
        </p>
        
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
          <PortableText 
            value={newsItem.body} 
            components={{
              types: {
                image: ({ value }) => (
                  <div className="relative w-full h-96 my-8">
                    <Image
                      src={urlFor(value).url() || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                ),
              },
            }}
          />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error rendering news item:', error)
    return <div>Er is een fout opgetreden bij het laden van dit nieuwsartikel.</div>
  }
}