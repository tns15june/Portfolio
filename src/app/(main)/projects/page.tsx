import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Projects',
  description: 'A collection of my AI/ML projects and technical work',
}

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  if (projects.length === 0) {
    return (
      <div className="container max-w-4xl py-12 md:py-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-8 tracking-tight">Projects</h1>
        <p className="text-muted-foreground">No projects yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="space-y-6 mb-16 md:mb-24">
        <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A collection of AI/ML projects spanning Generative AI, RAG systems, computer vision, and NLP
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.slug} className="group">
            <Link href={project.url} className="block space-y-3">
              <h2 className="text-2xl md:text-3xl font-medium group-hover:underline decoration-2 underline-offset-4">
                {project.title}
              </h2>
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
    </div>
  )
}
