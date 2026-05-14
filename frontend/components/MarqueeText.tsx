"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
}

const MarqueeText: React.FC<MarqueeProps> = ({ text, speed = 20, reverse = false }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-10 border-y border-brand-dark/10 bg-brand-yellow/30">
      <motion.div
        animate={{ x: reverse ? [0, 1000] : [0, -1000] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex"
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-editorial font-bold uppercase tracking-tighter mx-10 flex items-center"
          >
            {text}
            <span className="ml-10 w-4 h-4 rounded-full bg-brand-dark" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
