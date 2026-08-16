import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Users, Wifi, Wind, Shield, Check, Eye, Calendar, Sparkles } from 'lucide-react';

export const ROOMS_DATA = [
  {
    id: 'single-executive',
    title: 'Single Executive Suite',
    category: 'single',
    price: 11999,
    period: 'month',
    sharing: 'Private Room',
    occupancy: '1 Person',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Split AC', 'Attached Washroom', 'Private Balcony', 'Ergonomic Desk & Chair', 'Wardrobe with Lock', 'Smart TV'],
    tag: 'Highest Privacy',
    available: 'Only 1 Room Left',
    description: 'Designed for high-output IT professionals and privacy seekers. Complete with an ergonomic workstation, high-speed fiber internet, attached western bathroom, and private balcony overlooking lush Kerala greenery.'
  },
  {
    id: 'double-deluxe',
    title: 'Double Sharing Deluxe',
    category: 'double',
    price: 7999,
    period: 'month / bed',
    sharing: 'Twin Sharing',
    occupancy: '2 Persons',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Split AC', 'Attached Washroom', 'Dual Study Desks', 'Individual Lockers', 'Orthopedic Mattresses', 'Daily Cleaning'],
    tag: 'Most Popular',
    available: '3 Beds Available',
    description: 'Our most popular setup balancing community and comfort. Roomy layout with dedicated personal study desks, individual locked wardrobes, and attached pristine bath.'
  },
  {
    id: 'triple-comfort',
    title: 'Triple Sharing Comfort',
    category: 'triple',
    price: 6499,
    period: 'month / bed',
    sharing: 'Triple Sharing',
    occupancy: '3 Persons',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Spacious Layout', 'Attached Bathroom', 'Personal Locker', 'Study Desks', 'Wi-Fi 6', 'Housekeeping'],
    tag: 'Best Value',
    available: 'Few Beds Remaining',
    description: 'Economical yet high-comfort co-living option for students and young professionals. Features ultra-comfortable orthopedic mattresses, individual study nooks, and full daily maid service.'
  },
  {
    id: 'studio-penthouse',
    title: 'Luxury Studio Penthouse',
    category: 'studio',
    price: 15999,
    period: 'month',
    sharing: 'Private Studio',
    occupancy: '1-2 Persons',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Private Kitchenette', 'Split AC', 'Smart TV & Lounge', 'Private Terrace View', 'Attached Bath', 'Premium Furnishing'],
    tag: 'Ultra Luxury',
    available: 'Only 1 Penthouse',
    description: 'The pinnacle of zero-gravity living. A fully independent penthouse studio featuring a private kitchenette, terrace garden views, luxury lounge seating, and zero roommate disturbance.'
  }
];

export default function RoomExplorer({ onSelectRoom, onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredRooms = activeFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Rooms' },
    { id: 'single', label: 'Single Private' },
    { id: 'double', label: 'Double Sharing' },
    { id: 'triple', label: 'Triple Sharing' },
    { id: 'studio', label: 'Luxury Studio' },
  ];

  return (
    <section id="rooms" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Bed className="w-4 h-4 text-amber-400" />
          <span>Curated Living Spaces</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-sora tracking-tight">
          Explore Zero-Gravity <span className="text-gradient-gold">Sanctuaries</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Thoughtfully engineered living spaces with orthopedic beds, high-speed fiber internet, ergonomic study desks, and pristine attached bathrooms.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                : 'glass-card text-slate-300 hover:text-white hover:border-amber-500/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredRooms.map((room) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              key={room.id}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold shadow-md">
                      {room.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                      {room.available}
                    </span>
                  </div>

                  {/* Room Details Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-slate-300 font-mono uppercase bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
                        {room.sharing}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1 font-sora">
                        {room.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Price & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-mono">Rent Rate</p>
                  <p className="text-2xl font-bold text-white font-sora">
                    ₹{room.price.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-slate-400">/ {room.period}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="p-3 rounded-xl glass-card text-amber-300 hover:bg-white/10 border border-amber-500/20 transition-all"
                    title="Quick Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.title)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-600 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
                  >
                    <Calendar className="w-4 h-4 stroke-[2.5]" />
                    <span>Reserve</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}
