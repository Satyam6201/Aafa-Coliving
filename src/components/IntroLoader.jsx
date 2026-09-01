import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aafa3DLogo from './Aafa3DLogo';

export default function IntroLoader() {
  const [loading, setLoading] = useState(() => {
    // Only show intro once per user browser session to avoid annoying returning users
    try {
      return !sessionStorage.getItem('aafa_intro_seen');
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (!loading) return;

    try {
      sessionStorage.setItem('aafa_intro_seen', 'true');
    } catch (e) {}

    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[300] bg-[#0B1220] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* 3D Extruded Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <Aafa3DLogo size="large" className="mb-4" />

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] font-sora tracking-tight mb-1">
              AAFA COLIVING
            </h1>
            <p className="text-[10px] font-mono uppercase text-[#D4A64A] tracking-widest">
              Zero-Gravity Living • Jigani, Bengaluru
            </p>
          </motion.div>

          {/* Snappy Loading Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="h-1 bg-[#D4A64A] rounded-full mt-6 shadow-[0_0_15px_#D4A64A]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
