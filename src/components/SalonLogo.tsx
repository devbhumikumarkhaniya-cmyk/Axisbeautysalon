import React from 'react';
import officialLogoImg from '../assets/images/axis_official_circular_logo_1790355579305.jpg';

interface SalonLogoProps {
  variant?: 'full' | 'compact' | 'monogram';
  isDark?: boolean;
  className?: string;
}

export const SalonLogo: React.FC<SalonLogoProps> = ({
  variant = 'full',
  isDark = false,
  className = '',
}) => {
  const CircularLogoMark = (
    <div
      className="relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-[0_2px_12px_rgba(20,140,126,0.25)] ring-2 ring-[#D4AF37] group-hover:ring-[#148c7e] transition-all duration-300 select-none"
      aria-hidden="true"
    >
      <img
        src={officialLogoImg}
        alt="Axis Beauty Salon"
        className="w-full h-full object-cover object-center rounded-full block select-none pointer-events-none"
      />
    </div>
  );

  if (variant === 'monogram') {
    return (
      <div className={`flex items-center no-underline [text-decoration:none] ${className}`}>
        {CircularLogoMark}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 no-underline [text-decoration:none] ${className}`}>
        {CircularLogoMark}
        <div className="flex flex-col text-left no-underline [text-decoration:none]">
          <span
            className={`font-cinzel tracking-[0.18em] text-base sm:text-lg font-bold leading-tight uppercase ${
              isDark ? 'text-white' : 'text-[#1a2e2b]'
            }`}
          >
            AXIS
          </span>
          <span
            className={`text-[9.5px] uppercase tracking-[0.26em] font-bold leading-none mt-0.5 ${
              isDark ? 'text-[#F5E5B8]' : 'text-[#148c7e]'
            }`}
          >
            BEAUTY SALON
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`group flex items-center gap-3.5 no-underline [text-decoration:none] ${className}`}>
      {CircularLogoMark}
      <div className="flex flex-col text-left no-underline [text-decoration:none]">
        <span
          className={`font-cinzel tracking-[0.2em] text-lg sm:text-xl font-bold leading-tight uppercase ${
            isDark ? 'text-white' : 'text-[#1a2e2b]'
          }`}
        >
          AXIS
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.3em] font-bold leading-none mt-1 ${
            isDark ? 'text-[#F5E5B8]' : 'text-[#148c7e]'
          }`}
        >
          BEAUTY SALON
        </span>
      </div>
    </div>
  );
};
