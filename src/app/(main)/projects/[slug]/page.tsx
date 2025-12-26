import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink, Github } from 'lucide-react'
import { Mdx } from '@/components/mdx/mdx-components'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      publishedTime: project.publishedAt,
      tags: project.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    },
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-12">
      <div className="space-y-4 mb-8">
        {project.company && (
          <Badge variant="outline">{project.company}</Badge>
        )}

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={project.publishedAt}>
              {formatDate(project.publishedAt)}
            </time>
          </div>
        </div>

        {project.impact && (
          <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
            <p className="text-sm font-semibold text-primary mb-1">Impact</p>
            <p className="text-sm">{project.impact}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="flex gap-3">
            {project.github && (
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button asChild variant="outline" size="sm">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Mdx code={project.body.code} />
      </div>
    </article>
  )
}
