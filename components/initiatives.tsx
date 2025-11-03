"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Shield, Users } from "lucide-react"

export default function Initiatives() {
  const initiatives = [
    {
      id: "narrative-nexus",
      icon: BookOpen,
      title: "Narrative Nexus",
      description: "Amplifying voices through storytelling and digital media to create social change.",
      slug: "narrative-nexus",
    },
    {
      id: "samrakshyan",
      icon: Shield,
      title: "Samrakshyan",
      description: "Protecting communities and strengthening lives through comprehensive welfare programs.",
      slug: "samrakshyan",
    },
    {
      id: "yuwa",
      icon: Users,
      title: "YUWA",
      description: "Youth United for Welfare & Advancement - empowering the next generation of leaders.",
      slug: "yuwa",
    },
  ]

  return (
    <section id="initiatives" className="py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Initiatives</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We run diverse programs and initiatives to create tangible impact across multiple sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon
            return (
              <Link key={initiative.id} href={`/initiatives/${initiative.slug}`}>
                <Card className="border-border hover:shadow-lg transition-shadow h-full cursor-pointer hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">{initiative.description}</CardDescription>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <span>Learn More</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
