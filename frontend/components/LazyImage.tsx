"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  style,
  priority = false,
  ...props
}) => {
  const [isIntersected, setIsIntersected] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    if (typeof window === "undefined") return;

    // Utilize a very large rootMargin (600px desktop, 800px mobile) to preload images way before scrolling in
    const isMobile = window.innerWidth < 1024;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersected(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: isMobile ? "800px 0px" : "600px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // If priority is true, enforce high-priority immediate eager rendering
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        loading="eager"
        // @ts-ignore - fetchPriority is supported natively in React 18+ but TypeScript declarations might warn
        fetchPriority="high"
        className={`w-full h-full object-cover ${className || ""}`}
        style={style}
        {...props}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className || ""}`}
      style={{ display: "inline-block", position: "relative", ...style }}
    >
      {/* Dynamic luxury dark-cream skeleton background while image pre-downloads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand-dark/5 animate-pulse pointer-events-none z-10" />
      )}

      {isIntersected ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      ) : (
        // Render a solid placeholder box keeping dimensions intact while observer is idle
        <div className="w-full h-full min-h-[50px] bg-brand-dark/5" />
      )}
    </div>
  );
};
