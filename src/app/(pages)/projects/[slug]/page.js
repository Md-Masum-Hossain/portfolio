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

const sectionLabelClass = 'mb-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-secondary/45'
const sectionDividerClass = 'block h-px w-9 md:w-11 rounded-full bg-primary/10 mb-3 md:mb-3.5'
const sectionHeadingClass = 'max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-primary'
const sectionIntroClass = 'max-w-3xl text-base md:text-lg leading-8 md:leading-9 text-secondary/75'
const bodyTextClass = 'max-w-[42rem] text-sm md:text-base leading-8 md:leading-9 text-secondary/75'
const showcaseTitleClass = 'text-xl md:text-[1.45rem] lg:text-2xl font-semibold leading-snug tracking-[-0.02em] text-primary transition-colors duration-300 group-hover:text-primary/95'
const showcaseDescriptionClass = 'max-w-[34rem] text-base leading-7 md:leading-8 text-secondary/70'
const highlightTitleClass = 'text-lg md:text-xl font-semibold leading-snug tracking-[-0.02em] text-primary/90 transition-colors duration-300 group-hover:text-primary'
const challengeTitleClass = 'mb-3 md:mb-4 text-xl md:text-2xl font-semibold leading-snug tracking-[-0.02em] text-primary/90 transition-colors duration-300 group-hover:text-primary'
const solutionLabelClass = 'mb-2 md:mb-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-primary/55'
const buttonInteractionClass = 'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(2,6,23,0.12)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
const techChipClass = 'px-3 py-1 text-xs md:text-sm rounded-full border border-border/10 bg-card/10 text-secondary/65 font-normal transition-colors duration-300 hover:border-border/20 hover:bg-card/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const ProjectSectionHeader = ({ label, title, intro, delay = 0, maxWidth = 'max-w-3xl' }) => (
  <div className={`mx-auto ${maxWidth} min-w-0`}>
    <MotionWrapper type='fadeIn' delay={delay}>
      <p className={sectionLabelClass}>{label}</p>
    </MotionWrapper>
    <MotionWrapper type='fadeIn' delay={delay + 0.04}>
      <span className={sectionDividerClass} />
      <h2 className={sectionHeadingClass}>{title}</h2>
    </MotionWrapper>
    {intro && (
      <MotionWrapper type='fadeIn' delay={delay + 0.08}>
        <p className={`${sectionIntroClass} mt-5 md:mt-6`}>{intro}</p>
      </MotionWrapper>
    )}
  </div>
)

const ProjectScreenshot = ({ item, index, reversed = false }) => (
  <MotionWrapper
    type='projectPreview'
    delay={0.12 + index * 0.05}
    className='group w-full min-w-0'
  >
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] gap-5 md:gap-7 lg:gap-10 items-center min-w-0'>
      <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'} min-w-0`}>
        <div className='relative isolate'>
          <span aria-hidden='true' className='absolute inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl opacity-20' />
          <div className='overflow-hidden rounded-2xl border border-white/8 bg-card shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_26px_70px_rgba(0,0,0,.42)]'>
            <Image
              src={item.src}
              alt={item.alt}
              width={1600}
              height={1000}
              className='w-full max-w-full h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.01]'
              priority={false}
            />
          </div>
        </div>
      </div>

      <div className={`${reversed ? 'lg:order-1' : 'lg:order-2'} min-w-0 flex items-center`}>
        <div className='max-w-xl min-w-0'>
          <p className={sectionLabelClass}>Feature {index + 1}</p>
          <h3 className={showcaseTitleClass}>
            {item.title}
          </h3>
          <p className={showcaseDescriptionClass}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  </MotionWrapper>
)

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
  const storyGalleryItems = Array.isArray(project?.storyGallery)
    ? project.storyGallery
        .map((item) => {
          const src = typeof item === 'string' ? item : item?.src

          if (!src || src === '#') {
            return null
          }

          return {
            src,
            alt: typeof item === 'string' ? `${project.titel} screenshot` : item?.alt || `${project.titel} screenshot`,
            title: typeof item === 'string' ? '' : item?.title || item?.alt || project.storyHeadline,
            description: typeof item === 'string' ? '' : item?.description || project.storySubheadline,
          }
        })
        .filter(Boolean)
    : []

  if (!project) {
    notFound()
  }

  return (
    <section className='w-full mt-6'>
      <div className='mx-auto mb-6 md:mb-8 w-full max-w-7xl px-4 md:px-0'>
        <Link href='/projects' className='btn-outline inline-flex items-center gap-2 text-sm'>
          <ArrowLeft className='w-4 h-4' />
          Back to Projects
        </Link>
      </div>

      <div className='rounded-2xl p-6 md:p-8 min-w-0'>
        <div className='max-w-7xl mx-auto lg:grid lg:grid-cols-[minmax(0,3.25fr)_minmax(0,1.75fr)] lg:items-center lg:gap-6 min-w-0'>
          <div className='rounded-2xl overflow-hidden border border-border/20 shadow-sm bg-card min-w-0' style={{boxShadow: '0 12px 30px rgba(2,6,23,0.10)'}}>
            <Image
              src={project.src}
              alt={project.titel}
              width={1200}
              height={800}
              className='w-full max-w-full h-auto object-contain'
              priority={false}
            />
          </div>

          <div className='mt-6 lg:mt-0 min-w-0'>
            <div className='flex flex-wrap items-center gap-2 mb-3'>
              <span className='text-xs px-2.5 py-1 rounded-full border border-border/10 text-secondary/70 font-medium bg-transparent'>
                {project.category}
              </span>
              <span className='text-xs px-2.5 py-1 rounded-full border border-border/10 text-secondary/70 font-medium bg-transparent'>
                {project.status}
              </span>
            </div>

            <h1 className='mb-3 max-w-3xl text-3xl md:text-[3.25rem] lg:text-5xl font-bold leading-[1.06] tracking-[-0.03em] text-primary'>{project.titel}</h1>
            <p className='max-w-3xl text-base md:text-lg leading-8 md:leading-9 text-secondary/75'>{project.desc}</p>

            <div className='mb-5'>
              <div className='mb-3 flex items-center gap-2'>
                <Tag className='w-4 h-4 text-primary/70' />
                <h2 className='text-sm font-semibold text-primary/80 uppercase tracking-wide'>Technologies</h2>
              </div>
              <div className='flex flex-wrap gap-x-2.5 gap-y-2.5 max-w-[40rem]'>
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className={techChipClass}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 mt-1.5'>
              {project.liveView && (
                <Link href={project.liveView} target='_blank' rel='noopener noreferrer' className={`btn-primary inline-flex items-center justify-center gap-2 whitespace-normal md:whitespace-nowrap max-w-full min-w-0 ${buttonInteractionClass}`}>
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </Link>
              )}
              {project.frontend && (
                <Link href={project.frontend} target='_blank' rel='noopener noreferrer' className={`btn-outline inline-flex items-center justify-center gap-2 whitespace-normal md:whitespace-nowrap max-w-full min-w-0 ${buttonInteractionClass}`}>
                  <Github className='w-4 h-4' />
                  Frontend Code
                </Link>
              )}
              {project.category !== 'Frontend' && project.backend && (
                <Link href={project.backend} target='_blank' rel='noopener noreferrer' className={`btn-outline inline-flex items-center justify-center gap-2 whitespace-normal md:whitespace-nowrap max-w-full min-w-0 ${buttonInteractionClass}`}>
                  <Layers3 className='w-4 h-4' />
                  Backend Code
                </Link>
              )}
            </div>
        </div>
      </div>

        <div className='mt-6 md:mt-9 pt-5 md:pt-7 border-t border-border/10 w-full'>
          {/* STORY SECTION */}
          <div className='w-full px-4 md:px-0 min-w-0'>
            <MotionWrapper type='fadeIn' delay={0.05} className='mx-auto max-w-6xl min-w-0 text-left'>
              <p className={sectionLabelClass}>Project Story</p>
              <span className={sectionDividerClass} />
              <h2 className='max-w-none text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-primary'>
                {project.storyHeadline}
              </h2>

              <p className='max-w-none mt-5 md:mt-6 text-base md:text-lg leading-8 md:leading-9 text-secondary/75'>
                {project.storySubheadline}
              </p>
              <p className='max-w-none mt-6 md:mt-7 text-sm md:text-base leading-8 md:leading-9 text-secondary/75'>
                {project.overview}
              </p>
            </MotionWrapper>
          </div>

          {storyGalleryItems.length > 0 && (
            <div className='w-full px-4 md:px-0 min-w-0'>
              <div className='mx-auto mt-8 md:mt-10 max-w-7xl space-y-8 md:space-y-12 min-w-0'>
                {storyGalleryItems.map((item, index) => {
                  const isReversed = index % 2 === 1

                  return (
                    <ProjectScreenshot
                      key={`${item.src}-${index}`}
                      item={item}
                      index={index}
                      reversed={isReversed}
                    />
                  )
                })}
              </div>
            </div>
          )}

          {/* HIGHLIGHTS SECTION */}
          {project.keyFeatures?.length > 0 && (
            <>
              <div className='pt-14 md:pt-20' />
              <div className='w-full px-4 md:px-0 border-t border-border/10 pt-14 md:pt-18 min-w-0'>
                <ProjectSectionHeader
                  label='Core Capabilities'
                  title='Key Highlights'
                  delay={0.06}
                  maxWidth='max-w-7xl'
                />

                <div className='mx-auto max-w-7xl min-w-0'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-8 min-w-0'>
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
                              <h3 className={highlightTitleClass}>
                                {feature.title}
                              </h3>
                              <p className='max-w-[28rem] text-base leading-7 md:leading-8 text-secondary/70'>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </MotionWrapper>
                      )
                    })}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ENGINEERING SECTION */}
          {project.challenges?.length > 0 && (
            <>
              <div className='pt-14 md:pt-20' />
              <div className='w-full px-4 md:px-0 border-t border-border/10 pt-14 md:pt-18 pb-16 md:pb-24 min-w-0'>
                <ProjectSectionHeader
                  label='Engineering Decisions'
                  title='Challenges & Solutions'
                  delay={0.08}
                  maxWidth='max-w-6xl'
                />

                <div className='mx-auto max-w-6xl min-w-0'>
                  <div className='space-y-9 md:space-y-11 min-w-0'>
                    {project.challenges.map((challenge, index) => (
                      <MotionWrapper
                        key={`${challenge.title}-${index}`}
                        type='bottom'
                        delay={0.09 + index * 0.035}
                        className='group relative pl-5 md:pl-6 pb-9 md:pb-10 transition-transform duration-300 hover:-translate-y-0.5'
                      >
                        <span className='absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[2px] bg-border/85 transition-colors duration-300 group-hover:bg-border' />
                        <h3 className={challengeTitleClass}>
                          {challenge.title}
                        </h3>
                        <p className={solutionLabelClass}>Solution</p>
                        <p className='max-w-[36rem] text-sm md:text-base leading-8 md:leading-9 text-secondary/70'>
                          {challenge.solution}
                        </p>
                      </MotionWrapper>
                    ))}
                  </div>
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
