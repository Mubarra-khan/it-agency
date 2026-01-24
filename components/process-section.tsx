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
  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Process</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/70">
            A streamlined process designed to deliver exceptional results efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-accent/30" />
              )}
              
              <div className="relative">
                <div className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-accent/10 border-2 border-accent/30 mb-6">
                  <step.icon className="h-12 w-12 text-accent" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-16 -translate-y-2 text-5xl font-bold text-accent/20">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/70 max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
