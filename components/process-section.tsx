"use client"

import { motion } from "framer-motion"
import { Search, Paintbrush, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We start by understanding your business, goals, and target audience through in-depth research and consultation.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design & Develop",
    description: "Our team crafts beautiful designs and builds robust solutions using the latest technologies and best practices.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description: "We launch your project and provide ongoing support to help you achieve sustainable growth and success.",
  },
]

export function ProcessSection() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    viewport: { once: true, amount: 0.3 }
  }

  const stepVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    viewport: { once: true }
  }

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    whileInView: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    viewport: { once: true },
    whileHover: { 
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  }

  const numberVariants = {
    initial: { opacity: 0, scale: 0.5, x: 20 },
    whileInView: { 
      opacity: 0.2, 
      scale: 1,
      x: 0,
      transition: { 
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    viewport: { once: true }
  }

  const lineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    whileInView: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.5,
        ease: "easeInOut"
      }
    },
    viewport: { once: true }
  }

  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, #6c5ce7 0%, transparent 30%)",
            "radial-gradient(circle at 80% 80%, #6c5ce7 0%, transparent 30%)",
            "radial-gradient(circle at 20% 80%, #6c5ce7 0%, transparent 30%)",
            "radial-gradient(circle at 80% 20%, #6c5ce7 0%, transparent 30%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-sm font-semibold uppercase tracking-wider text-accent"
            variants={fadeInUp}
          >
            Our Process
          </motion.p>
          
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How We Work
          </h2>
          
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-primary-foreground/70"
            variants={fadeInUp}
          >
            A streamlined process designed to deliver exceptional results efficiently.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="relative text-center group"
              variants={stepVariants}
            >
              {/* Connector line with animation */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-accent/30"
                  variants={lineVariants}
                  style={{ originX: 0 }}
                />
              )}
              
              <div className="relative">
                {/* Icon container */}
                <motion.div 
                  className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-accent/10 border-2 border-accent/30 mb-6 relative overflow-hidden"
                  variants={iconVariants}
                  whileHover="whileHover"
                >
                  <step.icon className="h-12 w-12 text-accent relative z-10" />
                  
                  {/* Pulse effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-accent/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                {/* Step number */}
                <motion.span 
                  className="absolute top-0 right-1/2 translate-x-16 -translate-y-2 text-5xl font-bold text-accent/20"
                  variants={numberVariants}
                >
                  {step.number}
                </motion.span>
              </div>
              
              {/* Title with underline animation */}
              <motion.h3 
                className="text-xl font-semibold mb-3 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {step.title}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-primary-foreground/70 max-w-xs mx-auto"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {step.description}
              </motion.p>

              {/* Bottom shine effect on hover */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-t from-accent/5 to-transparent rounded-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom indicator */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.p 
            className="text-primary-foreground/60 text-sm"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ready to start your project?
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}