import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Utensils, Zap, ShieldCheck, Sparkles, Shirt, Gamepad2, Laptop, Droplet, Car, Sun } from 'lucide-react';

export default function AmenitiesGrid() {
  const amenities = [
    {
      icon: Utensils,
      title: 'Kerala Home Meals',
      description: 'Fresh 3x daily meals prepared with authentic Kerala spice blends and quality ingredients.',
      tag: 'Foodie Favorite'
    },
    {
      icon: Wifi,
      title: '1 GBPS Dual Wi-Fi',
      description: 'Ultra-fast fiber connections with zero-latency backup connection for seamless WFH.',
      tag: 'WFH Ready'
    },
    {
      icon: Zap,
      title: '100% Power Backup',
      description: 'Automatic commercial generator and dual inverter line to keep power on 24/7.',
      tag: 'Zero Downtime'
    },
    {
      icon: ShieldCheck,
      title: 'Biometric Security',
      description: 'Smart keycard & facial recognition entry points with round-the-clock CCTV surveillance.',
      tag: 'Safe & Secure'
    },
    {
      icon: Sparkles,
      title: 'Daily Housekeeping',
      description: 'Professional staff cleans rooms, attached washrooms, and common zones daily.',
      tag: 'Hygienic'
    },
    {
      icon: Shirt,
      title: 'Automated Laundry',
      description: 'Top-tier automatic washing machines, steam irons, and covered drying terraces.',
      tag: 'Self-Service'
    },
    {
      icon: Gamepad2,
      title: 'Gaming & Chill Lounge',
      description: 'Recharge with PS5, 65" 4K Smart TV, acoustic bean bags, and board games.',
      tag: 'Social Zone'
    },
    {
      icon: Laptop,
      title: 'Ergonomic Work Nooks',
      description: 'Quiet study tables equipped with surge-protected power strips and warm LED reading lights.',
      tag: 'Productivity'
    },
  ];

  return (
    <section id="amenities" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Zero-Gravity Amenities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-sora tracking-tight">
          Designed for <span className="text-gradient-gold">Uncompromised Living</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Every amenity at Aafa Coliving is built around convenience, comfort, and peace of mind so you can focus on your career, studies, and life.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenities.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-yellow-600/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-amber-400" />
                </div>

                <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-2">
                  {item.tag}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-sora">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Included in Rent</span>
                <span className="text-base">→</span>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
