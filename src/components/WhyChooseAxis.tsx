import React from 'react';
import { Star, MapPin, PhoneCall, Sparkles, Heart } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

export const WhyChooseAxis: React.FC = () => {
  const features = [
    {
      icon: Star,
      iconColor: 'text-[#C9A56A]',
      title: '4.9★ Rated',
      subtitle: `${salonConfig.reviewCount}+ Public Reviews`,
      description:
        'Consistently rated 4.9 out of 5 by local clients on Google for clean services and courteous hospitality.',
    },
    {
      icon: MapPin,
      iconColor: 'text-[#C95F7B]',
      title: 'Convenient Rajkot Location',
      subtitle: 'Charanwadi, Bhakti Nagar',
      description:
        'Centrally situated at Green Park Society, making it easily accessible with ample neighborhood parking.',
    },
    {
      icon: PhoneCall,
      iconColor: 'text-[#C9A56A]',
      title: 'Easy Call & WhatsApp Enquiry',
      subtitle: 'Fast Response',
      description:
        'Direct connection with salon staff for appointment scheduling, treatment advice, and timing queries.',
    },
    {
      icon: Heart,
      iconColor: 'text-[#C95F7B]',
      title: 'Customer-Focused Experience',
      subtitle: 'Comfort First',
      description:
        'Attentive care tailored to your unique beauty routine in a relaxed, hygienic, and welcoming environment.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FFF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C95F7B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A56A]" />
            <span>The Axis Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#202020] mb-4 tracking-tight">
            Why Choose Axis Beauty Salon
          </h2>

          <p className="text-base text-[#6F6A6B]">
            Committed to reliable care, welcoming hospitality, and effortless booking in Rajkot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#F5DDE4] shadow-xs hover:shadow-md hover:border-[#C95F7B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF9F7] border border-[#F5DDE4] flex items-center justify-center mb-5">
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#202020] mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-medium text-[#C95F7B] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6F6A6B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
