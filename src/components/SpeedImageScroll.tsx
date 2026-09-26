import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

import brideRoyalImg from '../assets/images/axis_royal_indian_bride_1790356669634.jpg';
import brideImg from '../assets/images/hero_axis_indian_bride_1790356482659.jpg';
import bridalOccasionImg from '../assets/images/service_bridal_occasion_1790353848439.jpg';
import hairStylingImg from '../assets/images/service_hair_styling_1790352754304.jpg';
import facialImg from '../assets/images/service_facial_treatment_1790352741646.jpg';
import makeupGlamourImg from '../assets/images/service_makeup_glamour_1790353836852.jpg';
import nailArtImg from '../assets/images/service_nail_art_1790353820183.jpg';
import eyeMakeupImg from '../assets/images/gallery_eye_makeup_1790353861310.jpg';
import loungeInteriorImg from '../assets/images/salon_interior_lounge_1790352771590.jpg';
import salonHeroImg from '../assets/images/hero_axis_beauty_salon_1790352722307.jpg';

interface SpeedItem {
  id: string;
  title: string;
  category: string;
  tag?: string;
  imageUrl: string;
  subtitle: string;
}

const rowOneItems: SpeedItem[] = [
  {
    id: 'speed-1',
    title: 'Royal HD Bridal Makeover',
    category: 'Bridal',
    tag: 'MOST POPULAR',
    imageUrl: brideRoyalImg,
    subtitle: 'Signature HD Bridal Makeup & Royal Couture',
  },
  {
    id: 'speed-2',
    title: 'High-Definition Glamour Glow',
    category: 'Makeup',
    tag: 'SIGNATURE',
    imageUrl: makeupGlamourImg,
    subtitle: 'Ultra-pigment long-lasting airbrush finish',
  },
  {
    id: 'speed-3',
    title: 'Moroccan Keratin Smoothing & Spa',
    category: 'Hair',
    tag: 'SMOOTHING',
    imageUrl: hairStylingImg,
    subtitle: 'Deep nourishing therapy for glossy locks',
  },
  {
    id: 'speed-4',
    title: 'Imperial 24K Radiance Facial',
    category: 'Facial',
    tag: 'LUXURY SPA',
    imageUrl: facialImg,
    subtitle: 'Skin brightening & youth revival therapy',
  },
  {
    id: 'speed-5',
    title: 'Precision Hair Cuts & Styling',
    category: 'Hair',
    tag: 'TRENDING',
    imageUrl: salonHeroImg,
    subtitle: 'Face-framing precision cuts & blowouts',
  },
];

const rowTwoItems: SpeedItem[] = [
  {
    id: 'speed-6',
    title: 'Smokey Kohl Eye Artistry & Lashes',
    category: 'Eyes',
    tag: 'PRECISION',
    imageUrl: eyeMakeupImg,
    subtitle: 'Intricate cut-crease with dramatic lash lift',
  },
  {
    id: 'speed-7',
    title: 'Pre-Bridal Glow Ritual',
    category: 'Pre-Bridal',
    tag: 'FULL RITUAL',
    imageUrl: bridalOccasionImg,
    subtitle: 'Complete 3-step head-to-toe rejuvenation',
  },
  {
    id: 'speed-8',
    title: 'Private Luxury Bridal Suite',
    category: 'VIP Suite',
    tag: 'EXCLUSIVE',
    imageUrl: loungeInteriorImg,
    subtitle: 'Hygienic, peaceful & sanitized Rajkot lounge',
  },
  {
    id: 'speed-9',
    title: 'Festive & Party Glamour Look',
    category: 'Makeup',
    tag: 'POPULAR',
    imageUrl: brideImg,
    subtitle: 'Radiant long-wear base & celebration styling',
  },
  {
    id: 'speed-10',
    title: 'Royal HD Bridal Makeover',
    category: 'Bridal',
    tag: 'SIGNATURE',
    imageUrl: brideRoyalImg,
    subtitle: 'Signature HD Bridal Makeup & Royal Finish',
  },
];

interface SpeedImageScrollProps {
  onSelectService: (serviceName: string) => void;
}

export const SpeedImageScroll: React.FC<SpeedImageScrollProps> = ({ onSelectService }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-10 py-6 sm:py-10">
      <div
        id="speed-image-scroll"
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#f2faf8] via-white to-[#eaf6f4] border border-[#148c7e]/25 shadow-xl p-3 sm:p-6"
      >
        {/* Ambient Teal & Soft Emerald Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[450px] h-[200px] sm:h-[300px] bg-[#148c7e]/12 blur-[80px] sm:blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[450px] h-[200px] sm:h-[300px] bg-[#148c7e]/8 blur-[80px] sm:blur-[110px] pointer-events-none" />

        {/* Header Bar in #148c7e and Crisp White */}
        <div className="flex items-center justify-between mb-3 sm:mb-5 pb-2.5 sm:pb-3.5 border-b border-[#148c7e]/15 relative z-20">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#148c7e] animate-pulse shadow-[0_0_8px_#148c7e]" />
            <span className="text-xs sm:text-sm font-cinzel font-bold text-[#0e665c] tracking-widest uppercase">
              Imperial Bridal &amp; Couture Showcase
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#5e6f6c] font-sans tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#148c7e] animate-pulse" />
            <span className="hidden sm:inline">Continuous Showcase • Hover to Pause •</span>
            <span className="text-[#148c7e] font-bold">Tap to Book</span>
          </div>
        </div>

        {/* ROW 1: Scrolling LEFT (animate-scroll-left) */}
        <div
          className="relative overflow-hidden py-1.5 -mx-3 sm:-mx-6 px-3 sm:px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Seamless Edge gradient masks matching the light #f2faf8 background - clean flush touching with zero black cutoffs */}
          <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-14 bg-gradient-to-r from-[#f2faf8] via-[#f2faf8]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-14 bg-gradient-to-l from-[#f2faf8] via-[#f2faf8]/70 to-transparent z-10 pointer-events-none" />

          <div
            className={`flex gap-3 sm:gap-4 w-max ${isHovered ? 'pause-animation' : 'animate-scroll-left'}`}
            style={{ '--scroll-duration': '22s' } as React.CSSProperties}
          >
            {[...rowOneItems, ...rowOneItems].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => onSelectService(item.title)}
                className="relative w-40 sm:w-56 h-52 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#d1ede8] hover:border-[#148c7e] group cursor-pointer shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(20,140,126,0.22)] flex flex-col justify-between"
              >
                {/* Background Image Layer */}
                <div className="w-full h-full absolute inset-0 bg-[#f0f9f8]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-[1.02]"
                    loading="lazy"
                  />
                  {/* Bottom Vignette in pure emerald teal - never black */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b4840]/85 via-[#0b4840]/20 to-transparent pointer-events-none group-hover:from-[#0d534a]/85 transition-all duration-300" />
                </div>

                {/* Top Badges in #148c7e and White */}
                <div className="relative z-10 p-2 sm:p-2.5 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#148c7e]/30 text-[#0e665c] shadow-xs">
                    {item.category}
                  </span>
                  {item.tag && (
                    <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-[#148c7e] text-white shadow-xs">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Overlay with soft white + #148c7e combo - NO black */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#148c7e]/80 via-[#148c7e]/20 to-[#f0f9f8]/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-[#f0f9f8] hover:bg-white text-[#0e665c] text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform group-hover:scale-105 transition-transform border border-[#148c7e]/40">
                    <Calendar className="w-3.5 h-3.5 text-[#148c7e]" />
                    Book Now
                  </span>
                </div>

                {/* Bottom Details with crisp White text on vibrant teal base */}
                <div className="relative z-10 p-2.5 sm:p-3 text-left">
                  <p className="text-xs sm:text-sm font-cinzel font-semibold text-white group-hover:text-[#a7f3d0] transition-colors line-clamp-1 drop-shadow-sm">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-sans text-neutral-100 mt-0.5 line-clamp-1 font-light drop-shadow-xs">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling RIGHT in opposite direction (animate-scroll-right) */}
        <div
          className="relative overflow-hidden py-1.5 mt-2.5 sm:mt-3 -mx-3 sm:-mx-6 px-3 sm:px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Seamless Edge gradient masks matching the light #f2faf8 background */}
          <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-14 bg-gradient-to-r from-[#f2faf8] via-[#f2faf8]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-14 bg-gradient-to-l from-[#f2faf8] via-[#f2faf8]/70 to-transparent z-10 pointer-events-none" />

          <div
            className={`flex gap-3 sm:gap-4 w-max ${isHovered ? 'pause-animation' : 'animate-scroll-right'}`}
            style={{ '--scroll-duration': '26s' } as React.CSSProperties}
          >
            {[...rowTwoItems, ...rowTwoItems].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => onSelectService(item.title)}
                className="relative w-40 sm:w-56 h-52 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#d1ede8] hover:border-[#148c7e] group cursor-pointer shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(20,140,126,0.22)] flex flex-col justify-between"
              >
                {/* Background Image Layer */}
                <div className="w-full h-full absolute inset-0 bg-[#f0f9f8]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-[1.02]"
                    loading="lazy"
                  />
                  {/* Bottom Vignette in pure emerald teal - never black */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b4840]/85 via-[#0b4840]/20 to-transparent pointer-events-none group-hover:from-[#0d534a]/85 transition-all duration-300" />
                </div>

                {/* Top Badges in #148c7e and White */}
                <div className="relative z-10 p-2 sm:p-2.5 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#148c7e]/30 text-[#0e665c] shadow-xs">
                    {item.category}
                  </span>
                  {item.tag && (
                    <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-[#148c7e] text-white shadow-xs">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Overlay with soft white + #148c7e combo - NO black */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#148c7e]/80 via-[#148c7e]/20 to-[#f0f9f8]/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-[#f0f9f8] hover:bg-white text-[#0e665c] text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform group-hover:scale-105 transition-transform border border-[#148c7e]/40">
                    <Calendar className="w-3.5 h-3.5 text-[#148c7e]" />
                    Book Now
                  </span>
                </div>

                {/* Bottom Details with crisp White text on vibrant teal base */}
                <div className="relative z-10 p-2.5 sm:p-3 text-left">
                  <p className="text-xs sm:text-sm font-cinzel font-semibold text-white group-hover:text-[#a7f3d0] transition-colors line-clamp-1 drop-shadow-sm">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-sans text-neutral-100 mt-0.5 line-clamp-1 font-light drop-shadow-xs">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
