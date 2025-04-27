import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Trophy, Users, Calendar, Flag } from "lucide-react"

export default function About() {
  return (
    <section id="over-ons" className="py-16 pt-24 -mt-16">
      <div className="container">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Over Ons</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            MC MIKKOLA is een gepassioneerd motorcross team met een rijke geschiedenis en een sterke toewijding aan de
            sport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/rijdersvoorstelling groep.jpg"
                alt="MC MIKKOLA Team"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold">Onze Geschiedenis</h3>
            <p className="text-gray-300">
              Het team werd in 1990 opgericht door Heikki Declercq en werd genaamd naar de legendarische motocross
              piloot Heikki Mikkola. Door de jaren heen kon het team zich een weg banen doorheen het motorcross milieu
              en zo beschikt het team momenteel over 19 rijders.
            </p>
            <p className="text-gray-300">
              Door de jaren heen heeft ons team talloze successen behaald en hebben we een sterke reputatie opgebouwd in
              de motorcross wereld. We blijven streven naar uitmuntendheid en zijn trots op onze rijders die het team
              vertegenwoordigen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="bg-black/40 border-mcpink-700 glow-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <Trophy className="h-10 w-10 text-mcpink-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Prestatiegericht</h4>
                    <p className="text-sm text-gray-400">Streven naar de beste titels</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-mcpink-700 glow-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <Users className="h-10 w-10 text-mcpink-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Team</h4>
                    <p className="text-sm text-gray-400">Samenhorigheid & respect op nr 1</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-mcpink-700 glow-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <Calendar className="h-10 w-10 text-mcpink-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Ervaring</h4>
                    <p className="text-sm text-gray-400">Meer dan 30 jaar actief</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-mcpink-700 glow-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <Flag className="h-10 w-10 text-mcpink-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Wedstrijden</h4>
                    <p className="text-sm text-gray-400">Nationaal & internationaal</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

