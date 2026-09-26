import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { salonConfig, ServiceItem } from '../data/salonConfig';

interface ServicesSectionProps {
  onEnquire: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquire }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Derive unique categories dynamically from verified services only (no invented categories)
  const uniqueCategories = Array.from(new Set(salonConfig.services.map((s) => s.category)));
  const categories = ['All', ...uniqueCategories];

  const filteredServices =
    activeCategory === 'All'
      ? salonConfig.services
      : salonConfig.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-t border-[#d1ede8]/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Top Header & Category Navigation Container */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          {/* Top Left Header */}
          <div className="text-left">
            <span className="font-accent text-sm sm:text-base text-[#148c7e] tracking-[0.2em] uppercase font-semibold block mb-1">
              WHAT WE OFFER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#1a2e2b] uppercase">
              OUR SERVICES
            </h2>
          </div>

          {/* Horizontal Scroll Category Navigation with Unique Opposite-Direction Dual-Line Hover */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-max p-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    type="button"
                    className={`category-btn-animated relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-350 cursor-pointer whitespace-nowrap shadow-2xs group ${
                      isActive
                        ? 'active-category bg-[#148c7e] text-white shadow-md shadow-[#148c7e]/25'
                        : 'bg-white text-[#5e6f6c] border border-[#d1ede8] hover:bg-[#e6f5f3] hover:text-[#0e665c] hover:border-[#148c7e] hover:shadow-xs'
                    }`}
                  >
                    <span className="relative z-20 flex flex-col items-center">
                      <span className="flex items-center gap-1.5">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                        <span>{cat}</span>
                      </span>

                      {/* Visible Opposite Direction Dual Line Animation:
                          Line 1 (Upper): Sweeps Left to Right
                          Line 2 (Lower, right below): Sweeps Right to Left */}
                      <span className="category-dual-indicator w-full">
                        <span
                          className={`category-line-upper ${
                            isActive ? 'scale-x-100 bg-white' : ''
                          }`}
                        />
                        <span
                          className={`category-line-lower ${
                            isActive ? 'scale-x-100 bg-[#a7f3d0]' : ''
                          }`}
                        />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onEnquire(service.name)}
              className="group bg-white rounded-2xl border border-[#d1ede8] p-5 shadow-xs hover:shadow-xl hover:border-[#148c7e] transition-all duration-350 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden active:scale-[0.99]"
            >
              <div>
                {/* Category Label at TOP-LEFT of box with dual line indicator */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0e665c] bg-[#e6f5f3] px-3 py-1 rounded-full border border-[#148c7e]/25">
                      {service.category}
                    </span>
                    {/* Dual lines right under category label in opposite directions */}
                    <div className="category-dual-indicator w-full mt-1">
                      <span className="category-line-upper" />
                      <span className="category-line-lower" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#0e665c] bg-[#eef8f6] px-2 py-0.5 rounded border border-[#148c7e]/20 font-medium">
                    Verified
                  </span>
                </div>

                {/* Service Image Container with zoom & shimmer */}
                <div className="w-full aspect-[16/11] rounded-xl overflow-hidden mb-4 bg-[#f0f9f8] relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle transparent overlay on hover */}
                  <div className="absolute inset-0 bg-[#0e665c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a2e2b] group-hover:text-[#148c7e] transition-colors mb-2">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-[13px] text-[#5e6f6c] leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Instant Book Appointment Button */}
              <div className="mt-5 pt-3 border-t border-[#d1ede8]/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEnquire(service.name);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#148c7e] hover:bg-[#0e665c] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 shadow-sm shadow-[#148c7e]/25 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Book Appointment</span>
                </button>
                <div className="w-9 h-9 rounded-xl bg-[#e6f5f3] border border-[#d1ede8] group-hover:bg-[#148c7e] group-hover:border-[#148c7e] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4 text-[#148c7e] group-hover:text-white transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
