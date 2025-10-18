"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function MegaMenu() {
  return (
    <div className="relative group">
      <button
        className="px-3 py-2 text-sm font-medium hover:text-foreground/90 text-foreground"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Services
      </button>
      <div
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[920px] max-w-[92vw] mega-surface p-6 grid grid-cols-4 gap-6 z-50"
        role="menu"
        aria-label="Services menu"
      >
        {[
          {
            title: "Development",
            items: [
              ["WordPress Development", "/services#development"],
              ["Shopify Development", "/services#development"],
              ["App Development", "/services#development"],
              ["Custom Development", "/services#development"],
            ],
          },
          {
            title: "Graphics",
            items: [
              ["Logo Designing", "/services#graphics"],
              ["Banner Designing", "/services#graphics"],
              ["Business Card", "/services#graphics"],
              ["Video Editing", "/services#graphics"],
            ],
          },
          {
            title: "AI & Automation",
            items: [
              ["Chatbots & Assistants", "/services#ai"],
              ["Workflow Automation", "/services#ai"],
              ["AI Content", "/services#ai"],
              ["Data Dashboards", "/services#ai"],
            ],
          },
        ].map((col) => (
          <div key={col.title} className="mega-col">
            <h4 className="mb-3 text-sm">{col.title}</h4>
            <ul className="text-sm">
              {col.items.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="mega-link">
                    <span>{label}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
