import type React from "react"
import { Button } from "@/components/ui/button"
import { Bot, Code2, Palette, Megaphone } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section with Header */}
      <section className="relative overflow-hidden presentation-bg">
        <div className="text-center pt-8 md:pt-12 pb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4" data-aos="fade-up">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover our story, mission, and the passionate team driving digital innovation
          </p>
        </div>
        <div className="grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-10 md:py-16">
          {/* Left: Image */}
          <div className="relative" data-aos="fade-right">
            <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
              <img
                src="/download.jpg"
                alt="WebAgentix team crafting digital solutions"
                className="h-full w-full object-contain p-4"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="space-y-5 md:space-y-6" data-aos="fade-left">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              ABOUT COMPANY
            </span>

            <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
              Driving Digital Excellence
              <br /> With WebAgentix
            </h1>

            <p className="text-pretty text-muted-foreground">
              We turn ideas into impactful digital realities. As your trusted growth partner, we combine modern web
              technologies with AI to craft high‑performing experiences that drive outcomes.
            </p>

          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="space-y-8 md:space-y-10 px-4 py-12 md:px-10 md:py-16">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            WHY CHOOSE US
          </span>
          <h2 className="text-balance text-2xl font-bold leading-tight md:text-4xl">
            Empower Your Digital Presence
            <br /> With Trusted Expertise
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Bot className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="AI & Automation"
            desc="Intelligent chatbots and agentic AI solutions that streamline operations and enhance customer experiences."
          />
          <FeatureCard
            icon={<Code2 className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="Development"
            desc="From concept to production, we build scalable, fast, and reliable web applications."
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="Graphic"
            desc="User‑centric interfaces that blend aesthetics with usability for delightful experiences."
          />
          <FeatureCard
            icon={<Megaphone className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="Digital Marketing"
            desc="Impactful campaigns that connect with audiences and drive measurable growth."
          />
        </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl border bg-background/60 p-3">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
