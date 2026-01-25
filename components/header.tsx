"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { href: "#services", label: "Web Design & Development" },
  { href: "#services", label: "Mobile App Development" },
  { href: "#services", label: "Shopify & E-commerce" },
  { href: "#services", label: "WordPress Development" },
  { href: "#services", label: "SEO & Digital Marketing" },
  { href: "#services", label: "Social Media Marketing" },
  { href: "#services", label: "Content Writing" },
  { href: "#services", label: "Video Editing" },
  { href: "#services", label: "UI/UX Design" },
  { href: "#services", label: "Branding & Graphic Design" },
  { href: "#services", label: "2D & 3D Animation" },
  { href: "#services", label: "Website Maintenance" },
]

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services", hasDropdown: true },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why-us", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`transition-all duration-300 ${
        scrolled 
          ? "bg-primary shadow-lg" 
          : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <span className="text-lg font-bold text-accent-foreground">D</span>
            </div>
            <span className="text-xl font-bold text-primary-foreground">DigitalPro</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.href + link.label} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServicesDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {link.hasDropdown && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 max-h-96 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href + link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-3 text-base font-medium text-primary-foreground/80 hover:text-accent"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {link.label}
                      <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block py-2 text-sm text-primary-foreground/60 hover:text-accent"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-base font-medium text-primary-foreground/80 hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
