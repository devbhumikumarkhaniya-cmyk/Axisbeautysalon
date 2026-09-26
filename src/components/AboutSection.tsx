import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';
import interiorImg from '../assets/images/salon_interior_lounge_1790352771590.jpg';
import { salonConfig } from '../data/salonConfig';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-[#F5DDE4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#F5DDE4] shadow-sm bg-[#FFF9F7] aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 group">
                <img
                  src={interiorImg}
                  alt="Axis Beauty Salon Ambience in Bhakti Nagar, Rajkot"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Quiet badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/70 shadow-xs">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#C95F7B] mb-0.5">
                    Salon Ambience
                  </p>
                  <p className="text-sm font-serif font-medium text-[#202020]">
                    Clean, Relaxed & Modern Parlour Atmosphere
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C95F7B] mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A56A]" />
              <span>About Axis Beauty Salon</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#202020] mb-5 tracking-tight leading-tight">
              A Beauty Experience Designed Around You
            </h2>

            <p className="text-base sm:text-lg text-[#6F6A6B] leading-relaxed mb-6">
              At Axis Beauty Salon, our goal is to create a comfortable and welcoming beauty experience for every customer. Explore our available services and connect with our team to find the right option for you.
            </p>

            <div className="space-y-4 mb-8 w-full">
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFF9F7] border border-[#F5DDE4]/70">
                <HeartHandshake className="w-5 h-5 text-[#C95F7B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#202020]">Comfort & Personalized Care</h4>
                  <p className="text-xs text-[#6F6A6B] mt-0.5">
                    We listen to your beauty preferences and ensure treatments match your personal taste and lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFF9F7] border border-[#F5DDE4]/70">
                <ShieldCheck className="w-5 h-5 text-[#C9A56A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#202020]">Hygiene & Quality Standards</h4>
                  <p className="text-xs text-[#6F6A6B] mt-0.5">
                    Clean workstations, sanitized equipment, and skin-friendly products for a refreshing visit every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFF9F7] border border-[#F5DDE4]/70">
                <Clock className="w-5 h-5 text-[#C95F7B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#202020]">Open Every Day in Bhakti Nagar</h4>
                  <p className="text-xs text-[#6F6A6B] mt-0.5">
                    Convenient daily hours from 9:30 AM to 8:00 PM for easy scheduling before work, weekends, or special occasions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleScrollToContact}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C95F7B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#A94763] transition-colors cursor-pointer"
              >
                <span>Know More About Axis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#F5DDE4] text-[#202020] text-xs font-semibold tracking-wider uppercase hover:bg-[#FFF9F7] transition-colors cursor-pointer"
              >
                <span>Schedule a Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
