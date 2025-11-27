import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock } from 'lucide-react'

export const metadata = {
  title: 'Blog',
  description: 'Technical articles on AI, ML, and software engineering',
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  if (posts.length === 0) {
    return (
      <div className="container max-w-5xl py-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">
            Technical articles on AI, ML, and software engineering
          </p>
        </div>
        <div className="mt-12 rounded-lg border border-border p-8 text-center">
          <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-5xl py-12">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Technical articles on AI, ML, and software engineering
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={post.url}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime.text}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
