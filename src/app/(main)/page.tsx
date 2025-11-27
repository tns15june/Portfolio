import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Zap } from 'lucide-react'

export default function Home() {
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4)

  return (
    <>
      {/* Hero Section with Gradient Mesh */}
      <section className="relative overflow-hidden gradient-mesh min-h-[85vh] flex items-center">
        <div className="container max-w-5xl py-20 md:py-32 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Available Badge */}
            <div className="mb-6 inline-block animate-pulse-glow">
              <Badge variant="glass" className="text-sm py-2 px-4">
                <Sparkles className="w-3 h-3 mr-1.5 inline" />
                Available for Work
              </Badge>
            </div>

            {/* Animated Gradient Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">
                Tarkeshwar Narayan Sharma
              </span>
            </h1>

            {/* Subtitle with Gradient */}
            <p className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
              Senior AI/ML Engineer | Generative AI Specialist
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-3xl">
              Building intelligent systems that solve real-world problems. 9 years of experience designing and shipping production AI systems at enterprise scale, specializing in Generative AI, RAG architectures, and multilingual NLP.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="glass p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all animate-fade-in-up stagger-1 group hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">+43%</div>
                    <div className="text-xs text-muted-foreground">Engagement Boost</div>
                  </div>
                </div>
              </div>

              <div className="glass p-5 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all animate-fade-in-up stagger-2 group hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-secondary to-accent">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">7.5%</div>
                    <div className="text-xs text-muted-foreground">Conversion Uplift</div>
                  </div>
                </div>
              </div>

              <div className="glass p-5 rounded-xl border border-accent/20 hover:border-accent/40 transition-all animate-fade-in-up stagger-3 group hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-primary">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">$420K+</div>
                    <div className="text-xs text-muted-foreground">Cost Savings</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-4">
              <Button asChild size="lg" variant="default">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '1s' }} />
      </section>

      <div className="container max-w-4xl py-12 md:py-16">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.slug}
                  className="group p-6 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={project.url} className="block space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        )}

        {/* About Preview */}
        <section className="mb-16 md:mb-24 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/10">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm an AI/ML Engineer passionate about building intelligent systems that solve real-world problems.
              My expertise spans the full AI lifecycle—from research and prototyping to production deployment and optimization.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              Currently focused on Generative AI, RAG systems, and AI agents. I've led cross-regional teams,
              architected enterprise-scale AI solutions, and delivered measurable business impact across logistics,
              e-commerce, media, and enterprise sectors.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/about">
                Read More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
