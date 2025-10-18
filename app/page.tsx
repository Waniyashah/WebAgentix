"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden presentation-bg">
        <div className="grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-10 md:py-16">
          <div className="space-y-5" data-aos="fade-up">
            <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Where Smart Design Meets Intelligent Technology.
            </h1>
            <p className="text-pretty text-foreground/80">
              WebAgentix is a next‑generation web and AI development agency. We build sleek, fast, and future‑ready web
              solutions with intelligent automation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects">
                <Button>View Projects</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Get a Quote</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <Image
              src="/images/webagentix-logo-2025.jpeg"
              width={340}
              height={340}
              alt="WebAgentix brand mark"
              className="rounded-xl bg-background/60 p-6 backdrop-blur brand-glow animate-float-slow"
              priority
            />
          </div>
        </div>
      </section>

      <ServicesCarousel />

      <section aria-labelledby="cta" className="rounded-xl bg-primary px-6 py-8 text-primary-foreground" data-aos="fade-up">
        <h2 id="cta" className="text-balance text-2xl font-semibold">
          Ready to build the future?
        </h2>
        <p className="mt-2 text-foreground/90 text-primary-foreground/90">
          Tell us about your idea — we'll turn it into an intelligent digital experience.
        </p>
        <div className="mt-4">
          <Link href="/contact">
            <Button variant="secondary">Start a Project</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const services = [
    {
      title: "Web Development",
      desc: "Next.js, TypeScript, Tailwind — performance-first web apps.",
    },
    {
      title: "AI Integration",
      desc: "OpenAI SDK, chatbots, agentic AI, and automation.",
    },
    {
      title: "Full-Stack Solutions",
      desc: "Frontend + Backend with clean, scalable architectures.",
    },
    {
      title: "Graphic Design",
      desc: "Creative visual designs, branding, and user interface aesthetics that captivate and engage.",
    },
    {
      title: "Digital Marketing",
      desc: "Strategic campaigns, SEO optimization, and social media management to grow your reach.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const getVisibleServices = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length
      visible.push(services[index])
    }
    return visible
  }

  return (
    <section aria-labelledby="capabilities" className="space-y-6" data-aos="fade-up">
      <div className="flex items-center justify-between">
        <h2 id="capabilities" className="text-xl font-semibold">
          What we do
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors animate-float-slow"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors animate-float-slow"
            aria-label="Next service"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
        >
          {services.map((item, index) => (
            <div 
              key={`${item.title}-${index}`} 
              className="card-hover rounded-lg border p-5 min-w-0 flex-shrink-0"
              style={{ width: 'calc(33.333% - 0.667rem)' }}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
