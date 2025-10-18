import Image from "next/image"

const team = [
  { name: "Alex Carter", role: "Full‑Stack Developer", img: "/headshot-developer.jpg" },
  { name: "Riley Morgan", role: "AI Engineer", img: "/headshot-ai-engineer.jpg" },
  { name: "Jordan Lee", role: "Designer", img: "/headshot-designer.jpg" },
]

export default function TeamPage() {
  return (
    <section className="relative overflow-hidden presentation-bg">
      <div className="px-4 py-12 md:px-10 md:py-16">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">Our Team</h1>
          <p className="text-foreground/80">Small, focused, and quality‑obsessed.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="card-hover rounded-lg p-5 text-center">
              <div className="flex justify-center">
                <Image
                  src={person.img || "/placeholder.svg?height=120&width=120&query=Headshot"}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <h2 className="mt-3 font-medium">{person.name}</h2>
              <p className="text-sm text-foreground/70">{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
