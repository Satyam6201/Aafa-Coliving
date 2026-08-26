import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Calendar, Phone, ArrowRight, ShieldCheck, Utensils, Wifi, Zap, Star, MapPin, CheckCircle2, ChevronDown, Award, Users, HeartHandshake, ZoomIn, Building2, Bed, MessageSquare
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Hero3DCanvas from '../components/Hero3DCanvas';
import PriceCalculator from '../components/PriceCalculator';
import TodayLiveKitchen from '../components/TodayLiveKitchen';
import SavingsCalculator from '../components/SavingsCalculator';
import NeighborhoodExplorer from '../components/NeighborhoodExplorer';
import AmenitiesGrid from '../components/AmenitiesGrid';
import DiningMarquee from '../components/DiningMarquee';
import TestimonialsOrbit from '../components/TestimonialsOrbit';
import { locations } from '../data/locationsData';

export default function Home({ onOpenBooking }) {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [roomCategoryTab, setRoomCategoryTab] = useState('all');

  // 4 Interactive Room Feature Hotspots
  const roomHotspots = [
    {
      id: 1,
      x: '25%',
      y: '35%',
      title: 'Orthopedic Mattress',
      desc: '8-inch high-density memory foam for deep restful sleep after long shifts.',
    },
    {
      id: 2,
      x: '70%',
      y: '45%',
      title: 'Ergonomic Workstation',
      desc: 'Surge-protected study desk with warm reading lights & power sockets.',
    },
    {
      id: 3,
      x: '82%',
      y: '20%',
      title: '1GBPS Dual Fiber Wi-Fi',
      desc: 'Dedicated high-speed fiber connection ensuring zero work-from-home lag.',
    },
    {
      id: 4,
      x: '45%',
      y: '75%',
      title: 'Attached Western Washroom',
      desc: 'Pristine attached western bathroom with 24/7 hot water geyser & daily cleaning.',
    },
  ];

  // Curated room plans preview
  const featuredRooms = [
    {
      id: 'daily-special',
      title: 'Daily Stay ⭐ Special',
      type: 'daily',
      price: '₹499',
      period: 'day',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      badge: 'Breakfast Free',
      desc: 'Clean furnished room + free hot Kerala breakfast (Puttu/Dosa/Idli) every morning.',
      highlights: ['Hot Kerala Breakfast', 'High-Speed Wi-Fi', '2-Min to HCL Gate', 'Zero Security Deposit']
    },
    {
      id: 'double-deluxe',
      title: '2 BHK Sharing Deluxe',
      type: 'sharing',
      price: '₹7,499',
      period: 'month',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      badge: 'Most Popular',
      desc: 'Spacious twin sharing room with personal study desk, wardrobe locker & attached bath.',
      highlights: ['3x Daily Kerala Food', '100% Gen Power', 'Daily Housekeeping', '1-Month Deposit Only']
    },
    {
      id: 'single-executive',
      title: 'Single Executive Suite',
      type: 'private',
      price: '₹11,499',
      period: 'month',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      badge: '100% Privacy',
      desc: 'Independent private single room for IT professionals seeking uninterrupted focus.',
      highlights: ['3x Homestyle Meals', 'Private Study Nook', 'Balcony Greenery View', 'High-Speed Wi-Fi']
    },
    {
      id: '1bhk-suite',
      title: '1 BHK Independent Suite',
      type: 'private',
      price: 'Contact for Rate',
      period: 'month',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      badge: 'Kitchen Access',
      desc: 'Full private 1BHK suite with living hall and independent kitchen space.',
      highlights: ['Full Privacy', 'Kitchen Space', 'Attached Bath', 'Power Backup 24/7']
    }
  ];

  const filteredFeaturedRooms = roomCategoryTab === 'all'
    ? featuredRooms
    : featuredRooms.filter((r) => r.type === roomCategoryTab);

  // FAQ Accordion Data
  const faqs = [
    {
      q: 'Is 3x daily food included in the monthly rent?',
      a: 'Yes! All monthly room plans (1BHK, 2BHK, Single Room) include 3x daily fresh Kerala homestyle meals (Breakfast, Lunch, Dinner) + evening tea & snacks prepared in-house by experienced chefs.',
    },
    {
      q: 'How does the ₹499/day Daily Stay plan work?',
      a: 'Ideal for short business trips, exams, or interview visits near HCL Gate in Jigani! The ₹499/day rate includes a clean furnished room + free Puttu, Dosa, or Uppumavu breakfast every morning with zero deposit.',
    },
    {
      q: 'How far is Aafa Coliving from HCL Gate in Jigani?',
      a: 'We are located right in Sannidhi Layout, just 300 meters (2-minute walk) from HCL Gate! Convenient for engineers, researchers, and corporate professionals.',
    },
    {
      q: 'What is the deposit policy and notice period?',
      a: 'We maintain a transparent 1-month refundable security deposit policy with zero hidden deduction fees. 1-month notice prior to vacating is required.',
    },
    {
      q: 'Is there 24/7 generator power backup?',
      a: 'Yes! We have an automatic commercial generator line that powers lights, laptop chargers, Wi-Fi, and common areas during power cuts.',
    },
    {
      q: 'Is Aafa Coliving safe for female residents?',
      a: 'Absolutely. We have biometric facial recognition entry, 24/7 CCTV surveillance across all corridors and gates, and dedicated staff on campus 24/7.',
    },
  ];

  return (
    <PageTransition>
      <div className="relative z-10 overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 flex flex-col items-start text-left"
          >
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-[#D4A64A]" />
              <span>Jigani • 300m to HCL Gate</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#FAF7F0] font-sora tracking-tight leading-[1.15] mb-6">
              Aafa Coliving — <br />
              <span className="text-gradient-gold">Your Home Away From Home</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#FAF7F0]/85 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Fully furnished 1BHK, 2BHK, Single Rooms & Daily Stays in Jigani, Bengaluru — with authentic homestyle Kerala meals, 1Gbps fiber Wi-Fi & 100% power backup included.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/rooms"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-extrabold text-sm shadow-xl shadow-[#D4A64A]/30 hover:shadow-[#D4A64A]/50 hover:scale-105 transition-all flex items-center gap-2 btn-shimmer"
                data-cursor="expand"
              >
                <span>View All Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenBooking('Daily Stay Special (₹499/day)')}
                className="px-7 py-4 rounded-2xl glass-card border border-[#D4A64A]/40 text-[#D4A64A] font-bold text-sm hover:bg-[#D4A64A]/15 hover:scale-105 transition-all flex items-center gap-2"
                data-cursor="expand"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Stay — ₹499/day</span>
              </button>
            </div>

            {/* Trust Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#FAF7F0]/10 text-xs text-[#FAF7F0]/80">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[#D4A64A] text-[#D4A64A]" />
                <span className="font-bold text-[#FAF7F0]">4.9★</span>
                <span>(140+ Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Google Maps Listing</span>
              </div>
            </div>

          </motion.div>

          {/* Right 3D Canvas Showcase Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <Hero3DCanvas />
          </motion.div>

        </section>

        {/* RESIDENT LIFE STATS BAR */}
        <section className="py-12 px-4 sm:px-8 border-y border-[#FAF7F0]/10 bg-[#FAF7F0]/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Happy Residents' },
              { number: '7+', label: 'Years of Trust' },
              { number: '4.9★', label: 'Google Rating' },
              { number: '100%', label: 'Generator Backup' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#D4A64A] font-sora mb-1">{stat.number}</h3>
                <p className="text-xs text-[#FAF7F0]/70 font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CURATED ROOM SANCTUARIES PREVIEW */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
              <Bed className="w-4 h-4 text-[#D4A64A]" />
              <span>Tailored Living Options</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sora mb-4">
              Curated <span className="text-gradient-gold">Living Sanctuaries</span>
            </h2>
            <p className="text-[#FAF7F0]/80 text-sm sm:text-base">
              Choose between private single suites, budget-friendly 2BHK sharing, or flexible ₹499 daily stays.
            </p>

            {/* Room Filter Pills */}
            <div className="flex justify-center gap-2.5 mt-8 overflow-x-auto pb-2">
              {[
                { id: 'all', label: 'All Plans' },
                { id: 'daily', label: '⭐ Daily Stay (₹499/day)' },
                { id: 'sharing', label: '2 BHK Sharing' },
                { id: 'private', label: 'Private Suites' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setRoomCategoryTab(tab.id)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                    roomCategoryTab === tab.id
                      ? 'bg-gradient-to-r from-[#D4A64A] to-amber-500 text-[#0B1220] shadow-md shadow-[#D4A64A]/30 scale-105'
                      : 'glass-card text-[#FAF7F0]/70 hover:text-[#FAF7F0]'
                  }`}
                  data-cursor="expand"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredFeaturedRooms.map((room, idx) => (
                <motion.div
                  layout
                  key={room.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card glass-card-hover rounded-3xl p-5 border border-white/10 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4 border border-white/10">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B1220]/80 backdrop-blur-md text-[#D4A64A] border border-[#D4A64A]/30 text-[10px] font-bold font-mono">
                        {room.badge}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-sora text-[#FAF7F0] mb-1.5">
                      {room.title}
                    </h3>
                    <p className="text-xs text-[#FAF7F0]/70 leading-relaxed mb-4">
                      {room.desc}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {room.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#FAF7F0]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A64A] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#FAF7F0]/60 uppercase">Pricing</span>
                      <p className="text-lg font-extrabold text-[#D4A64A] font-sora">
                        {room.price} <span className="text-[10px] font-normal text-[#FAF7F0]/60">/ {room.period}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenBooking(room.title)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A64A] to-amber-500 text-[#0B1220] font-bold text-xs shadow-md shadow-[#D4A64A]/25 hover:scale-105 transition-all"
                      data-cursor="expand"
                    >
                      Book
                    </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* TODAY'S LIVE KITCHEN & DISH SPOTLIGHT */}
        <TodayLiveKitchen />

        {/* INTERACTIVE PRICE & BUDGET CALCULATOR */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <PriceCalculator onOpenBooking={(title) => onOpenBooking(title)} />
        </section>

        {/* ROOM FEATURE HOTSPOTS TOUR */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
              <ZoomIn className="w-4 h-4 text-[#D4A64A]" />
              <span>Interactive Virtual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sora mb-4">
              Explore Our <span className="text-gradient-gold">Furnished Bedroom Features</span>
            </h2>
            <p className="text-[#FAF7F0]/80 text-sm sm:text-base">
              Click on the glowing gold hotspots below to inspect individual room amenities.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden glass-card border border-[#D4A64A]/30 h-[450px] sm:h-[550px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=80"
              alt="Aafa Bedroom Hotspot Tour"
              className="w-full h-full object-cover filter brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-[#0B1220]/40" />

            {/* Hotspot Pins */}
            {roomHotspots.map((spot) => (
              <div
                key={spot.id}
                style={{ top: spot.y, left: spot.x }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  className="relative w-8 h-8 rounded-full bg-[#D4A64A] text-[#0B1220] font-bold text-xs flex items-center justify-center shadow-lg shadow-[#D4A64A]/50 hover:scale-125 transition-transform"
                  data-cursor="expand"
                >
                  <span className="absolute -inset-2 rounded-full border-2 border-[#D4A64A] animate-ping opacity-75" />
                  <span>+</span>
                </button>

                <AnimatePresence>
                  {activeHotspot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 rounded-2xl glass-card p-4 border border-[#D4A64A]/40 shadow-2xl text-left bg-[#0B1220]/95 z-30"
                    >
                      <h4 className="text-sm font-bold text-[#D4A64A] font-sora mb-1">{spot.title}</h4>
                      <p className="text-xs text-[#FAF7F0]/80 leading-relaxed">{spot.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* TRUE MONTHLY SAVINGS & COST BREAKDOWN */}
        <SavingsCalculator onOpenBooking={(title) => onOpenBooking(title)} />

        {/* NEIGHBORHOOD COMMUTE RADIUS EXPLORER */}
        <NeighborhoodExplorer />

        {/* ZERO-GRAVITY AMENITIES GRID */}
        <AmenitiesGrid />

        {/* DINING EXPERIENCE & INFINITE MARQUEE */}
        <DiningMarquee />

        {/* COMPARISON MATRIX TABLE */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sora mb-4">
              AAFA Coliving vs <span className="text-gradient-gold">Traditional PGs & Flats</span>
            </h2>
            <p className="text-[#FAF7F0]/80 text-sm sm:text-base">
              See why software engineers & students choose Aafa over standard rental options.
            </p>
          </div>

          <div className="rounded-3xl glass-card border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 bg-[#D4A64A]/10 text-xs font-mono uppercase tracking-wider text-[#D4A64A]">
                    <th className="p-5 font-bold font-sora">Living Feature</th>
                    <th className="p-5 font-bold font-sora text-[#D4A64A] bg-[#D4A64A]/15">AAFA COLIVING</th>
                    <th className="p-5 font-bold font-sora">Traditional PG</th>
                    <th className="p-5 font-bold font-sora">Renting a Flat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                  {[
                    { feature: '3x Daily Kerala Homestyle Meals', aafa: 'Included Free', pg: 'Extra / Low Quality', flat: 'Self Cook / Cook Salary' },
                    { feature: 'Wi-Fi Speed', aafa: '1 GBPS Dual Fiber', pg: 'Shared slow Wi-Fi', flat: 'Self Broadband Contract' },
                    { feature: 'Power Backup', aafa: '100% Commercial Generator', pg: 'Inverter (Lights only)', flat: 'No Generator' },
                    { feature: 'Housekeeping & Washroom Cleaning', aafa: 'Daily Maid Service', pg: 'Weekly / Irregular', flat: 'Self Cleaning' },
                    { feature: 'Security Deposit', aafa: '1 Month Refundable Only', pg: '2-3 Months Deposit', flat: '6-10 Months Deposit' },
                    { feature: 'Daily Stay Plan Available', aafa: 'Yes (₹499/day)', pg: 'No', flat: 'No' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-5 font-bold font-sora text-[#FAF7F0]">{row.feature}</td>
                      <td className="p-5 font-bold text-[#D4A64A] bg-[#D4A64A]/10">{row.aafa}</td>
                      <td className="p-5 text-[#FAF7F0]/60">{row.pg}</td>
                      <td className="p-5 text-[#FAF7F0]/60">{row.flat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VERIFIED RESIDENT REVIEWS & RATINGS */}
        <TestimonialsOrbit />

        {/* PAN-INDIA EXPANSION TEASER */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div>
                <span className="text-xs font-mono uppercase text-[#D4A64A] bg-[#D4A64A]/15 px-3 py-1 rounded-full border border-[#D4A64A]/30">
                  Pan-India Locations
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-sora mt-2 text-[#FAF7F0]">
                  Expanding to India’s Major IT Hubs
                </h3>
              </div>

              <Link
                to="/locations"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold text-xs shrink-0 shadow-lg shadow-[#D4A64A]/25"
                data-cursor="expand"
              >
                Explore All Cities →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="p-4 rounded-2xl glass-card border border-white/10 hover:border-[#D4A64A]/40 text-center group transition-all"
                  data-cursor="expand"
                >
                  <span className="text-lg font-bold font-sora text-[#FAF7F0] group-hover:text-[#D4A64A] block">
                    {loc.city}
                  </span>
                  <span className="text-[10px] font-mono text-[#D4A64A] mt-0.5 block">
                    {loc.status === 'live' ? '🟢 Live' : '⏳ Soon'}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sora mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold font-sora text-sm sm:text-base text-[#FAF7F0] hover:text-[#D4A64A] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#D4A64A] shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-[#FAF7F0]/80 leading-relaxed border-t border-white/5 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM BIG CTA SANCTUARY BOOKING BANNER */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto mb-12">
          <div className="rounded-3xl glass-card-glow border-2 border-[#D4A64A] p-8 sm:p-14 text-center relative overflow-hidden bg-gradient-to-br from-[#D4A64A]/20 via-[#0B1220] to-[#0B1220]">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A64A]/20 text-[#D4A64A] border border-[#D4A64A]/40 text-xs font-mono font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Move-In Ready Sanctuary</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#FAF7F0]">
                Ready to Experience Stress-Free Living in Jigani?
              </h2>
              <p className="text-sm sm:text-base text-[#FAF7F0]/80 leading-relaxed">
                Schedule a free campus visit today, sample our authentic Kerala lunch, or book your ₹499/day trial stay instantly.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onOpenBooking('Daily Stay Special (₹499/day)')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-extrabold text-sm sm:text-base shadow-xl shadow-[#D4A64A]/30 hover:shadow-[#D4A64A]/50 hover:scale-105 transition-all flex items-center gap-2 btn-shimmer"
                  data-cursor="expand"
                >
                  <Calendar className="w-5 h-5 stroke-[2.5]" />
                  <span>Book Room Now — ₹499/day</span>
                </button>

                <a
                  href="tel:+918747049377"
                  className="px-8 py-4 rounded-2xl glass-card border border-white/20 text-[#FAF7F0] font-bold text-sm sm:text-base hover:bg-white/10 hover:border-[#D4A64A]/50 transition-all flex items-center gap-2"
                  data-cursor="expand"
                >
                  <Phone className="w-5 h-5 text-[#D4A64A]" />
                  <span>Call Hotline: 8747049377</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
