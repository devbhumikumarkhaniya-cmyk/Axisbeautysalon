import React, { useState } from 'react';
import { Star, MessageSquareQuote, MapPin, Clock, Edit3, Check } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

interface TrustStripProps {
  currentReviews: number;
  onUpdateReviews: (newCount: number) => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ currentReviews, onUpdateReviews }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempCount, setTempCount] = useState(currentReviews.toString());

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(tempCount, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      onUpdateReviews(parsed);
    }
    setIsEditing(false);
  };

  return (
    <section className="bg-white border-y border-[#F5DDE4] py-6 sm:py-8 shadow-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#F5DDE4]/70">
          {/* 1. Rating */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-2">
            <div className="flex items-center gap-1.5 text-[#C9A56A] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A56A]" />
              ))}
              <span className="font-bold text-[#202020] text-sm ml-1">4.9 / 5.0</span>
            </div>
            <p className="text-xs uppercase tracking-wider font-semibold text-[#6F6A6B]">
              Google Rating
            </p>
          </div>

          {/* 2. Public Review Count (Dynamic/Editable) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-2 pt-4 md:pt-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-serif text-2xl font-bold text-[#C95F7B] tabular-nums">
                {currentReviews}+
              </span>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-neutral-400 hover:text-[#C95F7B] p-1 rounded-sm transition-colors text-xs inline-flex items-center gap-1"
                title="Edit review count to match latest Google listing"
                aria-label="Edit review count"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSave} className="flex items-center gap-1.5 mt-1">
                <input
                  type="number"
                  value={tempCount}
                  onChange={(e) => setTempCount(e.target.value)}
                  className="w-20 px-2 py-0.5 text-xs border border-[#C95F7B] rounded bg-white text-[#202020]"
                  min="0"
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-1 bg-[#C95F7B] text-white rounded text-xs hover:bg-[#A94763]"
                  title="Save count"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <p className="text-xs uppercase tracking-wider font-semibold text-[#6F6A6B] flex items-center gap-1">
                <MessageSquareQuote className="w-3.5 h-3.5 text-[#C95F7B]" />
                Public Reviews
              </p>
            )}
          </div>

          {/* 3. Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-2 pt-4 md:pt-0">
            <div className="flex items-center gap-1.5 mb-1 font-semibold text-sm text-[#202020]">
              <MapPin className="w-4 h-4 text-[#C95F7B]" />
              <span>Rajkot · Bhakti Nagar</span>
            </div>
            <p className="text-xs text-[#6F6A6B]">
              Charanwadi, Green Park
            </p>
          </div>

          {/* 4. Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-2 pt-4 md:pt-0">
            <div className="flex items-center gap-1.5 mb-1 font-semibold text-sm text-[#202020]">
              <Clock className="w-4 h-4 text-[#C9A56A]" />
              <span>{salonConfig.openingHours.time}</span>
            </div>
            <p className="text-xs text-[#6F6A6B]">
              Open Every Day of the Week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
