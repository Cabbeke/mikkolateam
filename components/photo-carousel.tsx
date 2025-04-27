"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface PhotoCarouselProps {
  photos: {
    src: string
    alt: string
  }[]
  interval?: number
}

export default function PhotoCarousel({ photos, interval = 5000 }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))
    }, interval)

    return () => {
      resetTimeout()
    }
  }, [currentIndex, interval, photos.length])

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-medium bg-black/60 p-2 rounded-md inline-block">{photo.alt}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-mcpink-500" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ga naar foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

