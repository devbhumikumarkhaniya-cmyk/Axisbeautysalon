import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageCircle, Clock, User, CheckCircle2, Trash2 } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

export interface BookingRecord {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}

interface AdminBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminBookingsModal: React.FC<AdminBookingsModalProps> = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  const loadBookings = () => {
    try {
      const stored = localStorage.getItem('axis_salon_bookings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setBookings(parsed);
          return;
        }
      }
    } catch (e) {
      // fallback
    }

    // Default sample appointments showing customer names in Admin view
    const defaultBookings: BookingRecord[] = [
      {
        id: 'bk-demo-1',
        name: 'Priya Dave',
        phone: '+91 98251 44520',
        date: 'Tomorrow',
        time: '11:00 AM',
        service: 'Royal Bridal & Occasion Makeover',
        message: 'Looking for reception makeup and hairstyle trial.',
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'bk-demo-2',
        name: 'Sneha Patel',
        phone: '+91 75670 12345',
        date: 'This Sunday',
        time: '3:30 PM',
        service: 'Hydra Glow Skin Facial',
        message: 'Pre-wedding facial treatment.',
        status: 'confirmed',
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
    ];
    setBookings(defaultBookings);
    localStorage.setItem('axis_salon_bookings', JSON.stringify(defaultBookings));
  };

  useEffect(() => {
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggleStatus = (id: string) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: (b.status === 'confirmed' ? 'pending' : 'confirmed') as 'pending' | 'confirmed' } : b
    );
    setBookings(updated);
    localStorage.setItem('axis_salon_bookings', JSON.stringify(updated));
  };

  const handleDelete = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('axis_salon_bookings', JSON.stringify(updated));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#d1ede8] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Header in #148c7e */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#0b4d45] via-[#148c7e] to-[#0b4d45] text-white flex items-center justify-between border-b border-[#0e665c]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold border border-white/30">
              AX
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Salon Admin Bookings Log
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white text-[#148c7e]">
                  {bookings.length} Bookings Received
                </span>
              </div>
              <p className="text-[11px] text-white/80">
                Customer appointment submissions captured from the website
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-white/80 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookings List Content */}
        <div className="p-6 overflow-y-auto space-y-4 bg-[#f8fcfa]">
          {bookings.length === 0 ? (
            <div className="py-12 text-center text-[#5e6f6c]">
              <Calendar className="w-10 h-10 mx-auto mb-2 text-neutral-300" />
              <p className="text-sm font-semibold text-[#1a2e2b]">No bookings recorded yet.</p>
              <p className="text-xs mt-1">Submit a booking on the website to see the client name appear here!</p>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl border border-[#d1ede8] p-5 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#d1ede8]/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e6f5f3] border border-[#d1ede8] flex items-center justify-center text-[#148c7e] font-bold text-sm">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      {/* Customer Name Highlighted */}
                      <h4 className="font-serif text-base font-bold text-[#1a2e2b]">
                        {booking.name}
                      </h4>
                      <p className="text-xs text-[#148c7e] font-semibold flex items-center gap-1.5">
                        <Phone className="w-3 h-3" />
                        <span>{booking.phone}</span>
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleStatus(booking.id)}
                      type="button"
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer transition-colors ${
                        booking.status === 'confirmed'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{booking.status === 'confirmed' ? 'Confirmed' : 'Pending Review'}</span>
                    </button>

                    <button
                      onClick={() => handleDelete(booking.id)}
                      type="button"
                      className="p-1.5 text-neutral-400 hover:text-red-600 rounded cursor-pointer"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-[#5e6f6c]">
                  <div>
                    <span className="font-semibold text-[#1a2e2b]">Service:</span>{' '}
                    <span className="text-[#148c7e] font-medium">{booking.service}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1a2e2b]">Date &amp; Time:</span>{' '}
                    <span>{booking.date} · {booking.time}</span>
                  </div>
                  {booking.message && (
                    <div className="sm:col-span-2 text-[11px] bg-[#f8fcfa] p-2 rounded border border-[#d1ede8]/60 italic">
                      Notes: "{booking.message}"
                    </div>
                  )}
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#d1ede8]/50">
                  <a
                    href={`tel:${booking.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#e6f5f3] hover:text-[#148c7e] text-[#1a2e2b] text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Customer</span>
                  </a>
                  <a
                    href={`https://wa.me/${booking.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                      `Hello ${booking.name}! Axis Beauty Salon here regarding your appointment request for ${booking.service}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-[#d1ede8] flex items-center justify-between text-xs text-[#5e6f6c]">
          <span>Captured live in browser storage for salon management</span>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-full bg-neutral-100 hover:bg-[#e6f5f3] hover:text-[#148c7e] text-[#1a2e2b] font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
