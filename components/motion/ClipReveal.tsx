"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function ClipReveal({
  children,
  className,
  direction = "horizontal",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = usePrefersReducedMotion();

  const clipFrom =
    direction === "horizontal"
      ? "inset(0 100% 0 0)"
      : "inset(100% 0 0 0)";
  const clipTo = "inset(0 0 0 0)";

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={{
        clipPath: reducedMotion ? clipTo : clipFrom,
        opacity: reducedMotion ? 1 : 0.6,
      }}
      animate={
        isInView
          ? { clipPath: clipTo, opacity: 1 }
          : { clipPath: reducedMotion ? clipTo : clipFrom, opacity: reducedMotion ? 1 : 0.6 }
      }
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
