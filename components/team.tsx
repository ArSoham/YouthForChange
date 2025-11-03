import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Team() {
  const team = [
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Quisque Vel Eros",
      role: "Vestibulum Ante",
      bio: "Ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Nulla Porttitor",
      role: "Accumsan Tincidunt",
      bio: "Mauris blandit aliquet elit cras ultricies ligula sed diam nonummy nibh euismod tincidunt.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Ut Wisi Enim",
      role: "Ad Minim Veniam",
      bio: "Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Praesent Luctus",
      role: "Malesuada Metus",
      bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Vivamus Suscipit",
      role: "Tortor Eget Felis",
      bio: "Porttitor volutpat quisque porta volutpat erat quisque erat nulla venenatis cras sed justa.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Etiam Ultricies",
      role: "Nisi Vel Augue",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    },
  ]

  return (
    <section id="team" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-muted flex items-center justify-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
