// src/components/common/ServiceCard.jsx
// Reusable service card with space theme styling and hover effects

import React from 'react';

export default function ServiceCard({ icon, title, description, index }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border-2 border-cyan-500/30 bg-gradient-to-br from-purple-900/20 to-transparent p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
          {description}
        </p>

        {/* Border glow effect on hover */}
        <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}
