import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: {
    default: 'Tarkeshwar Sharma - Senior AI/ML Engineer',
    template: '%s | Tarkeshwar Sharma',
  },
  description: 'Senior AI/ML Engineer specializing in Generative AI, RAG systems, and multilingual NLP. 8.5 years building production ML systems at scale.',
  keywords: ['AI Engineer', 'Machine Learning', 'Generative AI', 'RAG', 'LLM', 'NLP', 'Deep Learning', 'MLOps'],
  authors: [{ name: 'Tarkeshwar Sharma' }],
  creator: 'Tarkeshwar Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tarkeshwar-sharma.vercel.app',
    title: 'Tarkeshwar Sharma - Senior AI/ML Engineer',
    description: 'Senior AI/ML Engineer specializing in Generative AI, RAG systems, and multilingual NLP.',
    siteName: 'Tarkeshwar Sharma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarkeshwar Sharma - Senior AI/ML Engineer',
    description: 'Senior AI/ML Engineer specializing in Generative AI, RAG systems, and multilingual NLP.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
