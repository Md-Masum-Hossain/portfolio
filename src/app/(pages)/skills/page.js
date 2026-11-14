import React from 'react'
import { Skill } from '@/app/components/SkillCard'
import skillData from '@/app/utility/skillsLogo.json'
import { CodeXml, Terminal, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Skills & Technical Matrix | Masum Hossain',
  description: 'Technical skills, toolchains, frameworks, and architecture competencies of Masum Hossain.',
}

function Skills() {
  const frontend = skillData.filter(skill => skill.category === 'Frontend');
  const backend = skillData.filter(skill => skill.category === 'Backend');
  const tools = skillData.filter(skill => skill.category === 'Tool');

  return (
    <div className='w-[95%] max-w-6xl mx-auto py-10 md:py-16'>
      <div className='text-center max-w-2xl mx-auto mb-14'>
        <div className='inline-flex items-center gap-2 border border-subtle bg-surface px-3.5 py-1.5 rounded-full text-secondary text-xs font-mono uppercase tracking-wider mb-4'>
          <span className='w-2 h-2 rounded-full bg-status' />
          <span>Core Competencies</span>
        </div>
        <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4'>
          Technical <span className='gradient-text'>Stack & Tooling</span>
        </h1>
        <p className='text-secondary text-sm md:text-base leading-relaxed'>
          A categorized directory of frameworks, languages, runtime environments, and development platforms I use to build scalable products.
        </p>
      </div>

      <section className='mb-14'>
        <div className='flex items-center gap-3 mb-6 pb-3 border-b border-subtle'>
          <CodeXml className='w-5 h-5 text-accent' />
          <h2 className='text-xl md:text-2xl font-bold text-primary tracking-tight'>
            Frontend & Client Architecture
          </h2>
          <span className='ml-auto font-mono text-xs text-secondary'>
            {frontend.length} Technologies
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {frontend.map((skill) => (
            <Skill
              key={skill.id}
              src={skill.src}
              disc={skill.disc}
              skill={skill.name}
            />
          ))}
        </div>
      </section>

      <section className='mb-14'>
        <div className='flex items-center gap-3 mb-6 pb-3 border-b border-subtle'>
          <Terminal className='w-5 h-5 text-accent' />
          <h2 className='text-xl md:text-2xl font-bold text-primary tracking-tight'>
            Backend & Data Systems
          </h2>
          <span className='ml-auto font-mono text-xs text-secondary'>
            {backend.length} Technologies
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {backend.map((skill) => (
            <Skill
              key={skill.id}
              src={skill.src}
              disc={skill.disc}
              skill={skill.name}
            />
          ))}
        </div>
      </section>

      <section className='mb-10'>
        <div className='flex items-center gap-3 mb-6 pb-3 border-b border-subtle'>
          <Wrench className='w-5 h-5 text-accent' />
          <h2 className='text-xl md:text-2xl font-bold text-primary tracking-tight'>
            Tools, CI/CD & Cloud Infrastructure
          </h2>
          <span className='ml-auto font-mono text-xs text-secondary'>
            {tools.length} Technologies
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {tools.map((skill) => (
            <Skill
              key={skill.id}
              src={skill.src}
              disc={skill.disc}
              skill={skill.name}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
