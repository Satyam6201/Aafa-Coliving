import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Bus, Train, ShoppingBag, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const distances = [
    { icon: Car, destination: 'Infopark / IT Tech Hub', time: '5 Mins', distance: '1.8 km' },
    { icon: Train, destination: 'Metro Rail Station', time: '8 Mins', distance: '2.5 km' },
    { icon: Bus, destination: 'Main Highway & Bus Bay', time: '3 Mins', distance: '800 m' },
    { icon: ShoppingBag, destination: 'Lulu Mall / Supermarket', time: '2 Mins', distance: 'Walking' },
  ];

  return (
    <section id="location" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Prime Location</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-sora tracking-tight">
          Connected to <span className="text-gradient-gold">Everything That Matters</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Strategically located in the heart of Kerala's tech corridor. Minutes away from IT parks, metro stations, food hubs, and supermarkets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Proximity Grid & Address Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl glass-card border border-amber-500/30 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sora">Aafa Coliving Campus</h3>
                <p className="text-xs text-slate-400">Kakkanad / Infopark Road, Kerala</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Aafa Coliving, Opp. Tech Park Phase II, Kakkanad, Kochi, Kerala - 682030
            </p>

            <a
              href="https://maps.google.com/?q=Kakkanad+Kochi+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/30 font-semibold text-sm transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Open Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Proximity Distance Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {distances.map((dist, idx) => {
              const Icon = dist.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {dist.time}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">{dist.destination}</h4>
                    <p className="text-[10px] text-slate-400">{dist.distance} distance</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Google Maps Embed Card */}
        <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden glass-card border border-white/15 p-2 shadow-2xl">
          <iframe
            title="Aafa Coliving Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8415712213797!2d76.35515287588383!3d10.029875172535073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5415555555%3A0x123456789abcdef!2sKakkanad%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.25rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125 invert opacity-85 hover:grayscale-0 hover:invert-0 transition-all duration-700"
          />
        </div>

      </div>

    </section>
  );
}
