import React from 'react';
import { MessageCircle, Calendar, Phone } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface FloatingContactPanelProps {
  onOpenBooking: () => void;
}

export const FloatingContactPanel: React.FC<FloatingContactPanelProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(
    'Hello Axis Beauty Salon! I would like to book an appointment.'
  )}`;

  return (
    <aside
      aria-label="Quick salon contact panel"
      className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col bg-white rounded-l-2xl shadow-xl border-l border-y border-[#d1ede8] py-3.5 px-2.5 divide-y divide-neutral-100 transition-transform duration-300 hover:translate-x-0"
    >
      {/* 1. WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-center p-2.5 hover:text-[#25D366] transition-colors"
        title="Chat on WhatsApp"
        aria-label="Chat with Axis Beauty Salon on WhatsApp"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-1 group-hover:bg-[#25D366] group-hover:text-white transition-all">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-[#1a2e2b] group-hover:text-[#25D366] transition-colors">
          WhatsApp
        </span>
      </a>

      {/* 2. Book Now */}
      <button
        onClick={onOpenBooking}
        type="button"
        className="group flex flex-col items-center justify-center p-2.5 hover:text-[#148c7e] transition-colors cursor-pointer"
        title="Book Appointment Now"
        aria-label="Book appointment at Axis Beauty Salon"
      >
        <div className="w-8 h-8 rounded-full bg-[#e6f5f3] text-[#148c7e] flex items-center justify-center mb-1 group-hover:bg-[#148c7e] group-hover:text-white transition-all">
          <Calendar className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-[#1a2e2b] group-hover:text-[#148c7e] transition-colors">
          Book Now
        </span>
      </button>

      {/* 3. Call Us */}
      <a
        href={`tel:${salonConfig.phoneRaw}`}
        className="group flex flex-col items-center justify-center p-2.5 hover:text-[#148c7e] transition-colors"
        title="Call Salon Directly"
        aria-label="Call Axis Beauty Salon"
      >
        <div className="w-8 h-8 rounded-full bg-[#f0f9f8] text-[#148c7e] flex items-center justify-center mb-1 group-hover:bg-[#148c7e] group-hover:text-white transition-all">
          <Phone className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-[#1a2e2b] group-hover:text-[#148c7e] transition-colors">
          Call Us
        </span>
      </a>
    </aside>
  );
};
