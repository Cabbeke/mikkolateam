import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/motocross-2262325.jpg"
          alt="Motorcross action"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container relative z-20">
        <div className="max-w-3xl animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Welkom bij <span className="gradient-text">MC MIKKOLA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Een motorcross team met passie, opgericht in 1990 door de familie Declercq. Ontdek onze rijders, sponsors en
            evenementen.
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}

