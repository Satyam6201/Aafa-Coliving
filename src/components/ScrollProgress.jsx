import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
      <motion.div
        style={{ width: `${scrollPercent}%` }}
        className="h-full bg-gradient-to-r from-[#D4A64A] via-amber-400 to-yellow-500 shadow-[0_0_12px_#D4A64A]"
      />
    </div>
  );
}
