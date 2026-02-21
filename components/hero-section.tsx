"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image with zoom animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Grid pattern overlay with pulse animation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p 
          variants={fadeInUp}
          className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent"
        >
          Full-Service IT & Digital Agency
        </motion.p>

        {/* Main Heading with letter animation */}
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We Build Digital Solutions
          </motion.span>
          <motion.span 
            className="block text-accent relative inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            That Grow Your Business
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 text-pretty"
        >
          Transform your vision into reality with cutting-edge technology and creative expertise. 
          We deliver results that drive growth and exceed expectations.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="lg" variant="secondary" asChild className="text-base px-8 group relative overflow-hidden">
              <Link href="#contact">
                <span className="relative z-10">Get a Free Consultation</span>
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent relative overflow-hidden group">
              <Link href="#portfolio">
                <span className="relative z-10">View Our Work</span>
                <motion.span
                  className="absolute inset-0 bg-primary-foreground/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Stats with counter animation */}
        <motion.div 
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "150+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center group"
            >
              <motion.div 
                className="text-3xl font-bold text-accent sm:text-4xl relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {stat.value}
                <motion.span 
                  className="absolute -inset-2 bg-accent/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <div className="mt-1 text-sm text-primary-foreground/70 group-hover:text-primary-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-14 w-8 rounded-full border-2 border-primary-foreground/30 p-2 backdrop-blur-sm">
          <motion.div 
            className="h-3 w-1 mx-auto rounded-full bg-primary-foreground/50"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}