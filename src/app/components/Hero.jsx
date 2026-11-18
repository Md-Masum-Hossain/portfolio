import React from 'react'
import { MotionWrapper } from './motion/MotionWrapper'
import { Download, ArrowRight } from 'lucide-react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StaggeredItem from './motion/StaggeredItem';
import HackerCircle from './HackerCircle';
import siteConfig from '@/config/siteConfig';

function Hero() {
  return (
    <section className='relative isolate overflow-hidden w-full py-12 md:py-20'>
      {/* Subtle radial-faded architectural grid background (strictly 0.04 opacity on Hero only) */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 hero-grid opacity-[0.04]'
      />

      <div className='w-[95%] max-w-6xl p-6 md:p-10 overflow-hidden rounded-lg text-center mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 content-around items-center gap-10">
          <MotionWrapper className='flex flex-col content-center items-center text-center' type="left">
            <StaggeredItem type={"left"}>
              <HackerCircle />
            </StaggeredItem>
            <StaggeredItem type={"left"}>
              <h2 className='text-2xl md:text-3xl font-bold text-primary mt-4'>
                <span className='gradient-text'>Masum</span> Hossain
              </h2>
              <p className='text-secondary text-xs md:text-sm mt-1 font-mono uppercase tracking-wider'>
                Full-Stack & Distributed Systems
              </p>
            </StaggeredItem>
            <StaggeredItem className='flex gap-4 mt-4' type={"left"} >
              <a
                href={siteConfig.links.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label="GitHub Profile"
                className='text-secondary hover:text-accent transition-colors duration-200'
              >
                <FaGithubSquare className='w-7 h-7' />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label="LinkedIn Profile"
                className='text-secondary hover:text-accent transition-colors duration-200'
              >
                <FaLinkedin className='w-7 h-7' />
              </a>
              <a
                href={siteConfig.links.email}
                aria-label="Send Email"
                className='text-secondary hover:text-accent transition-colors duration-200'
              >
                <MdEmail className='w-7 h-7' />
              </a>
            </StaggeredItem>
          </MotionWrapper>

          <MotionWrapper type="right">
            <div className='flex flex-col text-start'>
              <StaggeredItem type={"right"}>
                <div className='inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-subtle bg-surface/70 w-fit'>
                  <span className='w-2 h-2 rounded-full bg-status animate-pulse' />
                  <span className='text-xs font-mono uppercase tracking-wider text-secondary'>Available for Full-Stack & SaaS Roles</span>
                </div>
              </StaggeredItem>
              <StaggeredItem type={"right"}>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight text-primary'>
                  Full-Stack & AI/SaaS <span className='gradient-text'>Software Engineer</span>
                </h1>
              </StaggeredItem>
              <StaggeredItem type={"right"}>
                <p className='text-base md:text-lg text-secondary leading-relaxed mb-6 max-w-xl'>
                  I engineer high-performance web applications, scalable backend services, and AI-integrated SaaS products with Next.js, Node.js, and cloud architectures. Focusing on clean code, resilient systems, and measurable product impact.
                </p>
              </StaggeredItem>
              <StaggeredItem type={"right"}>
                <div className='flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-4'>
                  <a href="/projects">
                    <button className='btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2'>
                      <span>Explore Projects</span>
                      <ArrowRight className='w-4 h-4' />
                    </button>
                  </a>
                  <a href={siteConfig.resumeUrl} download>
                    <button className='btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2'>
                      <span>Download CV</span>
                      <MotionWrapper type='upDownPalse'>
                        <Download className='w-4 h-4' />
                      </MotionWrapper>
                    </button>
                  </a>
                </div>
              </StaggeredItem>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

export default Hero
