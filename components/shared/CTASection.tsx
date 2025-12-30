'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../ui/Button'

interface CTASectionProps {
  title?: string
  description?: string
}

export function CTASection({
  title = 'Ready to transform care execution?',
  description,
}: CTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-32 bg-white">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[40px] leading-[48px] font-semibold text-neutral-900 mb-6"
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600 mb-8"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button variant="primary" size="large" href="/contact">
            Book a Demo
          </Button>
          <Button variant="secondary" size="large" href="/pricing">
            Subscribe Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
