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

  const getVariantStyles = (variant: string) => {
    switch(variant) {
      case 'primary':
        return {
          className: 'text-white hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl',
          style: { background: 'linear-gradient(135deg, #7848FE 0%, #9F7BFF 100%)' }
        }
      case 'secondary':
        return {
          className: 'bg-white hover:-translate-y-0.5 transition-all duration-200 border-2 hover:shadow-md',
          style: { color: '#7848FE', borderColor: '#D3B9F9' }
        }
      case 'secondary-dark':
        return {
          className: 'bg-transparent text-white hover:bg-opacity-10 transition-all duration-200 border-2',
          style: { borderColor: '#9F7BFF' }
        }
      case 'ghost':
        return {
          className: 'bg-transparent transition-all duration-200',
          style: { color: '#280470' }
        }
      default:
        return { className: '', style: {} }
    }
  }

  const variantConfig = getVariantStyles(variant)

  const variants = {
    primary: variantConfig.className,
    secondary: variantConfig.className,
    'secondary-dark': variantConfig.className,
    ghost: variantConfig.className,
  }

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} style={variantConfig.style}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={variantConfig.style}>
      {children}
    </button>
  )
}
