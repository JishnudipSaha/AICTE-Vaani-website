"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-context"

// Multilingual content for Committee section
const COMMITTEE_CONFIG = {
  en: {
    badge: "Committee",
    headline: "Meet Our Organizing Committee",
    subheadline: "Dedicated professionals working behind the scenes to make this event a success.",
    committees: [
      {
        title: "Executive Committee",
        members: [
          {
            name: "Dr. Chandrima Chakrabarti",
            role: "Head, Department of CSE Data Science",
            organization: "Coordinator, AICTE VAANI Workshop",
            image: "/Chandrima.jpg?height=200&width=200",
            email: "jennifer@example.com",
            linkedin: "#",
          },
          {
            name: "Dr. Nabanita Das",
            role: "Department of CSE Data Science",
            organization: "Co-coordinator, AICTE VAANI Workshop",
            image: "/nabanita.jpg?height=200&width=200",
            email: "robert@example.com",
            linkedin: "#",
          },
          {
            name: "Mr. Arindam Das",
            role: "Department of CSE Data Science",
            organization: "Registration Committee Supervisor",
            image: "/Arindom.jpg?height=200&width=200",
            email: "robert@example.com",
            linkedin: "#",
          },
        ],
      },
      {
        title: "Workshop Committee",
        members: [
          {
            name: "Sardar Taranjit Singh",
            role: "Managing Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "amanda@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Haranjit Singh",
            role: "Joint MD",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Amrik Singh",
            role: "Deputy MD",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Ms. Manpreet Kaur",
            role: "CEO",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Ms. Jaspreet Kaur",
            role: "Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Simarpreet Singh",
            role: "Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Amandeep Singh",
            role: "Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Harjot Singh",
            role: "Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Amanjot Singh",
            role: "Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Sardar Anmol Singh",
            role: "Director",
            organization: "JIS Group",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Prof (Dr.) Soumen Banerjee",
            role: "Principal",
            organization: "NiT",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "Dr. Nidhi Singh",
            role: "Registrar",
            organization: "NiT",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
        ],
      },
    ],
  },
  bn: {
    badge: "কমিটি",
    headline: "আমাদের আয়োজক কমিটির সাথে পরিচিত হোন",
    subheadline: "এই ইভেন্টকে সফল করতে পর্দার আড়ালে কাজ করা নিবেদিত পেশাজীবীরা।",
    committees: [
      {
        title: "এক্সিকিউটিভ কমিটি",
        members: [
          {
            name: "ডাঃ চন্দ্রিমা চক্রবর্তী",
            role: "প্রধান, সিএসই ডেটা সায়েন্স বিভাগ",
            organization: "সমন্বয়কারী, AICTE VAANI কর্মশালা",
            image: "/Chandrima.jpg?height=200&width=200",
            email: "jennifer@example.com",
            linkedin: "#",
          },
          {
            name: "ডঃ নবনীতা দাস",
            role: "সিএসই ডেটা সায়েন্স বিভাগ",
            organization: "কো-অর্ডিনেটর, AICTE VAANI কর্মশালা",
            image: "/nabanita.jpg?height=200&width=200",
            email: "robert@example.com",
            linkedin: "#",
          },
          {
            name: "শ্রী অরিন্দম দাস",
            role: "সিএসই ডেটা সায়েন্স বিভাগ",
            organization: "নিবন্ধন কমিটির সুপারভাইজার মো",
            image: "/Arindom.jpg?height=200&width=200",
            email: "robert@example.com",
            linkedin: "#",
          },
        ],
      },
      {
        title: "কর্মশালা কমিটি",
        members: [
          {
            name: "সরদার তরনজিৎ সিংহ",
            role: "ব্যবস্থাপনা পরিচালক মো",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "amanda@example.com",
            linkedin: "#",
          },
          {
            name: "সরদার হরঞ্জিত সিং",
            role: "যুগ্ম এমডি মো",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "সর্দার আমরিক সিং",
            role: "ডেপুটি এমডি মো",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "শ্রীমতি মনপ্রীত কৌর",
            role: "সিইও",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "মিসেস জসপ্রীত কৌরে",
            role: "পরিচালক",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "সরদার সিমারপ্রীত সিং",
            role: "পরিচালক",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "সরদার অমনদীপ সিং",
            role: "পরিচালক",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "সরদার হরজোত সিং",
            role: "পরিচালক",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "সরদার অমনজোত সিং",
            role: "পরিচালক",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "সর্দার আনমোল সিং",
            role: "পরিচালক",
            organization: "জেআইএস গ্রুপ",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "অধ্যাপক (ড.) সৌমেন ব্যানার্জি",
            role: "অধ্যক্ষ",
            organization: "নারুলা ইনস্টিটিউট অফ টেকনোলজি",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
          {
            name: "ডাঃ নিধি সিং",
            role: "রেজিস্ট্রার",
            organization: "নারুলা ইনস্টিটিউট অফ টেকনোলজি",
            image: "/placeholder.svg?height=200&width=200",
            email: "daniel@example.com",
            linkedin: "#",
          },
        ],
      },
    ],
  },
};

export function Committee() {
  const { language } = useLanguage() as { language: 'en' | 'bn' };
  const content = COMMITTEE_CONFIG[language];
  return (
    <section id="committee" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{content.badge}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{content.headline}</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">{content.subheadline}</p>
        </div>

        <div className="space-y-12">
          {content.committees.map((committee, committeeIndex) => (
            <div key={committeeIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-center">{committee.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {committee.members.map((member, memberIndex) => (
                  <Card key={memberIndex} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        {/* Only show image if not Workshop Committee */}
                        {committee.title !== "Workshop Committee" && committee.title !== "ওয়ার্কশপ কমিটি" && committee.title !== "কর্মশালা কমিটি" ? (
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        ) : null}
                        <div className="flex-1 text-center sm:text-left space-y-2">
                          <div>
                            <h4 className="text-lg font-bold">{member.name}</h4>
                            <p className="text-primary font-medium">{member.role}</p>
                            <p className="text-sm text-muted-foreground">{member.organization}</p>
                          </div>
                          {/* No email or LinkedIn links as requested */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
