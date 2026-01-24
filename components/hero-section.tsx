import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
          Full-Service IT & Digital Agency
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          We Build Digital Solutions
          <span className="block text-accent">That Grow Your Business</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 text-pretty">
          Transform your vision into reality with cutting-edge technology and creative expertise. 
          We deliver results that drive growth and exceed expectations.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="text-base px-8">
            <Link href="#contact">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "150+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-primary-foreground/30 p-2">
          <div className="h-3 w-1 mx-auto rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
