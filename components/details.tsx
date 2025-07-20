"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-context"

// Multilingual content for Details section
const DETAILS_CONFIG = {
  en: {
    badge: "Event Details",
    headline: "Everything You Need to Know",
    subheadline: "Get all the important information about the event.",
    eventInfo: [
      {
        icon: Calendar,
        title: "Date",
        value: "30th July-1st August, 2025",
      },
      {
        icon: Clock,
        title: "Timing",
        value: "10:00 AM - 5:00 PM",
      },
      {
        icon: MapPin,
        title: "Mode of Conduct",
        value: "Offline",
      },
    ],
    howToApplyTitle: "How to Apply",
    howToApplyText: (
      <>
        To register, visit{" "}
        <a
          href="https://atalacademy.aicte.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          https://atalacademy.aicte.gov.in
        </a>
        , sign up as a participant, go to FDPs → VAANI → July, and search for Application No: 2391150561. Select Narula Institute of Technology as the host institute and apply with the required NOC.
      </>
    ),
  },
  bn: {
    badge: "ইভেন্টের বিবরণ",
    headline: "আপনার জানা দরকার এমন সবকিছু",
    subheadline: "ইভেন্ট সম্পর্কে সমস্ত গুরুত্বপূর্ণ তথ্য পান।",
    eventInfo: [
      {
        icon: Calendar,
        title: "তারিখ",
        value: "৩০শে জুলাই-১লা আগস্ট, ২০২৫",
      },
      {
        icon: Clock,
        title: "সময়",
        value: "সকাল ১০:০০ - বিকেল ৫:০০",
      },
      {
        icon: MapPin,
        title: "পরিচালনার ধরন",
        value: "অফলাইন",
      },
    ],
   howToApplyTitle: "কিভাবে আবেদন করতে হবে",
    howToApplyText: (
      <>
        নিবন্ধন করতে, পরিদর্শন করুন{" "}
        <a
          href="https://atalacademy.aicte.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          https://atalacademy.aicte.gov.in
        </a>
        , অংশগ্রহণকারী হিসেবে সাইন আপ করুন, FDPs → VAANI → জুলাই যান এবং আবেদন নম্বর: 2391150561 অনুসন্ধান করুন। হোস্ট ইনস্টিটিউট হিসাবে Narula Institute of Technology নির্বাচন করুন এবং প্রয়োজনীয় NOC সহ আবেদন করুন।
      </>
    ),
  },
};

export function Details() {
  const { language } = useLanguage() as { language: 'en' | 'bn' };
  const content = DETAILS_CONFIG[language];
  return (
    <section id="details" className="py-16 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{content.badge}</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{content.headline}</h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">{content.subheadline}</p>
        </div>

        {/* Event Information - Only 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {content.eventInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{info.title}</p>
                  <p className="text-xl font-bold">{info.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* How to Apply Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="rounded-xl border border-primary/30 bg-primary/10 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">{content.howToApplyTitle}</h3>
            <p className="text-base text-muted-foreground">{content.howToApplyText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
