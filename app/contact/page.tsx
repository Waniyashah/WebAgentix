"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      details: (form.elements.namedItem("details") as HTMLTextAreaElement)?.value,
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      
      if (!res.ok) throw new Error(result.error || "Failed to send message")
      
      setStatus("success")
      setMessage("🎉 Message sent successfully! Check your email for confirmation. We'll respond within 1 business day.")
      form.reset()
    } catch (error: any) {
      setStatus("error")
      setMessage(`❌ ${error.message || "Something went wrong. Please try again or email us directly at hello@webagentix.dev"}`)
    }
  }

  return (
    <section className="relative overflow-hidden presentation-bg">
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-12 md:px-10 md:py-16">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">Contact</h1>
          <p className="text-foreground/80">Tell us about your project — we’ll respond within 1 business day.</p>
        </header>

        {/* keep form styling; not part of hero border */}
        <form onSubmit={onSubmit} className="space-y-4 rounded-lg border p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Name</span>
              <input
                name="name"
                required
                className="rounded-md border bg-background px-3 py-2"
                placeholder="Your name"
                aria-label="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Email</span>
              <input
                name="email"
                type="email"
                required
                className="rounded-md border bg-background px-3 py-2"
                placeholder="you@example.com"
                aria-label="Your email"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Project details</span>
            <textarea
              name="details"
              required
              rows={6}
              className="rounded-md border bg-background px-3 py-2"
              placeholder="Goals, timeline, and any links…"
              aria-label="Project details"
            />
          </label>
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send Message"}
          </Button>
          {status !== "idle" && (
            <p role="status" className={status === "error" ? "text-destructive" : "text-foreground/80"}>
              {message}
            </p>
          )}
        </form>

        <div>
          <p className="text-sm text-foreground/70">
            Prefer email? Reach us at{" "}
            <a className="underline" href="mailto:webagentix@gmail.com">
              webagentix@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
