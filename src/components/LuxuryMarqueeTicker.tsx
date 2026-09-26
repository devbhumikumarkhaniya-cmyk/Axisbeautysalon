import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const tickerItems = [
  'Royal Indian Bridal Makeovers',
  '24K Gold Radiance Skin Therapy',
  'Luxury Moroccan Hair Couture',
  'Verified Bhakti Nagar, Rajkot Salon',
  '5-Star Rated Client Experience',
  'HD Airbrush Occasion Makeup',
  'Hygienic & Private Styling Suites',
  'Festive & Party Glamour Makeovers',
];

export const LuxuryMarqueeTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative w-full bg-gradient-to-r from-[#0b4d45] via-[#148c7e] to-[#0b4d45] border-y border-[#0e665c] py-3 overflow-hidden select-none shadow-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Salon highlights ticker"
    >
      {/* Ambient gradient edge fades matching the teal bar */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#0b4d45] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#0b4d45] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center gap-8 w-max ${isPaused ? 'pause-animation' : 'animate-scroll-left'}`}
        style={{ '--scroll-duration': '35s' } as React.CSSProperties}
      >
        {[...tickerItems, ...tickerItems].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-white uppercase whitespace-nowrap drop-shadow-xs">
              {text}
            </span>
            <div className="flex items-center gap-1.5 text-[#e6f5f3]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-white/90" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
