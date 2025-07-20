import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone, Globe, BarChart, Headphones } from "lucide-react"

// EDITABLE CONTENT - Modify these values to change the services section
const SERVICES_CONFIG = {
  badge: "Our Services",
  headline: "Everything You Need to Succeed",
  subheadline: "Comprehensive solutions designed to help your business thrive in today's competitive market.",
  services: [
    {
      icon: Zap,
      title: "Fast Performance",
      description:
        "Lightning-fast solutions optimized for speed and efficiency to keep your business running smoothly.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and ensure reliable service delivery.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Fully responsive designs that work perfectly across all devices and screen sizes.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your business worldwide with our international infrastructure and support.",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Detailed analytics and reporting to help you make data-driven business decisions.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you whenever you need help.",
    },
  ],
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{SERVICES_CONFIG.badge}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{SERVICES_CONFIG.headline}</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">{SERVICES_CONFIG.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_CONFIG.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
