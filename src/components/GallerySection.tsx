import React, { useState } from 'react';
import { Heart, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { salonConfig } from '../data/salonConfig';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryList = salonConfig.gallery;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryList.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryList.length) % galleryList.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-[#F5DDE4]/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-accent text-xs sm:text-sm text-[#C95F7B] tracking-[0.2em] uppercase font-semibold block mb-1">
            OUR WORK SPEAKS
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-[#1E1B1D] uppercase">
            GALLERY
          </h2>

          <div className="flex items-center justify-center my-2 text-[#C95F7B]">
            <Heart className="w-3 h-3 fill-[#C95F7B]" />
          </div>
        </div>

        {/* Horizontal Row of 8 Beauty Thumbnails on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3.5 mb-8">
          {galleryList.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#FDF4F6] border border-[#F5DDE4] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F5DDE4]">
                  {item.category}
                </span>
                <span className="text-[11px] font-medium leading-tight truncate">
                  {item.title}
                </span>
                <div className="absolute top-2 right-2 text-white/90">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pink VIEW MORE Button */}
        <div className="text-center">
          <button
            onClick={() => setSelectedImageIndex(0)}
            type="button"
            className="btn-primary px-7 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>VIEW MORE</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              type="button"
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl max-h-[75vh] w-auto border border-white/20">
              <img
                src={galleryList[selectedImageIndex].image}
                alt={galleryList[selectedImageIndex].title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Caption */}
            <div className="mt-3 text-center text-white">
              <p className="text-xs uppercase tracking-widest text-[#F5DDE4]">
                {galleryList[selectedImageIndex].category}
              </p>
              <h3 className="font-serif text-lg font-medium text-white">
                {galleryList[selectedImageIndex].title}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C95F7B] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C95F7B] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
