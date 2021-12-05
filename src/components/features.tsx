import * as React from 'react'
import { ClockIcon, SparklesIcon, PuzzleIcon, PresentationChartBarIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Easy to Create Content',
    description:
      'Create pages and blog posts using MDX (Markdown with React components). Easy to transition to a headless CMS.',
    icon: SparklesIcon,
  },
  {
    name: 'Customisable Design',
    description:
      'Built using the TailwindCSS ecosystem (including HeadlessUI, HeroIcons and Hero Patterns). Very easy to customise and change design. Template illustrations by unDraw.',
    icon: PuzzleIcon,
  },
  {
    name: 'SEO Ready',
    description:
      'Full support for Facebook (Open Graph), Twitter Cards, Schema/JSON-LD metadata. Automatically generated RSS feed and sitemap.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Blazing Performance',
    description:
      'Achieve great web vitals scores. Static site using Jamstack architecture. Built using Gatsby, React and Typescript for ultimate performance and type safety.',
    icon: ClockIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Comprehensive Gatsby Starter
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            This is a good starting point for a corporate/marketing or blog website, including support for MDX, SEO and
            forms.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white bg-red-600 hover:bg-red-700">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
