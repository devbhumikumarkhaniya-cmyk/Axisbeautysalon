import React, { useState, useEffect } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight, Edit3, Check, ExternalLink, PlusCircle, X, CheckCircle2 } from 'lucide-react';
import { salonConfig, ReviewItem } from '../data/salonConfig';

interface ReviewSectionProps {
  currentReviews: number;
  onUpdateReviews: (newCount: number) => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({
  currentReviews,
  onUpdateReviews,
}) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(() => {
    try {
      const stored = localStorage.getItem('axis_salon_custom_reviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...salonConfig.reviews];
        }
      }
    } catch (e) {
      // Fallback
    }
    return salonConfig.reviews;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditingCount, setIsEditingCount] = useState(false);
  const [tempCount, setTempCount] = useState(currentReviews.toString());

  // Review Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [authorName, setAuthorName] = useState('');
  const [serviceUsed, setServiceUsed] = useState('Hair Styling');
  const [reviewMessage, setReviewMessage] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsList.length);
  };

  const handleSaveCount = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(tempCount, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      onUpdateReviews(parsed);
    }
    setIsEditingCount(false);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewMessage.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      rating: newRating,
      text: reviewMessage.trim(),
      serviceCategory: serviceUsed,
    };

    const updated = [newRev, ...reviewsList];
    setReviewsList(updated);

    try {
      const existing = localStorage.getItem('axis_salon_custom_reviews');
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem('axis_salon_custom_reviews', JSON.stringify([newRev, ...parsed]));
    } catch (e) {
      // ignore
    }

    onUpdateReviews(currentReviews + 1);
    setReviewSubmitted(true);

    setTimeout(() => {
      setReviewSubmitted(false);
      setIsModalOpen(false);
      setAuthorName('');
      setReviewMessage('');
      setNewRating(5);
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#f8fcfa] border-t border-[#d1ede8]/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-accent text-xs sm:text-sm text-[#148c7e] tracking-[0.2em] uppercase font-semibold block mb-1">
            WHAT OUR CLIENTS SAY
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-[#1a2e2b] uppercase">
            CLIENT REVIEWS
          </h2>

          <div className="flex items-center justify-center my-2 text-[#148c7e]">
            <Heart className="w-3 h-3 fill-[#148c7e]" />
          </div>

          {/* Dynamic Google Rating Banner */}
          <div className="inline-flex items-center gap-2 mt-1 text-xs text-[#5e6f6c]">
            <div className="flex items-center text-[#d4af37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
              ))}
            </div>
            <span className="font-bold text-[#1a2e2b]">4.9 / 5.0</span>
            <span>·</span>
            <span>{currentReviews}+ Verified Public Reviews</span>
            <button
              onClick={() => setIsEditingCount(!isEditingCount)}
              type="button"
              className="text-neutral-400 hover:text-[#148c7e] p-0.5 cursor-pointer"
              title="Edit review count"
              aria-label="Edit review count"
            >
              <Edit3 className="w-3 h-3" />
            </button>
          </div>

          {isEditingCount && (
            <form onSubmit={handleSaveCount} className="flex items-center justify-center gap-1.5 mt-2">
              <span className="text-[11px] text-[#5e6f6c]">Edit count:</span>
              <input
                type="number"
                value={tempCount}
                onChange={(e) => setTempCount(e.target.value)}
                className="w-16 px-1.5 py-0.5 text-xs border border-[#148c7e] rounded bg-white text-[#1a2e2b]"
                autoFocus
              />
              <button
                type="submit"
                className="p-1 bg-[#148c7e] text-white rounded text-xs hover:bg-[#0e665c]"
              >
                <Check className="w-3 h-3" />
              </button>
            </form>
          )}

          {/* Write a Review Button */}
          <div className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#148c7e] text-[#148c7e] hover:bg-[#148c7e] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Rate &amp; Review Axis Salon</span>
            </button>
          </div>
        </div>

        {/* Reviews Container with Teal Circular Navigation Arrows */}
        <div className="relative max-w-6xl mx-auto flex items-center gap-3 sm:gap-5">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#148c7e] hover:bg-[#0e665c] text-white flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* 3 Review Cards Horizontally on Desktop with dynamic rotation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 flex-1">
            {Array.from({ length: Math.min(3, reviewsList.length) }).map((_, i) => {
              const item = reviewsList[(currentIndex + i) % reviewsList.length];
              if (!item) return null;
              return (
                <div
                  key={item.id + '-' + i}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#d1ede8] shadow-xs flex flex-col justify-between interactive-card group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle top dual line on review card hover */}
                  <div className="category-dual-indicator w-full mb-3">
                    <span className="category-line-upper" />
                    <span className="category-line-lower" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-full bg-[#e6f5f3] border border-[#d1ede8] overflow-hidden shrink-0 flex items-center justify-center text-[#148c7e] font-serif font-bold text-sm shadow-inner">
                        {item.author.charAt(0).toUpperCase()}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-sm font-bold text-[#1a2e2b]">
                            {item.author}
                          </h4>
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                            Verified
                          </span>
                        </div>
                        <div className="flex items-center gap-0.5 text-[#d4af37] my-1">
                          {[...Array(item.rating || 5)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-3.5 h-3.5 fill-[#d4af37]" />
                          ))}
                        </div>
                        <p className="text-[10px] uppercase tracking-wider text-[#148c7e] font-semibold">
                          {item.serviceCategory}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#5e6f6c] leading-relaxed italic mb-4">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#d1ede8]/50 flex items-center justify-between text-[11px] text-[#5e6f6c]">
                    <span>Bhakti Nagar, Rajkot</span>
                    <span className="text-[#148c7e] font-medium">★ 5.0 Experience</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            type="button"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#148c7e] hover:bg-[#0e665c] text-white flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* View on Google Link */}
        <div className="mt-8 text-center">
          <a
            href={salonConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#148c7e] font-semibold hover:underline"
          >
            <span>View All Public Reviews on Google Business</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Interactive Review Submission Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#d1ede8] p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#d1ede8]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#148c7e] font-semibold">
                  Customer Experience
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1a2e2b]">
                  Rate &amp; Review Axis Salon
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="p-1 text-neutral-400 hover:text-black transition-colors"
                aria-label="Close review modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#148c7e] mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#1a2e2b] mb-1">
                  Thank You for Your Review!
                </h4>
                <p className="text-xs text-[#5e6f6c]">
                  Your review has been posted and will help other clients in Rajkot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                {/* Star Rating Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a2e2b] mb-1.5">
                    Your Rating:
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-[#d4af37] hover:scale-110 transition-transform cursor-pointer"
                        aria-label={`Rate ${star} star`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || newRating) >= star
                              ? 'fill-[#d4af37] text-[#d4af37]'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-bold text-[#1a2e2b]">
                      {newRating} / 5
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a2e2b] mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dipti Kothari"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#d1ede8] bg-[#f8fcfa] focus:bg-white focus:border-[#148c7e] outline-hidden"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a2e2b] mb-1">
                    Service Received:
                  </label>
                  <select
                    value={serviceUsed}
                    onChange={(e) => setServiceUsed(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#d1ede8] bg-white focus:border-[#148c7e] outline-hidden"
                  >
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Facial Care">Facial Care</option>
                    <option value="Beauty & Makeup">Beauty &amp; Makeup</option>
                    <option value="Bridal Occasion">Bridal &amp; Occasion</option>
                    <option value="Grooming & Care">Grooming &amp; Care</option>
                  </select>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a2e2b] mb-1">
                    Your Feedback:
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share your experience at Axis Beauty Salon..."
                    value={reviewMessage}
                    onChange={(e) => setReviewMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#d1ede8] bg-[#f8fcfa] focus:bg-white focus:border-[#148c7e] outline-hidden resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xs cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
