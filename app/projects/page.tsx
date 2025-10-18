import Image from "next/image"
import Link from "next/link"

// ✅ Yahan easily new projects add kar sakte hain
const projects = [
  {
    title: "Slonixx",
    description: "Slonixx is a modern furniture e-commerce website offering stylish and elegant home décor pieces for every space.",
    image: "/images/project1.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "OpenAI", "TypeScript"],
    demoLink: "https://furniture-ecommerce-mu.vercel.app/", // Demo ya contact link
  },
  {
    title: "Hekto",
    description: "Hekto is a responsive furniture e-commerce demo site showcasing collections, featured products, discounts, and easy shopping pages.",
    image: "/images/project2.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "Tailwind", "Stripe"],
    demoLink: "https://hack-e-commerce-4.vercel.app/",
  },
  {
    title: "BabyProdcts",
    description: "Baby-Product Ecommerce is a clean, user-friendly online store focused on baby care items.",
    image: "/images/project3.jpg",
    category: "E-commerce",
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoLink: "https://baby-product-ecommerce.vercel.app/",
  },
  {
    title: "CoffeHub",
    description: "A sleek coffee website showcasing premium blends with a modern, minimal design.",
    image: "/images/project4.jpg",
    category: "Food&Beverages",
    technologies: ["Tech1", "Tech2", "Tech3"],
    demoLink: "https://coffee-website-five-gamma.vercel.app/",
  },
  {
    title: "WesternTopTrade",
    description: "Western Top Trade is a recycling company specializing in e-waste and metal recovery services.",
    image: "/images/project5.jpg",
    category: "Recycling / Environmental Services Website",
    technologies: ["Tech1", "Tech2", "Tech3"],
    demoLink: "https://western-top-trade-website-2-dlde.vercel.app/",
  },
  {
    title: "Comforty",
    description: "Chairy is a furniture website showcasing stylish and comfortable chairs for online shopping",
    image: "/images/project6.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "TailwindCss", "SanityCMS"],
    demoLink: "https://hackathon-chair-site.vercel.app/",
  },
]

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden presentation-bg">
      <div className="px-4 py-12 md:px-10 md:py-16">
        {/* Header Section */}
        <header className="space-y-3 text-center" data-aos="fade-up">
          <h1 className="text-balance text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A showcase of our recent work in web development, AI integration, and digital solutions.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className="group card-hover overflow-hidden rounded-xl border bg-card shadow-sm"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=240&width=400&query=Project"}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link 
                    href={project.demoLink} 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Project Link 
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-8">
            <h3 className="text-2xl font-semibold mb-3">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's discuss your ideas and turn them into reality with our expertise.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
