import React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import siteConfig from '@/config/siteConfig'

function ContractSection() {
  return (
    <section className='w-full border-t border-subtle py-24 bg-base'>
      <div className='w-[95%] max-w-5xl mx-auto px-4 sm:px-6 text-center'>
        <div className='inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-secondary text-xs font-mono uppercase tracking-wider'>
          <Sparkles className='w-3.5 h-3.5 text-accent' />
          <span>Initiate Collaboration</span>
        </div>

        <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6'>
          Have a Project or Engineering Challenge <span className='gradient-text'>in Mind?</span>
        </h2>

        <p className='text-base md:text-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed'>
          Let&apos;s build something meaningful together. I help founders, startups, and engineering teams design and develop fast, scalable web products—from initial architecture to production launch.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link href='/contact'>
            <button className='btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2'>
              <span>Start a Project</span>
              <ArrowRight className='w-4 h-4' />
            </button>
          </Link>
          <a href={siteConfig.links.email}>
            <button className='btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2'>
              <Mail className='w-4 h-4 text-accent' />
              <span>Direct Email</span>
            </button>
          </a>
        </div>

        <div className='mt-12 pt-8 border-t border-subtle grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div>
            <p className='text-2xl font-bold text-primary font-mono'>100%</p>
            <p className='text-xs font-mono text-secondary uppercase tracking-wider mt-1'>Commitment</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-primary font-mono'>Fast</p>
            <p className='text-xs font-mono text-secondary uppercase tracking-wider mt-1'>MVP Turnaround</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-primary font-mono'>Clean</p>
            <p className='text-xs font-mono text-secondary uppercase tracking-wider mt-1'>Architecture</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-primary font-mono'>Modern</p>
            <p className='text-xs font-mono text-secondary uppercase tracking-wider mt-1'>Tech Stack</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContractSection
