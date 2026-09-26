import React, { useState, useEffect } from 'react';
import { Sparkles, Crown, ChevronRight } from 'lucide-react';
import officialLogoImg from '../assets/images/axis_official_circular_logo_1790355579305.jpg';

interface CinematicLogoIntroProps {
  onComplete: () => void;
}

export const CinematicLogoIntro: React.FC<CinematicLogoIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // BAK Jewels staggered sequence:
    // Step 1 (50ms): Outer & inner rotating rings appear
    const t1 = setTimeout(() => setStep(1), 50);

    // Step 2 (400ms): Center glowing logo emblem scales in with pulse glow
    const t2 = setTimeout(() => setStep(2), 400);

    // Step 3 (900ms): Typography and gold shimmer progress line reveal
    const t3 = setTimeout(() => setStep(3), 900);

    // Finish & fade out at 2800ms
    const t4 = setTimeout(() => {
      handleComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleComplete = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <div
      id="intro-splash"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#051614] text-white transition-opacity duration-700 select-none overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      aria-label="Axis Beauty Salon Imperial Intro"
    >
      {/* Radial Teal & Gold Luxury Aura Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,140,126,0.3)_0%,rgba(11,43,38,0.92)_65%,#041210_100%)] pointer-events-none" />

      {/* Floating Gold & Teal Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              backgroundColor: i % 2 === 0 ? '#34d399' : '#F5E5B8',
              opacity: (i % 5 + 3) / 10,
              boxShadow: i % 2 === 0 ? '0 0 8px #148c7e' : '0 0 8px #D4AF37',
              animation: `floatParticle ${4 + (i % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${(i % 5) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Outer Concentric Rotating Ring (spinSlow 28s) */}
      <div
        className={`absolute w-[380px] sm:w-[560px] h-[380px] sm:h-[560px] rounded-full border border-[#D4AF37]/30 transition-all duration-1000 ${
          step >= 1 ? 'scale-100 opacity-60' : 'scale-50 opacity-0'
        }`}
        style={{
          boxShadow: '0 0 50px rgba(212, 175, 55, 0.15)',
          animation: 'spinSlow 28s linear infinite',
        }}
      />

      {/* Inner Dashed Rotating Ring (spinReverse 22s) */}
      <div
        className={`absolute w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full border border-[#F5E5B8]/30 border-dashed transition-all duration-1000 ${
          step >= 1 ? 'scale-100 opacity-40' : 'scale-75 opacity-0'
        }`}
        style={{
          animation: 'spinReverse 22s linear infinite',
        }}
      />

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Center Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg">
        {/* Soft Warm Ambient Radial Glow Behind Emblem (No blue color over logo) */}
        <div
          className={`absolute -top-6 w-56 h-56 rounded-full bg-[#D4AF37]/15 blur-3xl transition-opacity duration-1000 pointer-events-none ${
            step >= 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-50'
          }`}
        />

        {/* Circular Glowing Logo Emblem - 100% natural, crisp, zero blue overlay */}
        <div
          className={`relative w-36 h-36 sm:w-48 sm:h-48 rounded-full p-2 transition-all duration-700 transform ${
            step >= 2 ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4'
          }`}
        >
          {/* Elegant Gold Aura Ring (No blue ring) */}
          <div
            className="absolute inset-0 rounded-full border border-[#D4AF37]/60 opacity-80"
            style={{
              boxShadow: '0 0 25px rgba(212, 175, 55, 0.35), inset 0 0 12px rgba(212, 175, 55, 0.25)',
              animation: 'pulseGlow 3s ease-in-out infinite alternate',
            }}
          />

          {/* Logo Frame - Pristine and crisp */}
          <div className="w-full h-full rounded-full overflow-hidden bg-black shadow-2xl relative border border-[#D4AF37]/40 flex items-center justify-center">
            <img
              src={officialLogoImg}
              alt="Axis Beauty Salon Official Logo"
              className="w-full h-full object-cover object-center rounded-full select-none pointer-events-none"
            />
            {/* Pure White & Champagne Light Sweep overlay (No cyan/blue) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.7) 48%, rgba(245,229,184,0.75) 52%, transparent 75%)',
              }}
            >
              <div className="w-full h-full animate-gold-sweep" />
            </div>
          </div>

          {/* Crown Top Badge in Classic Gold */}
          <div
            className={`absolute -top-3 left-1/2 -translate-x-1/2 transition-all duration-700 ${
              step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1c1c1e] to-[#0a0a0b] border border-[#D4AF37] flex items-center justify-center shadow-lg text-[#F5E5B8]">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>
        </div>

        {/* Brand Name & Typography Reveal (Step 3) */}
        <div
          className={`mt-6 space-y-2 transition-all duration-700 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.22em] text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5E5B8] to-[#D4AF37]">
              AXIS BEAUTY SALON
            </span>
          </h1>

          <p className="font-sans text-[11px] sm:text-xs text-neutral-300 tracking-[0.25em] uppercase font-medium">
            Bhakti Nagar · Rajkot
          </p>

          {/* Teal & Gold Shimmer Progress Bar */}
          <div className="w-48 sm:w-56 h-1 bg-[#092e29] rounded-full overflow-hidden mx-auto mt-4 border border-[#148c7e]/30">
            <div className="h-full bg-teal-shimmer rounded-full animate-pulse w-full" />
          </div>
        </div>
      </div>

      {/* Skip Button in Top Right */}
      <button
        onClick={handleComplete}
        type="button"
        className="absolute top-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-[#092e29]/80 hover:bg-[#0c3e37] border border-[#148c7e]/45 text-white text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
      >
        <span>ENTER</span>
        <ChevronRight className="w-3 h-3 text-[#a7f3d0]" />
      </button>
    </div>
  );
};
