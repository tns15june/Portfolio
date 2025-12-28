'use client'
import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Zap, Brain, Cpu, Globe, Briefcase, MessageSquare } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function Home() {
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4)

  const stats = [
    { icon: TrendingUp, value: '+43%', label: 'Engagement Boost', gradient: 'from-primary to-secondary' },
    { icon: Zap, value: '7.5%', label: 'Conversion Uplift', gradient: 'from-secondary to-accent' },
    { icon: DollarSign, value: '$420K+', label: 'Cost Savings', gradient: 'from-accent to-primary' },
  ]

  const researchAreas = [
    { icon: Brain, label: 'RAG Systems' },
    { icon: Cpu, label: 'AI Agents' },
    { icon: Globe, label: 'Multilingual NLP' },
  ]

  return (
    <>
      {/* Hero Section with Gradient Mesh */}
      <section className="relative overflow-hidden gradient-mesh min-h-[85vh] flex items-center">
        <div className="container max-w-5xl py-20 md:py-32 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Availability Badges */}
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="animate-glow-pulse-intense rounded-full">
                <Badge variant="glass" className="text-sm py-2 px-4">
                  <Briefcase className="w-3 h-3 mr-1.5 inline animate-icon-bounce" />
                  Open to Top AI Roles
                </Badge>
              </div>
              <div className="animate-glow-pulse-intense rounded-full" style={{ animationDelay: '0.5s' }}>
                <Badge variant="glass" className="text-sm py-2 px-4">
                  <MessageSquare className="w-3 h-3 mr-1.5 inline animate-icon-bounce" />
                  Available for Consulting
                </Badge>
              </div>
            </div>

            {/* Animated Gradient Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text-shimmer whitespace-nowrap">
                Tarkeshwar Narayan Sharma
              </span>
            </h1>

            {/* Research-focused Subtitle */}
            <p className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
              AI Research & Engineering | Building Novel AI Systems at Scale
            </p>

            {/* Research Areas Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {researchAreas.map((area, index) => (
                <div
                  key={area.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <area.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{area.label}</span>
                </div>
              ))}
            </div>

            {/* Description - Research framing */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-3xl">
              Bridging research and production: 9 years designing novel AI architectures and shipping them at enterprise scale. Specializing in <span className="text-primary font-medium">Generative AI</span>, <span className="text-secondary font-medium">RAG systems</span>, and <span className="text-accent font-medium">multilingual NLP</span>.
            </p>

            {/* Stats Cards with Enhanced Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} animation="scale-up" delay={index * 100}>
                  <div className={`glass p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all group hover-lift hover-glow`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-4">
              <Button asChild size="lg" variant="default" className="hover-glow">
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
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float opacity-25" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float opacity-25" style={{ animationDelay: '2s' }} />
      </section>

      <div className="container max-w-4xl py-12 md:py-16">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <AnimatedSection animation="fade-up">
            <section className="mb-16 md:mb-24">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 tracking-tight gradient-text-shimmer inline-block">
                Featured Projects
              </h2>
              <div className="space-y-8">
                {featuredProjects.map((project, index) => (
                  <AnimatedSection key={project.slug} animation="slide-left" delay={index * 100}>
                    <article
                      className="group p-6 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300 hover-lift hover-glow bg-card/50 backdrop-blur-sm"
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
                            <Badge key={tag} variant="secondary" className="text-xs hover-scale">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </Link>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button asChild variant="outline" size="lg" className="hover-glow">
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* About Preview */}
        <AnimatedSection animation="fade-up">
          <section className="mb-16 md:mb-24 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 hover:border-primary/30 transition-all hover-glow">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 tracking-tight gradient-text-shimmer inline-block">
              About Me
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm an AI Engineer passionate about advancing the field through both research and production systems.
                My expertise spans the full AI lifecycle—from experimental prototyping to scalable deployment.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                Currently focused on <span className="text-primary font-medium">Retrieval-Augmented Generation</span>, <span className="text-secondary font-medium">Agentic AI systems</span>, and <span className="text-accent font-medium">multilingual NLP</span>. I've led cross-regional teams and delivered measurable impact across logistics, e-commerce, and enterprise sectors.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" className="hover-glow">
                <Link href="/about">
                  Read More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  )
}
