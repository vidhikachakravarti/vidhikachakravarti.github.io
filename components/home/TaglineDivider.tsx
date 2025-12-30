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
      className="relative py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #EADEFC 0%, transparent 70%)' }}
        />
      </motion.div>

      <div className="max-w-[768px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-[40px] leading-[48px] font-semibold tracking-tight text-neutral-900"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            Journey Tracker turns care programs into
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #7848FE 0%, #9F7BFF 100%)' }}
          >
            clear, executable workflows.
          </motion.span>
        </motion.h2>
      </div>
    </section>
  )
}
