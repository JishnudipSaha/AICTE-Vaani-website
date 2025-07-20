import Link from "next/link"

// EDITABLE CONTENT - Modify these values to change the footer content
const FOOTER_CONFIG = {
  logo: "Vaani",
  description: "",
  quickLinks: [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Details", href: "#details" },
    { name: "Committee", href: "#committee" },
  ],
  contacts: [
    {
      name: "Dr. Chandrima Chakrabarti",
      email: "chandrima.chakrabarti@nit.ac.in",
      phone: "+91 98367 55275",
    },
    {
      name: "Dr. Nabanita Das",
      email: "nabanita.das@nit.ac.in",
      phone: "+91 98041 54252",
    },
  ],
  address: "81, Nilgunj Road, Agarpara, Kolkata - 700 109, West Benga",
  copyright: "© 2024 Vaani. All rights reserved.",
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">{FOOTER_CONFIG.logo}</span>
            </Link>
            <p className="text-muted-foreground max-w-md">{FOOTER_CONFIG.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_CONFIG.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              {FOOTER_CONFIG.contacts.map((person, idx) => (
                <div key={idx} className="mb-2">
                  <div className="font-medium text-primary">{person.name}</div>
                  <div>
                    <a href={`mailto:${person.email}`} className="hover:text-primary transition-colors">
                      {person.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${person.phone}`} className="hover:text-primary transition-colors">
                      {person.phone}
                    </a>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <div className="font-medium text-primary">Address</div>
                <div>{FOOTER_CONFIG.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>{FOOTER_CONFIG.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
