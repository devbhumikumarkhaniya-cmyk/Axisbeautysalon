import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are your opening hours?',
      answer: `Axis Beauty Salon is open every day of the week from ${salonConfig.openingHours.time}. We welcome walk-ins as well as prior appointment bookings.`,
    },
    {
      question: 'Where is Axis Beauty Salon located?',
      answer: `We are located at: ${salonConfig.address.fullFormatted}. You can easily locate us in Charanwadi, Bhakti Nagar, Rajkot.`,
    },
    {
      question: 'How can I contact the salon?',
      answer: `You can reach our team directly by phone or WhatsApp at ${salonConfig.phone}. We are pleased to assist with treatment questions and booking times.`,
    },
    {
      question: 'How can I book an appointment?',
      answer: `You can book an appointment in three convenient ways: (1) Submit our online appointment enquiry form on this website, (2) Message us directly on WhatsApp, or (3) Call our salon desk directly at ${salonConfig.phone}.`,
    },
    {
      question: 'What services are available?',
      answer: `[ADD VERIFIED SERVICE INFORMATION] — We offer tailored hair care, facial rejuvenation, aesthetic grooming, and personal styling services. Please check our services section above or message us on WhatsApp for currently verified treatments.`,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F7] border-t border-[#F5DDE4]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-accent text-xs sm:text-sm text-[#C95F7B] tracking-[0.2em] uppercase font-semibold block mb-1">
            QUESTIONS & ANSWERS
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-[#1E1B1D] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-xs sm:text-sm text-[#6F6A6B] mt-2">
            Clear, verified information regarding visiting and booking with Axis Beauty Salon in Rajkot.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#F5DDE4] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#202020] hover:text-[#C95F7B] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FFF9F7] border border-[#F5DDE4] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#F5DDE4]/60' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#C95F7B]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-[#6F6A6B] leading-relaxed border-t border-[#F5DDE4]/40 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
