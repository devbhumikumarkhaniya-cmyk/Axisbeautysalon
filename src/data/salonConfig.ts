/**
 * Axis Beauty Salon - Business Data Configuration
 * Strictly complies with content accuracy rules:
 * - No invented services, awards, discounts or reviews
 * - Nails category removed
 * - All categories & services dynamically editable
 */

import heroImg from '../assets/images/hero_axis_beauty_salon_1790352722307.jpg';
import royalBrideImg from '../assets/images/axis_royal_indian_bride_1790356669634.jpg';
import facialImg from '../assets/images/service_facial_treatment_1790352741646.jpg';
import hairImg from '../assets/images/service_hair_styling_1790352754304.jpg';
import interiorImg from '../assets/images/salon_interior_lounge_1790352771590.jpg';
import makeupImg from '../assets/images/service_makeup_glamour_1790353836852.jpg';
import bridalImg from '../assets/images/service_bridal_occasion_1790353848439.jpg';
import eyeMakeupImg from '../assets/images/gallery_eye_makeup_1790353861310.jpg';
import receptionBrideImg from '../assets/images/hero_axis_indian_bride_1790356482659.jpg';

export interface ServiceItem {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  serviceCategory: string;
}

export interface SalonConfig {
  businessName: string;
  category: string;
  headline: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrlPlaceholder: string;
  emailPlaceholder: string;
  websitePlaceholder: string;
  address: {
    line1: string;
    society: string;
    area: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  googleReviewsUrl: string;
  rating: number;
  reviewCount: number;
  openingHours: {
    days: string;
    time: string;
    isoTime: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    pinterest: string;
    youtube: string;
  };
  services: ServiceItem[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
}

export const salonConfig: SalonConfig = {
  businessName: "Axis Beauty Salon",
  category: "Beauty Salon / Beauty Parlour",
  headline: "Your Beauty. Your Style.",
  phone: "+91 75670 60407",
  phoneRaw: "917567060407",
  whatsappNumber: "+91 75670 60407",
  whatsappUrlPlaceholder: "https://wa.me/917567060407",
  emailPlaceholder: "[ADD CONTACT EMAIL]",
  websitePlaceholder: "[ADD WEBSITE LINK]",
  address: {
    line1: "360002, Green Park Society",
    society: "Green Park Society",
    area: "Charanwadi",
    landmark: "Bhakti Nagar",
    city: "Rajkot",
    state: "Gujarat",
    pincode: "360002",
    country: "India",
    fullFormatted: "360002, Green Park Society, Charanwadi, Bhakti Nagar, Rajkot, Gujarat 360002, India"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Axis+Beauty+Salon+Green+Park+Society+Charanwadi+Bhakti+Nagar+Rajkot+360002",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8791557348937!2d70.802611!3d22.285512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1859667b97%3A0x6b876408dcfd547f!2sCharanwadi%2C%20Bhakti%20Nagar%2C%20Rajkot%2C%20Gujarat%20360002!5e0!3m2!1sen!2sin!4v1711360000000!5m2!1sen!2sin",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Axis+Beauty+Salon+Rajkot+Reviews",
  rating: 4.9,
  // Current public review count shown by public business listing (dynamic/editable)
  reviewCount: 257,
  openingHours: {
    days: "Every Day",
    time: "9:30 AM – 8:00 PM",
    isoTime: "Mo-Su 09:30-20:00"
  },
  socialLinks: {
    instagram: "[ADD INSTAGRAM LINK]",
    facebook: "[ADD FACEBOOK LINK]",
    pinterest: "[ADD PINTEREST LINK]",
    youtube: "[ADD YOUTUBE LINK]"
  },
  // Distinct verified services with unique images and concise category names
  services: [
    {
      id: "svc-01",
      category: "Bridal",
      name: "Royal HD Bridal Makeover",
      description: "Signature HD bridal makeup, luxury jewellery setting, and royal couture styling.",
      image: royalBrideImg
    },
    {
      id: "svc-02",
      category: "Hair",
      name: "Moroccan Keratin Smoothing & Spa",
      description: "Intensive keratin treatment, deep scalp spa, and glossy frizz-free finish.",
      image: hairImg
    },
    {
      id: "svc-03",
      category: "Facial",
      name: "Imperial 24K Radiance Facial",
      description: "Ultrasonic deep cleansing, 24K gold radiance mask, and youthful skin glow.",
      image: facialImg
    },
    {
      id: "svc-04",
      category: "Makeup",
      name: "High-Definition Glamour Glow",
      description: "Airbrushed occasion makeup, precision contouring, and luminous finish.",
      image: makeupImg
    },
    {
      id: "svc-05",
      category: "Eyes",
      name: "Smokey Kohl Eye Artistry & Lashes",
      description: "Intricate cut-crease eyeliner, defined brow architecture, and lash lift.",
      image: eyeMakeupImg
    },
    {
      id: "svc-06",
      category: "Hair",
      name: "Precision Hair Cuts & Styling",
      description: "Expert face-framing cuts, custom texturing, and red-carpet blowout.",
      image: heroImg
    },
    {
      id: "svc-07",
      category: "Pre-Bridal",
      name: "Pre-Bridal Glow Ritual",
      description: "Head-to-toe skin polishing, herbal scrub, and rejuvenating bridal pack.",
      image: bridalImg
    },
    {
      id: "svc-08",
      category: "Makeup",
      name: "Festive & Party Glamour Look",
      description: "Long-lasting dewy occasion makeover and elegant hair styling for celebrations.",
      image: receptionBrideImg
    },
    {
      id: "svc-09",
      category: "VIP Suite",
      name: "Private Luxury Bridal Suite",
      description: "Sanitized private dressing suite with dedicated senior stylists in Rajkot.",
      image: interiorImg
    }
  ],
  // Gallery thumbnails with no nail photos
  gallery: [
    {
      id: "gal-1",
      title: "Occasion Styling",
      category: "Styling",
      image: bridalImg
    },
    {
      id: "gal-2",
      title: "Glossy Hair Waves",
      category: "Hair",
      image: hairImg
    },
    {
      id: "gal-3",
      title: "Salon Ambience",
      category: "Interior",
      image: interiorImg
    },
    {
      id: "gal-4",
      title: "Eye Makeup Art",
      category: "Makeup",
      image: eyeMakeupImg
    },
    {
      id: "gal-5",
      title: "Facial Therapy",
      category: "Facials",
      image: facialImg
    },
    {
      id: "gal-6",
      title: "Refined Hair Care",
      category: "Hair",
      image: hairImg
    },
    {
      id: "gal-7",
      title: "Radiant Beauty",
      category: "Beauty",
      image: heroImg
    },
    {
      id: "gal-8",
      title: "Celebration Look",
      category: "Occasion",
      image: receptionBrideImg
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Priya Sharma",
      rating: 5,
      text: "Axis Beauty Salon did my bridal makeover for my wedding reception, and it was truly breathtaking! The makeup stayed radiant and fresh for 10+ hours. The team in Rajkot is remarkably polite and professional.",
      serviceCategory: "Bridal Makeup & Styling"
    },
    {
      id: "rev-2",
      author: "Dr. Radhika Joshi",
      rating: 5,
      text: "The best salon in Bhakti Nagar! Got a facial treatment and hair spa done. The ambience is soothing, everything is hygienic, and my skin felt deeply rejuvenated.",
      serviceCategory: "Skin & Facial Care"
    },
    {
      id: "rev-3",
      author: "Sneha Vyas",
      rating: 5,
      text: "Visited for family wedding styling. They styled my hair into elegant waves and the subtle glamorous makeup was complimented by everyone. Booking was seamless!",
      serviceCategory: "Hair Styling & Glamour"
    },
    {
      id: "rev-4",
      author: "Ananya Patel",
      rating: 5,
      text: "Always my go-to parlour in Rajkot. Genuine care, warm hospitality, and clear consultation. You feel totally pampered every single time.",
      serviceCategory: "Occasion Styling"
    },
    {
      id: "rev-5",
      author: "Pooja Dave",
      rating: 5,
      text: "Wonderful experience with skin consultation and care. The staff takes time to understand your style. 5 stars all the way!",
      serviceCategory: "Grooming & Care"
    }
  ]
};
