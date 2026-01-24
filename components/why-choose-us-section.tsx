"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Award, DollarSign, Zap, Heart } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring years of industry experience to every project we undertake.",
  },
  {
    icon: Award,
    title: "Quality Work",
    description: "We maintain the highest standards of quality in every deliverable, ensuring excellence.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive pricing without compromising on quality. Value-driven solutions for every budget.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient workflows and dedicated teams ensure timely delivery of all projects.",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "Your success is our priority. We go above and beyond to exceed expectations.",
  },
]

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Success Is Our Mission
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We combine creativity, technology, and strategy to deliver solutions that make a real impact on your business growth.
            </p>
            
            <div className="mt-10 space-y-6">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.title} 
                  className={`flex gap-4 group transform transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <reason.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">{reason.title}</h3>
                    <p className="mt-1 text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Placeholder image - easily replaceable */}
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-2xl">
              <img
                src="/images/team.jpg"
                alt="Our expert team collaborating"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-accent/30 -z-10" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-2xl bg-primary/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
