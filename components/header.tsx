"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


const NAV_LABELS: Record<'en' | 'bn', { name: string; href: string }[]> = {
  en: [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Details", href: "#details" },
    { name: "Committee", href: "#committee" },
  ],
  bn: [
    { name: "সম্বন্ধে", href: "#about" },
    { name: "বক্তারা", href: "#speakers" },
    { name: "বিস্তারিত", href: "#details" },
    { name: "কমিটি", href: "#committee" },
  ],
};

const HEADER_CONFIG = {
  logo: "Vaani",
  logoImage: "/LOGO image.jpg", // EDIT: Replace with your actual logo path
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage() as { language: 'en' | 'bn'; setLanguage: (lang: 'en' | 'bn') => void };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-primary">{HEADER_CONFIG.logo}</span>
          <div className="w-8 h-8 flex-shrink-0">
            <img
              src={HEADER_CONFIG.logoImage || "/placeholder.svg?height=32&width=32"}
              alt="Vaani Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Language Toggle Button */}
        <Button
          variant="outline"
          size="sm"
          className="ml-4"
          onClick={() => setLanguage(language === "en" ? "bn" : "en")}
        >
          {language === "en" ? "বাংলা" : "English"}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LABELS[language].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              {NAV_LABELS[language].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
