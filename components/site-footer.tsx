import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16">
      <div className="bg-primary/15">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/webagentix-logo-2025.jpeg"
                alt="WebAgentix"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="font-semibold">WebAgentix</span>
            </div>
            <p className="text-sm text-foreground/70">
              Your trusted digital growth partner for Web Development, Digital Marketing, AI and Automation, and Creative Design.
            </p>
            <div className="flex items-center gap-3 text-foreground/70">
              <Link href="#" aria-label="Twitter">
                X
              </Link>
              <Link href="#" aria-label="Instagram">
                IG
              </Link>
              <Link href="https://www.linkedin.com/in/web-agentix-ab885038a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">
                in
              </Link>
              <Link href="#" aria-label="Facebook">
                fb
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-3 font-semibold">Useful Links</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="mb-3 font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/services#dev">Development</Link>
              </li>
              <li>
                <Link href="/services#graphics">Graphics</Link>
              </li>
              <li>
                <Link href="/services#marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services#ai">AI & Automation</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-semibold">Contact Details</h4>
            <p className="mb-3 text-sm text-foreground/80">webagentix@gmail.com</p>
            <form className="flex overflow-hidden rounded-md border">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-background px-3 py-2 text-sm outline-none"
                aria-label="Your email address"
              />
              <button type="button" className="bg-primary px-3 text-primary-foreground text-sm">
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-primary/30 py-3 text-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 md:flex-row">
          <p className="text-foreground/80">© {year} WebAgentix. All Rights Reserved.</p>
          <div className="flex gap-4 text-foreground/80">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
