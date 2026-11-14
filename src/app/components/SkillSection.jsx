"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import skillData from '@/app/utility/skillsLogo.json';

export default function SkillSection() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Row 1: Frontend & Core
  const row1 = skillData.filter(
    (s) => s.category === 'Frontend' || s.name === 'Figma' || s.name === 'Vite'
  );

  // Row 2: Backend & Tools
  const row2 = skillData.filter(
    (s) => s.category === 'Backend' || (s.category === 'Tool' && s.name !== 'Figma' && s.name !== 'Vite')
  );

  const renderSkillItem = (skill, index, rowId) => {
    const itemKey = `${rowId}-${skill.name}-${index}`;
    const isTooltipOpen = activeTooltip === itemKey;

    return (
      <div
        key={itemKey}
        tabIndex={0}
        role="button"
        aria-label={`${skill.name} technology`}
        onClick={() => setActiveTooltip(isTooltipOpen ? null : itemKey)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveTooltip(isTooltipOpen ? null : itemKey);
          }
        }}
        className="group relative shrink-0 mx-2 sm:mx-3 cursor-pointer outline-none"
      >
        {/* Unclipped Tooltip above the icon */}
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full px-3 py-1 rounded-md bg-surface border border-subtle text-primary font-mono text-xs whitespace-nowrap shadow-2xl pointer-events-none transition-all duration-200 z-30 ${
            isTooltipOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100'
          }`}
        >
          <span>{skill.name}</span>
          <div className="w-2 h-2 rotate-45 bg-surface border-r border-b border-subtle absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </div>

        {/* Skill Icon Container */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg border border-subtle bg-surface/90 p-3 transition-all duration-200 group-hover:border-accent/60 group-hover:bg-surface group-focus:border-accent">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9">
            <Image
              src={skill.src}
              alt={skill.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full border-t border-subtle py-24 bg-base relative overflow-hidden">
      {/* Header */}
      <div className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-secondary text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Technologies & <span className="gradient-text">Core Tools</span>
          </h2>
        </div>

        <Link
          href="/skills"
          className="text-xs font-mono uppercase tracking-wider text-secondary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
        >
          <span>View Detailed Matrix</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Marquee Container with Gradient Edge Masks matching bg-base */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Gradient Edge Masks matching bg-base */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 z-20 bg-gradient-to-r from-base to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 z-20 bg-gradient-to-l from-base to-transparent"
        />

        {/* Row 1: Frontend & Core (scrolling left) with py-8 container for unclipped tooltips */}
        <div className="py-8 overflow-hidden group/row1">
          <div className="flex w-max animate-marquee-left group-hover/row1:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {row1.map((skill, index) => renderSkillItem(skill, index, 'r1a'))}
            {row1.map((skill, index) => renderSkillItem(skill, index, 'r1b'))}
          </div>
        </div>

        {/* Row 2: Backend & Tools (scrolling right) with py-8 container for unclipped tooltips */}
        <div className="py-8 overflow-hidden group/row2">
          <div className="flex w-max animate-marquee-right group-hover/row2:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {row2.map((skill, index) => renderSkillItem(skill, index, 'r2a'))}
            {row2.map((skill, index) => renderSkillItem(skill, index, 'r2b'))}
          </div>
        </div>
      </div>
    </section>
  );
}
