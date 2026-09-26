import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { SalonLogo } from './SalonLogo';
import { salonConfig } from '../data/salonConfig';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAdminBookings?: () => void;
  bookingsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAdminBookings,
  bookingsCount = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PACKAGES', href: '#services' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveTab(label);
    setMobileMenuOpen(false);
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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? 'shadow-md py-3 bg-white/95 border-b border-[#148c7e]/30'
          : 'py-4 bg-white/95 border-b border-[#148c7e]/20'
      }`}
    >
      {/* Top subtle jewel bar highlighting white & #148c7e gradient harmony */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#148c7e] to-transparent opacity-80" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Left: Salon Logo (100% clean, no blue line, no border, no outline) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home', 'HOME')}
            className="flex items-center gap-2 outline-none border-none ring-0 [text-decoration:none] no-underline focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none group select-none cursor-pointer"
            aria-label="Axis Beauty Salon Home"
          >
            <SalonLogo variant="full" />
          </a>

          {/* Center: Horizontal Menu with soft white mixed with #148c7e hover combo */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.label)}
                  className={`relative px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wider transition-all duration-200 uppercase group no-underline [text-decoration:none] outline-none focus:outline-none ${
                    isActive
                      ? 'text-[#0e665c] bg-[#dcf2ee] shadow-2xs font-bold'
                      : 'text-[#1a2e2b] hover:text-[#0e665c] hover:bg-[#e4f4f1] hover:shadow-[0_2px_8px_rgba(20,140,126,0.12)]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Opposite Direction Dual Lines on Hover */}
                  <span className="category-dual-indicator w-full mt-0.5">
                    <span className={`category-line-upper ${isActive ? 'scale-x-100' : ''}`} />
                    <span className={`category-line-lower ${isActive ? 'scale-x-100' : ''}`} />
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right: Teal Rounded Book Appointment Button & Admin Log Trigger */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenAdminBookings && (
              <button
                onClick={onOpenAdminBookings}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#148c7e]/35 bg-white/95 text-[#148c7e] hover:bg-[#e4f4f1] hover:text-[#0e665c] hover:border-[#148c7e] text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-2xs"
                title="View customer appointments captured for Salon Admin"
              >
                <span>Admin Log</span>
                {bookingsCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#148c7e] text-white text-[9px] flex items-center justify-center font-bold">
                    {bookingsCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              type="button"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#148c7e] text-white text-[12px] font-semibold tracking-wider uppercase hover:bg-[#0e665c] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#148c7e]/25 cursor-pointer whitespace-nowrap animate-luxury-pulse"
            >
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#1a2e2b] hover:bg-[#e4f4f1] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#148c7e]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer with white and #148c7e gradient */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gradient-to-b from-white via-[#f0f9f7] to-[#dcf2ee] border-b border-[#148c7e]/30 px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.label)}
                className="px-3 py-2 text-sm font-semibold tracking-wider uppercase text-[#1a2e2b] hover:text-[#0e665c] hover:bg-[#e4f4f1] rounded-lg transition-colors no-underline [text-decoration:none]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#148c7e]/25 flex flex-col gap-2">
            {onOpenAdminBookings && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminBookings();
                }}
                type="button"
                className="w-full py-2.5 px-4 rounded-full border border-[#148c7e]/35 bg-white text-[#148c7e] hover:bg-[#e4f4f1] hover:text-[#0e665c] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <span>Admin Bookings Log</span>
                {bookingsCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#148c7e] text-white text-[9px] flex items-center justify-center font-bold">
                    {bookingsCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="w-full py-3 px-4 rounded-full bg-[#148c7e] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#0e665c] transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>
            <a
              href={`tel:${salonConfig.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-full border border-[#d1ede8] bg-white text-[#1a2e2b] text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#e4f4f1] hover:text-[#0e665c] transition-colors no-underline [text-decoration:none]"
            >
              <Phone className="w-4 h-4 text-[#148c7e]" />
              <span>Call: {salonConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
