// src/components/common/PortfolioCard.jsx
// Reusable portfolio/project card component

import React, { useState } from 'react';

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  tags,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link || '#'}
      className="group relative overflow-hidden rounded-xl border-2 border-purple-500/30 transition-all duration-300 hover:border-cyan-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-purple-900 to-cyan-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <p className="mb-2 text-sm text-cyan-300">View Project</p>
            <p className="text-2xl text-cyan-400">→</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          {category}
        </p>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-300">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
