"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-context"

// Multilingual content for Speakers section
const SPEAKERS_CONFIG = {
  en: {
    badge: "Speakers",
    headline: "Meet Our Distinguished Speakers",
    subheadline: "Learn from experts and thought leaders who will share their insights and experiences.",
    speakers: [
      {
        name: "Prof. (Dr.) Debashis De",
        title: "Professor Maulana Abul Kalam Azad University of Technology, WB",
        company: "Tech Innovations Inc.",
        bio: "Leading expert in artificial intelligence and machine learning with over 15 years of experience in the tech industry.",
        image: "./Debashis_De.jpg?height=300&width=300",
        topics: ["AI", "Machine Learning", "Innovation"],
      },
      {
        name: "Prof. (Dr.) Ansuman Banerjee",
        title: "Professor, Advanced Computing and Microelectronics Unit; Indian Statistical Institute",
        company: "StartupVentures",
        bio: "Serial entrepreneur and investor who has founded multiple successful companies and mentored hundreds of startups.",
        image: "/Ansuman_Banerjee.jpg?height=300&width=300",
        topics: ["Entrepreneurship", "Leadership", "Venture Capital"],
      },
      {
        name: "Dr. Tanushyam Chattopadhaya",
        title: "Associate General Manager, Adani Group",
        company: "Future Labs University",
        bio: "Renowned researcher in sustainable technology and environmental innovation with numerous published papers.",
        image: "/Tanushyam_Chattopadhyay.jpeg?height=300&width=300",
        topics: ["Sustainability", "Research", "Innovation"],
      },
      {
        name: "Dr. Arundhati Misra",
        title: "Former Group Director, SAC, Ahmedabad, ISRO",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Arundhati_Misra.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "Mr. Atanu Roy Chowdhury",
        title: "Founder and Director, Gapcrud Private Limited",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Atanu_Roy.jpeg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "Dr. Tirthankar Dasgupta",
        title: "Senior Scientist, TCS Research",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Tirthankar_Dasgupta.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "Prof. (Dr.) Amlan Chakrabarti",
        title: "Professor and Director of A.K. Choudhury School of Information Technology, University of Calcutta, W.B",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Amlan_Chakrabarti.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "Prof. (Dr.) Kaushik Roy",
        title: "Professor in Computer Science, West Bengal State University",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Kaushik_Roy.jpeg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "Mr. Rahul Dutta",
        title: "Executive Director at Price Waterhouse Coopers Private Limited",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Rahul_Dutta.jpeg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "Prof. (Dr.) Sipra Das Bit",
        title: "Professor, Department of Computer Science and Technology, IIEST, Shibpur",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Sipra_Das.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },

    ],
  },
  bn: {
    badge: "বক্তারা",
    headline: "আমাদের বিশিষ্ট বক্তাদের সাথে পরিচিত হোন",
    subheadline: "শিল্প বিশেষজ্ঞ এবং চিন্তাশীল নেতাদের কাছ থেকে জানুন, যারা তাদের অন্তর্দৃষ্টি ও অভিজ্ঞতা ভাগ করবেন।",
    speakers: [
      {
        name: "অধ্যাপক (ডঃ) দেবাশিস দে",
        title: "অধ্যাপক মাওলানা আবুল কালাম আজাদ প্রযুক্তি বিশ্ববিদ্যালয়, পশ্চিমবঙ্গ",
        company: "Tech Innovations Inc.",
        bio: "Leading expert in artificial intelligence and machine learning with over 15 years of experience in the tech industry.",
        image: "./Debashis_De.jpg?height=300&width=300",
        topics: ["AI", "Machine Learning", "Innovation"],
      },
      {
        name: "অধ্যাপক (ডঃ) অংশুমান ব্যানার্জি",
        title: "অধ্যাপক, অ্যাডভান্সড কম্পিউটিং এবং মাইক্রোইলেকট্রনিক্স ইউনিট; ইন্ডিয়ান স্ট্যাটিস্টিক্যাল ইনস্টিটিউট",
        company: "StartupVentures",
        bio: "Serial entrepreneur and investor who has founded multiple successful companies and mentored hundreds of startups.",
        image: "/Ansuman_Banerjee.jpg?height=300&width=300",
        topics: ["Entrepreneurship", "Leadership", "Venture Capital"],
      },
      {
        name: "ডঃ তনুশ্যম চট্টোপাধ্যায়",
        title: "সহযোগী মহাব্যবস্থাপক, আদানি গ্রুপ",
        company: "Future Labs University",
        bio: "Renowned researcher in sustainable technology and environmental innovation with numerous published papers.",
        image: "/Tanushyam_Chattopadhyay.jpeg?height=300&width=300",
        topics: ["Sustainability", "Research", "Innovation"],
      },
      {
        name: "ডঃ অরুন্ধতী মিশ্র",
        title: "প্রাক্তন গ্রুপ ডিরেক্টর, এসএসি, আহমেদাবাদ, ইসরো",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Arundhati_Misra.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "জনাব অতনু রায় চৌধুরী",
        title: "প্রতিষ্ঠাতা ও পরিচালক, গ্যাপক্রাড প্রাইভেট লিমিটেড",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Atanu_Roy.jpeg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "ডঃ তীর্থঙ্কর দাশগুপ্ত",
        title: "সিনিয়র বিজ্ঞানী, টিসিএস গবেষণা",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Tirthankar_Dasgupta.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "অধ্যাপক (ড.) অম্লান চক্রবর্তী",
        title: "কলকাতা বিশ্ববিদ্যালয়, পশ্চিমবঙ্গের এ.কে. চৌধুরী স্কুল অফ ইনফরমেশন টেকনোলজির অধ্যাপক এবং পরিচালক",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Amlan_Chakrabarti.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "অধ্যাপক (ড.) কৌশিক রায়",
        title: "পশ্চিমবঙ্গ রাজ্য বিশ্ববিদ্যালয়ের কম্পিউটার বিজ্ঞান বিভাগের অধ্যাপক",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Kaushik_Roy.jpeg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "মিঃ রাহুল দত্ত",
        title: "প্রাইস ওয়াটারহাউস কুপার্স প্রাইভেট লিমিটেডের নির্বাহী পরিচালক",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Rahul_Dutta.jpeg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
      {
        name: "অধ্যাপক (ড.) শিপ্রা দাস বিট",
        title: "অধ্যাপক, কম্পিউটার বিজ্ঞান ও প্রযুক্তি বিভাগ, IIEST, শিবপুর",
        company: "Creative Solutions",
        bio: "Award-winning designer and creative director known for transforming user experiences across digital platforms.",
        image: "/Sipra_Das.jpg?height=300&width=300",
        topics: ["Design", "UX/UI", "Digital Innovation"],
      },
    ],
  },
};

export function Speakers() {
  const { language } = useLanguage() as { language: 'en' | 'bn' };
  const content = SPEAKERS_CONFIG[language];
  return (
    <section id="speakers" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{content.badge}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{content.headline}</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">{content.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                    <p className="text-primary font-medium">{speaker.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
