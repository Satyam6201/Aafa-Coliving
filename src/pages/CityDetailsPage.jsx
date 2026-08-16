import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Calendar, CheckCircle2, ArrowLeft, Bell, Send, Sparkles } from 'lucide-react';
import { locations } from '../data/locationsData';
import PageTransition from '../components/PageTransition';
import confetti from 'canvas-confetti';

export default function CityDetailsPage({ onOpenBooking }) {
  const { citySlug } = useParams();
  const location = locations.find((l) => l.slug === citySlug) || locations[0];
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isLive = location.status === 'live';

  useEffect(() => {
    document.title = isLive
      ? `Aafa Coliving ${location.city} | Premium PG & Coliving in ${location.city}`
      : `Aafa Coliving ${location.city} (Coming Soon) | PG Rooms in ${location.city}`;
  }, [location, isLive]);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
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
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#FAF7F0]/60 font-mono mb-8">
          <Link to="/" className="hover:text-[#D4A64A] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/locations" className="hover:text-[#D4A64A] transition-colors">Locations</Link>
          <span>/</span>
          <span className="text-[#D4A64A] font-bold">{location.city}</span>
        </div>

        {/* IF CITY IS LIVE */}
        {isLive ? (
          <div>
            
            {/* Hero Banner */}
            <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase mb-4">
                    <span>🟢 Active Operational Campus</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F0] font-sora tracking-tight mb-4">
                    Aafa Coliving — <span className="text-gradient-gold">{location.city}</span>
                  </h1>
                  <p className="text-[#FAF7F0]/80 text-sm sm:text-base mb-6 font-medium">
                    Located in {location.area}. Experience clean fully furnished bedrooms, 3x daily Kerala homestyle meals, 1GBPS Wi-Fi, and 24/7 commercial generator backup.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenBooking('Daily Stay Special (₹499/day)')}
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold text-xs shadow-lg shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/45 transition-all"
                      data-cursor="expand"
                    >
                      Book Room in {location.city} — ₹499/day
                    </button>
                    <a
                      href="tel:+918747049377"
                      className="px-6 py-3.5 rounded-xl glass-card text-[#FAF7F0] font-bold text-xs border border-white/10 hover:border-[#D4A64A]/40 flex items-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#D4A64A]" />
                      <span>Call Campus Desk</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 h-72 rounded-2xl overflow-hidden border border-white/15">
                  <img
                    src={location.heroImage}
                    alt={`Aafa Coliving ${location.city}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Room Plans Grid for City */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sora text-[#FAF7F0] mb-8 text-center">
                Room Plans Available in <span className="text-gradient-gold">{location.city}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {location.roomTypes.map((room, idx) => (
                  <div key={idx} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#D4A64A] uppercase bg-[#D4A64A]/15 px-2 py-0.5 rounded border border-[#D4A64A]/30">
                        {room.price}
                      </span>
                      <h3 className="text-xl font-bold font-sora text-[#FAF7F0] mt-2 mb-3">
                        {room.type}
                      </h3>

                      <ul className="space-y-2 mb-6">
                        {room.features.map((f, i) => (
                          <li key={i} className="text-xs text-[#FAF7F0]/75 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onOpenBooking(room.type)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold text-xs shadow-md"
                      data-cursor="expand"
                    >
                      Book {room.type}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Contact Block */}
            <div className="rounded-3xl glass-card border border-white/10 p-8 shadow-xl">
              <h3 className="text-xl font-bold font-sora text-[#FAF7F0] mb-4">
                {location.city} Campus Address & Contact
              </h3>
              <p className="text-xs text-[#FAF7F0]/80 mb-4 font-medium">
                {location.address}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D4A64A]">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  {location.phone.join(' · ')}
                </span>
                <span className="flex items-center gap-1.5 text-[#FAF7F0]/70">
                  <Clock className="w-4 h-4 text-[#D4A64A]" />
                  {location.hours}
                </span>
              </div>
            </div>

          </div>
        ) : (
          /* IF CITY IS COMING SOON */
          <div className="rounded-3xl glass-card border border-[#D4A64A]/40 p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-2xl">
            
            <div className="w-20 h-20 rounded-full bg-[#D4A64A]/20 border border-[#D4A64A]/40 text-[#D4A64A] flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Sparkles className="w-10 h-10" />
            </div>

            <span className="inline-block text-xs font-mono uppercase text-[#D4A64A] bg-[#D4A64A]/15 px-3 py-1 rounded-full border border-[#D4A64A]/30 mb-3">
              {location.launchTimeline}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F0] font-sora mb-4">
              Aafa Coliving is Coming Soon to <span className="text-gradient-gold">{location.city}</span>!
            </h1>

            <p className="text-xs sm:text-sm text-[#FAF7F0]/80 mb-8 leading-relaxed max-w-lg mx-auto">
              We are expanding our zero-gravity coliving sanctuary, homestyle Kerala dining, and 24/7 power backup to {location.area} in {location.city}. Register below for launch updates and early bird discounts!
            </p>

            {!notifySubmitted ? (
              <form onSubmit={handleNotifySubmit} className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl glass-card text-xs focus:outline-none focus:border-[#D4A64A] text-[#FAF7F0]"
                  required
                />
                <input
                  type="tel"
                  placeholder="10-digit Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl glass-card text-xs focus:outline-none focus:border-[#D4A64A] text-[#FAF7F0]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold text-xs shadow-xl shadow-[#D4A64A]/30"
                  data-cursor="expand"
                >
                  Register Priority Interest for {location.city}
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl glass-card border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you {name}! We'll contact you at {phone} as soon as Aafa {location.city} opens bookings!</span>
              </div>
            )}

            <div className="mt-10 pt-6 border-t border-white/10">
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A64A] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore Other Cities</span>
              </Link>
            </div>

          </div>
        )}

      </div>
    </PageTransition>
  );
}
