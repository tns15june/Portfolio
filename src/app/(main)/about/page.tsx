import { Badge } from '@/components/ui/badge'
import { Linkedin, Github, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Me',
  description: 'Senior AI/ML Engineer with 9 years of experience building production AI systems at scale',
}

const skills = {
  'Core AI/ML': ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'MLOps', 'Deep Learning', 'Computer Vision', 'NLP'],
  'Generative AI': ['LLMs (GPT, Claude, LLaMA, Gemini)', 'RAG', 'Prompt Engineering', 'Vector Databases', 'AI Agents'],
  'Emerging Stack': ['LangChain', 'LlamaIndex', 'Strands', 'MCP', 'Hugging Face', 'OpenAI APIs', 'Cohere v3', 'FAISS'],
  'Cloud & MLOps': ['AWS (SageMaker, Bedrock, Lambda)', 'Databricks', 'Apache Spark', 'MLflow', 'Docker'],
  'Frameworks & Tools': ['FastAPI', 'YOLO', 'spaCy', 'Spark NLP', 'ChromaDB', 'PostgreSQL', 'MongoDB'],
}

const experience = [
  {
    company: 'Topsource Worldwide',
    role: 'Senior Data Scientist',
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
      <div className="space-y-6 mb-16 md:mb-24">
        <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
          About Me
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Tarkeshwar Narayan Sharma, a Senior AI/ML Engineer with 9 years of experience building production AI systems at enterprise scale. I specialize in Generative AI, RAG architectures, and multilingual NLP, with a proven track record of delivering measurable business impact.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <Link
            href="https://linkedin.com/in/tarkeshwar-narayan-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/tns15june"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:tns15june@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-16 md:mb-24 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Professional Summary</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            I specialize in <strong>Generative AI, RAG systems, and multilingual NLP</strong> with a proven track record leading cross-regional teams. My work has delivered measurable business impact:
          </p>
          <ul className="text-muted-foreground">
            <li><strong>+43% engagement boost</strong> through personalized recommendation systems</li>
            <li><strong>7.5% conversion uplift</strong> via multilingual spell correction system</li>
            <li><strong>$420K+ cost savings</strong> through intelligent automation</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            My expertise spans the full AI lifecycle—from research and prototyping to production deployment and optimization. I've architected enterprise-scale AI solutions across logistics, e-commerce, media, and utility sectors.
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16 md:mb-24 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Key Achievements</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="leading-relaxed">
            <strong>Top 10 Winner</strong> - AWS Generative AI Innovation Center Partner Alliance Innovation MCP Hackathon (2025)
          </li>
          <li className="leading-relaxed">
            <strong>Top 20 Rank Holder</strong> - RGPV University for excellent academic performance (2014)
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-16 md:mb-24 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.company} className="space-y-2">
              <h3 className="text-xl font-medium">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">
                {exp.company} • {exp.period}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 md:mb-24 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Skills & Expertise</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-medium">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching & Mentorship */}
      <section className="mb-16 md:mb-24 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Teaching & Mentorship</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Generative AI Mentor</h3>
            <p className="text-sm text-muted-foreground">
              Analytics Vidhya • Nov 2023 – Nov 2024
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mentored students in GenAI Pinnacle & AI BlackBelt Plus Programs, implementing state-of-the-art AI models for real-world problems
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Data Science Instructor</h3>
            <p className="text-sm text-muted-foreground">
              Skillovilla • Feb 2023 – Apr 2023
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Led hands-on workshops on deep learning & ML, helping students apply data science concepts to industry problems
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16 md:mb-24 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Education</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Bachelor of Science in Electrical and Electronics Engineering</h3>
          <p className="text-sm text-muted-foreground">
            RGPV University • June 2010 – June 2014
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="pt-8 border-t border-border space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Get in Touch</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I'm always interested in hearing about new opportunities, collaborations, or just chatting about AI/ML.
          Feel free to reach out via email at{' '}
          <Link href="mailto:tns15june@gmail.com" className="hover:underline decoration-2 underline-offset-4">
            tns15june@gmail.com
          </Link>
        </p>
      </section>
    </div>
  )
}
