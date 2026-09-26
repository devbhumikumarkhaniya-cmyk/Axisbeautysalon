import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: initialService || '[Verified Service 01]',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhone = (phoneStr: string) => {
    // Strip spaces, dashes, +91
    const cleaned = phoneStr.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      setFormStatus('error');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    setErrorMessage('');

    // Save appointment into Admin Bookings log
    const newBooking = {
      id: `bk-${Date.now()}`,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      date: formData.date || 'Flexible',
      time: formData.time || 'Flexible',
      service: formData.service,
      message: formData.message.trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = localStorage.getItem('axis_salon_bookings');
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem('axis_salon_bookings', JSON.stringify([newBooking, ...parsed]));
      window.dispatchEvent(new Event('axis_booking_added'));
    } catch (e) {
      // ignore
    }

    setTimeout(() => {
      setFormStatus('success');
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Axis Beauty Salon! My name is ${formData.name || 'a customer'}. I would like to book an appointment for ${
      formData.service
    } on ${formData.date || 'an upcoming date'} around ${formData.time || 'salon hours'}. ${
      formData.message ? `Notes: ${formData.message}` : ''
    }`;
    window.open(`https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#d1ede8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="font-accent text-xs sm:text-sm text-[#148c7e] tracking-[0.2em] uppercase font-semibold block mb-1">
            LOCATION & ENQUIRY
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-[#1a2e2b] uppercase">
            VISIT AXIS BEAUTY SALON
          </h2>

          <p className="text-xs sm:text-sm text-[#5e6f6c] mt-2">
            Located in Charanwadi, Bhakti Nagar, Rajkot. Open daily 9:30 AM – 8:00 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Salon Details, Contact Cards & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f8fcfa] rounded-xl p-6 sm:p-7 border border-[#d1ede8]">
              <h3 className="font-serif text-xl font-semibold text-[#1a2e2b] mb-5">
                Salon Information
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-[#d1ede8] text-[#148c7e] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#148c7e]">
                      Address
                    </h4>
                    <p className="text-sm text-[#1a2e2b] mt-0.5 font-medium leading-relaxed">
                      {salonConfig.address.society}, {salonConfig.address.area},
                      <br />
                      {salonConfig.address.landmark},
                      <br />
                      {salonConfig.address.city}, {salonConfig.address.state} {salonConfig.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-[#d1ede8] text-[#148c7e] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#148c7e]">
                      Phone
                    </h4>
                    <a
                      href={`tel:${salonConfig.phoneRaw}`}
                      className="text-base text-[#1a2e2b] font-semibold hover:text-[#148c7e] transition-colors"
                    >
                      {salonConfig.phone}
                    </a>
                    <p className="text-xs text-[#5e6f6c] mt-0.5">
                      Direct line for appointments & questions
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-[#d1ede8] text-[#148c7e] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#148c7e]">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-[#1a2e2b] font-semibold mt-0.5">
                      {salonConfig.openingHours.days}
                    </p>
                    <p className="text-xs text-[#5e6f6c]">
                      {salonConfig.openingHours.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-6 mt-6 border-t border-[#d1ede8]">
                <a
                  href={`tel:${salonConfig.phoneRaw}`}
                  className="py-2.5 px-3 rounded-lg bg-[#148c7e] text-white text-xs font-semibold tracking-wider uppercase text-center hover:bg-[#0e665c] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(
                    'Hello Axis Beauty Salon! I would like to enquire about your services and appointment availability.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase text-center hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={salonConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-white border border-[#d1ede8] text-[#1a2e2b] text-xs font-semibold tracking-wider uppercase text-center hover:bg-[#e6f5f3] hover:text-[#0e665c] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#148c7e]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Container */}
            <div className="bg-[#f8fcfa] rounded-xl overflow-hidden border border-[#d1ede8] shadow-xs">
              <div className="p-3 bg-white border-b border-[#d1ede8] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1a2e2b] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#148c7e]" />
                  Charanwadi, Bhakti Nagar, Rajkot 360002
                </span>
                <a
                  href={salonConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#148c7e] hover:underline font-medium"
                >
                  Open in Maps
                </a>
              </div>
              <div className="aspect-16/9 w-full bg-neutral-100 relative">
                <iframe
                  title="Axis Beauty Salon Location Map"
                  src="https://maps.google.com/maps?q=Bhakti%20Nagar%20Rajkot%20Gujarat%20360002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Appointment / Enquiry Form */}
          <div className="lg:col-span-7 bg-[#f8fcfa] rounded-xl p-6 sm:p-8 border border-[#d1ede8] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1a2e2b]">
                  Appointment & Service Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#5e6f6c] mt-0.5">
                  Fill in your preferred date and service. Our team will contact you to confirm timing.
                </p>
              </div>
            </div>

            {formStatus === 'success' ? (
              <div className="py-10 text-center bg-white rounded-lg p-6 border border-[#25D366]/40">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-[#1a2e2b] mb-2">
                  Enquiry Submitted Successfully
                </h4>
                <p className="text-sm text-[#5e6f6c] max-w-md mx-auto mb-5">
                  Thank you, <span className="font-semibold text-[#1a2e2b]">{formData.name}</span>! Our salon team at Axis Beauty Salon will call or message your number{' '}
                  <span className="font-semibold text-[#1a2e2b]">{formData.phone}</span> to confirm your slot time.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        time: '',
                        service: '[Verified Service 01]',
                        message: '',
                      });
                    }}
                    type="button"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#148c7e] bg-white border border-[#d1ede8] rounded-lg hover:bg-[#e6f5f3]"
                  >
                    Submit Another Request
                  </button>
                  <button
                    onClick={handleWhatsAppDirect}
                    type="button"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] rounded-lg hover:bg-[#20ba59] flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Also Send on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                      Full Name <span className="text-[#148c7e]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#d1ede8] bg-white text-sm text-[#1a2e2b] placeholder-neutral-400 focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                      Phone Number <span className="text-[#148c7e]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#d1ede8] bg-white text-sm text-[#1a2e2b] placeholder-neutral-400 focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#d1ede8] bg-white text-sm text-[#1a2e2b] focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#d1ede8] bg-white text-sm text-[#1a2e2b] focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                    >
                      <option value="">Select a preferred time</option>
                      <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="Evening (3:00 PM - 6:00 PM)">Evening (3:00 PM - 6:00 PM)</option>
                      <option value="Late Evening (6:00 PM - 8:00 PM)">Late Evening (6:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d1ede8] bg-white text-sm text-[#1a2e2b] focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                  >
                    {salonConfig.services.map((svc) => (
                      <option key={svc.id} value={svc.name}>
                        {svc.name} ({svc.category})
                      </option>
                    ))}
                    <option value="General Beauty Consultation">General Beauty Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requests or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d1ede8] bg-white text-sm text-[#1a2e2b] placeholder-neutral-400 focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="flex-1 py-3 px-5 rounded-lg bg-[#148c7e] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#0e665c] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-70"
                  >
                    {formStatus === 'loading' ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Appointment Enquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-3 px-5 rounded-lg bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#20ba59] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire via WhatsApp</span>
                  </button>
                </div>

                {/* Notice */}
                <p className="text-[11px] text-[#5e6f6c] text-center pt-2">
                  Submissions are logged for salon administration. We will contact you to confirm timing.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
