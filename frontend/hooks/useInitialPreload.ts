import { useState, useEffect } from "react";

/**
 * useInitialPreload
 * Manages the initialization sequence of the SioMeiBabahSapi website:
 * 1. React hydration completion
 * 2. Font loading ready check (document.fonts.ready)
 * 3. Listening to the active first video ready signal ("hero-first-video-ready")
 * 4. Safety timeouts (1.8s desktop / 2.2s mobile) to guarantee the user is never stuck
 */
export function useInitialPreload() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    console.log("preloader start");
    setIsHydrated(true);
    setProgress(25); // Set progress to 25% immediately upon hydration

    // Define safety timeout duration depending on device viewport (1.8s desktop / 2.2s mobile)
    const isMobile = window.innerWidth < 1024;
    const timeoutDuration = isMobile ? 2200 : 1800;

    // Simulate progress ticks up to 90% while assets load
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + (90 - prev) * 0.2; // Smooth asymptotic progress curve
        }
        return prev;
      });
    }, 100);

    let safetyTimeout: NodeJS.Timeout;

    const completePreload = () => {
      clearInterval(progressInterval);
      if (safetyTimeout) {
        clearTimeout(safetyTimeout);
      }
      setProgress(100);
      
      // Delay completion slightly so the user sees the progress bar reach 100% beautifully
      setTimeout(() => {
        console.log("preloader hide");
        setIsReady(true);
      }, 400);
    };

    // Fallback safety timeout in case assets take too long
    safetyTimeout = setTimeout(() => {
      console.log("preloader timeout");
      completePreload();
    }, timeoutDuration);

    // 1. Listen for standard document font rendering
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        console.log("font ready");
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
      if (safetyTimeout) {
        clearTimeout(safetyTimeout);
      }
      window.removeEventListener("hero-first-video-ready", handleFirstVideoReady);
    };
  }, []);

  return { progress, isReady, isHydrated };
}
