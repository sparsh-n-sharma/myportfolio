"use client";

import { siteContent } from "@/lib/data/content";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"loading" | "exit">("loading");
  const [timecode, setTimecode] = useState("00:00:00");

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Math.min(Date.now() - start, 1800);
      const seconds = Math.floor(elapsed / 1000);
      const frames = Math.floor((elapsed % 1000) / 33);
      setTimecode(
        `00:00:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`
      );
    }, 33);

    const exitTimer = window.setTimeout(() => setPhase("exit"), 1800);
    const completeTimer = window.setTimeout(() => {
      sessionStorage.setItem("sparsh-loaded", "true");
      onComplete();
    }, 2200);

    return () => {
      clearInterval(tick);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090909]"
      initial={{ opacity: 1 }}
      animate={phase === "exit" ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <p className="font-mono text-sm tracking-widest text-accent-blue">{timecode}</p>
        <p className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white md:text-4xl">
          {siteContent.firstName} {siteContent.lastName}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Loading timeline
        </p>
        <div className="relative mx-auto mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-blue to-accent-purple"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          <motion.div
            className="timeline-playhead absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-white bg-accent-blue"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
