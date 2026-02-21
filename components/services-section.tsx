"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

const services = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    image: "/images/service-web.jpg",
    icon: "💻",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    image: "/images/service-mobile.jpg",
    icon: "📱",
  },
  {
    id: "ecommerce",
    title: "Shopify & E-commerce",
    description: "Complete e-commerce solutions with secure payment integration and inventory management.",
    image: "/images/service-ecommerce.jpg",
    icon: "🛒",
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins tailored to your business needs.",
    image: "/images/service-wordpress.jpg",
    icon: "🔷",
  },
  {
    id: "seo",
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies to improve visibility and drive organic traffic.",
    image: "/images/service-seo.jpg",
    icon: "📈",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Engaging social campaigns that build brand awareness and customer loyalty.",
    image: "/images/service-social.jpg",
    icon: "📱",
  },
  {
    id: "content",
    title: "Content Writing",
    description: "Compelling copy and content that resonates with your target audience.",
    image: "/images/service-content.jpg",
    icon: "✍️",
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Professional video production and editing for marketing and promotional content.",
    image: "/images/service-video.jpg",
    icon: "🎬",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and delightful digital experiences.",
    image: "/images/service-uiux.jpg",
    icon: "🎨",
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    description: "Distinctive visual identities that communicate your brand story effectively.",
    image: "/images/service-branding.jpg",
    icon: "✨",
  },
  {
    id: "animation",
    title: "2D & 3D Animation",
    description: "Captivating animations that bring your ideas and products to life.",
    image: "/images/service-animation.jpg",
    icon: "🎭",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure and up-to-date.",
    image: "/images/service-maintenance.jpg",
    icon: "🔧",
  },
]

export { services }

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-primary relative overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #6c5ce7 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #6c5ce7 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #6c5ce7 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #6c5ce7 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-sm font-semibold uppercase tracking-wider text-accent"
            whileHover={{ scale: 1.05 }}
          >
            What We Offer
          </motion.p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Our Services
          </h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-primary-foreground/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive digital solutions to help your business thrive in the modern marketplace.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
              custom={index}
              className="h-full"
            >
              <Card 
                className="group bg-card/10 border-primary-foreground/10 hover:border-accent/50 transition-colors duration-500 overflow-hidden h-full relative"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image Container with Overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-foreground/5">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Icon Overlay */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-4xl filter drop-shadow-lg">{service.icon}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <motion.h3 
                      className="text-lg font-semibold text-primary-foreground mb-2 relative inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-primary-foreground/70 flex-1"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    {/* Read More Indicator */}
                    <motion.div 
                      className="mt-4 flex items-center text-accent text-sm font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      <span>Learn more</span>
                      <motion.span 
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ 
                      x: "100%", 
                      opacity: 0.5,
                      transition: { duration: 0.8 }
                    }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}