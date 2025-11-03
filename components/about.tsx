export default function About() {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Launched" },
    { number: "10,000+", label: "Lives Impacted" },
    { number: "8+", label: "Years Active" },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">About Youth for Change</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded at Karachi University, we are a collective of passionate students committed to bridging the gap
            between academic learning and real-world social impact.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To mobilize and empower youth to create sustainable solutions for social, economic, and environmental
              challenges facing our communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that young voices matter, and together we can drive meaningful change through collaborative
              projects, capacity building, and advocacy.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A generation of empowered youth leaders who are equipped with the knowledge, skills, and determination to
              transform their communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a society where young people are actively engaged in decision-making and innovation for a more
              just, equitable, and sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
