import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'secondary-dark' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  children,
  className,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  const variants = {
    primary: `
      bg-accent-600 text-white
      hover:bg-accent-700 hover:shadow-lg hover:-translate-y-0.5
      focus:ring-accent-500
    `,
    secondary: `
      bg-white text-neutral-900 border-2 border-neutral-200
      hover:border-neutral-300 hover:shadow-md hover:-translate-y-0.5
      focus:ring-neutral-400
    `,
    'secondary-dark': `
      bg-transparent text-white border-2 border-neutral-700
      hover:border-neutral-600 hover:bg-neutral-800
      focus:ring-neutral-600
    `,
    ghost: `
      bg-transparent text-neutral-600
      hover:bg-neutral-100 hover:text-neutral-900
      focus:ring-neutral-400
    `,
  }

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
