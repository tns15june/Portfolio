# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server (runs contentlayer + next dev concurrently)
npm run build    # Production build (contentlayer build && next build)
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a **Next.js 14 portfolio site** using the App Router with **Contentlayer** for MDX content management.

### Content System
- **Contentlayer** processes MDX files from `content/` directory into type-safe JSON
- Two document types defined in `contentlayer.config.ts`:
  - `Post`: Blog posts from `content/blog/*.mdx` (fields: title, publishedAt, summary, tags, featured, image)
  - `Project`: Projects from `content/projects/*.mdx` (fields: title, description, publishedAt, tags, featured, image, github, demo, company, impact)
- Computed fields: `slug`, `readingTime`, `url`
- Import content via `import { allPosts, allProjects } from 'contentlayer/generated'`

### Routing Structure
- `src/app/layout.tsx` - Root layout with Geist fonts and ThemeProvider
- `src/app/(main)/` - Main route group with Header/Footer
  - `page.tsx` - Homepage with featured projects
  - `about/page.tsx` - About page
  - `blog/page.tsx` and `blog/[slug]/page.tsx` - Blog routes
  - `projects/page.tsx` and `projects/[slug]/page.tsx` - Project routes

### Styling
- **Tailwind CSS** with custom design tokens (CSS variables for theming)
- Custom gradients: `gradient-purple`, `gradient-pink`, `gradient-cyan`, `gradient-rainbow`
- Glow shadows: `shadow-glow-purple`, `shadow-glow-pink`, `shadow-glow-cyan`
- UI components use **class-variance-authority** for variant management
- Dark mode via `next-themes` with class-based switching

### Key Patterns
- Path alias: `@/*` maps to `./src/*`
- `cn()` utility from `src/lib/utils.ts` for merging Tailwind classes
- MDX components customized in `src/components/mdx/mdx-components.tsx`
- Code syntax highlighting via `rehype-pretty-code` with `github-dark`/`github-light` themes
