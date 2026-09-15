// src/components/common/PricingCard.jsx
// Reusable pricing card component

import React from 'react';
import GlowButton from './GlowButton';

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  featured = false,
  onCTAClick,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        featured
          ? 'border-2 border-cyan-400 bg-gradient-to-br from-purple-900/40 to-cyan-900/20 shadow-[0_0_50px_rgba(6,182,212,0.3)] md:scale-105'
          : 'border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent hover:border-purple-400 hover:shadow-[0_0_30px_rgba(109,40,217,0.3)]'
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute right-0 top-0 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-1 text-xs font-bold text-white">
          POPULAR
        </div>
      )}

      <div className="p-8">
        {/* Plan name */}
        <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-300">{description}</p>

        {/* Price */}
        <div className="mb-6">
          <span className="text-5xl font-bold text-cyan-400">${price}</span>
          {period && <span className="text-gray-400">/{period}</span>}
        </div>

        {/* Features */}
        <ul className="mb-8 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <span className="mt-1 text-cyan-400">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <GlowButton
          variant={featured ? 'primary' : 'secondary'}
          size="lg"
          className="w-full"
          onClick={onCTAClick}
        >
          {cta}
        </GlowButton>
      </div>
    </div>
  );
}
