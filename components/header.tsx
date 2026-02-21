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
      className={`transition-all duration-500 ${
        scrolled 
          ? "bg-primary shadow-lg py-2" 
          : "bg-primary/95 backdrop-blur-sm py-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with hover effect */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/50">
              <span className="text-lg font-bold text-accent-foreground transition-transform duration-300 group-hover:scale-110">D</span>
            </div>
            <span className="text-xl font-bold text-primary-foreground transition-all duration-300 group-hover:text-accent group-hover:tracking-wider">
              DigitalPro
            </span>
          </Link>

          {/* Desktop Navigation */}
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
                  className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:text-accent hover:scale-110 relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  {link.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-accent" />
                  )}
                </Link>
                
                {link.hasDropdown && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 max-h-96 overflow-y-auto">
                      {services.map((service, index) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-card-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:pl-6 hover:scale-105 relative group"
                          style={{ animationDelay: `${index * 30}ms` }}
                        >
                          <span className="relative">
                            {service.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent-foreground transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 relative overflow-hidden group"
            >
              <Link href="#contact">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground transition-all duration-300 hover:text-accent hover:scale-110 hover:rotate-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href + link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-3 text-base font-medium text-primary-foreground/80 transition-all duration-300 hover:text-accent hover:pl-2 group"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronDown className={`h-5 w-5 transition-all duration-300 ${mobileServicesOpen ? "rotate-180 text-accent" : ""} group-hover:text-accent group-hover:scale-110`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2 space-y-1 animate-in slide-in-from-left duration-300">
                        {services.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block py-2 text-sm text-primary-foreground/60 transition-all duration-300 hover:text-accent hover:pl-2 hover:scale-105 relative group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="relative">
                              {service.label}
                              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-base font-medium text-primary-foreground/80 transition-all duration-300 hover:text-accent hover:pl-2 hover:scale-105 relative group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <Button 
              asChild 
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 relative overflow-hidden group"
            >
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}