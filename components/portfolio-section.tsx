"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

// Portfolio items using only existing images
const portfolioData: Record<string, Array<{ id: number; title: string; description: string; image: string }>> = {
  "All": [],
  "Web Design": [
    { id: 1, title: "TechStart Platform", description: "Modern SaaS platform dashboard", image: "/images/portfolio/web-1.jpg" },
    { id: 2, title: "Corporate Site", description: "Professional business website", image: "/images/portfolio/web-2.jpg" },
  ],
  "Mobile Apps": [
    { id: 3, title: "FoodieApp", description: "Food delivery application", image: "/images/portfolio/mobile-1.jpg" },
    { id: 4, title: "HealthTrack", description: "Fitness tracking app", image: "/images/portfolio/mobile-2.jpg" },
  ],
  "E-commerce": [
    { id: 5, title: "Fashion Store", description: "Luxury fashion marketplace", image: "/images/portfolio/ecom-1.jpg" },
    { id: 6, title: "Tech Shop", description: "Electronics store", image: "/images/portfolio/ecom-2.jpg" },
  ],
  "Branding": [
    { id: 7, title: "GreenLife", description: "Eco brand identity", image: "/images/portfolio/brand-1.jpg" },
    { id: 8, title: "TechCorp", description: "Tech company branding", image: "/images/portfolio/brand-2.jpg" },
  ],
  "SEO": [
    { id: 9, title: "Local Business SEO", description: "Local search optimization", image: "/images/portfolio/seo-1.jpg" },
  ],
  "UI/UX": [
    { id: 10, title: "Banking App UX", description: "Financial app redesign", image: "/images/portfolio/uiux-1.jpg" },
  ],
}

// Populate "All" category with items from all categories
Object.keys(portfolioData).forEach(key => {
  if (key !== "All") {
    portfolioData["All"].push(...portfolioData[key])
  }
})

const categories = Object.keys(portfolioData)

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(12)

  const filteredProjects = portfolioData[activeCategory] || []
  const displayedProjects = filteredProjects.slice(0, visibleCount)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisibleCount(12)
  }

  return (
    <section id="portfolio" className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Featured Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/70">
            Explore our latest projects and see how we help businesses achieve their digital goals.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full transition-all duration-300 hover:scale-105 ${
                activeCategory === category 
                  ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                  : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden bg-card/10 border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
              style={{ animationDelay: `${(index % 8) * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-foreground/5">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-5 bg-card/5">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {activeCategory === "All" ? 
                    Object.keys(portfolioData).find(key => 
                      key !== "All" && portfolioData[key].some(p => p.id === project.id)
                    ) : activeCategory
                  }
                </span>
                <h3 className="mt-2 text-lg font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/60">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-105 transition-all duration-300"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
