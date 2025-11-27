import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4)

  return (
    <div className="container max-w-4xl py-12 md:py-16">
      {/* Hero Section - Philschmid Style */}
      <section className="mb-16 md:mb-24">
        <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-tight">
          Tarkeshwar Narayan Sharma
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Senior AI/ML Engineer with 9 years of experience building production AI systems at scale.
          Specializing in Generative AI, RAG architectures, and multilingual NLP.
          Delivered +43% engagement boost, 7.5% conversion uplift, and $420K+ cost savings through intelligent automation.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 tracking-tight">Featured Projects</h2>
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="group">
                <Link href={project.url} className="block space-y-3">
                  <h3 className="text-xl md:text-2xl font-medium group-hover:underline decoration-2 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/projects"
              className="text-sm font-medium hover:underline decoration-2 underline-offset-4"
            >
              View all projects →
            </Link>
          </div>
        </section>
      )}

      {/* About Preview */}
      <section className="mb-16 md:mb-24">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 tracking-tight">About</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            I'm an AI/ML Engineer passionate about building intelligent systems that solve real-world problems.
            My expertise spans the full AI lifecycle—from research and prototyping to production deployment and optimization.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Currently focused on Generative AI, RAG systems, and AI agents. I've led cross-regional teams,
            architected enterprise-scale AI solutions, and delivered measurable business impact across logistics,
            e-commerce, media, and enterprise sectors.
          </p>
          <Link
            href="/about"
            className="inline-block mt-4 text-sm font-medium hover:underline decoration-2 underline-offset-4"
          >
            Read more about me →
          </Link>
        </div>
      </section>
    </div>
  )
}
