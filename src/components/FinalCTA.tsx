import React from 'react';
import { Calendar, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(
    'Hello Axis Beauty Salon! I am ready to book my next beauty appointment.'
  )}`;

  return (
    <section className="bg-[#191719] text-[#FFF9F7] py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative subtle lighting */}
      <div
        className="absolute top-0 right-1/4 -z-0 w-80 h-80 rounded-full bg-[#C95F7B]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 -z-0 w-64 h-64 rounded-full bg-[#C9A56A]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5DDE4] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A56A]" />
          <span>Axis Beauty Salon · Rajkot</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-4 tracking-tight leading-tight">
          Ready for Your Next Beauty Appointment?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Connect with Axis Beauty Salon and find the right beauty service for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#C95F7B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#A94763] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-[#25D366]/60 bg-[#25D366]/15 text-[#64E595] hover:bg-[#25D366]/25 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${salonConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A56A]" />
            <span>Call: {salonConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
