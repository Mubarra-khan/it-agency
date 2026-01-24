"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    image: "/images/service-web.jpg",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    image: "/images/service-mobile.jpg",
  },
  {
    id: "ecommerce",
    title: "Shopify & E-commerce",
    description: "Complete e-commerce solutions with secure payment integration and inventory management.",
    image: "/images/service-ecommerce.jpg",
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins tailored to your business needs.",
    image: "/images/service-wordpress.jpg",
  },
  {
    id: "seo",
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies to improve visibility and drive organic traffic.",
    image: "/images/service-seo.jpg",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Engaging social campaigns that build brand awareness and customer loyalty.",
    image: "/images/service-social.jpg",
  },
  {
    id: "content",
    title: "Content Writing",
    description: "Compelling copy and content that resonates with your target audience.",
    image: "/images/service-content.jpg",
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Professional video production and editing for marketing and promotional content.",
    image: "/images/service-video.jpg",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and delightful digital experiences.",
    image: "/images/service-uiux.jpg",
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    description: "Distinctive visual identities that communicate your brand story effectively.",
    image: "/images/service-branding.jpg",
  },
  {
    id: "animation",
    title: "2D & 3D Animation",
    description: "Captivating animations that bring your ideas and products to life.",
    image: "/images/service-animation.jpg",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure and up-to-date.",
    image: "/images/service-maintenance.jpg",
  },
]

export { services }

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => new Set([...prev, index]))
              }
            })
          },
          { threshold: 0.2 }
        )
        observer.observe(card)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="services" className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What We Offer</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/70">
            Comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el }}
              className={`transform transition-all duration-700 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-16"
                    : "opacity-0 translate-x-16"
              }`}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              <Card 
                className="group bg-card/10 border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 overflow-hidden h-full"
              >
                <CardContent className="p-0">
                  {/* Service Image - Placeholder, easily replaceable */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-foreground/5">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
