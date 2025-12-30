'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { Button } from '../ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/api', label: 'API Documentation' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-neutral-100"
    >
      <div className="max-w-content mx-auto px-6">
        <nav className="h-16 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Logo />
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-all duration-300 relative group"
                    style={{ color: pathname === link.href ? '#7848FE' : '#817E77' }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {pathname === link.href ? (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5"
                        style={{ backgroundColor: '#7848FE' }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : (
                      <span
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        style={{ backgroundColor: '#7848FE', opacity: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <Button variant="ghost" href="/api">
              Login
            </Button>
            <Button variant="primary" href="/contact">
              Book a Demo
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}
