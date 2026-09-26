/**
 * Axis Beauty Salon - Modern Luxury Beauty Salon Website
 * Built with React & Tailwind CSS. Designed specifically for Axis Beauty Salon, Rajkot.
 * Includes cinematic Axis logo intro sequence and clean luxury salon layout.
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LuxuryMarqueeTicker } from './components/LuxuryMarqueeTicker';
import { SpeedImageScroll } from './components/SpeedImageScroll';
import { FloatingContactPanel } from './components/FloatingContactPanel';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndPromoSection } from './components/AboutAndPromoSection';
import { ReviewSection } from './components/ReviewSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { AppointmentModal } from './components/AppointmentModal';
import { AdminBookingsModal } from './components/AdminBookingsModal';
import { CinematicLogoIntro } from './components/CinematicLogoIntro';
import { salonConfig } from './data/salonConfig';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [introFinished, setIntroFinished] = useState(false);
  // Dynamic review count initialized from verified public business listing (257)
  const [reviewCount, setReviewCount] = useState<number>(salonConfig.reviewCount);
  const [bookingsCount, setBookingsCount] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('axis_salon_bookings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed.length;
      }
    } catch (e) {
      // fallback
    }
    return 2; // Default sample bookings count
  });

  useEffect(() => {
    const handleBookingAdded = () => {
      try {
        const stored = localStorage.getItem('axis_salon_bookings');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setBookingsCount(parsed.length);
          }
        }
      } catch (e) {
        // ignore
      }
    };

    window.addEventListener('axis_booking_added', handleBookingAdded);
    return () => window.removeEventListener('axis_booking_added', handleBookingAdded);
  }, []);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  const handleUpdateReviewCount = (newCount: number) => {
    setReviewCount(newCount);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a2e2b] flex flex-col font-sans selection:bg-[#e6f5f3] selection:text-[#148c7e] relative">
      {/* Cinematic Axis Logo Intro Sequence on initial load */}
      {!introFinished && (
        <CinematicLogoIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main Website Wrapper with smooth reveal */}
      <div
        className={`flex flex-col flex-1 transition-all duration-700 ease-out ${
          introFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {/* White Navigation Bar with Admin Log trigger */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          onOpenAdminBookings={() => setIsAdminOpen(true)}
          bookingsCount={bookingsCount}
        />

        {/* Floating Contact Panel on Right Edge (Desktop / Tablet) */}
        <FloatingContactPanel onOpenBooking={() => handleOpenBooking()} />

        <main className="flex-1">
          {/* Full-Width Cinematic Hero Banner with Indian Bride clearly visible & ambient animations */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* BAK Jewels Continuous Luxury Marquee Ticker */}
          <LuxuryMarqueeTicker />

          {/* BAK Jewels Signature Dual-Direction Speed Image Carousel (SpeedImageScroll) */}
          <SpeedImageScroll onSelectService={(svc) => handleOpenBooking(svc)} />

          {/* Premium Services Section with Opposite-Direction Dual-Line Hover Animations */}
          <ServicesSection onEnquire={(svc) => handleOpenBooking(svc)} />

          {/* About + Special Appointment Section */}
          <AboutAndPromoSection onOpenBooking={() => handleOpenBooking()} />

          {/* Client Reviews Section with Dynamic Editable Review Count, verified client reviews & interactive rating */}
          <ReviewSection
            currentReviews={reviewCount}
            onUpdateReviews={handleUpdateReviewCount}
          />

          {/* Location & Appointment Enquiry Section */}
          <ContactSection initialService={selectedService} />
        </main>

        {/* Dark Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Mobile Sticky CTA Bar (Call | WhatsApp | Book) */}
        <MobileStickyCTA onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* Accessible Streamlined Appointment Booking Modal - Top-level Root Placement */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />

      {/* Salon Admin Bookings Records Modal (Shows client names captured from bookings) */}
      <AdminBookingsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
