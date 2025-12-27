# Portfolio - Tarkeshwar Sharma

Personal portfolio website showcasing AI/ML engineering projects and experience.

**Live**: [portfolio-weld-seven-71.vercel.app](https://portfolio-weld-seven-71.vercel.app)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Content**: Contentlayer + MDX
- **Styling**: Tailwind CSS
- **Theming**: next-themes (dark/light mode)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
├── content/
│   ├── blog/        # Blog posts (MDX)
│   └── projects/    # Project pages (MDX)
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # React components
│   └── lib/         # Utility functions
└── public/          # Static assets
```

## Adding Content

### Blog Posts
Create MDX files in `content/blog/` with frontmatter:
```yaml
title: "Post Title"
publishedAt: "2024-01-01"
summary: "Brief description"
tags: ["tag1", "tag2"]
```

### Projects
Create MDX files in `content/projects/` with frontmatter:
```yaml
title: "Project Title"
description: "Project description"
publishedAt: "2024-01-01"
tags: ["AI", "Python"]
featured: true  # Optional: show on homepage
```

## License

MIT
