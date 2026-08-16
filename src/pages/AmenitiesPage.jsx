import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Utensils, Zap, ShieldCheck, Sparkles, Shirt, Gamepad2, Laptop, Droplet, Car, Tv, Sun } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function AmenitiesPage({ onOpenBooking }) {
  const amenitiesList = [
    { icon: Utensils, title: '3x Daily Kerala Home Meals', tag: 'Included Free', desc: 'Freshly cooked breakfast, lunch, and dinner prepared with authentic Kerala recipes.' },
    { icon: Wifi, title: '1 GBPS Dual Fiber Wi-Fi', tag: 'Zero Downtime', desc: 'High-speed dual fiber connections across all bedrooms and common areas.' },
    { icon: Zap, title: '100% Power Backup', tag: '24/7 Generator', desc: 'Automatic commercial generator line keeping laptop chargers, Wi-Fi, and lights on 24/7.' },
    { icon: ShieldCheck, title: 'Biometric Facial Entry', tag: '24/7 CCTV', desc: 'Smart keyless entry gate with round-the-clock CCTV surveillance for complete peace of mind.' },
    { icon: Sparkles, title: 'Daily Housekeeping', tag: 'Hygienic', desc: 'Professional staff cleans rooms, attached washrooms, and common zones daily.' },
    { icon: Shirt, title: 'Automated Washing Machines', tag: 'Laundry Access', desc: 'Self-service automatic washing machines and spacious rooftop drying racks.' },
    { icon: Gamepad2, title: 'Gaming & Chill Lounge', tag: 'Social Zone', desc: 'Recharge with PS5, 65" 4K Smart TV, acoustic bean bags, and board games.' },
    { icon: Laptop, title: 'Ergonomic Work Nooks', tag: 'WFH Ready', desc: 'Dedicated study tables with surge-protected power strips and warm reading lights.' },
    { icon: Droplet, title: 'Mineral RO Water Purifiers', tag: 'Pure Drinking', desc: 'Multi-stage reverse osmosis water purifiers installed on every floor.' },
    { icon: Car, title: '2-Wheeler & 4-Wheeler Parking', tag: 'Secure Parking', desc: 'Spacious covered parking lot protected by security cameras.' },
    { icon: Tv, title: 'Smart TV & Fridge Access', tag: 'Furnished', desc: 'Shared refrigerator in dining hall and Smart TV installed in penthouse suites.' },
    { icon: Sun, title: 'Rooftop Chill Terrace', tag: 'Outdoor Space', desc: 'Open-air rooftop terrace with evening breeze and city skyline views.' },
  ];

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#D4A64A]" />
            <span>Zero-Gravity Amenities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F0] mb-6 font-sora tracking-tight">
            Designed for <span className="text-gradient-gold">Uncompromised Living</span>
          </h2>
          <p className="text-[#FAF7F0]/80 text-base sm:text-lg">
            Every amenity at Aafa Coliving is engineered for maximum convenience, safety, and productivity near HCL Gate in Jigani.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenitiesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group"
                data-cursor="expand"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A64A]/15 border border-[#D4A64A]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#D4A64A]" />
                  </div>

                  <span className="inline-block text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#D4A64A]/15 text-[#D4A64A] border border-[#D4A64A]/30 mb-2">
                    {item.tag}
                  </span>

                  <h3 className="text-xl font-bold text-[#FAF7F0] mb-2 font-sora">
                    {item.title}
                  </h3>

                  <p className="text-[#FAF7F0]/75 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF7F0]/10 flex items-center gap-1.5 text-xs text-[#D4A64A] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Included in All Room Plans</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-[#FAF7F0] font-sora mb-2">
            Experience Zero-Gravity Living in Jigani Today
          </h3>
          <p className="text-xs text-[#FAF7F0]/80 mb-6 max-w-xl mx-auto">
            Book your room or reserve a ₹499 daily stay plan with free breakfast included.
          </p>

          <button
            onClick={() => onOpenBooking('Daily Stay Special (₹499/day)')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-bold text-sm shadow-xl shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/45 transition-all"
            data-cursor="expand"
          >
            Reserve Your Room Now — ₹499/day
          </button>
        </div>

      </div>
    </PageTransition>
  );
}
