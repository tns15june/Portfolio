import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, parseISO } from 'date-fns'
import type { Post, Project } from 'contentlayer/generated'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return format(parseISO(date), 'MMMM dd, yyyy')
}

export function groupByMonth<T extends { publishedAt: string }>(
  items: T[]
): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const monthYear = format(parseISO(item.publishedAt), 'MMMM yyyy')
    if (!acc[monthYear]) {
      acc[monthYear] = []
    }
    acc[monthYear].push(item)
    return acc
  }, {} as Record<string, T[]>)
}

export function getAllTags(items: (Post | Project)[]): string[] {
  const tagSet = new Set<string>()
  items.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}
