import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FoundingMembers() {
  const foundingMembers = [
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      bio: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Sed Do Eiusmod",
      role: "Tempor Incididunt",
      bio: "Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Ullamco Laboris",
      role: "Nisi Ut Aliquip",
      bio: "Ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Cillum Dolore",
      role: "Eu Fugiat Nulla",
      bio: "Pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Mollit Anim Id",
      role: "Est Laborum Sed",
      bio: "Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Totam Rem Aperiam",
      role: "Eaque Ipsa Quae",
      bio: "Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim.",
    },
  ]

  return (
    <section id="founding-members" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {foundingMembers.map((member, idx) => (
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
