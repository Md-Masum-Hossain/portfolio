"use client";
import React from 'react';
import Image from 'next/image';

export function Skill({ skill, disc, src }) {
  return (
    <div className="w-full p-4 rounded-lg border border-subtle bg-surface hover:border-accent/40 transition-all duration-200 group">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md border border-subtle bg-base p-2 transition-transform duration-200 group-hover:scale-105">
          <Image
            src={src}
            alt={skill}
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-primary text-sm md:text-base leading-snug">
            {skill}
          </h3>
          {disc && (
            <p className="text-xs text-secondary leading-relaxed mt-1">
              {disc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SkillCard({ src = "", name = "" }) {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg border border-subtle bg-surface p-3 transition-all duration-200 hover:border-accent/50 hover:bg-surface/90">
      <div className="relative w-7 h-7 md:w-8 md:h-8">
        <Image src={src} fill alt={name || "skill icon"} className="object-contain" />
      </div>
    </div>
  );
}
