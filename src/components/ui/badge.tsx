import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:scale-105',
        secondary:
          'border border-primary/20 bg-primary/5 text-primary backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 hover:scale-105',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border/40 hover:border-border',
        glass: 'backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-900/20 hover:scale-105',
        // NEW: Research-focused variant
        research:
          'border border-accent/30 bg-accent/10 text-accent backdrop-blur-sm hover:bg-accent/20 hover:border-accent/50 hover:scale-105 hover:shadow-glow-cyan',
        // NEW: Vibrant gradient variant
        vibrant:
          'border-transparent bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-md hover:shadow-glow-multi hover:scale-105',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
