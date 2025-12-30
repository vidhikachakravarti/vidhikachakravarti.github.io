'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function TaglineDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-neutral-50 to-white"
    >
      <div className="max-w-[768px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[40px] leading-[48px] font-semibold tracking-tight text-neutral-900"
        >
          Journey Tracker turns care programs into
          <br />
          clear, executable workflows.
        </motion.h2>
      </div>
    </section>
  )
}
