'use client'
import React, { useState, useMemo } from 'react'
import ProjectCard from '@/app/components/ProjectCard'
import { getSortedProjects } from '@/app/utility/getSortedProjects'
import { MotionWrapper } from '@/app/components/motion/MotionWrapper'
import ProjectCategory from '@/app/components/ProjectCategory'
import { Sparkles } from 'lucide-react'

const sortedProjects = getSortedProjects();

// Only display categories that actually have projects (hides empty categories like Backend)
const activeCategories = [
  'All',
  ...Array.from(new Set(sortedProjects.map((project) => project.category))).filter(Boolean),
];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10 md:py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-secondary text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Production Portfolio</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
          Engineered <span className="gradient-text">Software Projects</span>
        </h1>
        <p className="text-secondary text-sm md:text-base leading-relaxed">
          Full-stack web applications, distributed APIs, and scalable digital solutions built with modern technology stacks.
        </p>
      </div>

      {/* Filter Tabs (hiding empty categories) */}
      <ProjectCategory
        categories={activeCategories}
        onCategoryChange={handleCategoryChange}
      />

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        {filteredProjects.map((project, index) => (
          <MotionWrapper key={project.id || index} delay={index * 0.08} type="bottom">
            <ProjectCard
              src={project.src}
              titel={project.titel}
              desc={project.desc}
              link={project.link}
              githubLink={project.githubLink || project.frontend}
              liveLink={project.liveLink || project.liveView}
              category={project.category}
              status={project.status || 'Completed'}
              tags={project.tags || []}
            />
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
