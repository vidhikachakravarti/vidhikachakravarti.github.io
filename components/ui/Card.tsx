import { cn } from '@/lib/utils'

interface CardProps {
  theme?: 'default' | 'elevated' | 'bordered' | 'dark'
  padding?: 'small' | 'medium' | 'large'
  hover?: boolean
  children: React.ReactNode
  className?: string
}

export function Card({
  theme = 'default',
  padding = 'medium',
  hover = false,
  children,
  className,
}: CardProps) {
  const themes = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-md',
    bordered: 'bg-neutral-50 border border-neutral-200',
    dark: 'bg-neutral-900 border border-neutral-800 text-white',
  }

  const paddings = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  }

  const hoverStyles = hover
    ? 'transition-all duration-200 hover:shadow-xl hover:-translate-y-1'
    : ''

  return (
    <div
      className={cn(
        'rounded-lg',
        themes[theme],
        paddings[padding],
        hoverStyles,
        className
      )}
    >
      {children}
    </div>
  )
}
