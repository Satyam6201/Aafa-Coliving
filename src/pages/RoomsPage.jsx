import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Home as HomeIcon, DoorClosed, Clock, CheckCircle2, Calendar, ArrowRight, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function RoomsPage({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const plans = [
    {
      id: '1bhk',
      title: '1 BHK',
      category: 'monthly',
      price: 'Monthly (Contact for rate)',
      period: 'monthly rate',
      badge: 'Full Privacy',
      includes: ['Private room', 'Kitchen access', 'High-Speed WiFi', 'Daily Housekeeping', 'Power Backup', '24/7 Security'],
      description: 'Private 1BHK suite with your own living space and independent kitchen access.',
      icon: HomeIcon
    },
    {
      id: '2bhk-sharing',
      title: '2 BHK Sharing',
      category: 'monthly',
      price: 'Monthly (Contact for rate)',
      period: 'monthly rate',
      badge: 'Shared Comfort',
      includes: ['Shared room', 'Fully furnished', 'High-Speed WiFi', 'Meals available', 'Study workstation', 'Daily Cleaning'],
      description: 'Comfortable & affordable twin sharing room for working techies and students.',
      icon: Bed
    },
    {
      id: 'single-room',
      title: 'Single Room',
      category: 'monthly',
      price: 'Monthly (Contact for rate)',
      period: 'monthly rate',
      badge: 'Fully Furnished',
      includes: ['Fully furnished private room', 'Attached/shared bath options', 'High-Speed WiFi', 'Kerala Meals included', 'Daily Housekeeping', 'Smart TV'],
      description: 'Dedicated single room with zero roommate interference, move-in ready.',
      icon: DoorClosed
    },
    {
      id: 'daily-stay',
      title: 'Daily Stay ⭐ New',
      category: 'daily',
      price: '₹499',
      period: 'day',
      badge: 'Hot Offer',
      includes: ['Room + Breakfast included', 'High-Speed WiFi', '24/7 Security', 'Ideal for short stays', 'Zero deposit', 'Hot shower'],
      description: 'Flexible short stay with hot delicious Kerala breakfast included every morning!',
      icon: Clock
    },
  ];

  const filteredPlans = activeTab === 'all'
    ? plans
    : plans.filter((p) => p.category === activeTab);

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Bed className="w-4 h-4 text-[#D4A64A]" />
            <span>Rooms & Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F0] mb-6 font-sora tracking-tight">
            Flexible Accommodation <span className="text-gradient-gold">Tailored for You</span>
          </h2>
          <p className="text-[#FAF7F0]/80 text-base sm:text-lg">
            Choose from 1BHK, 2BHK sharing, single rooms, or flexible ₹499/day stays near HCL Gate in Jigani.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Plans' },
            { id: 'monthly', label: 'Monthly Co-Living' },
            { id: 'daily', label: 'Daily Stay (₹499/day)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] shadow-lg shadow-[#D4A64A]/25 scale-105 font-bold'
                  : 'glass-card text-[#FAF7F0]/80 hover:text-[#FAF7F0]'
              }`}
              data-cursor="expand"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={plan.id}
                  className="glass-card glass-card-hover rounded-3xl p-8 border border-[#FAF7F0]/10 flex flex-col justify-between group relative overflow-hidden"
                  data-cursor="expand"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#D4A64A]/15 border border-[#D4A64A]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D4A64A]" />
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[#D4A64A]/15 text-[#D4A64A] border border-[#D4A64A]/30 text-xs font-bold font-mono">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] mb-2 font-sora">
                      {plan.title}
                    </h3>
                    <p className="text-[#FAF7F0]/80 text-sm leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Price Pill */}
                    <div className="p-4 rounded-2xl bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 mb-6 flex items-baseline justify-between">
                      <div>
                        <p className="text-[10px] text-[#FAF7F0]/60 uppercase font-mono">Pricing</p>
                        <p className="text-2xl sm:text-3xl font-extrabold text-[#D4A64A] font-sora">
                          {plan.price} <span className="text-xs font-normal text-[#FAF7F0]/60">/ {plan.period}</span>
                        </p>
                      </div>
                      {plan.id === 'daily-stay' && (
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/30">
                          Breakfast Included
                        </span>
                      )}
                    </div>

                    {/* Includes List */}
                    <h4 className="text-xs font-bold text-[#FAF7F0]/60 uppercase tracking-wider mb-3">
                      Includes:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {plan.includes.map((inc, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#FAF7F0]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#D4A64A] shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenBooking(plan.title)}
                      className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-bold text-base shadow-xl shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/45 transition-all"
                    >
                      <Calendar className="w-5 h-5 stroke-[2.5]" />
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </PageTransition>
  );
}
