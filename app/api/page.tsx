import { Header } from '@/components/shared/Header'
import { Button } from '@/components/ui/Button'

export default function APIPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />

      <main className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 bg-neutral-950 border-r border-neutral-800 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="p-6">
            <div className="mb-8">
              <h4 className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-3">
                Getting Started
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#intro"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#quickstart"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Quick Start
                  </a>
                </li>
                <li>
                  <a
                    href="#auth"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Authentication
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-3">
                API Reference
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#journeys"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Journeys
                  </a>
                </li>
                <li>
                  <a
                    href="#patients"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Patients
                  </a>
                </li>
                <li>
                  <a
                    href="#tasks"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Tasks
                  </a>
                </li>
                <li>
                  <a
                    href="#teams"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Teams
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-3">
                SDKs & Tools
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#sdk-js"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    JavaScript/TypeScript
                  </a>
                </li>
                <li>
                  <a
                    href="#sdk-python"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Python
                  </a>
                </li>
                <li>
                  <a
                    href="#sdk-go"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    Go
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-neutral-900">
          <div className="max-w-[900px] mx-auto px-12 py-12">
            {/* API Hero */}
            <div className="mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(40, 4, 112, 0.5)', color: '#9F7BFF' }}>
                API Documentation
              </div>
              <h1 className="text-[40px] leading-[48px] font-semibold text-white mt-4 mb-6">
                Developer-first how-to documentation
              </h1>
              <p className="text-[18px] leading-[28px] text-neutral-300">
                Build care execution workflows programmatically. RESTful API with
                predictable resource-oriented URLs and JSON responses.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <Button variant="primary">Get API Key</Button>
                <Button variant="secondary-dark">View on GitHub</Button>
              </div>
            </div>

            {/* Documentation Sections */}
            <div className="space-y-12">
              <section id="intro" className="scroll-mt-20">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Introduction
                </h2>
                <p className="text-neutral-200 mb-6">
                  The Journey Tracker API allows you to programmatically manage
                  care journeys, patients, tasks, and team workflows.
                </p>
                <div className="bg-neutral-950 rounded-lg p-6 border border-neutral-800">
                  <div className="text-xs text-neutral-500 font-mono uppercase tracking-wide mb-4">
                    bash
                  </div>
                  <pre className="text-sm text-neutral-300 font-mono overflow-x-auto">
                    <code>
{`curl https://api.journeytracker.com/v1/journeys \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                    </code>
                  </pre>
                </div>
              </section>

              <section id="quickstart" className="scroll-mt-20">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Quick Start
                </h2>
                <ol className="space-y-4 mb-6">
                  <li className="text-neutral-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-semibold mr-3" style={{ backgroundColor: '#7848FE' }}>
                      1
                    </span>
                    Get your API key from the dashboard
                  </li>
                  <li className="text-neutral-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-semibold mr-3" style={{ backgroundColor: '#7848FE' }}>
                      2
                    </span>
                    Install the SDK (optional)
                  </li>
                  <li className="text-neutral-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-semibold mr-3" style={{ backgroundColor: '#7848FE' }}>
                      3
                    </span>
                    Make your first request
                  </li>
                </ol>
                <div className="bg-neutral-950 rounded-lg p-6 border border-neutral-800">
                  <div className="text-xs text-neutral-500 font-mono uppercase tracking-wide mb-4">
                    javascript
                  </div>
                  <pre className="text-sm text-neutral-300 font-mono overflow-x-auto">
                    <code>
{`import { JourneyTracker } from '@journeytracker/sdk';

const jt = new JourneyTracker('YOUR_API_KEY');

const journeys = await jt.journeys.list();
console.log(journeys);`}
                    </code>
                  </pre>
                </div>
              </section>

              <section id="auth" className="scroll-mt-20">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Authentication
                </h2>
                <p className="text-neutral-200 mb-6">
                  All API requests require authentication using an API key. Include
                  your API key in the Authorization header as a Bearer token.
                </p>
                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(40, 4, 112, 0.2)', borderWidth: '1px', borderColor: '#280470' }}>
                  <p className="text-sm" style={{ color: '#D3B9F9' }}>
                    <strong>Note:</strong> Keep your API keys secure and never
                    expose them in client-side code.
                  </p>
                </div>
              </section>

              {/* Placeholder for more sections */}
              <div className="border border-neutral-800 rounded-lg p-12 text-center">
                <p className="text-neutral-500">
                  Additional API documentation sections coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
