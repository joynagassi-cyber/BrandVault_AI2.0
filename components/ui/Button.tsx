import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  icon, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-medium rounded-xl transition-all duration-200 group flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-violet-600 text-white shadow-lg shadow-primary/20 hover:shadow-glow-primary hover:scale-[1.02]",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5 backdrop-blur-sm",
    outline: "bg-transparent border border-white/20 text-text-primary hover:border-primary/50 hover:text-primary"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      
      {/* Animated shine effect for primary button */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
    </motion.button>
  );
};