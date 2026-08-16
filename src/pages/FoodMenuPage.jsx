import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Coffee, Calendar, Phone, Sparkles, Star, HeartHandshake, ZoomIn, X, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function FoodMenuPage({ onOpenBooking }) {
  const [activeImageModal, setActiveImageModal] = useState(null);

  // Exact menuData array schema from prompt
  const menuData = [
    {
      day: "MONDAY",
      breakfast: { name: "Puttu, Kadala Curry", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Rice, Moru Curry, Uppari", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Dal Masala, Rice, Chappathi", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80" }
    },
    {
      day: "TUESDAY",
      breakfast: { name: "Pasta", img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Rice, Upperi, Coconut Curry", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Chappathi, Chicken Gravy, Rice", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" }
    },
    {
      day: "WEDNESDAY",
      breakfast: { name: "Chappathi, Kadala Curry", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Meen Curry, Rice, Pappad", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Veg Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" }
    },
    {
      day: "THURSDAY",
      breakfast: { name: "Poori, Baji", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Rice, Sambar", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Ghee Rice, Liver Curry", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" }
    },
    {
      day: "FRIDAY",
      breakfast: { name: "Idly, Sambar", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Rice, Pappad, Sambar", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Chappathi, Dal Curry, Rice", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80" }
    },
    {
      day: "SATURDAY",
      breakfast: { name: "Dosa, Chutney", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Egg Fried Rice, Raitha", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Majboos", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" }
    },
    {
      day: "SUNDAY",
      breakfast: { name: "Uppumavu", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
      lunch: { name: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
      dinner: { name: "Kanji, Cherupayar, Pappad", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" }
    },
  ];

  const marqueeText = "AAFA ROOMS & PG — 1BHK, 2BHK, SINGLE ROOM, DAILY & MONTHLY";

  return (
    <PageTransition>
      <div className="relative pt-24 pb-20 z-10 overflow-hidden">
        
        {/* SLIM ANIMATED MARQUEE STRIP */}
        <div className="w-full bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 py-2 text-[#0B1220] font-extrabold text-xs tracking-widest uppercase overflow-hidden shadow-md mb-8">
          <div className="flex whitespace-nowrap animate-marquee gap-8">
            {[...Array(6)].map((_, idx) => (
              <span key={idx} className="flex items-center gap-6 font-mono">
                <span>{marqueeText}</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* GLASS BANNER PAGE HEADER */}
          <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 sm:p-12 text-center mb-10 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
              <Utensils className="w-4 h-4 text-[#D4A64A]" />
              <span>In-House Mess Schedule</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#D4A64A] font-sora tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(212,166,74,0.3)]">
              FOOD MENU
            </h1>
            
            <p className="text-[#FAF7F0]/80 text-sm sm:text-base max-w-2xl mx-auto">
              Authentic Kerala homestyle cooking prepared daily with fresh ingredients, pure spices, and FSSAI hygiene standards.
            </p>
          </div>

          {/* GENTLE PULSE FLOATING BADGE */}
          <div className="flex justify-center mb-12">
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 15px rgba(212, 166, 74, 0.2)",
                  "0 0 25px rgba(212, 166, 74, 0.5)",
                  "0 0 15px rgba(212, 166, 74, 0.2)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => onOpenBooking('Daily Stay Special (₹499/day)')}
              className="glass-card rounded-2xl px-6 py-3.5 border border-[#D4A64A]/50 flex items-center gap-3 cursor-pointer group"
              data-cursor="expand"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4A64A]/20 flex items-center justify-center text-[#D4A64A] font-bold text-sm">
                ⭐
              </div>
              <div>
                <span className="text-sm font-bold text-[#FAF7F0] font-sora group-hover:text-[#D4A64A] transition-colors">
                  Breakfast FREE with Daily Stay — ₹499/day
                </span>
                <span className="block text-[10px] text-[#FAF7F0]/60 font-mono">
                  Click to reserve daily stay plan →
                </span>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP TABLE / MOBILE STACKED CARDS */}
          
          {/* 1. DESKTOP GRID (Hidden on Mobile) */}
          <div className="hidden lg:block mb-16">
            <div className="rounded-3xl glass-card border border-[#FAF7F0]/15 overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#FAF7F0]/15 bg-[#D4A64A]/10 text-xs font-mono uppercase tracking-wider text-[#D4A64A]">
                    <th className="p-6 w-1/6 font-bold font-sora">Day</th>
                    <th className="p-6 w-1/4 font-bold font-sora">🌅 Breakfast</th>
                    <th className="p-6 w-1/4 font-bold font-sora">☀️ Lunch</th>
                    <th className="p-6 w-1/4 font-bold font-sora">🌙 Dinner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FAF7F0]/10">
                  {menuData.map((row, idx) => (
                    <motion.tr
                      key={row.day}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="hover:bg-[#FAF7F0]/5 transition-colors group"
                    >
                      {/* Day Cell */}
                      <td className="p-6 font-extrabold text-[#D4A64A] font-sora text-lg align-middle">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#D4A64A]" />
                          <span>{row.day}</span>
                        </div>
                      </td>

                      {/* Breakfast Cell */}
                      <td className="p-6 align-middle">
                        <div className="flex items-center gap-4">
                          <div 
                            onClick={() => setActiveImageModal(row.breakfast)}
                            className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#D4A64A]/30 shrink-0 cursor-pointer shadow-md transition-all duration-300 hover:scale-108 hover:shadow-[0_0_15px_rgba(212,166,74,0.4)]"
                            data-cursor="expand"
                          >
                            <img
                              src={row.breakfast.img}
                              alt={row.breakfast.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0B1220]/20 hover:bg-transparent transition-colors" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-[#FAF7F0] font-sora block leading-tight">
                              {row.breakfast.name}
                            </span>
                            <span className="text-[10px] text-[#FAF7F0]/50 font-mono mt-0.5 block">Fresh Cooked</span>
                          </div>
                        </div>
                      </td>

                      {/* Lunch Cell */}
                      <td className="p-6 align-middle">
                        <div className="flex items-center gap-4">
                          <div 
                            onClick={() => setActiveImageModal(row.lunch)}
                            className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#D4A64A]/30 shrink-0 cursor-pointer shadow-md transition-all duration-300 hover:scale-108 hover:shadow-[0_0_15px_rgba(212,166,74,0.4)]"
                            data-cursor="expand"
                          >
                            <img
                              src={row.lunch.img}
                              alt={row.lunch.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0B1220]/20 hover:bg-transparent transition-colors" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-[#FAF7F0] font-sora block leading-tight">
                              {row.lunch.name}
                            </span>
                            <span className="text-[10px] text-[#FAF7F0]/50 font-mono mt-0.5 block">Authentic Meals</span>
                          </div>
                        </div>
                      </td>

                      {/* Dinner Cell */}
                      <td className="p-6 align-middle">
                        <div className="flex items-center gap-4">
                          <div 
                            onClick={() => setActiveImageModal(row.dinner)}
                            className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#D4A64A]/30 shrink-0 cursor-pointer shadow-md transition-all duration-300 hover:scale-108 hover:shadow-[0_0_15px_rgba(212,166,74,0.4)]"
                            data-cursor="expand"
                          >
                            <img
                              src={row.dinner.img}
                              alt={row.dinner.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0B1220]/20 hover:bg-transparent transition-colors" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-[#FAF7F0] font-sora block leading-tight">
                              {row.dinner.name}
                            </span>
                            <span className="text-[10px] text-[#FAF7F0]/50 font-mono mt-0.5 block">Hot Serving</span>
                          </div>
                        </div>
                      </td>

                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. MOBILE STACKED CARDS (Visible on Mobile) */}
          <div className="lg:hidden space-y-6 mb-16">
            {menuData.map((row, idx) => (
              <motion.div
                key={row.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-3xl p-6 border border-[#FAF7F0]/15 space-y-4 shadow-xl"
              >
                {/* Mobile Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#FAF7F0]/10">
                  <span className="text-xl font-extrabold text-[#D4A64A] font-sora tracking-wide">
                    {row.day}
                  </span>
                  <span className="text-[10px] font-mono text-[#FAF7F0]/60 bg-[#D4A64A]/10 px-2 py-0.5 rounded border border-[#D4A64A]/20">
                    Day Schedule
                  </span>
                </div>

                {/* Mobile Meals List */}
                <div className="space-y-4 pt-1">
                  
                  {/* Breakfast */}
                  <div className="flex items-center gap-4">
                    <div 
                      onClick={() => setActiveImageModal(row.breakfast)}
                      className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#D4A64A]/30 shrink-0 shadow-md transition-transform duration-300 active:scale-95"
                    >
                      <img src={row.breakfast.img} alt={row.breakfast.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#D4A64A] font-bold uppercase font-mono">🌅 Breakfast</p>
                      <p className="text-xs font-semibold text-[#FAF7F0] font-sora mt-0.5">{row.breakfast.name}</p>
                    </div>
                  </div>

                  {/* Lunch */}
                  <div className="flex items-center gap-4">
                    <div 
                      onClick={() => setActiveImageModal(row.lunch)}
                      className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#D4A64A]/30 shrink-0 shadow-md transition-transform duration-300 active:scale-95"
                    >
                      <img src={row.lunch.img} alt={row.lunch.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#D4A64A] font-bold uppercase font-mono">☀️ Lunch</p>
                      <p className="text-xs font-semibold text-[#FAF7F0] font-sora mt-0.5">{row.lunch.name}</p>
                    </div>
                  </div>

                  {/* Dinner */}
                  <div className="flex items-center gap-4">
                    <div 
                      onClick={() => setActiveImageModal(row.dinner)}
                      className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#D4A64A]/30 shrink-0 shadow-md transition-transform duration-300 active:scale-95"
                    >
                      <img src={row.dinner.img} alt={row.dinner.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#D4A64A] font-bold uppercase font-mono">🌙 Dinner</p>
                      <p className="text-xs font-semibold text-[#FAF7F0] font-sora mt-0.5">{row.dinner.name}</p>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

          {/* PAGE FOOTER STRIP */}
          <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 sm:p-10 text-center shadow-2xl">
            <h3 className="text-xl font-bold text-[#FAF7F0] font-sora mb-4">
              Direct Contact Hotlines for Mess & Booking
            </h3>

            {/* Click-to-Call Gold Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="tel:+918747049377"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-extrabold text-xs shadow-lg shadow-[#D4A64A]/25 hover:scale-105 transition-all"
                data-cursor="expand"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call 8747049377</span>
              </a>

              <a
                href="tel:+919686193084"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-extrabold text-xs shadow-lg shadow-[#D4A64A]/25 hover:scale-105 transition-all"
                data-cursor="expand"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call 9686193084</span>
              </a>

              <a
                href="tel:+919745688880"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-extrabold text-xs shadow-lg shadow-[#D4A64A]/25 hover:scale-105 transition-all"
                data-cursor="expand"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call 9745688880</span>
              </a>
            </div>

            {/* Text Banner */}
            <div className="pt-6 border-t border-[#FAF7F0]/10">
              <p className="text-sm sm:text-base font-semibold text-[#D4A64A] font-sora italic">
                "Welcome to the Aafa Family — Wishing You a Wonderful Stay!"
              </p>
            </div>
          </div>

        </div>

        {/* Dish Image Lightbox Modal */}
        <AnimatePresence>
          {activeImageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImageModal(null)}
                className="fixed inset-0 bg-[#0B1220]/90 backdrop-blur-2xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="relative max-w-xl w-full rounded-3xl overflow-hidden glass-card border border-[#D4A64A]/40 p-4 shadow-2xl z-10"
              >
                <button
                  onClick={() => setActiveImageModal(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-[#0B1220]/80 text-[#FAF7F0] hover:bg-[#0B1220] transition-all z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-80 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={activeImageModal.img}
                    alt={activeImageModal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-4 py-2">
                  <span className="text-xs font-mono uppercase text-[#D4A64A]">Authentic Kerala Recipe</span>
                  <h3 className="text-xl font-bold font-sora mt-0.5 text-[#FAF7F0]">{activeImageModal.name}</h3>
                  <p className="text-xs text-[#FAF7F0]/70 mt-1">
                    Freshly prepared in-house with zero artificial colors or preservatives.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
