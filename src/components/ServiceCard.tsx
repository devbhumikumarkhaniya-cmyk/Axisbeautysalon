import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/salonConfig';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onEnquire: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onEnquire }) => {
  return (
    <article className="group bg-white hover:bg-[#fafdfc] rounded-xl border border-[#d1ede8] hover:border-[#148c7e] overflow-hidden shadow-xs hover:shadow-[0_10px_25px_rgba(20,140,126,0.15)] transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Image */}
        <div className="relative aspect-4/3 overflow-hidden bg-[#f0f9f8]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e4d45]/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          
          {/* Subtle index mark */}
          <div className="absolute top-3 right-3 text-[11px] font-mono font-medium text-white/90 bg-[#0e4d45]/70 backdrop-blur-xs px-2 py-0.5 rounded border border-[#148c7e]/30">
            0{index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <p className="text-xs uppercase tracking-widest font-medium text-[#148c7e] mb-1.5">
            {service.category}
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1a2e2b] mb-2.5 group-hover:text-[#148c7e] transition-colors">
            {service.name}
          </h3>

          <p className="text-sm text-[#5e6f6c] leading-relaxed mb-4">
            {service.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-0">
        <button
          onClick={() => onEnquire(service.name)}
          type="button"
          className="w-full py-2.5 px-4 rounded-lg bg-[#f0f9f8] border border-[#d1ede8] hover:bg-[#148c7e] hover:text-white hover:border-[#148c7e] text-[#0e665c] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-2xs"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
