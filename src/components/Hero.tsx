import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Crown, ArrowRight } from 'lucide-react';
import heroBridalImg from '../assets/images/axis_royal_indian_bride_1790356669634.jpg';
import officialLogoImg from '../assets/images/axis_official_circular_logo_1790355579305.jpg';
import { salonConfig } from '../data/salonConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const whatsappBookingUrl = `https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(
    'Hello Axis Beauty Salon! I would like to book an appointment.'
  )}`;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center bg-[#FFFBF8] border-b border-[#148c7e]/20"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#148c7e_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Floating Ambient Teal & Emerald Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#148c7e]/15 via-[#20ad9c]/10 to-transparent blur-[90px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-gradient-to-tl from-[#e6f5f3]/60 via-white to-transparent blur-[80px] pointer-events-none" />

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#148c7e]"
            style={{
              width: `${(i % 3) + 2.5}px`,
              height: `${(i % 3) + 2.5}px`,
              top: `${(i * 19) % 95}%`,
              left: `${(i * 27) % 95}%`,
              opacity: (i % 4 + 3) / 10,
              boxShadow: '0 0 10px rgba(20, 140, 126, 0.6)',
              animation: `floatParticle ${4.5 + (i % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${(i % 4) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* 1. Indian Bridal Background Image Layer - 100% VISIBLE & RADIANT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute right-0 top-0 bottom-0 w-full sm:w-[92%] lg:w-[65%] xl:w-[60%] h-full transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
          }`}
        >
          <img
            src={heroBridalImg}
            alt="Axis Beauty Salon Royal Indian Bridal Styling"
            className="w-full h-full object-cover object-[center_top] lg:object-right-top brightness-[1.03] contrast-[1.03]"
            loading="eager"
          />
        </div>
      </div>

      {/* 2. Seamless White-to-Image Gradient Overlay - Keeps model fully visible while text is crisp */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden sm:block"
        style={{
          background:
            'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 32%, rgba(255, 255, 255, 0.9) 44%, rgba(255, 255, 255, 0.15) 54%, transparent 68%)',
        }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none sm:hidden bg-gradient-to-t from-white via-white/85 to-transparent" />

      {/* 3. Hero Content Layer */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24 w-full">
        <div
          className={`max-w-xl text-left transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Highlighted Website Official Logo */}
          <div className="flex items-center gap-3.5 sm:gap-4 mb-5 select-none">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-[0_4px_20px_rgba(20,140,126,0.35)] ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-white shrink-0 p-0.5">
              <img
                src={officialLogoImg}
                alt="Axis Beauty Salon Official Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel tracking-[0.2em] text-xl sm:text-2xl font-bold text-[#148c7e] uppercase leading-none drop-shadow-xs">
                AXIS
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.32em] text-[#0e665c] uppercase mt-1">
                BEAUTY SALON
              </span>
            </div>
          </div>

          {/* Main Heading in Cinzel + Alex Brush Script */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1a2e2b] tracking-tight leading-[1.12] mb-3">
            Royal Beauty.{' '}
            <span className="font-script text-4xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#148c7e] via-[#20ad9c] to-[#0e665c] inline-block font-normal ml-1">
              Radiance
            </span>
          </h1>

          {/* Short, Clean Description - No Extra Fluff */}
          <p className="text-base sm:text-lg text-[#5e6f6c] leading-relaxed max-w-md mb-8 font-normal">
            Signature bridal makeovers and luxury skincare in Bhakti Nagar, Rajkot.
          </p>

          {/* Action Buttons with BAK Jewels glowing hover in #148c7e */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="btn-primary animate-luxury-pulse px-8 py-3.5 rounded-full text-xs sm:text-[13px] font-bold tracking-[0.15em] uppercase cursor-pointer whitespace-nowrap active:scale-[0.98] shadow-lg flex items-center gap-2 group"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#148c7e]/40 bg-white/90 hover:bg-[#e6f5f3] hover:border-[#148c7e] hover:text-[#0e665c] text-[#1a2e2b] text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap group hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-[#148c7e] group-hover:scale-110 transition-transform" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>

        {/* Floating Animated Badge on Desktop */}
        <div className="hidden lg:flex absolute right-12 bottom-12 z-20 animate-soft-float">
          <div className="bg-white/95 backdrop-blur-md border border-[#148c7e]/35 rounded-2xl px-5 py-3.5 shadow-xl flex items-center gap-3.5 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0e5c53] to-[#083832] border border-[#148c7e] flex items-center justify-center text-white shadow-inner">
              <Sparkles className="w-5 h-5 text-[#a7f3d0] animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1a2e2b] font-cinzel tracking-wide uppercase">
                Royal Bridal &amp; Makeovers
              </p>
              <p className="text-[11px] text-[#5e6f6c]">Axis Beauty Salon · Bhakti Nagar, Rajkot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

