"use client";

import React from "react";

type ProtectedBackgroundImageProps = {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function ProtectedBackgroundImage({
  src,
  alt = "",
  className = "",
  style = {},
}: ProtectedBackgroundImageProps) {
  const hasPosition = className.includes("absolute") || className.includes("fixed") || className.includes("relative") || className.includes("static");
  const positionClass = hasPosition ? "" : "relative";

  return (
    <div
      role="img"
      aria-label={alt}
      onContextMenu={(e) => e.preventDefault()}
      className={`protected-image ${positionClass} overflow-hidden bg-cover bg-center bg-no-repeat select-none ${className}`}
      style={{ backgroundImage: `url(${src})`, ...style }}
    >
      <div className="absolute inset-0 z-10" aria-hidden="true" />
    </div>
  );
}
