'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: 1,
    visual: 'Design Journey Interface',
    title: 'Design the Journey',
    tagline: 'Design once. Scale everywhere.',
    description:
      'Create structured journey templates by grouping tasks into clear phases. Use the same template across programs, clinics, and patient cohorts — without rebuilding workflows.',
    impact: [
      'Standardized care delivery',
      'Faster program launches',
      'Zero workflow rework',
    ],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80',
  },
  {
    number: 2,
    visual: 'Clinic Deployment View',
    title: 'Deploy at the Clinic',
    tagline: 'Templates applied. Journeys activated.',
    description:
      'Clinics apply pre-built journey templates to incoming patients. The moment a patient is onboarded, their care journey is live.',
    impact: [
      'Instant readiness at the clinic',
      'No manual setup per patient',
      'Consistent execution across locations',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  },
  {
    number: 3,
    visual: 'Patient Assignment Screen',
    title: 'Automated Journey Assignment to the Patient',
    tagline: 'Patient walks in. Journey begins.',
    description:
      'Each patient is mapped to a journey that defines what happens, when, and by whom — from day one.',
    impact: [
      'Clear care path per patient',
      'No ambiguity in responsibilities',
      'Predictable patient experience',
    ],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
  },
  {
    number: 4,
    visual: 'Daily Task Dashboard',
    title: 'Execute Daily Care',
    tagline: "Your team's day — automatically planned.",
    description:
      'The Journey Tracker auto-generates daily task lists for physicians, experts, and operations teams based on active journeys.',
    impact: [
      'No manual tracking',
      'No missed steps',
      'Teams focus on care, not coordination',
    ],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
  },
  {
    number: 5,
    visual: 'Collaboration Interface',
    title: 'Collaborate Across Roles',
    tagline: 'Right information. Right role.',
    description:
      'Clinicians, care experts, and ops teams see exactly what they need — nothing more, nothing less. Shared visibility without noise or duplication.',
    impact: ['Faster decisions', 'Cleaner handoffs', 'Fewer errors and delays'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
  },
  {
    number: 6,
    visual: 'Real-time Monitoring Dashboard',
    title: 'Monitor in Real Time',
    tagline: 'One glance. Full control.',
    description:
      'Track completed, delayed, missed, and upcoming tasks across all patients and programs. Spot risks early and intervene before outcomes are impacted.',
    impact: ['Proactive care delivery', 'Reduced drop-offs', 'Higher adherence'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  },
  {
    number: 7,
    visual: 'Clinical Impact Graph',
    title: 'Deliver Clinical Impact',
    tagline: 'Execution → outcomes.',
    description:
      'Consistent task completion drives real clinical progress at the individual patient level.',
    impact: [
      'Improved adherence',
      'Better patient outcomes',
      'Measurable program success',
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
  },
  {
    number: 8,
    visual: 'Population Analytics Dashboard',
    title: 'Aggregate at Scale',
    tagline: 'From patients to population insights.',
    description:
      'Clinical and operational impact rolls up into a single dashboard — across patients, teams, clinics, and programs.',
    impact: [
      'Performance visibility at scale',
      'Data-backed decisions',
      'Continuous program improvement',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
]

function FlowCard({ step, isLast }: { step: typeof steps[0]; isLast: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-40% 0px -40% 0px',
  })

  return (
    <div ref={ref} className="relative">
      {/* Connector Line */}
      {!isLast && (
        <div
          className="absolute left-12 top-full w-0.5 h-24 transition-colors duration-500"
          style={{
            backgroundColor: isInView ? '#7848FE' : '#3F3B3A',
          }}
        />
      )}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex gap-8 items-start"
      >
        {/* Step Number Circle */}
        <div
          className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500"
          style={{
            backgroundColor: isInView ? '#7848FE' : '#1a1a1a',
            color: isInView ? 'white' : '#4B4B4B',
            border: isInView ? '3px solid #9F7BFF' : '3px solid #3F3B3A',
            boxShadow: isInView ? '0 0 30px rgba(120, 72, 254, 0.4)' : 'none',
          }}
        >
          {String(step.number).padStart(2, '0')}
        </div>

        {/* Card Content */}
        <div
          className="flex-1 rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            backgroundColor: isInView ? '#1a1a1a' : '#0a0a0a',
            border: isInView ? '2px solid #7848FE' : '2px solid #2a2a2a',
            opacity: isInView ? 1 : 0.5,
            transform: isInView ? 'scale(1)' : 'scale(0.98)',
          }}
        >
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url(${step.image})`,
                filter: isInView ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.3)',
              }}
            />
            {/* Purple Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(120, 72, 254, 0.3) 0%, rgba(159, 123, 255, 0.2) 100%)',
                opacity: isInView ? 1 : 0.3,
              }}
            />
          </div>

          {/* Text Content */}
          <div className="p-8">
            <div
              className="text-sm font-mono mb-3 font-semibold transition-colors duration-500"
              style={{ color: isInView ? '#D3B9F9' : '#4B4B4B' }}
            >
              STEP {String(step.number).padStart(2, '0')}
            </div>

            <h3
              className="text-3xl font-semibold mb-3 transition-colors duration-500"
              style={{ color: isInView ? 'white' : '#6B6B6B' }}
            >
              {step.title}
            </h3>

            <p
              className="text-lg italic mb-6 transition-colors duration-500"
              style={{ color: isInView ? '#EADEFC' : '#4B4B4B' }}
            >
              {step.tagline}
            </p>

            <p
              className="text-base leading-relaxed mb-8 transition-colors duration-500"
              style={{ color: isInView ? '#F9EAE4' : '#4B4B4B' }}
            >
              {step.description}
            </p>

            <div className="space-y-3">
              {step.impact.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 transition-colors duration-500"
                    style={{ color: isInView ? '#9F7BFF' : '#3F3B3A' }}
                  >
                    ✔
                  </span>
                  <span
                    className="transition-colors duration-500"
                    style={{ color: isInView ? '#FFD2BB' : '#4B4B4B' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ProductFlow() {
  return (
    <section className="relative text-white py-32" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
            From program design to measurable clinical impact
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#EADEFC' }}>
            A single system that takes you from care planning → daily execution → patient outcomes → population-level insights.
          </p>
        </div>

        {/* Vertical Flow Diagram */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <FlowCard
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
