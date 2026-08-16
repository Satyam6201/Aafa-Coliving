import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react';

export default function FloatingWidget({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Expandable Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="flex flex-col gap-2.5 items-end mb-1"
          >
            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/918747049377?text=Hi%20Aafa%20Coliving!%20I%20want%20to%20know%20more%20about%20room%20availability%20in%20Jigani."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500 text-white font-bold text-xs shadow-xl hover:bg-emerald-600 transition-all border border-emerald-400/40"
              data-cursor="expand"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+918747049377"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0B1220] text-[#D4A64A] font-bold text-xs shadow-xl border border-[#D4A64A]/40 hover:bg-[#D4A64A]/20 transition-all"
              data-cursor="expand"
            >
              <Phone className="w-4 h-4 text-[#D4A64A]" />
              <span>Call 8747049377</span>
            </a>

            {/* Quick Visit Booking Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking('Daily Stay Special (₹499/day)');
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-bold text-xs shadow-xl hover:scale-105 transition-all"
              data-cursor="expand"
            >
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>Book ₹499 Daily Stay</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button with Pulsing Gold Halo */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] flex items-center justify-center shadow-[0_0_30px_rgba(212,166,74,0.6)] border-2 border-[#FAF7F0]/40 transition-transform"
        aria-label="Contact Floating Menu"
        data-cursor="expand"
      >
        <span className="absolute -inset-1.5 rounded-full border border-[#D4A64A] animate-ping opacity-60" />
        {isOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <MessageSquare className="w-6 h-6 stroke-[2.5]" />}
      </motion.button>

    </div>
  );
}
