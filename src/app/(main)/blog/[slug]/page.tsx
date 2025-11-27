import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar } from 'lucide-react'
import { Mdx } from '@/components/mdx/mdx-components'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime.text}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
