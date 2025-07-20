"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

// EDITABLE CONTENT - Modify these values to change the contact section
const CONTACT_CONFIG = {
  badge: "Get In Touch",
  headline: "Ready to Start Your Project?",
  subheadline: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  contactInfo: [
    {
      icon: Mail,
      title: "Email",
      value: "hello@vaani.com",
      href: "mailto:hello@vaani.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Business St, Suite 100\nCity, State 12345",
      href: "#",
    },
  ],
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    submitButton: "Send Message",
  },
}

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{CONTACT_CONFIG.badge}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{CONTACT_CONFIG.headline}</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">{CONTACT_CONFIG.subheadline}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {CONTACT_CONFIG.contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{CONTACT_CONFIG.form.nameLabel}</Label>
                  <Input id="name" placeholder={CONTACT_CONFIG.form.namePlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{CONTACT_CONFIG.form.emailLabel}</Label>
                  <Input id="email" type="email" placeholder={CONTACT_CONFIG.form.emailPlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{CONTACT_CONFIG.form.messageLabel}</Label>
                  <Textarea id="message" placeholder={CONTACT_CONFIG.form.messagePlaceholder} rows={5} required />
                </div>
                <Button type="submit" className="w-full">
                  {CONTACT_CONFIG.form.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
