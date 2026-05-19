"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BrandedPreloaderProps {
  progress: number;
  isReady: boolean;
}

/**
 * BrandedPreloader
 * Renders a fullscreen high-end dark radial overlay with the "babah sapi" typography.
 * Smoothly locks the browser body scroll during load and uses framer-motion exit hooks to transition away.
 */
const BrandedPreloader: React.FC<BrandedPreloaderProps> = ({ progress, isReady }) => {
  // Synchronize locking of document body scrolling with loading completion state
  useEffect(() => {
    if (!isReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isReady]);

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Elegant cubic-bezier fadeout
          }}
          className="fixed inset-0 w-screen h-screen z-[99999] bg-[#120806] flex flex-col items-center justify-center select-none overflow-hidden"
          style={{
            background: "radial-gradient(circle at center, #170907 0%, #0c0403 100%)"
          }}
        >
          {/* Luxury Grain/Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] mix-blend-overlay" />

          {/* Centered Brand typography block */}
          <div className="flex flex-col items-center gap-6 px-6 max-w-md text-center">
            {/* Serif wordmark word logo */}
            <motion.h1
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#F4E9D8] text-5xl md:text-6xl tracking-[-0.04em] leading-none"
              style={{
                fontFamily: 'var(--font-cormorant), "Cormorant Garamond", "Playfair Display", Georgia, serif'
              }}
            >
              babah sapi
            </motion.h1>

            {/* Premium details tagline */}
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.0 }}
              className="text-[#F4E9D8] tracking-[0.45em] uppercase text-[10px] font-bold font-sans"
            >
              PREMIUM BEEF SIOMAY • HANDCRAFTED DAILY
            </motion.span>

            {/* Sleek Gold Loading Progress Line */}
            <div className="w-[180px] h-[1.5px] bg-[#F4E9D8]/10 rounded-full overflow-hidden mt-3 relative">
              <motion.div
                className="h-full bg-[#C9913D] absolute left-0 top-0"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandedPreloader;
