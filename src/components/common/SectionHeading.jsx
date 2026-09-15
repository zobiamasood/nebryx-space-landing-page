// src/components/common/SectionHeading.jsx
// Reusable section heading component with space theme styling

import React from 'react';

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {/* Subtitle */}
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2 className="relative inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {title}

        {/* Underline effect */}
        <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60" />
      </h2>
    </div>
  );
}
