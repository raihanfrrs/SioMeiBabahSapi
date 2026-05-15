"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x,
        y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(follower, {
        scale: 4,
        backgroundColor: "rgba(199, 146, 62, 0.1)",
        borderColor: "rgba(199, 146, 62, 0.3)",
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 0.5,
        backgroundColor: "#C7923E",
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(199, 146, 62, 0.5)",
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#C7923E",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    const links = document.querySelectorAll("a, button, .cursor-pointer");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-peanut rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-brand-peanut/50 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
