"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, Share2, ChevronDown, ChevronUp, Facebook, Link2 } from "lucide-react"
import { getArticles } from "@/lib/sanity-queries"
import { PortableText } from "@portabletext/react"

export default function ArticlesWithSanity() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedArticles, setExpandedArticles] = useState<string[]>([])
  const [shareMenuOpen, setShareMenuOpen] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const articlesData = await getArticles()
        setArticles(articlesData)
      } catch (error) {
        console.error("Error fetching articles:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const toggleArticleExpand = (id: string) => {
    if (expandedArticles.includes(id)) {
      setExpandedArticles(expandedArticles.filter((articleId) => articleId !== id))
    } else {
      setExpandedArticles([...expandedArticles, id])
    }
  }

  const toggleShareMenu = (id: string) => {
    if (shareMenuOpen === id) {
      setShareMenuOpen(null)
    } else {
      setShareMenuOpen(id)
    }
  }

  const shareArticle = (platform: string, article: any) => {
    const url = window.location.href
    const text = `Bekijk dit artikel: ${article.title}`

    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`
        break
      case "copy":
        navigator.clipboard
          .writeText(url)
          .then(() => {
            alert("Link gekopieerd naar klembord!")
          })
          .catch((err) => {
            console.error("Kon link niet kopiëren: ", err)
          })
        break
      default:
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }

    setShareMenuOpen(null)
  }

  if (loading) {
    return (
      <section className="py-16">
        <div className="container text-center">
          <p>Artikelen laden...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Laatste Nieuws</h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            Blijf op de hoogte van de laatste ontwikkelingen, prestaties en evenementen van MC MIKKOLA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article: any) => (
            <Card key={article._id} className="bg-black/40 border-mcpink-700 overflow-hidden glow-card">
              <div className="relative h-48">
                <Image
                  src={article.image || "/placeholder.svg?height=400&width=600"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-medium mb-2">
                  <Calendar className="h-4 w-4 text-mcpink-500" />
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("nl-BE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-light">{article.title}</h3>

                {expandedArticles.includes(article._id) ? (
                  <div className="transition-all duration-300 text-gray-light">
                    <PortableText value={article.body} />
                  </div>
                ) : (
                  <p className="text-gray-light">{article.excerpt}</p>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button
                  variant="link"
                  className="text-mcpink-500 p-0 h-auto flex items-center"
                  onClick={() => toggleArticleExpand(article._id)}
                >
                  {expandedArticles.includes(article._id) ? (
                    <>
                      Minder lezen <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Lees meer <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>

                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => toggleShareMenu(article._id)}
                  >
                    <Share2 className="h-4 w-4 text-mcpink-500" />
                    <span className="sr-only">Deel artikel</span>
                  </Button>

                  {shareMenuOpen === article._id && (
                    <div className="absolute right-0 bottom-10 bg-black/90 border border-mcpink-700 rounded-md p-2 z-10 flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => shareArticle("facebook", article)}
                        title="Deel op Facebook"
                      >
                        <Facebook className="h-4 w-4 text-mcpink-500" />
                        <span className="sr-only">Deel op Facebook</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => shareArticle("copy", article)}
                        title="Kopieer link"
                      >
                        <Link2 className="h-4 w-4 text-mcpink-500" />
                        <span className="sr-only">Kopieer link</span>
                      </Button>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

