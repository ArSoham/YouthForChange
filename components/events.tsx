import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Events() {
  const events = [
    {
      date: "Dec 15, 2024",
      title: "Youth Leadership Summit",
      location: "Karachi University Main Hall",
      description:
        "An annual gathering of young changemakers to share ideas, network, and plan collaborative initiatives.",
      image: "/youth-leadership-conference-hall.jpg",
    },
    {
      date: "Dec 22, 2024",
      title: "Community Service Day",
      location: "Multiple Locations",
      description: "Join us as we organize community cleanup drives and educational activities in underserved areas.",
      image: "/community-service-volunteers.png",
    },
    {
      date: "Jan 10, 2025",
      title: "Skills Workshop Series",
      location: "Digital & On-Campus",
      description:
        "Free workshops covering entrepreneurship, digital marketing, leadership, and social impact planning.",
      image: "/skills-training-workshop.jpg",
    },
  ]

  return (
    <section id="events" className="py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events and be part of the movement for change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <Card key={idx} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {event.location}
                </div>
                <CardDescription className="mb-4">{event.description}</CardDescription>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
