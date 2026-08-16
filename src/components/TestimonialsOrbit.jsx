import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Building2, UserCheck } from 'lucide-react';

export default function TestimonialsOrbit() {
  const reviews = [
    {
      name: 'Rohan Kurien',
      role: 'Senior Frontend Engineer @ Infopark',
      stay: 'Living at Aafa for 1.2 Years',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'The Wi-Fi speed and 100% generator backup saved my late-night production releases multiple times. Plus, the homestyle Kerala fish curry on Wednesdays feels just like home!',
      room: 'Single Executive Suite'
    },
    {
      name: 'Anjali Menon',
      role: 'UX Designer & Freelancer',
      stay: 'Living at Aafa for 8 Months',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      comment: 'As a woman moving to the city for the first time, safety was my #1 priority. The biometric entry, 24/7 security, and friendly housekeeping staff made me feel completely protected.',
      room: 'Double Sharing Deluxe'
    },
    {
      name: 'Siddharth Varma',
      role: 'Cloud Architect',
      stay: 'Living at Aafa for 2 Years',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: 'Zero hidden charges, clean attached bathrooms, and zero landlord drama! The gaming lounge is a fantastic place to unwind after long coding sessions with fellow techies.',
      room: 'Luxury Studio Penthouse'
    },
  ];

  return (
    <section id="reviews" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Resident Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-sora tracking-tight">
          Loved by <span className="text-gradient-gold">140+ Co-Movers</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Here is what engineers, researchers, and creators say about floating through daily life at Aafa Coliving.
        </p>
      </div>

      {/* Orbiting Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`glass-card glass-card-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative ${
              index === 1 ? 'animate-float-slow border-amber-500/30 shadow-amber-500/10' : 'animate-float-reverse'
            }`}
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-400/15" />

            <div>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Specs */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/50 shadow-md"
              />
              <div>
                <h4 className="text-base font-bold text-white font-sora">
                  {rev.name}
                </h4>
                <p className="text-xs text-amber-300 font-medium">
                  {rev.role}
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {rev.stay} • {rev.room}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
