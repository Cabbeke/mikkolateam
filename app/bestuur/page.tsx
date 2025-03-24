import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BestuurPage() {
  return (
    <main className="py-16 bg-black">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Button
            asChild
            className="bg-mcpink-600 hover:bg-mcpink-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-mcpink-700/20 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcpink-500 focus-visible:ring-offset-2"
          >
            <Link href="/" className="flex items-center text-lg font-bold">
              <ChevronLeft className="mr-2 h-5 w-5 animate-pulse" /> Terug naar Home
            </Link>
          </Button>
        </div>

        <div className="bg-black/80 p-8 rounded-lg shadow-xl mb-10">
          <h1 className="text-3xl font-bold mb-6 gradient-text text-center">Het Bestuur</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Voorzitter</h2>
                <p className="text-white">Heikki Declercq</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Penningmeester</h2>
                <p className="text-white">Jeaninne Dequesne</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Secretaris - ondervoorzitter</h2>
                <p className="text-white">Eric Declercq</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Medische dienst</h2>
                <p className="text-white">Dkt. Eric Vandeputte</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Head Mecaniciens</h2>
                <p className="text-white">Dean Schallon</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Maatschappelijke zetel</h2>
                <p className="text-white">MX-team McMikkola vzw</p>
                <p className="text-white">Olmenlaan 10</p>
                <p className="text-white">8540 Deerlijk</p>
                <p className="text-white">Tel. 056 71 11 97</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Secretariaat</h2>
                <p className="text-white">MX-team Mc.Mikkola vzw</p>
                <p className="text-white">Meulesavel 13</p>
                <p className="text-white">9690 Kluisbergen</p>
                <p className="text-white">Tel. 0477 77 21 57</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Medisch secretariaat</h2>
                <p className="text-white">Dkt. Eric Vandeputte</p>
                <p className="text-white">Hoogstraat 144</p>
                <p className="text-white">8540 Deerlijk</p>
                <p className="text-white">Tel. 056 71 01 23</p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Boekhouding</h2>
                <p className="text-white">Fidufac Consultancy</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Internet en IT</h2>
                <p className="text-white">WebWorx Cabbeke</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-mcpink-500 mb-1">Foto en pers</h2>
                <p className="text-white">Nico Martin</p>
                <p className="text-white">JDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

