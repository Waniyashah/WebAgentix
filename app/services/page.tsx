import type React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Wrench,
  ShoppingBag,
  Smartphone,
  Shield,
  RefreshCcw,
  Code,
  Palette,
  Badge,
  BadgePercent,
  Video,
  Bot,
  Workflow,
  Sparkles,
  LineChart,
} from "lucide-react"

function SectionHeader({
  pill,
  title,
  blurb,
}: {
  pill: string
  title: string
  blurb: string
}) {
  return (
    <header className="mb-8 md:mb-12" data-aos="fade-up">
      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{pill}</span>
      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pretty text-foreground" data-aos="fade-up" data-aos-delay="100">{title}</h1>
        <p className="max-w-xl text-muted-foreground md:ml-6 md:border-l md:border-border md:pl-6" data-aos="fade-left" data-aos-delay="200">{blurb}</p>
      </div>
    </header>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  href = "#",
  delay = 0,
}: {
  icon: React.ComponentType<any>
  title: string
  desc: string
  href?: string
  delay?: number
}) {
  return (
    <article 
      className="group rounded-xl border border-border bg-card/60 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          <Link
            href={href}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary"
            aria-label={`Read more about ${title}`}
          >
            Read more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function ServicesPage() {
  return (
    <main className="presentation-bg">
      {/* Development */}
      <section id="development" className="container mx-auto px-4 py-12 md:py-20">
        <SectionHeader
          pill="Development"
          title="Crafting Digital Experiences With Code"
          blurb="We blend design and engineering to build fast, scalable, secure solutions—from websites and mobile apps to custom platforms optimized for user experience."
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <ServiceCard
            icon={Wrench}
            title="WordPress Development"
            desc="Fast, secure, and scalable WordPress websites tailored to your goals."
            delay={100}
          />
          <ServiceCard
            icon={ShoppingBag}
            title="Shopify Development"
            desc="High‑converting Shopify stores optimized for performance and sales."
            delay={200}
          />
          <ServiceCard
            icon={Smartphone}
            title="App Development (Android/iOS)"
            desc="Engaging, performant mobile applications for Android and iOS."
            delay={300}
          />
          <ServiceCard
            icon={Shield}
            title="Website Maintenance"
            desc="Security, updates, and monitoring to keep your site running smoothly."
            delay={400}
          />
          <ServiceCard
            icon={RefreshCcw}
            title="Website Revamping"
            desc="Modern redesigns that refresh UX and align with your evolving brand."
            delay={500}
          />
          <ServiceCard
            icon={Code}
            title="Custom Development"
            desc="Bespoke solutions built from scratch for your unique business needs."
            delay={600}
          />
        </div>
      </section>

      {/* Graphics */}
      <section id="graphics" className="container mx-auto px-4 py-12 md:py-20">
        <SectionHeader
          pill="Graphics"
          title="Unique Logos And Captivating Banners For Your Brand"
          blurb="We bring brands to life with impactful visuals—from logos and banners to UI/UX and video edits—crafted to communicate clearly and stand out."
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <ServiceCard
            icon={Palette}
            title="Logo Designing"
            desc="Memorable, scalable logo systems that reinforce your identity."
            delay={100}
          />
          <ServiceCard
            icon={BadgePercent}
            title="Banner Designing"
            desc="Eye‑catching banners designed to boost visibility and clicks."
            delay={200}
          />
          <ServiceCard
            icon={Badge}
            title="Business Card Designing"
            desc="Premium, professional cards that reflect your brand with clarity."
            delay={300}
          />
          <ServiceCard
            icon={Video}
            title="Video Editing"
            desc="Engaging edits that elevate your brand story across platforms."
            delay={400}
          />
        </div>
      </section>

      {/* AI & Automation */}
      <section id="ai" className="container mx-auto px-4 py-12 md:py-20">
        <SectionHeader
          pill="AI & Automation"
          title="Smarter Workflows, Faster Results"
          blurb="Use AI to scale impact—automate repetitive tasks, personalize experiences, and unlock insights with dashboards powered by your data."
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <ServiceCard
            icon={Bot}
            title="Chatbots & Assistants"
            desc="AI chat for web and apps that answers questions and captures leads 24/7."
            delay={100}
          />
          <ServiceCard
            icon={Workflow}
            title="Workflow Automation"
            desc="Automate data entry, notifications, approvals, and tool handoffs."
            delay={200}
          />
          <ServiceCard
            icon={Sparkles}
            title="AI Content & Personalization"
            desc="On‑brand content ideas and dynamic experiences tailored to each user."
            delay={300}
          />
          <ServiceCard
            icon={LineChart}
            title="Data Dashboards & Insights"
            desc="Real‑time metrics and reports to guide decisions and reveal opportunities."
            delay={400}
          />
        </div>
      </section>
    </main>
  )
}
