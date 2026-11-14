'use client'
import React, { useState } from 'react'

function ProjectCategory({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className='flex gap-2.5 my-8 justify-center w-full flex-wrap'>
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-mono tracking-wide transition-all duration-200 cursor-pointer ${
              isSelected
                ? 'btn-primary shadow-lg shadow-accent/15'
                : 'btn-outline border border-subtle bg-surface text-secondary hover:text-primary hover:border-accent/40'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectCategory;
