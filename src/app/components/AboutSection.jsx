import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { MotionWrapper } from './motion/MotionWrapper'

function AboutSection() {
  return (
    <section className='w-full border-t border-subtle py-24 bg-base'>
      <div className='w-[95%] max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Real Project Visual Mockup replacing generic stock illustration */}
          <MotionWrapper type='left' delay={0.1} className='order-2 lg:order-1 w-full'>
            <div className='rounded-lg border border-subtle bg-surface p-2.5 shadow-2xl'>
              <div className='flex items-center gap-1.5 px-3 py-2 border-b border-subtle mb-2'>
                <span className='w-2.5 h-2.5 rounded-full bg-border-subtle' />
                <span className='w-2.5 h-2.5 rounded-full bg-border-subtle' />
                <span className='w-2.5 h-2.5 rounded-full bg-border-subtle' />
                <span className='ml-2 text-[11px] font-mono text-secondary truncate'>
                  architecture://docvexa-platform/overview
                </span>
              </div>
              <div className='overflow-hidden rounded-md border border-subtle bg-base'>
                <Image
                  src='/projectImages/docvexa_dashboard.png'
                  alt='Docvexa Clinical Dashboard System Architecture'
                  width={1200}
                  height={800}
                  className='w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]'
                  priority={false}
                />
              </div>
              <p className='mt-2.5 px-2 text-[11px] font-mono text-secondary flex items-center justify-between'>
                <span>Case Study Architecture Preview</span>
                <span className='text-accent'>Full-Stack Healthcare SaaS</span>
              </p>
            </div>
          </MotionWrapper>

          {/* Editorial Content */}
          <MotionWrapper type='right' delay={0.2} className='order-1 lg:order-2 w-full'>
            <div className='inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-subtle bg-surface'>
              <span className='w-2 h-2 rounded-full bg-status' />
              <span className='text-xs font-mono uppercase tracking-wider text-secondary'>
                Engineering Philosophy
              </span>
            </div>

            <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6'>
              Building Resilient Web Products with <span className='gradient-text'>Clean Architecture</span>
            </h2>

            <p className='text-base md:text-lg text-secondary leading-relaxed mb-6'>
              I am a Full-Stack & AI/SaaS Software Engineer dedicated to solving complex business requirements through modular code, high-throughput APIs, and accessible user interfaces.
            </p>

            <div className='space-y-3 mb-8'>
              <div className='flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-accent shrink-0 mt-0.5' />
                <p className='text-sm text-secondary leading-relaxed'>
                  <strong className='text-primary font-semibold'>Full-Stack Scalability:</strong> End-to-end architecture using Next.js App Router, Node.js, and structured database modeling.
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-accent shrink-0 mt-0.5' />
                <p className='text-sm text-secondary leading-relaxed'>
                  <strong className='text-primary font-semibold'>Performance First:</strong> Microsecond API response targets, strict Core Web Vitals optimization, and clean state boundaries.
                </p>
              </div>
            </div>

            <Link href='/about'>
              <button className='btn-primary inline-flex items-center gap-2'>
                <span>Read Full Profile</span>
                <ArrowRight className='w-4 h-4' />
              </button>
            </Link>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
