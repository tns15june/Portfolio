'use client'
import { Badge } from '@/components/ui/badge'
import { Linkedin, Github, Mail, Brain, Cpu, Globe, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'

const skills = {
  'Research & Methodology': ['Experimental Design', 'Ablation Studies', 'Benchmark Evaluation', 'Technical Writing', 'A/B Testing', 'Model Interpretability'],
  'Deep Learning & NLP': ['PyTorch', 'Transformers', 'BERT/GPT Fine-tuning', 'Sequence Modeling', 'Attention Mechanisms', 'NER', 'Text Classification'],
  'Generative AI & LLMs': ['RAG Architecture', 'Prompt Engineering', 'AI Agents', 'Claude/GPT/LLaMA', 'Vector Databases', 'Embedding Models'],
  'MLOps & Infrastructure': ['AWS SageMaker', 'Model Deployment', 'MLflow', 'Distributed Training', 'Docker', 'Databricks', 'Apache Spark'],
  'Languages & Frameworks': ['Python', 'FastAPI', 'LangChain', 'LlamaIndex', 'Hugging Face', 'spaCy', 'FAISS', 'ChromaDB'],
}

const researchInterests = [
  {
    icon: Brain,
    title: 'Retrieval-Augmented Generation',
    description: 'Advancing RAG architectures for enterprise knowledge systems with focus on multilingual retrieval and hallucination reduction',
  },
  {
    icon: Cpu,
    title: 'Agentic AI Systems',
    description: 'Exploring multi-agent coordination, tool-use frameworks, and autonomous decision-making in complex environments',
  },
  {
    icon: Globe,
    title: 'Multilingual NLP',
    description: 'Cross-lingual transfer learning, Arabic-English semantic understanding, and low-resource language adaptation',
  },
  {
    icon: FlaskConical,
    title: 'Applied LLM Research',
    description: 'Prompt engineering methodologies, in-context learning optimization, and domain-specific fine-tuning strategies',
  },
]

const experience = [
  {
    company: 'Topsource',
    role: 'Senior AI Engineer',
    period: 'November 2023 – Present',
    location: 'Remote, India',
  },
  {
    company: 'Statusneo',
    role: 'Consultant - Data Scientist',
    period: 'June 2021 – November 2023',
    location: 'Gurugram, India',
  },
  {
    company: 'Ayurs Infotech Pvt Ltd',
    role: 'Senior Data Analyst',
    period: 'March 2017 – January 2021',
    location: 'New Delhi, India',
  },
]

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      {/* Header */}
      <AnimatedSection animation="fade-up">
        <div className="space-y-6 mb-16 md:mb-24">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight gradient-text-shimmer inline-block">
            About Me
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Tarkeshwar Narayan Sharma, a Senior AI Engineer with 9 years of experience building production AI systems at enterprise scale. I specialize in <span className="text-primary font-medium">Generative AI</span>, <span className="text-secondary font-medium">RAG architectures</span>, and <span className="text-accent font-medium">multilingual NLP</span>, with a proven track record of delivering measurable business impact.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://linkedin.com/in/tarkeshwar-narayan-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/tns15june"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:tns15june@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Research Interests - NEW SECTION */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight gradient-text-shimmer inline-block">
            Research Interests
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {researchInterests.map((interest, index) => (
              <AnimatedSection key={interest.title} animation="scale-up" delay={index * 100}>
                <div className="p-5 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-glow-purple transition-all duration-300 hover-lift h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                      <interest.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Professional Summary */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Professional Summary</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <strong className="text-foreground">Generative AI, RAG systems, and multilingual NLP</strong> with a proven track record leading cross-regional teams. My work has delivered measurable business impact:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><span className="text-primary font-semibold">+43% engagement boost</span> through personalized recommendation systems</li>
              <li><span className="text-secondary font-semibold">7.5% conversion uplift</span> via multilingual spell correction system</li>
              <li><span className="text-accent font-semibold">$420K+ cost savings</span> through intelligent automation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full AI lifecycle—from research and prototyping to production deployment and optimization. I've architected enterprise-scale AI solutions across logistics, e-commerce, media, and utility sectors.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Key Achievements */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Key Achievements</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:border-primary/40 transition-all hover-lift">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Top 10 Winner</strong> - AWS Generative AI Innovation Center Partner Alliance Innovation MCP Hackathon (2025)
              </p>
            </div>
            <div className="p-4 rounded-xl border border-secondary/20 bg-gradient-to-r from-secondary/5 to-transparent hover:border-secondary/40 transition-all hover-lift">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Top 20 Rank Holder</strong> - RGPV University for excellent academic performance (2014)
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <AnimatedSection key={exp.company} animation="slide-left" delay={index * 100}>
                <div className="p-4 rounded-xl border border-border/40 hover:border-primary/40 transition-all hover-lift bg-card/50">
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company} • {exp.period}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Skills & Expertise</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <AnimatedSection key={category} animation="fade-up" delay={catIndex * 50}>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs hover-scale hover:shadow-glow-purple transition-all">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Teaching & Mentorship */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Teaching & Mentorship</h2>
          <div className="space-y-6">
            <div className="p-4 rounded-xl border border-border/40 hover:border-primary/40 transition-all hover-lift bg-card/50">
              <h3 className="text-lg font-medium">Generative AI Mentor</h3>
              <p className="text-sm text-muted-foreground">
                Analytics Vidhya • Nov 2023 – Nov 2024
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Mentored students in GenAI Pinnacle & AI BlackBelt Plus Programs, implementing state-of-the-art AI models for real-world problems
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border/40 hover:border-secondary/40 transition-all hover-lift bg-card/50">
              <h3 className="text-lg font-medium">Data Science Instructor</h3>
              <p className="text-sm text-muted-foreground">
                Skillovilla • Feb 2023 – Apr 2023
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Led hands-on workshops on deep learning & ML, helping students apply data science concepts to industry problems
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection animation="fade-up">
        <section className="mb-16 md:mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Education</h2>
          <div className="p-4 rounded-xl border border-border/40 hover:border-accent/40 transition-all hover-lift bg-card/50">
            <h3 className="text-lg font-medium">Bachelor of Science in Electrical and Electronics Engineering</h3>
            <p className="text-sm text-muted-foreground">
              RGPV University • June 2010 – June 2014
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection animation="fade-up">
        <section className="pt-8 border-t border-border space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight gradient-text-shimmer inline-block">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            I'm always interested in hearing about new opportunities, collaborations, or discussing AI/ML research.
            Feel free to reach out via email at{' '}
            <Link href="mailto:tns15june@gmail.com" className="text-primary hover:underline decoration-2 underline-offset-4 font-medium">
              tns15june@gmail.com
            </Link>
          </p>
        </section>
      </AnimatedSection>
    </div>
  )
}
