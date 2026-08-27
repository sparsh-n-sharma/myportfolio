"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function ScrollProgress() {
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const playheadLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-border/50" aria-hidden>
      <motion.div
        className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-accent-blue via-accent-purple to-accent-orange"
        style={{ scaleX, width: "100%" }}
      />
      <motion.div
        className="timeline-playhead absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent-blue shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        style={{ left: playheadLeft }}
      />
    </div>
  );
}
