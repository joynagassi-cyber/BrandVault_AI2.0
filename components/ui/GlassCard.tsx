import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'cyan' | 'magenta' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  glowColor = 'primary' 
}) => {
  const glows = {
    primary: 'group-hover:shadow-glow-primary group-hover:border-primary/50',
    cyan: 'group-hover:shadow-glow-cyan group-hover:border-accent-cyan/50',
    magenta: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] group-hover:border-accent-magenta/50',
    none: ''
  };

  return (
    <div className={`
      relative group
      bg-background-secondary/40 
      backdrop-blur-md 
      border border-white/10
      rounded-2xl 
      transition-all duration-500 ease-out
      overflow-hidden
      hover:-translate-y-2
      hover:bg-background-secondary/60
      ${glows[glowColor]}
      ${className}
    `}>
      {/* Subtle Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};