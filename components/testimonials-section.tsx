"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }

      if (sliderRef.current && sliderRef.current.children[0]) {
        const width = sliderRef.current.children[0].clientWidth + 24
        setSlideWidth(width)
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

  useEffect(() => {
    if (isPaused || slideWidth === 0) return

    let animationFrame: number
    let startTime: number
    const totalWidth = slideWidth * testimonials.length
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      const elapsed = timestamp - startTime
      const moveDistance = (elapsed * 0.025) % totalWidth
      
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${moveDistance}px)`
      }
      
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [slideWidth, isPaused])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-wider text-accent"
          >
            Testimonials
          </motion.p>
          
          <motion.h2 
            variants={fadeInUp}
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-2xl mx-auto text-muted-foreground"
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hidden md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hidden md:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div 
            className="overflow-hidden mx-4 md:mx-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              ref={sliderRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 group"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02, duration: 0.4 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <Card className="relative bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all duration-300 h-full overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-1 bg-accent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div 
                      className="absolute inset-0 bg-accent/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <CardContent className="p-8 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Quote className="h-8 w-8 text-accent/20 mb-4" />
                      </motion.div>
                      
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Star className="h-4 w-4 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-4 text-sm"
                        whileHover={{ color: "#111827" }}
                        transition={{ duration: 0.2 }}
                      >
                        "{testimonial.content}"
                      </motion.p>
                      
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-accent/10"
                          whileHover={{ 
                            scale: 1.15,
                            ringColor: "#6c5ce7",
                            ringWidth: "3px",
                            transition: { type: "spring", stiffness: 400 }
                          }}
                        >
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <div>
                          <motion.h4 
                            className="font-semibold text-gray-900 dark:text-gray-100 text-sm"
                            whileHover={{ x: 3, color: "#6c5ce7" }}
                            transition={{ duration: 0.2 }}
                          >
                            {testimonial.name}
                          </motion.h4>
                          <motion.p 
                            className="text-xs text-gray-500 dark:text-gray-400"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {testimonial.role}
                          </motion.p>
                        </div>
                      </div>

                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent/10 to-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <motion.button
                key={i}
                type="button"
                onClick={() => {
                  setCurrentIndex(i)
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 2000)
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-accent" : "w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}