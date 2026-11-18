"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { MotionWrapper } from './motion/MotionWrapper';
import { getSortedProjects } from '@/app/utility/getSortedProjects';

const createSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

function ProjectSection() {
  // Top 3 real projects sorted newest first
  const sortedProjects = getSortedProjects();
  const featuredProjects = sortedProjects.slice(0, 3);

  return (
    <section className="w-full border-t border-subtle py-24 bg-base relative">
      <div className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-secondary text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              Featured <span className="gradient-text">Engineering Projects</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-xs font-mono uppercase tracking-wider text-secondary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Split-Showcase Layout */}
        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const slug = createSlug(project.titel);
            const liveUrl = project.liveLink || project.liveView;
            const gitUrl = project.githubLink || project.frontend;

            return (
              <div
                key={project.id || index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* Project UI Preview Frame */}
                <MotionWrapper
                  type={isReversed ? 'right' : 'left'}
                  delay={0.1}
                  className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="rounded-lg border border-subtle bg-surface p-2.5 shadow-2xl group transition-all duration-300 hover:border-accent/40">
                    {/* Architectural Window Header */}
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-subtle mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                      </div>
                      <span className="ml-2 text-[11px] font-mono text-secondary truncate">
                        {liveUrl ? liveUrl.replace('https://', '') : `projects://${slug}`}
                      </span>
                    </div>

                    <div className="relative w-full aspect-video overflow-hidden rounded-md border border-subtle bg-base">
                      <Image
                        src={project.src}
                        alt={project.titel}
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </MotionWrapper>

                {/* Editorial Content */}
                <MotionWrapper
                  type={isReversed ? 'left' : 'right'}
                  delay={0.15}
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                      0{index + 1} // {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-subtle bg-surface text-[10px] font-mono text-status">
                      <span className="w-1.5 h-1.5 rounded-full bg-status" />
                      {project.status || 'Completed'}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-2">
                    {project.titel}
                  </h3>

                  {project.storyHeadline && (
                    <p className="text-xs md:text-sm font-mono text-primary/80 mb-3 uppercase tracking-wider">
                      {project.storyHeadline}
                    </p>
                  )}

                  <p className="text-sm md:text-base text-secondary leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tech Stack Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md border border-subtle bg-surface text-xs font-mono text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {liveUrl && liveUrl !== '#' && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs sm:text-sm px-4 py-2 inline-flex items-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {gitUrl && gitUrl !== '#' && (
                      <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs sm:text-sm px-4 py-2 inline-flex items-center gap-1.5"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    <Link
                      href={`/projects/${slug}`}
                      className="text-xs font-mono uppercase tracking-wider text-secondary hover:text-primary transition-colors inline-flex items-center gap-1 px-3 py-2"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </MotionWrapper>
              </div>
            );
          })}
        </div>

        {/* Bottom Catalog Link */}
        <div className="mt-20 text-center">
          <Link href="/projects">
            <button className="btn-outline px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              <span>View All 6 Production Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
