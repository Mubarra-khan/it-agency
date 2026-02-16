"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    avatar: "/images/testimonials/avatar-1.jpg",
    content: "Working with DigitalPro transformed our online presence completely. Their team delivered a stunning website that exceeded our expectations and significantly improved our conversion rates.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartupHub",
    avatar: "/images/testimonials/avatar-2.jpg",
    content: "The mobile app they developed for us is flawless. Professional team, excellent communication, and they delivered on time. Highly recommend their services to anyone looking for quality work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    avatar: "/images/testimonials/avatar-3.jpg",
    content: "Their SEO and digital marketing expertise helped us achieve a 200% increase in organic traffic. The team is knowledgeable, responsive, and truly invested in our success.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, InnovateTech",
    avatar: "/images/testimonials/avatar-4.jpg",
    content: "Exceptional quality and attention to detail. They rebuilt our entire platform with modern technologies, and the results speak for themselves. Our user engagement has tripled.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Owner, Fashion Boutique",
    avatar: "/images/testimonials/avatar-5.jpg",
    content: "The e-commerce solution they built for us is beautiful and functional. Sales have increased by 150% since launch. Their support team is always there when we need them.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Miller",
    role: "Director, MediaGroup",
    avatar: "/images/testimonials/avatar-6.jpg",
    content: "From branding to web development, they handled everything perfectly. Our new brand identity has received incredible feedback from clients and partners alike.",
    rating: 5,
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "VP Marketing, HealthPlus",
    avatar: "/images/testimonials/avatar-7.jpg",
    content: "Their content strategy and social media marketing transformed our digital presence. We've seen a 300% increase in engagement and lead generation.",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Kim",
    role: "Founder, EduTech",
    avatar: "/images/testimonials/avatar-8.jpg",
    content: "The UI/UX design for our learning platform is intuitive and engaging. Student satisfaction scores have improved dramatically since the redesign.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Continuous right to left animation (never stops)
  useEffect(() => {
    let animationFrame: number
    let startTime: number
    const slideWidth = sliderRef.current ? sliderRef.current.children[0]?.clientWidth + 24 : 0 // 24px gap
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      const elapsed = timestamp - startTime
      // Speed: 0.05px per ms (50px per second) - adjust this value to change speed
      const moveDistance = elapsed * 0.05
      
      if (sliderRef.current && slideWidth > 0) {
        const totalWidth = slideWidth * testimonials.length
        const offset = moveDistance % totalWidth
        sliderRef.current.style.transform = `translateX(-${offset}px)`
      }
      
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, []) // Empty dependency array - animation never stops

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {"Don't just take our word for it. Here's what our clients have to say about working with us."}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card/90 border-border hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card/90 border-border hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Testimonials Slider - Continuous Animation */}
          <div className="overflow-hidden mx-4 md:mx-8">
            <div 
              ref={sliderRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {/* Double the testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card 
                  key={`${testimonial.id}-${index}`} 
                  className="relative bg-card border-border hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-accent/20 mb-4" />
                    
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full bg-muted overflow-hidden ring-2 ring-accent/20">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}