import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
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
    <div className="rounded-lg border border-subtle bg-surface flex flex-col overflow-hidden shadow-xl transition-all duration-300 hover:border-accent/40 group h-full">
      {/* Top Image Preview Frame */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-subtle bg-base">
        <Link
          href={detailHref}
          className="block w-full h-full"
          aria-label={`View details of ${titel}`}
        >
          <Image
            src={src}
            alt={titel}
            fill
            className="w-full h-full object-contain bg-black/40 transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-base/90 backdrop-blur-sm border border-subtle text-[11px] font-mono text-secondary uppercase tracking-wider">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-base/90 backdrop-blur-sm border border-subtle text-[11px] font-mono text-status pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-status animate-pulse" />
          <span>{status}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col gap-3.5">
        <div>
          <Link
            href={detailHref}
            className="group-hover:text-accent transition-colors block mb-1.5"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary line-clamp-1">
              {titel}
            </h3>
          </Link>
          <p className="text-sm text-secondary leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Tech Stack Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
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

      {/* Footer Action Links */}
      <div className="px-5 pb-5 pt-3 border-t border-subtle flex items-center gap-2.5 mt-auto">
        {liveLink && liveLink !== '#' && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live Demo of ${titel}`}
            className="btn-primary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5 whitespace-nowrap"
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
            className="btn-outline text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <FaGithub className="w-3 h-3" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

export const Card = ProjectCard;
