'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'About Me', href: '/about' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container max-w-4xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-lg font-medium">Tarkeshwar</span>
          </Link>
          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-foreground',
                  pathname === item.href || pathname?.startsWith(item.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
