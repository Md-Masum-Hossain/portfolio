import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full border-t border-subtle mt-20 bg-base'>
      <div className='w-[95%] max-w-7xl mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8'>
          <div>
            <h3 className='text-xl font-bold tracking-tight text-primary'>
              Masum <span className='gradient-text'>Hossain</span>
            </h3>
            <p className='mt-3 text-secondary text-sm leading-relaxed max-w-sm'>
              Full-Stack & AI/SaaS Software Engineer building scalable web platforms, distributed systems, and modern digital products.
            </p>
          </div>

          <div>
            <h4 className='text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-3'>
              Navigation
            </h4>
            <ul className='space-y-2 text-sm text-secondary'>
              <li>
                <Link href='/' className='hover:text-primary transition-colors duration-200'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/projects' className='hover:text-primary transition-colors duration-200'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href='/skills' className='hover:text-primary transition-colors duration-200'>
                  Skills
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-primary transition-colors duration-200'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-primary transition-colors duration-200'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-3'>
              Connect
            </h4>
            <div className='flex items-center gap-3'>
              <a
                href='https://github.com/Md-Masum-Hossain'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub Profile'
                className='p-2.5 rounded-lg border border-subtle bg-surface text-secondary hover:text-primary hover:border-accent/40 transition-all duration-200'
              >
                <Github className='w-4 h-4' />
              </a>
              <a
                href='https://www.linkedin.com/in/mdmasumhossain5/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn Profile'
                className='p-2.5 rounded-lg border border-subtle bg-surface text-secondary hover:text-primary hover:border-accent/40 transition-all duration-200'
              >
                <Linkedin className='w-4 h-4' />
              </a>
              <a
                href='mailto:masumhossain1712@gmail.com'
                aria-label='Send Email'
                className='p-2.5 rounded-lg border border-subtle bg-surface text-secondary hover:text-primary hover:border-accent/40 transition-all duration-200'
              >
                <Mail className='w-4 h-4' />
              </a>
            </div>
            <p className='mt-3 text-xs text-secondary font-mono'>
              Open for full-time engineering roles & contracts.
            </p>
          </div>
        </div>

        <div className='mt-12 pt-6 border-t border-subtle flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-secondary font-mono'>
          <p>&copy; {year} Masum Hossain. All rights reserved.</p>
          <p>Engineered with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
