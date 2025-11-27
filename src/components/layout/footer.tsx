import Link from 'next/link'
import { Github, Linkedin, Mail, Rss } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tarkeshwar-narayan-sharma',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tarkeshwar-sharma',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:tns15june@gmail.com',
    icon: Mail,
  },
  {
    name: 'RSS',
    href: '/api/rss',
    icon: Rss,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by Tarkeshwar Sharma. © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.name !== 'RSS' ? '_blank' : undefined}
                rel={link.name !== 'RSS' ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
