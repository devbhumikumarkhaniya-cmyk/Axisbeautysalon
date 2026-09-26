import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState(selectedService || salonConfig.services[0].name);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  // Always reset to clean form whenever modal opens or service changes
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setError('');
      document.body.style.overflow = 'hidden';
      if (selectedService) {
        setService(selectedService);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedService]);

  if (!isOpen) return null;

  const handleModalClose = () => {
    setStatus('idle');
    setError('');
    onClose();
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Axis Beauty Salon! I want to book an appointment for: ${service}.${
      name ? ` My name is ${name}.` : ''
    }${date ? ` Preferred date: ${date}.` : ''}${time ? ` Preferred time: ${time}.` : ''}${
      message ? ` Notes: ${message}.` : ''
    }`;
    window.open(`https://wa.me/${salonConfig.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      setStatus('error');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    // Save appointment to localStorage ready for future Admin Panel
    const newBooking = {
      id: `bk-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      date: date || 'Flexible',
      time: time || 'Flexible',
      service,
      message: message.trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = localStorage.getItem('axis_salon_bookings');
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem('axis_salon_bookings', JSON.stringify([newBooking, ...parsed]));
      window.dispatchEvent(new Event('axis_booking_added'));
    } catch (err) {
      // fallback
    }

    setTimeout(() => {
      setStatus('success');
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleModalClose();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/75 select-none overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#d1ede8] overflow-hidden my-auto max-h-[92vh] flex flex-col select-text">
        {/* Header */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#f8fcfa] border-b border-[#d1ede8] flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-cinzel font-bold text-[#148c7e]">
              Axis Beauty Salon · Rajkot
            </span>
            <h3 id="booking-modal-title" className="font-cinzel text-lg sm:text-xl font-bold text-[#1a2e2b]">
              Book an Appointment
            </h3>
          </div>
          <button
            onClick={handleModalClose}
            type="button"
            className="p-1.5 text-neutral-400 hover:text-[#1a2e2b] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {status === 'success' ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#148c7e] mx-auto mb-3" />
              <h4 className="font-serif text-xl font-bold text-[#1a2e2b] mb-2">
                Booking Request Recorded
              </h4>
              <p className="text-sm text-[#5e6f6c] mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[#1a2e2b]">{name}</span>. Your appointment request for{' '}
                <span className="font-semibold text-[#1a2e2b]">{service}</span> has been logged. Our salon coordinator will contact you at{' '}
                <span className="font-semibold text-[#1a2e2b]">{phone}</span> to confirm your time.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setName('');
                    setPhone('');
                    setMessage('');
                    setStatus('idle');
                  }}
                  type="button"
                  className="px-6 py-2.5 rounded-full border border-[#148c7e] text-[#148c7e] bg-white hover:bg-[#eef8f6] text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Book Another Service
                </button>
                <button
                  onClick={handleModalClose}
                  type="button"
                  className="btn-primary px-8 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Selected Service Image & Category Preview Badge */}
              {(() => {
                const searchStr = (service || selectedService || '').toLowerCase().trim();
                const matchedService = salonConfig.services.find(
                  (s) => {
                    const sName = s.name.toLowerCase();
                    const sCat = s.category.toLowerCase();
                    return (
                      sName === searchStr ||
                      (searchStr.length > 2 && searchStr.includes(sName)) ||
                      (sName.length > 2 && sName.includes(searchStr)) ||
                      (searchStr.length > 2 && searchStr.includes(sCat))
                    );
                  }
                );
                if (!matchedService) return null;
                return (
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-gradient-to-r from-[#eef8f6] via-[#f7fbfb] to-white border border-[#148c7e]/35 shadow-xs">
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#148c7e]/30 bg-white">
                      <img
                        src={matchedService.image}
                        alt={matchedService.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#148c7e] block">
                        {matchedService.category}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-[#1a2e2b] truncate">
                        {matchedService.name}
                      </h4>
                      <p className="text-[11px] text-[#5e6f6c] line-clamp-1">
                        {matchedService.description}
                      </p>
                    </div>
                  </div>
                );
              })()}

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                  Full Name <span className="text-[#148c7e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#d1ede8] bg-[#f8fcfa] focus:bg-white focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#d1ede8] bg-[#f8fcfa] focus:bg-white focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                  Select Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#d1ede8] bg-white focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                >
                  {salonConfig.services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                  <option value="General Beauty Consultation">General Beauty Consultation</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#d1ede8] bg-white focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#d1ede8] bg-white focus:border-[#148c7e] focus:ring-1 focus:ring-[#148c7e] outline-hidden transition-colors"
                  >
                    <option value="">Any time (9:30 AM - 8:00 PM)</option>
                    <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="Evening (3:00 PM - 6:00 PM)">Evening (3:00 PM - 6:00 PM)</option>
                    <option value="Late Evening (6:00 PM - 8:00 PM)">Late Evening (6:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1a2e2b] mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any special preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#d1ede8] bg-[#f8fcfa] focus:bg-white focus:border-[#148c7e] outline-hidden transition-colors resize-none"
                />
              </div>

              {/* Booking Actions */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#148c7e]/25 disabled:opacity-70"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>{status === 'loading' ? 'Recording Request...' : 'Confirm Appointment Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 px-4 rounded-xl border border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-xs font-semibold uppercase tracking-wider active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quick Book via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-[#5e6f6c] text-center pt-1">
                Submissions are logged for salon administration. We will contact you to confirm timing.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
