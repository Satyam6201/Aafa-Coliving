import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Volume2, Sparkles, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function GuidelinesPage() {
  const rules = [
    { title: 'Gate Timings & Keyless Access', desc: 'Main biometric entry gate opens at 6:00 AM and locks at 11:00 PM. Night entry requires biometric facial verification.' },
    { title: 'Visitor Policy', desc: 'Day visitors and family members are welcome in the ground floor lounge until 9:00 PM. Overnight stays require prior desk approval.' },
    { title: 'Quiet Hours', desc: 'Quiet hours are observed between 10:30 PM and 7:00 AM to ensure uninterrupted sleep for working professionals.' },
    { title: 'Mess & Food Timings', desc: 'Breakfast (7:30-9:30 AM), Lunch (12:30-2:30 PM), Dinner (7:30-9:30 PM). Mess hall items cannot be wasted.' },
    { title: 'Housekeeping & Cleanliness', desc: 'Daily room and attached washroom cleaning by staff. Please keep personal items organized for maid access.' },
    { title: 'Notice Period & Deposit Refund', desc: '1 month advance notice required prior to vacating. 100% refundable deposit returned on check-out day.' },
  ];

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#D4A64A] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#D4A64A]" />
            <span>Community Living Code</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F0] mb-6 font-sora tracking-tight">
            Resident House Guidelines <span className="text-gradient-gold">& Rules</span>
          </h1>
          <p className="text-[#FAF7F0]/80 text-base sm:text-lg">
            Clear, respectful guidelines designed to ensure safety, hygiene, and harmony for all 140+ residents in Jigani.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rules.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-3xl p-8 border border-white/10 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D4A64A]/20 border border-[#D4A64A]/40 text-[#D4A64A] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-sora text-[#FAF7F0] mb-2">{item.title}</h3>
                <p className="text-xs text-[#FAF7F0]/75 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
}
