import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, Linkedin, Github, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Senior AI/ML Engineer with 8.5 years of experience building production AI systems at scale',
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
    <div className="container max-w-4xl py-12">
      {/* Header */}
      <div className="space-y-6 mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          About Me
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed">
          Senior AI/ML Engineer with <span className="text-foreground font-semibold">8.5 years</span> of experience designing, training, and shipping production models at enterprise scale.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/tarkeshwar-sharma-resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://linkedin.com/in/tarkeshwar-narayan-sharma" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/tarkeshwar-sharma" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="mailto:tns15june@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-bold">Professional Summary</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            I specialize in <strong>Generative AI, RAG systems, and multilingual NLP</strong> with a proven track record leading cross-regional teams. My work has delivered measurable business impact:
          </p>
          <ul>
            <li><strong>+43% engagement boost</strong> through personalized recommendation systems</li>
            <li><strong>7.5% conversion uplift</strong> via multilingual spell correction system</li>
            <li><strong>$420K+ cost savings</strong> through intelligent automation</li>
          </ul>
          <p>
            Currently seeking Principal AI Engineer roles to architect next-generation AI systems that drive $50M+ business impact.
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold">Key Achievements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-6 space-y-2">
            <p className="text-3xl font-bold text-primary">Top 10</p>
            <p className="text-sm text-muted-foreground">
              AWS Generative AI Innovation Center Partner Alliance Innovation MCP Hackathon Winner (2025)
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 space-y-2">
            <p className="text-3xl font-bold text-primary">Top 20</p>
            <p className="text-sm text-muted-foreground">
              Rank Holder at RGPV University for excellent academic performance (2014)
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.company} className="border-l-2 border-primary pl-4 space-y-1">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-sm font-medium text-primary">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period} • {exp.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold">Skills & Expertise</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching & Mentorship */}
      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold">Teaching & Mentorship</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Generative AI Mentor | Analytics Vidhya</h3>
            <p className="text-sm text-muted-foreground">Nov 2023 – Nov 2024 • Remote, Gurugram</p>
            <p className="text-sm">
              Mentored students in GenAI Pinnacle & AI BlackBelt Plus Programs, implementing state-of-the-art AI models for real-world problems
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Data Science Instructor | Skillovilla</h3>
            <p className="text-sm text-muted-foreground">Feb 2023 – Apr 2023 • Remote, Bengaluru</p>
            <p className="text-sm">
              Led hands-on workshops on deep learning & ML, helping students apply data science concepts to industry problems
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="border-l-2 border-primary pl-4 space-y-1">
          <h3 className="text-lg font-semibold">Bachelor of Science in Electrical and Electronics Engineering</h3>
          <p className="text-sm font-medium text-primary">RGPV University</p>
          <p className="text-sm text-muted-foreground">June 2010 – June 2014 • Bhopal, Madhya Pradesh</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg border border-border bg-muted/50 p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, collaborations, or just chatting about AI/ML.
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href="mailto:tns15june@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tarkeshwar-sharma-resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
