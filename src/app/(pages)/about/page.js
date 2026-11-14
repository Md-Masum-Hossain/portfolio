import React from 'react'
import Image from 'next/image'
import { BriefcaseBusiness, Rocket, Code2, Layers, Workflow, CheckCircle2 } from 'lucide-react'

export const dynamic = 'force-static';

export const metadata = {
  title: 'About | Masum Hossain',
  description: 'About Masum Hossain - Full-Stack & AI/SaaS Software Engineer building modern web products with clean architecture and scalable code.',
}

function About() {
  const strengths = [
    {
      title: 'Product-Focused Engineering',
      desc: 'I transform product requirements into robust, production-grade applications with clean domain modeling and measurable business value.',
      icon: Rocket,
    },
    {
      title: 'Full-Stack Architecture',
      desc: 'I architect reactive, accessible frontends and high-throughput backend services using Next.js, Node.js, and cloud datastores.',
      icon: Code2,
    },
    {
      title: 'Maintainable Systems',
      desc: 'I write clean, modular, and testable code with strict separation of concerns, strong naming conventions, and performance optimization.',
      icon: Layers,
    },
  ]

  const process = [
    {
      title: '1. Discover & Specify',
      desc: 'Clarify domain requirements, system boundaries, and user flows before committing production code.',
    },
    {
      title: '2. Build & Integrate',
      desc: 'Develop clean, reusable modules with comprehensive error handling, type safety, and responsive UI.',
    },
    {
      title: '3. Optimize & Scale',
      desc: 'Profile performance, eliminate bottlenecks, and ensure deployment stability across target platforms.',
    },
  ]

  const techFocus = [
    'Next.js',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'REST APIs',
    'Cloud Architecture',
  ]

  return (
    <section className='w-[95%] max-w-6xl mx-auto py-10 md:py-16'>
      <div className='border border-subtle rounded-lg p-6 md:p-12 bg-surface shadow-2xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='order-2 lg:order-1'>
            <div className='inline-flex items-center gap-2 border border-subtle bg-base px-3.5 py-1.5 rounded-full text-secondary text-xs font-mono uppercase tracking-wider mb-5'>
              <BriefcaseBusiness className='w-3.5 h-3.5 text-accent' />
              <span className='text-primary'>About Me</span>
            </div>

            <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-primary mb-5'>
              Engineering Web Platforms with <span className='gradient-text'>Precision</span>
            </h1>

            <p className='text-base md:text-lg text-secondary leading-relaxed max-w-xl mb-7'>
              I am Masum Hossain, a Full-Stack & AI/SaaS Software Engineer specializing in fast, resilient, and user-centered digital products. I solve complex challenges through clean modular code, dependable backend architecture, and thoughtful UI design.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
              <div className='rounded-lg border border-subtle bg-base p-4 text-center'>
                <h3 className='text-2xl font-bold text-accent'>20+</h3>
                <p className='text-xs font-mono uppercase tracking-wider text-secondary mt-1'>Technologies</p>
              </div>
              <div className='rounded-lg border border-subtle bg-base p-4 text-center'>
                <h3 className='text-2xl font-bold text-accent'>7+</h3>
                <p className='text-xs font-mono uppercase tracking-wider text-secondary mt-1'>Shipped Demos</p>
              </div>
              <div className='rounded-lg border border-subtle bg-base p-4 text-center'>
                <h3 className='text-2xl font-bold text-accent'>100%</h3>
                <p className='text-xs font-mono uppercase tracking-wider text-secondary mt-1'>Production Ready</p>
              </div>
            </div>

            <a href='/contact'>
              <button className='btn-primary'>Let&apos;s Work Together</button>
            </a>
          </div>

          <div className='order-1 lg:order-2'>
            <div className='rounded-lg overflow-hidden border border-subtle bg-base p-2'>
              <Image
                src='/masum.png'
                alt='Masum Hossain portrait'
                width={900}
                height={1100}
                className='w-full h-auto rounded-md object-cover'
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {strengths.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className='rounded-lg border border-subtle bg-base p-6'
              >
                <Icon className='w-5 h-5 text-accent mb-3' />
                <h2 className='text-lg font-semibold mb-2 text-primary'>{item.title}</h2>
                <p className='text-sm text-secondary leading-relaxed'>{item.desc}</p>
              </article>
            )
          })}
        </div>

        <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <article className='rounded-lg border border-subtle bg-base p-6'>
            <h2 className='text-xl font-semibold text-primary mb-3'>Professional Overview</h2>
            <p className='text-sm text-secondary leading-relaxed mb-4'>
              I specialize in engineering modern web applications that unite UI quality with backend resilience. My focus is on delivering maintainable systems that scale seamlessly under production workloads.
            </p>
            <p className='text-sm text-secondary leading-relaxed'>
              From high-conversion SaaS interfaces to distributed RESTful architectures, I bring rigorous technical discipline and clean design to every build.
            </p>
          </article>

          <article className='rounded-lg border border-subtle bg-base p-6'>
            <h2 className='text-xl font-semibold text-primary mb-4'>Current Focus Areas</h2>
            <div className='flex flex-wrap gap-2'>
              {techFocus.map((tech) => (
                <span key={tech} className='px-3 py-1 rounded-md border border-subtle bg-surface text-xs font-mono text-secondary'>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className='mt-8 rounded-lg border border-subtle bg-base p-6'>
          <div className='flex items-center gap-2 mb-5'>
            <Workflow className='w-5 h-5 text-accent' />
            <h2 className='text-xl font-semibold text-primary'>Engineering Workflow</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {process.map((item) => (
              <article key={item.title} className='rounded-lg border border-subtle bg-surface p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <CheckCircle2 className='w-4 h-4 text-accent' />
                  <h3 className='font-semibold text-primary text-sm'>{item.title}</h3>
                </div>
                <p className='text-xs text-secondary leading-relaxed'>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className='mt-8 rounded-lg border border-subtle bg-base p-8 text-center'>
          <h2 className='text-2xl font-semibold text-primary mb-3'>Ready to Build Something Significant?</h2>
          <p className='text-sm text-secondary max-w-xl mx-auto mb-6 leading-relaxed'>
            Available for full-stack engineering roles, contract development, and technical consulting.
          </p>
          <a href='/contact'>
            <button className='btn-outline'>Discuss Your Project</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
