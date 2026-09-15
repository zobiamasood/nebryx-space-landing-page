// src/components/common/GlowButton.jsx
// Reusable button component with space theme styling

import React from 'react';
import { COLORS, ANIMATION } from '../../utils/constants';

export default function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 cursor-pointer border-2';

  const variants = {
    primary: `bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-400 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]`,
    secondary: `bg-transparent border-purple-500 text-purple-300 hover:border-purple-400 hover:text-purple-200 hover:shadow-[0_0_20px_rgba(109,40,217,0.5)]`,
    outline: `bg-transparent border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-dark hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]`,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
