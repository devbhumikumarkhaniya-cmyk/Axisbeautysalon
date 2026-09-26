import React from 'react';
import { SalonLogo } from './SalonLogo';
import { MapPin, Phone, Heart } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#061e1b] text-[#E8DFE1] pt-14 pb-24 sm:pb-12 border-t border-[#0d3832]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* 5 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-12 border-b border-[#0d3832] text-left">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3.5">
            <SalonLogo variant="compact" isDark={true} />
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Your beauty, our passion. We bring perfection to your style with premium care at Axis Beauty Salon.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-neutral-300">
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-[#148c7e] hover:text-white transition-colors cursor-pointer">
                f
              </span>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-[#148c7e] hover:text-white transition-colors cursor-pointer">
                ig
              </span>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-[#148c7e] hover:text-white transition-colors cursor-pointer">
                p
              </span>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-[#148c7e] hover:text-white transition-colors cursor-pointer">
                yt
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-[#a7f3d0] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {Array.from(new Set(salonConfig.services.map((s) => s.category))).map((cat) => (
                <li key={cat}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="hover:text-[#a7f3d0] transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              CONTACT INFO
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#148c7e] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Green Park Society,
                  <br />
                  Charanwadi, Bhakti Nagar,
                  <br />
                  Rajkot, Gujarat 360002
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#148c7e] shrink-0" />
                <a href={`tel:${salonConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {salonConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Opening Hours & Teal Button */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              OPENING HOURS
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 mb-5">
              <div className="flex justify-between border-b border-[#0d3832] pb-1">
                <span>Every Day</span>
                <span className="text-white font-medium">{salonConfig.openingHours.time}</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Walk-ins &amp; advance bookings welcome
              </p>
            </div>

            {/* Teal BOOK APPOINTMENT Button */}
            <button
              onClick={onOpenBooking}
              type="button"
              className="btn-primary w-full py-2.5 px-4 rounded-full text-[11px] font-semibold tracking-wider uppercase shadow-xs cursor-pointer"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>

        {/* Bottom Bar with Centered Teal Heart */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>© 2026 Axis Beauty Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-[#148c7e]">
            <Heart className="w-3.5 h-3.5 fill-[#148c7e]" />
          </div>
          <p className="text-[11px] text-neutral-400">
            Charanwadi, Bhakti Nagar, Rajkot
          </p>
        </div>
      </div>
    </footer>
  );
};
