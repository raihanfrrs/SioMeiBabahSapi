"use client";

import React from "react";
import { motion } from "framer-motion";
import { imageFadeIn } from "@/lib/animations";

interface MediaBlockProps {
  src: string;
  type?: "image" | "video";
  alt?: string;
  className?: string;
  parallax?: boolean;
}

const MediaBlock: React.FC<MediaBlockProps> = ({
  src,
  type = "image",
  alt = "Media content",
  className = "",
  parallax = false,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={imageFadeIn}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      {type === "image" ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${parallax ? "scale-110" : ""}`}
        />
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover ${parallax ? "scale-110" : ""}`}
        />
      )}
      <div className="absolute inset-0 bg-brand-dark/5" />
    </motion.div>
  );
};

export default MediaBlock;
