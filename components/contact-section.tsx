"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Get In Touch</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {"Let's Start Your Project"}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/70">
            Ready to transform your digital presence? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">Contact Information</h3>
              <p className="text-primary-foreground/70">
                {"Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:devasad24@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-foreground group-hover:text-accent transition-colors">Email</h4>
                  <p className="text-primary-foreground/70">devasad24@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/923481388124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-foreground group-hover:text-accent transition-colors">WhatsApp</h4>
                  <p className="text-primary-foreground/70">+9203481388124</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-foreground group-hover:text-accent transition-colors">Location</h4>
                  <p className="text-primary-foreground/70">123 Business Ave, Suite 100<br />San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-2xl">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">{"Thank you for reaching out. We'll get back to you soon."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background focus:ring-2 focus:ring-accent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background focus:ring-2 focus:ring-accent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background resize-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full hover:scale-[1.02] transition-all duration-300" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
