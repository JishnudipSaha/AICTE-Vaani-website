"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-context"

// Multilingual content for Hero section
const HERO_CONFIG = {
  en: {
    badge: "✨ Welcome to Our Event",
    headline: "AICTE VAANI approved workshop",
    subheadline:
      <b>Application of Data Science and Machine Learning in Smart Computing</b>,
      organizer: (
        <span>
          Organized by <b>Department of CSE-Data Science Narula Institute of Technology under JIS Group</b>
        </span>
      ),
    registerButton: {
      text: <b>Register Now</b>,
      href: "https://atalacademy.aicte.gov.in", // EDIT: Replace with your registration URL
    },
    downloadItems: [
      {
        name: <b>AICTE VAANI Brochure</b>,
        href: "/AICTE VAANI_Brochure_NIT.pdf",
        filename: "AICTE VAANI Brochure.pdf",
      },
      {
        name: <b>VAANI Invitation Card</b>,
        href: "/VAANI Invitation card.pdf",
        filename: "VAANI Invitation Card.pdf",
      },
      {
        name: <b>AICTE VAANI Participant NOC Annexure</b>,
        href: "/AICTE_VAANI_Participant_NOC_Annexure.pdf",
        filename: "AICTE VAANI Participant NOC Annexure.pdf",
      },
      {
        name: <b>AICTE-VAANI Schedule</b>,
        href: "/AICTE-VAANI_Schedule_NIT.pdf",
        filename: "AICTE-VAANI Schedule.pdf",
      },
    ],
    downloadsLabel: <b>Downloads</b>,
    heroImage: "/NiT dp.jpeg?height=600&width=800",
  },
  bn: {
    badge: "✨ আমাদের ইভেন্টে স্বাগতম",
    headline: "AICTE VAANI অনুমোদিত কর্মশালা",
    subheadline:
      <b>স্মার্ট কম্পিউটিংয়ে ডেটা সায়েন্স এবং মেশিন লার্নিংয়ের প্রয়োগ</b>,
    organizer: (
      <span>
        আয়োজক: <b>জেআইএস গ্রুপের অধীনে সিএসই-ডেটা সায়েন্স বিভাগ নারুলা ইনস্টিটিউট অফ টেকনোলজি</b>
      </span>
    ),
    registerButton: {
      text: <b>এখনই নিবন্ধন করুন</b>,
      href: "https://atalacademy.aicte.gov.in", // EDIT: Replace with your registration URL
    },
    downloadItems: [
      {
        name: <b>AICTE VAANI ব্রোশার</b>,
        href: "/AICTE VAANI_Brochure_NIT.pdf",
        filename: "AICTE VAANI ব্রোশার.pdf",
      },
      {
        name: <b>VAANI আমন্ত্রণ কার্ড</b>,
        href: "/VAANI Invitation card.pdf",
        filename: "VAANI আমন্ত্রণ কার্ড.pdf",
      },
      {
        name: <b>AICTE VAANI অংশগ্রহণকারী NOC সংযুক্তি</b>,
        href: "/AICTE_VAANI_Participant_NOC_Annexure.pdf",
        filename: "AICTE VAANI অংশগ্রহণকারী NOC সংযুক্তি.pdf",
      },
      {
        name: <b>AICTE-VAANI সময়সূচী</b>,
        href: "/AICTE-VAANI_Schedule_NIT.pdf",
        filename: "AICTE-VAANI সময়সূচী.pdf",
      },
    ],
    downloadsLabel: <b>ডাউনলোডসমূহ</b>,
    heroImage: "/NiT dp.jpeg?height=600&width=800",
  },
};

export function Hero() {
  const { language } = useLanguage() as { language: 'en' | 'bn' };
  const content = HERO_CONFIG[language];
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{content.badge}</div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.headline}</h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">{content.subheadline}</p>
              {content.organizer && (
                <div className="text-base text-muted-foreground max-w-[600px]">{content.organizer}</div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a
                  href={content.registerButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  {content.registerButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline" className="inline-flex items-center bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    {content.downloadsLabel}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {content.downloadItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <a href={item.href} download={item.filename} className="flex items-center w-full cursor-pointer">
                        <Download className="mr-2 h-4 w-4" />
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src={content.heroImage || "/placeholder.svg"}
                alt="Hero illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
