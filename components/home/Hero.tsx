'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative pt-32 pb-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F9EAE4 0%, #EADEFC 50%, #D3B9F9 100%)' }}>
      {/* Animated background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #7848FE 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #9F7BFF 0%, transparent 70%)' }} />
      </motion.div>

      <div className="max-w-[1120px] mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.1
          }}
          className="text-[64px] leading-[72px] font-light tracking-tight mb-8"
          style={{ color: '#000000' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block"
          >
            Care breaks down at scale,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            not because of intent,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-bold inline-block"
            style={{ color: '#7848FE' }}
          >
            but because of execution.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20px] leading-[32px] max-w-[800px] mx-auto font-light"
          style={{ color: '#3F3B3A' }}
        >
          When clinical and operations teams manage thousands of patients across long programs,
          even small gaps in tracking turn into missed tasks, delayed follow-ups, and inconsistent care.
        </motion.p>
      </div>
    </section>
  )
}
