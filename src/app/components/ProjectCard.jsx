import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const createSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

function ProjectCard({
  src,
  titel,
  desc,
  link,
  githubLink,
  liveLink,
  category,
  status = 'Completed',
  tags = [],
}) {
  const slug = createSlug(titel);
  const detailHref = link && link !== '#' ? link : `/projects/${slug}`;

  return (
    <div className="rounded-lg border border-subtle bg-surface flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:border-accent/40 group h-full">
      {/* Top Image Preview Frame */}
      <div>
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-subtle bg-base">
          <Image
            src={src}
            alt={titel}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md border border-subtle bg-base/90 backdrop-blur-md text-[11px] font-mono text-secondary uppercase tracking-wider">
              {category}
            </span>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-subtle bg-base/90 backdrop-blur-md text-[11px] font-mono text-status">
            <span className="w-1.5 h-1.5 rounded-full bg-status animate-pulse" />
            <span>{status}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <Link href={detailHref} className="group-hover:text-accent transition-colors">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-2 line-clamp-1">
              {titel}
            </h3>
          </Link>
          <p className="text-sm text-secondary leading-relaxed mb-5 line-clamp-3">
            {desc}
          </p>

          {/* Tech Stack Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md border border-subtle bg-base text-[11px] font-mono text-secondary"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 5 && (
                <span className="px-1.5 py-0.5 text-[11px] font-mono text-secondary/60">
                  +{tags.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Direct Action Links Bar on Every Card */}
      <div className="px-6 pb-6 pt-2 border-t border-subtle flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-2">
          {liveLink && liveLink !== '#' && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo of ${titel}`}
              className="btn-primary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {githubLink && githubLink !== '#' && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${titel}`}
              className="btn-outline text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
            >
              <FaGithub className="w-3 h-3" />
              <span>GitHub</span>
            </a>
          )}
        </div>

        <Link
          href={detailHref}
          className="text-xs font-mono uppercase tracking-wider text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          <span>Details</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

export const Card = ProjectCard;
