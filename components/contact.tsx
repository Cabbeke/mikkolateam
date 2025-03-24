import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 pt-24 -mt-16">
      <div className="container">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Contact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Heeft u vragen of wilt u meer informatie over MC MIKKOLA? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-mcpink-700 glow-card animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Stuur ons een bericht</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Naam
                    </label>
                    <Input
                      id="name"
                      placeholder="Uw naam"
                      className="bg-black/30 border-mcpink-900 text-white focus-visible:focus"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="uw.email@voorbeeld.be"
                      className="bg-black/30 border-mcpink-900 text-white focus-visible:focus"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Onderwerp
                  </label>
                  <Input
                    id="subject"
                    placeholder="Onderwerp van uw bericht"
                    className="bg-black/30 border-mcpink-900 text-white focus-visible:focus"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Bericht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Typ uw bericht hier..."
                    className="min-h-[120px] bg-black/30 border-mcpink-900 text-white focus-visible:focus"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-mcpink-700 to-mcpink-500 hover:from-mcpink-800 hover:to-mcpink-600 focus-visible:focus"
                >
                  <Send className="mr-2 h-4 w-4" /> Verstuur Bericht
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-black/40 border-mcpink-700 glow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contactgegevens</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Adres</p>
                      <p className="text-gray-300">Motorcrossstraat 123</p>
                      <p className="text-gray-300">8000 Brugge, België</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Telefoon</p>
                      <p className="text-gray-300">+32 123 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-mcpink-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">E-mail</p>
                      <p className="text-gray-300">info@mcmikkola.be</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

