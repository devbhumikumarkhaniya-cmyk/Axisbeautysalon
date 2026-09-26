import React from 'react';
import { Phone, MessageCircle, Navigation, Calendar } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(
    'Hello Axis Beauty Salon! I want to enquire about booking an appointment.'
  )}`;

  return (
    <aside
      aria-label="Quick mobile contact and actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#d1ede8] shadow-lg px-2 py-2"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* 1. Call */}
        <a
          href={`tel:${salonConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#f8fcfa] border border-[#d1ede8] text-[#148c7e] active:bg-[#e6f5f3] transition-colors min-h-[46px]"
          aria-label="Call salon directly"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#148c7e]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] active:bg-[#25D366]/20 transition-colors min-h-[46px]"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-[#25D366]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* 3. Directions */}
        <a
          href={salonConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#f8fcfa] border border-[#d1ede8] text-[#1a2e2b] active:bg-[#e6f5f3] transition-colors min-h-[46px]"
          aria-label="Get directions to salon"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-[#148c7e]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Map</span>
        </a>

        {/* 4. Book Appointment */}
        <button
          onClick={onOpenBooking}
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#148c7e] text-white active:bg-[#0e665c] transition-colors min-h-[46px] shadow-xs cursor-pointer"
          aria-label="Open booking modal"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Book</span>
        </button>
      </div>
    </aside>
  );
};
