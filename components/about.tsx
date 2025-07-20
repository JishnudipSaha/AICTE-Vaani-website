"use client"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"

// Multilingual content for About section
const ABOUT_CONFIG = {
  en: {
    badge: "About",
    headline: "About Our Event",
    description:
      "The workshop on 'Application of Data Science and Machine Learning in Smart Computing' in Bengali and English languages aims to promote the vision of AICTE VAANI by making technical education accessible and relatable in regional languages.",
    aboutVaaniHeader: "About Vaani",
    aboutVaani: "Effective Indian development involves local language communication. Indian census claims 122 major languages and 1599 minor languages, 30 of which are spoken by over a million native speakers. Regional languages are needed to convey knowledge and promote learning for Viksit Bharat 2047. This project funds regional technical trends, updates, and innovations conferences, seminars, and workshops. This plan covers 2- to 3-day conferences/seminars/workshops with 50+ attendees.",
    aboutCollegeHeader: "About Department",
    aboutCollege: "The CSE Data Science Department at NIT was established in 2023 to meet the growing demand for professionals in this field. The department offers a B.Tech. program in CSE with a specialization in Data Science. They focus on providing an in-depth understanding of data mining, machine learning, and visualization techniques.",
    highlights: [
      "Inspiring keynote presentations",
      "Interactive workshops and sessions",
      "Networking opportunities with industry leaders",
      "Cutting-edge insights and trends",
      "Collaborative learning environment",
      "Professional development opportunities",
    ],
  },
  bn: {
    badge: "পরিচিতি",
    headline: "আমাদের ইভেন্ট সম্পর্কে",
    description:
      "বাংলা ও ইংরেজি ভাষায় 'স্মার্ট কম্পিউটিংয়ে ডেটা সায়েন্স এবং মেশিন লার্নিংয়ের প্রয়োগ' শীর্ষক কর্মশালার লক্ষ্য হল আঞ্চলিক ভাষায় কারিগরি শিক্ষাকে সহজলভ্য এবং প্রাসঙ্গিক করে তোলার মাধ্যমে AICTE VAANI-এর দৃষ্টিভঙ্গিকে প্রচার করা।",
    aboutVaaniHeader: "ভাণী সম্পর্কে",
    aboutVaani: "কার্যকর ভারতীয় উন্নয়নের জন্য স্থানীয় ভাষা যোগাযোগ জড়িত। ভারতীয় আদমশুমারিতে ১২২টি প্রধান ভাষা এবং ১৫৯৯টি ছোটো ভাষা দাবি করা হয়েছে, যার মধ্যে ৩০টিতে দশ লক্ষেরও বেশি স্থানীয় ভাষাভাষী কথা বলে। ২০৪৭ সালের ভিকসিত ভারত-এর জন্য জ্ঞান পৌঁছে দেওয়ার এবং শেখার প্রচারের জন্য আঞ্চলিক ভাষাগুলির প্রয়োজন। এই প্রকল্পটি আঞ্চলিক প্রযুক্তিগত প্রবণতা, আপডেট এবং উদ্ভাবনী সম্মেলন, সেমিনার এবং কর্মশালার জন্য অর্থায়ন করে। এই পরিকল্পনায় ৫০+ অংশগ্রহণকারীদের সাথে ২ থেকে ৩ দিনের সম্মেলন/সেমিনার/কর্মশালা অন্তর্ভুক্ত রয়েছে।",
    aboutCollegeHeader: "বিভাগ সম্পর্কে",
    aboutCollege: "এই ক্ষেত্রে পেশাদারদের ক্রমবর্ধমান চাহিদা মেটাতে NIT-তে CSE ডেটা সায়েন্স বিভাগটি ২০২৩ সালে প্রতিষ্ঠিত হয়েছিল। এই বিভাগটি ডেটা সায়েন্সে বিশেষীকরণ সহ CSE-তে একটি B.Tech. প্রোগ্রাম অফার করে। তারা ডেটা মাইনিং, মেশিন লার্নিং এবং ভিজ্যুয়ালাইজেশন কৌশলগুলির গভীর ধারণা প্রদানের উপর মনোনিবেশ করে।",
    highlights: [
      "অনুপ্রেরণাদায়ক মূল বক্তব্য উপস্থাপনা",
      "ইন্টারেক্টিভ ওয়ার্কশপ ও সেশন",
      "শিল্প নেতাদের সাথে নেটওয়ার্কিং সুযোগ",
      "সর্বশেষ অন্তর্দৃষ্টি ও প্রবণতা",
      "সহযোগিতামূলক শেখার পরিবেশ",
      "পেশাদার উন্নয়নের সুযোগ",
    ],
  },
};

export function About() {
  const { language } = useLanguage() as { language: 'en' | 'bn' };
  const content = ABOUT_CONFIG[language];
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{content.badge}</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{content.headline}</h2>
            <p className="text-lg text-muted-foreground text-justify">{content.description}</p>
            <div className="flex flex-col gap-6">
              {/* About Vaani Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-primary/30">
                <h3 className="text-xl font-semibold mb-2 text-primary">{content.aboutVaaniHeader}</h3>
                <p className="text-base text-muted-foreground text-justify">{content.aboutVaani}</p>
              </div>
              {/* About Department Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-primary/30">
                <h3 className="text-xl font-semibold mb-2 text-primary">{content.aboutCollegeHeader}</h3>
                <p className="text-base text-muted-foreground text-justify">{content.aboutCollege}</p>
              </div>
            </div>
          </div>
          {/* Right: Highlights */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm invisible">{content.badge}</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight invisible">{content.headline}</h2>
              <p className="text-lg text-muted-foreground invisible">{content.description}</p>
            </div>
            <div className="space-y-4">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
