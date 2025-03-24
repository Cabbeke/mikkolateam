"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Controleer of we op de homepage zijn
  const isHomePage = pathname === "/"

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = "auto"
    }
  }

  // Functie om de juiste link te genereren
  const getNavLink = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-lg" : "bg-black/70"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">MC MIKKOLA</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden focus-visible:focus"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href={getNavLink("over-ons")} className="nav-link focus-visible:focus" onClick={handleNavClick}>
            Over Ons
          </Link>
          <Link href="/piloten" className="nav-link focus-visible:focus" onClick={handleNavClick}>
            Onze Piloten
          </Link>
          <Link href="/sponsors" className="nav-link focus-visible:focus" onClick={handleNavClick}>
            Onze Sponsors
          </Link>
          <Link href="/kalender" className="nav-link focus-visible:focus" onClick={handleNavClick}>
            Kalender 2025
          </Link>
          <Link href={getNavLink("contact")} className="nav-link focus-visible:focus" onClick={handleNavClick}>
            Contact
          </Link>
          <Link href="/bestuur" className="nav-link focus-visible:focus">
            Bestuur
          </Link>
        </nav>

        {/* Mobile navigation - fixed to not overlap content */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden"
            style={{ top: "64px", height: "calc(100vh - 64px)" }}
          >
            <nav className="container flex flex-col py-8">
              <Link
                href={getNavLink("over-ons")}
                className="py-4 text-xl font-medium text-white hover:text-mcpink-500 border-b border-gray-800 focus-visible:focus animate-fadeIn"
                onClick={handleNavClick}
                style={{ animationDelay: "0.1s" }}
              >
                Over Ons
              </Link>
              <Link
                href="/piloten"
                className="py-4 text-xl font-medium text-white hover:text-mcpink-500 border-b border-gray-800 focus-visible:focus animate-fadeIn"
                onClick={handleNavClick}
                style={{ animationDelay: "0.2s" }}
              >
                Onze Piloten
              </Link>
              <Link
                href="/sponsors"
                className="py-4 text-xl font-medium text-white hover:text-mcpink-500 border-b border-gray-800 focus-visible:focus animate-fadeIn"
                onClick={handleNavClick}
                style={{ animationDelay: "0.3s" }}
              >
                Onze Sponsors
              </Link>
              <Link
                href="/kalender"
                className="py-4 text-xl font-medium text-white hover:text-mcpink-500 border-b border-gray-800 focus-visible:focus animate-fadeIn"
                onClick={handleNavClick}
                style={{ animationDelay: "0.4s" }}
              >
                Kalender 2025
              </Link>
              <Link
                href={getNavLink("contact")}
                className="py-4 text-xl font-medium text-white hover:text-mcpink-500 border-b border-gray-800 focus-visible:focus animate-fadeIn"
                onClick={handleNavClick}
                style={{ animationDelay: "0.5s" }}
              >
                Contact
              </Link>
              <Link
                href="/bestuur"
                className="py-4 text-xl font-medium text-white hover:text-mcpink-500 focus-visible:focus animate-fadeIn"
                onClick={handleNavClick}
                style={{ animationDelay: "0.6s" }}
              >
                Bestuur
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

