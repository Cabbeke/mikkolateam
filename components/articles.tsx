"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, Share2, ChevronDown, ChevronUp, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Nieuwe website MC MIKKOLA gelanceerd",
      excerpt:
        "We zijn verheugd om onze nieuwe website te lanceren, ontworpen om u beter te informeren over ons team, onze rijders en komende evenementen.",
      fullText:
        "We zijn verheugd om onze nieuwe website te lanceren, ontworpen om u beter te informeren over ons team, onze rijders en komende evenementen. De nieuwe site biedt een verbeterde gebruikerservaring met een modern design en is volledig responsive voor alle apparaten. U kunt nu gemakkelijk navigeren door de verschillende secties om meer te weten te komen over onze geschiedenis, onze talentvolle rijders, onze gewaardeerde sponsors en de volledige kalender voor het 2025 seizoen. We nodigen u uit om de site te verkennen en ons feedback te geven via het contactformulier.",
      date: "23 maart 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Indrukwekkende prestatie op Belgisch Kampioenschap",
      excerpt:
        "Thomas Declercq behaalt podiumplaats tijdens de laatste ronde van het Belgisch Kampioenschap in Lommel.",
      fullText:
        "Thomas Declercq heeft afgelopen weekend een indrukwekkende prestatie neergezet tijdens de laatste ronde van het Belgisch Kampioenschap in Lommel. Na een spannende race wist hij een podiumplaats te bemachtigen, wat zijn positie in het algemeen klassement verder versterkt. De zware zandcondities in Lommel vormden een uitdaging voor alle rijders, maar Thomas toonde zijn technische vaardigheden en doorzettingsvermogen. Het hele team is trots op deze prestatie en kijkt uit naar de komende wedstrijden waar we hopen dit succes voort te zetten.",
      date: "12 maart 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Nieuw teamlid verwelkomd bij MC MIKKOLA",
      excerpt:
        "We zijn verheugd om Seppe Maertens te verwelkomen als nieuwste aanwinst voor ons team in het 2025 seizoen.",
      date: "28 februari 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // State to track which articles are expanded
  const [expandedArticles, setExpandedArticles] = useState<number[]>([])
  // State to track which articles have share menu open
  const [shareMenuOpen, setShareMenuOpen] = useState<number | null>(null)

  const toggleArticleExpand = (id: number) => {
    if (expandedArticles.includes(id)) {
      setExpandedArticles(expandedArticles.filter((articleId) => articleId !== id))
    } else {
      setExpandedArticles([...expandedArticles, id])
    }
  }

  const toggleShareMenu = (id: number) => {
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
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }

    // Close share menu after sharing
    setShareMenuOpen(null)
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
          {articles.map((article) => (
            <Card key={article.id} className="bg-black/40 border-mcpink-700 overflow-hidden glow-card">
              <div className="relative h-48">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-medium mb-2">
                  <Calendar className="h-4 w-4 text-mcpink-500" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-light">{article.title}</h3>

                {expandedArticles.includes(article.id) && article.fullText ? (
                  <div className="transition-all duration-300">
                    <p className="text-gray-light">{article.fullText}</p>
                  </div>
                ) : (
                  <p className="text-gray-light">{article.excerpt}</p>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                {article.fullText && (
                  <Button
                    variant="link"
                    className="text-mcpink-500 p-0 h-auto flex items-center"
                    onClick={() => toggleArticleExpand(article.id)}
                  >
                    {expandedArticles.includes(article.id) ? (
                      <>
                        Minder lezen <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Lees meer <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}

                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => toggleShareMenu(article.id)}
                  >
                    <Share2 className="h-4 w-4 text-mcpink-500" />
                    <span className="sr-only">Deel artikel</span>
                  </Button>

                  {shareMenuOpen === article.id && (
                    <div className="absolute right-0 bottom-10 bg-black/90 border border-mcpink-700 rounded-md p-2 z-10 flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => shareArticle("facebook", article)}
                      >
                        <Facebook className="h-4 w-4 text-mcpink-500" />
                        <span className="sr-only">Deel op Facebook</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => shareArticle("twitter", article)}
                      >
                        <Twitter className="h-4 w-4 text-mcpink-500" />
                        <span className="sr-only">Deel op Twitter</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => shareArticle("linkedin", article)}
                      >
                        <Linkedin className="h-4 w-4 text-mcpink-500" />
                        <span className="sr-only">Deel op LinkedIn</span>
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

