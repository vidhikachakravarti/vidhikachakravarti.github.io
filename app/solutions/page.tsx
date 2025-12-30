import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'

const solutions = [
  {
    title: 'Chronic Care Management',
    description: 'Track long-term patient journeys across months or years',
    features: [
      'Multi-phase care protocols',
      'Recurring task automation',
      'Longitudinal outcome tracking',
    ],
  },
  {
    title: 'Post-Acute Care',
    description: 'Coordinate complex discharge and follow-up workflows',
    features: [
      'Transition planning',
      'Multi-team coordination',
      'Readmission prevention',
    ],
  },
  {
    title: 'Behavioral Health Programs',
    description: 'Manage structured therapy and support protocols at scale',
    features: [
      'Session tracking',
      'Milestone-based care',
      'Team collaboration',
    ],
  },
  {
    title: 'Clinical Trials',
    description: 'Execute research protocols with precision and compliance',
    features: [
      'Protocol adherence tracking',
      'Multi-site coordination',
      'Audit trail',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <SectionHeader title="Solutions for every care delivery model" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <Card key={index} theme="bordered" padding="large" hover>
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent-600 rounded-full" />
                  </div>

                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {solution.title}
                  </h3>

                  <p className="text-neutral-600">{solution.description}</p>

                  <ul className="space-y-2 text-neutral-700">
                    {solution.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
