import React from 'react';
import { Heart } from 'lucide-react';
import interiorImg from '../assets/images/salon_interior_lounge_1790352771590.jpg';

interface AboutAndPromoProps {
  onOpenBooking: () => void;
}

export const AboutAndPromoSection: React.FC<AboutAndPromoProps> = ({ onOpenBooking }) => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-14 sm:py-18 bg-[#f8fcfa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-xs border border-[#d1ede8] bg-white">
          {/* LEFT: About Axis Salon */}
          <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Salon Interior Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-[#d1ede8]/60">
              <img
                src={interiorImg}
                alt="Axis Beauty Salon Ambience"
                className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* About Copy */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <span className="font-accent text-xs sm:text-sm text-[#148c7e] tracking-[0.2em] uppercase font-semibold mb-1">
                ABOUT AXIS
              </span>

              <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1a2e2b] uppercase tracking-wide leading-snug mb-2">
                WELCOME TO <br className="hidden sm:inline" />
                AXIS BEAUTY SALON
              </h2>

              <div className="flex items-center gap-1.5 mb-3 text-[#148c7e]">
                <span className="w-4 h-0.5 bg-[#148c7e]" />
                <Heart className="w-2.5 h-2.5 fill-[#148c7e]" />
                <span className="w-4 h-0.5 bg-[#148c7e]" />
              </div>

              <p className="text-xs sm:text-sm text-[#5e6f6c] leading-relaxed mb-4">
                At Axis Beauty Salon, our goal is to create a comfortable and welcoming beauty experience for every client in Bhakti Nagar, Rajkot.
              </p>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="btn-primary px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase inline-block shadow-xs"
              >
                READ MORE
              </a>
            </div>
          </div>

          {/* RIGHT: Emerald Teal Promotional Panel in #148c7e */}
          <div className="lg:col-span-5 xl:col-span-4 bg-gradient-to-br from-[#0c4e46] via-[#148c7e] to-[#093a34] text-white p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-[#0e665c]">
            <span className="font-accent text-xs sm:text-sm text-[#a7f3d0] tracking-[0.2em] uppercase font-semibold mb-2">
              APPOINTMENT DESK
            </span>

            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase text-white mb-2 leading-tight">
              READY FOR YOUR NEXT BEAUTY APPOINTMENT?
            </h3>

            <div className="flex items-center justify-center my-3 text-[#a7f3d0]">
              <Heart className="w-3.5 h-3.5 fill-[#a7f3d0]" />
            </div>

            <p className="text-xs sm:text-sm text-white/90 max-w-xs leading-relaxed mb-6 font-normal">
              Connect with Axis Beauty Salon and find the right beauty service for you in Rajkot.
            </p>

            <button
              onClick={onOpenBooking}
              type="button"
              className="px-8 py-3.5 rounded-full bg-white text-[#148c7e] hover:bg-[#e6f5f3] hover:text-[#0e665c] text-xs font-bold tracking-wider uppercase shadow-lg active:scale-[0.98] cursor-pointer transition-all duration-200"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
