import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#111111] text-[#E8DFE1] text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-white/10 relative z-40">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Location */}
        <div className="flex items-center gap-1.5 text-neutral-300">
          <MapPin className="w-3.5 h-3.5 text-[#C95F7B] shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">
            {salonConfig.address.society}, {salonConfig.address.area}, Rajkot
          </span>
        </div>

        {/* Center: Opening Hours */}
        <div className="flex items-center gap-1.5 text-neutral-300">
          <Clock className="w-3.5 h-3.5 text-[#C9A56A] shrink-0" />
          <span>Mon - Sun: {salonConfig.openingHours.time}</span>
        </div>

        {/* Right: Phone & Socials */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${salonConfig.phoneRaw}`}
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C95F7B] shrink-0" />
            <span className="font-medium tracking-wide">{salonConfig.phone}</span>
          </a>

          {/* Social Icons matching reference */}
          <div className="flex items-center gap-2.5 text-neutral-400">
            <span className="hover:text-white transition-colors cursor-pointer text-[11px]" title="Facebook">f</span>
            <span className="hover:text-white transition-colors cursor-pointer text-[11px]" title="Instagram">ig</span>
            <span className="hover:text-white transition-colors cursor-pointer text-[11px]" title="Pinterest">p</span>
            <span className="hover:text-white transition-colors cursor-pointer text-[11px]" title="YouTube">yt</span>
          </div>
        </div>
      </div>
    </div>
  );
};
