"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

export function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-xs md:text-sm font-semibold uppercase tracking-wider text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.p>
          
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary-foreground">
            Our Services
          </h2>
          
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-primary-foreground/70 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive digital solutions to help your business thrive in the modern marketplace.
          </motion.p>
        </motion.div>

        {/* Services Grid - Mobile pe 1 column, tablet pe 2, desktop pe 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: isMobile ? 0 : index * 0.05 }}
              className="h-full"
            >
              <Card 
                className="group bg-card/10 border-primary-foreground/10 overflow-hidden h-full hover:border-accent/50 transition-all duration-300"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 md:p-6 flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-primary-foreground mb-2 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-primary-foreground/70 line-clamp-3 md:line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}