import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'

const skills = [
  'Python', 'PyTorch', 'TensorFlow', 'LLMs', 'RAG', 'Prompt Engineering',
  'AWS SageMaker', 'Databricks', 'FastAPI', 'Vector Databases', 'NLP',
  'Multilingual AI', 'LangChain', 'LlamaIndex', 'Claude', 'GPT', 'Gemini'
]

export default function Home() {
  return (
    <div className="container max-w-5xl py-12 md:py-24 lg:py-32">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Tarkeshwar Sharma
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
            Senior AI/ML Engineer | Generative AI & LLM Specialist | RAG Systems Expert
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-[700px] leading-relaxed">
          Senior AI/ML Engineer with <span className="text-foreground font-semibold">8.5 years</span> of experience designing, training, and shipping production models at enterprise scale.
          Specializing in Generative AI, RAG systems, and multilingual NLP with proven track record of delivering
          <span className="text-foreground font-semibold"> +43% engagement boost</span>,
          <span className="text-foreground font-semibold"> 7.5% conversion uplift</span>, and
          <span className="text-foreground font-semibold"> $420K+ cost savings</span> through intelligent automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Read Blog
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tarkeshwar-sharma-resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com/in/tarkeshwar-narayan-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/tarkeshwar-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:tns15june@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Skills/Expertise Section */}
      <section className="mt-16 md:mt-24 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-16 md:mt-24 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Achievements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-6 space-y-2">
            <p className="text-3xl font-bold text-primary">Top 10</p>
            <p className="text-sm text-muted-foreground">
              AWS Generative AI Innovation Center Partner Alliance Innovation MCP Hackathon Winner (2025)
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 space-y-2">
            <p className="text-3xl font-bold text-primary">8.5 Years</p>
            <p className="text-sm text-muted-foreground">
              Building production AI/ML systems at enterprise scale across multiple industries
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Sections */}
      <section className="mt-16 md:mt-24 space-y-6">
        <div className="rounded-lg border border-border p-8 text-center space-y-4">
          <h3 className="text-xl font-semibold">Featured Projects & Blog Posts Coming Soon</h3>
          <p className="text-muted-foreground">
            Check back soon for detailed case studies on RAG systems, multilingual AI, and LLM optimization.
          </p>
        </div>
      </section>
    </div>
  )
}
