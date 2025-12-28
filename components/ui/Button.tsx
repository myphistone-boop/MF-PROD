
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-10 py-4 rounded-full uppercase tracking-[0.3em] font-sans text-xs md:text-sm font-extrabold transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative group";
  
  const variants = {
    primary: "bg-white text-brand-dark hover:text-white shadow-[0_10px_20px_rgba(255,0,122,0.2)]",
    secondary: "bg-brand-dark-soft text-brand-light border border-white/10 hover:border-brand-magenta",
    outline: "border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark",
    ghost: "text-brand-light hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Background fill on hover for primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
