import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Utensils, Wifi, Star, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 18);
    setRotateY(x / 18);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Floating Zero-G Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-amber-300 text-xs font-semibold tracking-wide uppercase mb-6 animate-float-slow shadow-lg shadow-amber-500/10">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>Kerala Hospitality Meets Zero-Gravity Co-Living</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white font-sora">
            Live Floating Above <br />
            <span className="text-gradient-gold">The Ordinary.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
            Experience <strong className="text-amber-200">Aafa Coliving</strong> — premium spaces designed for IT professionals & students in Kerala. Fully furnished rooms, unlimited high-speed Wi-Fi, home-cooked Kerala meals, and 24/7 security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
            >
              <span>Book Your Private Space</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              href="#rooms"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass-card text-slate-200 hover:text-amber-300 font-semibold text-base border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <Play className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Explore 3D Rooms</span>
            </motion.a>
          </div>

          {/* Key Value Micro Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Utensils className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xs font-medium text-slate-300">Kerala Meals Included</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Wifi className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xs font-medium text-slate-300">High-Speed Wi-Fi</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xs font-medium text-slate-300">24/7 Security</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xs font-medium text-slate-300">Daily Housekeeping</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Tilting Floating Glass Hero Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative perspective-1000 z-10"
        >
          {/* Card Container with 3D Parallax Tilt */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: isHovered ? 'none' : 'all 0.6s ease-out',
              transformStyle: 'preserve-3d',
            }}
            className="relative rounded-3xl p-6 glass-card border border-white/15 shadow-2xl animate-float-slow"
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-yellow-600/20 rounded-3xl blur-xl opacity-60 -z-10" />

            {/* Main Showcase Image */}
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
                alt="Aafa Coliving Interior Luxury Room"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Status Badge over Image */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Verified Co-Living Sanctuary</span>
              </div>

              {/* Floating Price Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-mono">Starting From</p>
                  <p className="text-2xl font-bold text-white font-sora">
                    ₹6,499 <span className="text-xs font-normal text-slate-400">/ month</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 (140+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Orbiting Satellite Floating Badges around the 3D card */}
            <div className="absolute -top-6 -right-6 px-4 py-3 rounded-2xl glass-card border border-amber-500/30 shadow-xl animate-float-reverse hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 font-bold text-lg">
                ⚡
              </div>
              <div>
                <p className="text-xs font-bold text-white">100% Power Backup</p>
                <p className="text-[10px] text-slate-400">Never miss a work deadline</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 px-4 py-3 rounded-2xl glass-card border border-amber-500/30 shadow-xl animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 font-bold text-lg">
                🍛
              </div>
              <div>
                <p className="text-xs font-bold text-white">3 Meals Daily</p>
                <p className="text-[10px] text-slate-400">Authentic Kerala Home Recipes</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
