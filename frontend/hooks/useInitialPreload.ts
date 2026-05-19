import { useState, useEffect } from "react";

/**
 * useInitialPreload
 * Manages the initialization sequence of the SioMeiBabahSapi website:
 * 1. React hydration completion
 * 2. Font loading ready check (document.fonts.ready)
 * 3. Listening to the active first video ready signal ("hero-first-video-ready")
 * 4. Safety timeouts (4s desktop / 5s mobile) to guarantee the user is never stuck
 */
export function useInitialPreload() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setProgress(25); // Set progress to 25% immediately upon hydration

    // Define safety timeout duration depending on device viewport
    const isMobile = window.innerWidth < 1024;
    const timeoutDuration = isMobile ? 5000 : 4000;

    // Simulate progress ticks up to 90% while assets load
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + (90 - prev) * 0.15; // Slow down asymptotically as it approaches 90%
        }
        return prev;
      });
    }, 150);

    let safetyTimeout: NodeJS.Timeout;

    const completePreload = () => {
      clearInterval(progressInterval);
      if (safetyTimeout) {
        clearTimeout(safetyTimeout);
      }
      setProgress(100);
      
      // Delay completion slightly so the user sees the progress bar reach 100% beautifully
      setTimeout(() => {
        setIsReady(true);
      }, 400);
    };

    // Fallback safety timeout in case assets take too long
    safetyTimeout = setTimeout(() => {
      console.log("Preloader: Safety timeout triggered.");
      completePreload();
    }, timeoutDuration);

    // 1. Listen for standard document font rendering
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        setProgress((prev) => Math.max(prev, 60));
      }).catch(() => {});
    }

    // 2. Listen for the first video load signal dispatched by the Hero video element
    const handleFirstVideoReady = () => {
      console.log("Preloader: First video loaded successfully. Clearing preloader.");
      completePreload();
    };

    window.addEventListener("hero-first-video-ready", handleFirstVideoReady);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(safetyTimeout);
      window.removeEventListener("hero-first-video-ready", handleFirstVideoReady);
    };
  }, []);

  return { progress, isReady, isHydrated };
}
