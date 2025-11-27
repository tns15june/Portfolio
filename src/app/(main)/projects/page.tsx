import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Projects',
  description: 'AI/ML projects and case studies from production systems',
}

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  if (projects.length === 0) {
    return (
      <div className="container max-w-5xl py-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            AI/ML projects and case studies from production systems
          </p>
        </div>
        <div className="mt-12 rounded-lg border border-border p-8 text-center">
          <p className="text-muted-foreground">No projects yet. Check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-5xl py-12">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-muted-foreground">
          AI/ML projects and case studies from production systems
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={project.url}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                {project.company && (
                  <Badge className="w-fit mb-2" variant="outline">
                    {project.company}
                  </Badge>
                )}
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.impact && (
                  <div className="rounded-md bg-primary/10 p-3 text-sm">
                    <p className="font-semibold text-primary">Impact</p>
                    <p className="text-sm mt-1">{project.impact}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
