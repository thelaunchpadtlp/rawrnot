import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div className={`bg-surface-container-high rounded-[1.5rem] p-8 ghost-border hover:bg-surface-bright transition-colors duration-300 relative overflow-hidden group ${className}`}>
    {children}
  </div>
);

export const LiquidCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div className={`liquid-glass rounded-[1.5rem] p-8 ambient-shadow ${className}`}>
    {children}
  </div>
);

export const BentoGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
    {children}
  </div>
);

export const PrimaryButton: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string }> = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-gradient-primary text-on-primary-fixed rounded-full px-8 py-3 font-body font-semibold text-sm hover:opacity-90 transition-opacity flex items-center space-x-2 ${className}`}
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string }> = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`py-2 px-6 rounded-full bg-surface-container-highest text-on-surface font-body text-sm hover:bg-surface-bright transition-colors ghost-border text-center ${className}`}
  >
    {children}
  </button>
);
