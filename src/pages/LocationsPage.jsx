import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, ArrowRight, Bell, CheckCircle2, Send, Phone } from 'lucide-react';
import { locations } from '../data/locationsData';
import PageTransition from '../components/PageTransition';
import confetti from 'canvas-confetti';

export default function LocationsPage() {
  const [notifyCity, setNotifyCity] = useState('');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!notifyCity || !notifyEmail) return;
    setNotifySubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4A64A', '#f59e0b', '#FAF7F0'],
      });
    } catch (err) {}
  };

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-[#D4A64A]" />
            <span>Pan-India Expansion Map</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F0] mb-6 font-sora tracking-tight">
            Aafa Coliving <span className="text-gradient-gold">Locations Across India</span>
          </h1>
          <p className="text-[#FAF7F0]/80 text-base sm:text-lg">
            Experience our zero-gravity coliving sanctuary, homestyle Kerala dining, and 24/7 power backup in major IT hubs.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              data-cursor="expand"
            >
              <div>
                {/* Image & Status Badge */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={loc.heroImage}
                    alt={`${loc.city} Aafa Coliving`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />

                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      loc.status === 'live'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-[#D4A64A]/20 text-[#D4A64A] border border-[#D4A64A]/40 backdrop-blur-md'
                    }`}
                  >
                    {loc.status === 'live' ? '🟢 Live Campus' : `⏳ ${loc.launchTimeline}`}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="text-xs font-mono text-[#D4A64A] uppercase tracking-wider block mb-1">
                    {loc.state}
                  </span>
                  <h3 className="text-2xl font-bold font-sora text-[#FAF7F0] mb-2 group-hover:text-[#D4A64A] transition-colors">
                    {loc.city}
                  </h3>
                  <p className="text-xs text-[#FAF7F0]/75 font-medium mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4A64A] shrink-0" />
                    <span>{loc.area}</span>
                  </p>

                  {loc.highlights && (
                    <ul className="space-y-1.5 mb-4 text-[11px] text-[#FAF7F0]/70">
                      {loc.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                {loc.status === 'live' ? (
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold text-xs shadow-lg shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/45 transition-all"
                  >
                    <span>View {loc.city} Campus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl glass-card text-[#D4A64A] hover:bg-[#D4A64A]/15 font-bold text-xs border border-[#D4A64A]/30 transition-all"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#D4A64A]" />
                    <span>Notify Me When Live</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lead Capture Form for Upcoming Cities */}
        <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A64A]/15 text-[#D4A64A] text-xs font-mono uppercase mb-4">
              <Bell className="w-4 h-4" />
              <span>Expansion Priority List</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-[#FAF7F0] mb-2">
              Want Aafa Coliving in Your City?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F0]/75 mb-6">
              Select your city and email below. We’ll notify you first with exclusive early-bird discounts when we launch in Pune, Mumbai, Delhi, Chennai, or Kerala!
            </p>

            {!notifySubmitted ? (
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <select
                  value={notifyCity}
                  onChange={(e) => setNotifyCity(e.target.value)}
                  className="w-full sm:w-1/3 px-4 py-3.5 rounded-xl glass-card text-xs focus:outline-none focus:border-[#D4A64A] bg-[#0B1220] text-[#FAF7F0]"
                  required
                >
                  <option value="">Select City...</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kerala">Kerala</option>
                </select>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="w-full sm:w-2/3 px-4 py-3.5 rounded-xl glass-card text-xs focus:outline-none focus:border-[#D4A64A] text-[#FAF7F0]"
                  required
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold text-xs shrink-0 shadow-lg shadow-[#D4A64A]/25"
                  data-cursor="expand"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl glass-card border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>You're on the priority list! We'll notify you when {notifyCity} goes live.</span>
              </div>
            )}

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
