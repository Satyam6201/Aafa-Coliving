import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aafa3DLogo from './Aafa3DLogo';

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[200] bg-[#0B1220] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* 3D Extruded Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <Aafa3DLogo size="large" className="mb-4" />

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FAF7F0] font-sora tracking-tight mb-2">
              AAFA COLIVING
            </h1>
            <p className="text-xs font-mono uppercase text-[#D4A64A] tracking-widest">
              Zero-Gravity Living • Jigani, Bengaluru
            </p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            className="h-1 bg-[#D4A64A] rounded-full mt-8 shadow-[0_0_20px_#D4A64A]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
