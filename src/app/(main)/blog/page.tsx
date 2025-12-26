import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'

export const metadata = {
  title: 'Blog',
  description: 'Thoughts and writings on AI, machine learning, and software engineering',
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  if (posts.length === 0) {
    return (
      <div className="container max-w-4xl py-12 md:py-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-8 tracking-tight">Blog</h1>
        <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="space-y-6 mb-16 md:mb-24">
        <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Thoughts and writings on AI, machine learning, and software engineering
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={post.url} className="block space-y-3">
              <div className="flex items-baseline justify-between gap-x-4 flex-wrap">
                <h2 className="text-2xl md:text-3xl font-medium group-hover:underline decoration-2 underline-offset-4 flex-1">
                  {post.title}
                </h2>
                <time
                  dateTime={post.publishedAt}
                  className="text-sm text-muted-foreground whitespace-nowrap"
                >
                  {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                </time>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {post.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
