import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BadgeCheck, CheckCircle2, ExternalLink, FolderOpen, Github, Layers3, Sparkles, Tag, CircleDot } from 'lucide-react'
import projectData from '@/app/utility/projectsData'
import { MotionWrapper } from '@/app/components/motion/MotionWrapper'

const createSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: createSlug(project.titel),
  }))
}

async function ProjectDetailPage({ params }) {
  const resolvedParams = await params
  const slug = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug
  const project = projectData.find((item) => createSlug(item.titel) === slug)
  const featureIcons = [FolderOpen, Sparkles, Layers3, CheckCircle2, CircleDot, BadgeCheck]

  if (!project) {
    notFound()
  }

  return (
    <section className='w-[96%] lg:w-[92%] mx-auto mt-6'>
      <div className='mb-6 md:mb-8'>
        <Link href='/projects' className='btn-outline inline-flex items-center gap-2 text-sm'>
          <ArrowLeft className='w-4 h-4' />
          Back to Projects
        </Link>
      </div>

      <div className='rounded-2xl p-6 md:p-8'>
        <div className='max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-6'>
          <div className='rounded-2xl overflow-hidden border border-border/20 shadow-sm bg-card' style={{boxShadow: '0 12px 30px rgba(2,6,23,0.10)'}}>
            <Image
              src={project.src}
              alt={project.titel}
              width={1200}
              height={800}
              className='w-full h-auto object-contain'
              priority={false}
            />
          </div>

          <div className='mt-6 lg:mt-0'>
            <div className='flex flex-wrap items-center gap-2 mb-3'>
              <span className='text-xs px-2.5 py-1 rounded-full border border-border/10 text-secondary/70 font-medium bg-transparent'>
                {project.category}
              </span>
              <span className='text-xs px-2.5 py-1 rounded-full border border-border/10 text-secondary/70 font-medium bg-transparent'>
                {project.status}
              </span>
            </div>

            <h1 className='text-3xl md:text-[3.25rem] lg:text-5xl font-extrabold text-primary mb-2.5 leading-[1.06] tracking-[-0.02em]'>{project.titel}</h1>
            <p className='max-w-4xl text-sm md:text-base text-secondary/75 leading-8 md:leading-9 mb-4'>{project.desc}</p>

            <div className='mb-5'>
              <div className='flex items-center gap-2 mb-3'>
                <Tag className='w-4 h-4 text-primary/70' />
                <h2 className='text-sm font-semibold text-primary/80 uppercase tracking-wide'>Technologies</h2>
              </div>
              <div className='flex flex-wrap gap-x-2.5 gap-y-2.5 max-w-[40rem]'>
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 text-xs md:text-sm rounded-full border border-border/10 bg-card/10 text-secondary/65 font-normal'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 mt-1.5'>
              {project.liveView && (
                <Link href={project.liveView} target='_blank' rel='noopener noreferrer' className='btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0'>
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </Link>
              )}
              {project.frontend && (
                <Link href={project.frontend} target='_blank' rel='noopener noreferrer' className='btn-outline inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0'>
                  <Github className='w-4 h-4' />
                  Frontend Code
                </Link>
              )}
              {project.category !== 'Frontend' && project.backend && (
                <Link href={project.backend} target='_blank' rel='noopener noreferrer' className='btn-outline inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0'>
                  <Layers3 className='w-4 h-4' />
                  Backend Code
                </Link>
              )}
            </div>
        </div>
      </div>

        <div className='mt-6 md:mt-9 pt-5 md:pt-7 border-t border-border/10'>
          {/* STORY SECTION */}
          <div className='max-w-3xl mx-auto px-4 md:px-0'>
            <MotionWrapper type='fadeIn' delay={0.05}>
              <div className='mb-4 md:mb-7'>
                <span className='block h-px w-9 md:w-11 rounded-full mb-2' style={{ backgroundColor: 'var(--primary)', opacity: 0.12 }} />
                <p className='text-[0.7rem] uppercase tracking-[0.16em] text-secondary/45 font-medium mb-2 md:mb-2.5'>Project Story</p>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-5 md:mb-6 leading-[1.06] sm:leading-[1.04] tracking-[-0.02em] max-w-[68ch]'>
                  {project.storyHeadline}
                </h2>
              </div>

              <p className='max-w-[48rem] text-base md:text-lg text-secondary/75 leading-9 md:leading-10 mb-6 md:mb-7 font-medium'>
                {project.storySubheadline}
              </p>
              <p className='max-w-[48rem] text-sm md:text-base leading-8 md:leading-9 text-secondary/75'>
                {project.overview}
              </p>
            </MotionWrapper>
          </div>

          {/* HIGHLIGHTS SECTION */}
          {project.keyFeatures?.length > 0 && (
            <>
              <div className='pt-14 md:pt-20' />
              <div className='max-w-4xl mx-auto px-4 md:px-0 border-t border-border/10 pt-14 md:pt-18'>
                <MotionWrapper type='fadeIn' delay={0.06}>
                  <div className='mb-4 md:mb-7'>
                    <p className='text-[0.7rem] uppercase tracking-[0.16em] text-secondary/45 font-medium mb-2 md:mb-2.5'>Core Capabilities</p>
                    <span className='block h-px w-9 md:w-11 rounded-full bg-cyan-300/15 mb-2.5 md:mb-3' />
                    <h2 className='text-4xl md:text-5xl font-extrabold text-primary leading-[1.06] tracking-[-0.018em]'>Key Highlights</h2>
                  </div>
                </MotionWrapper>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-8'>
                  {project.keyFeatures.map((feature, index) => {
                    const FeatureIcon = featureIcons[index % featureIcons.length]
                    return (
                      <MotionWrapper
                        key={feature.title}
                        type='bottom'
                        delay={0.07 + index * 0.03}
                        className='group transition-transform duration-300 hover:-translate-y-0.5'
                      >
                        <div className='flex gap-4 md:gap-5 items-start'>
                          <div className='flex-shrink-0 pt-1 text-cyan-300/55 transition-colors duration-300 group-hover:text-cyan-300/75'>
                            <FeatureIcon strokeWidth={1.5} className='h-5 w-5' />
                          </div>
                          <div className='flex-1 min-w-0'>
                            <h3 className='text-base md:text-lg font-semibold text-primary/90 mb-2 leading-snug tracking-[-0.008em] transition-colors duration-300 group-hover:text-primary'>
                              {feature.title}
                            </h3>
                            <p className='max-w-[28rem] text-sm md:text-base leading-7 md:leading-8 text-secondary/65'>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </MotionWrapper>
                    )
                  })}
                </div>
              </div>
            </>
          )}

          {/* ENGINEERING SECTION */}
          {project.challenges?.length > 0 && (
            <>
              <div className='pt-14 md:pt-20' />
              <div className='max-w-4xl mx-auto px-4 md:px-0 border-t border-border/10 pt-14 md:pt-18 pb-8'>
                <MotionWrapper type='fadeIn' delay={0.08}>
                  <div className='mb-4 md:mb-7'>
                    <p className='text-[0.7rem] uppercase tracking-[0.16em] text-secondary/45 font-medium mb-2 md:mb-2.5'>Engineering Decisions</p>
                    <span className='block h-px w-9 md:w-11 rounded-full bg-cyan-300/15 mb-2.5 md:mb-3' />
                    <h2 className='text-4xl md:text-5xl font-extrabold text-primary leading-[1.06] tracking-[-0.018em]'>Challenges & Solutions</h2>
                  </div>
                </MotionWrapper>

                <div className='space-y-9 md:space-y-11'>
                  {project.challenges.map((challenge, index) => (
                    <MotionWrapper
                      key={`${challenge.title}-${index}`}
                      type='bottom'
                      delay={0.09 + index * 0.035}
                      className='group relative pl-5 md:pl-6 pb-9 md:pb-10 transition-transform duration-300 hover:-translate-y-0.5'
                    >
                      <span className='absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-primary/10 transition-colors duration-300 group-hover:bg-cyan-300/20' />
                      <h3 className='text-lg md:text-xl font-semibold text-primary/90 mb-3 md:mb-4 leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-primary'>
                        {challenge.title}
                      </h3>
                      <p className='text-[0.7rem] uppercase tracking-[0.16em] text-cyan-300/45 font-medium mb-2 md:mb-3'>Solution</p>
                      <p className='max-w-[36rem] text-sm md:text-base leading-8 md:leading-9 text-secondary/65'>
                        {challenge.solution}
                      </p>
                    </MotionWrapper>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage
