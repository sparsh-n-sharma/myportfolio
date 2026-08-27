"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div ref={ref} className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.5 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.5 }
          }
          transition={{ delay: reducedMotion ? 0 : i * 0.08, duration: 0.3 }}
        >
          <Star
            className={cn(
              "h-4 w-4",
              i < rating
                ? "fill-accent-orange text-accent-orange"
                : "fill-none text-foreground/20"
            )}
          />
        </motion.div>
      ))}
    </div>
  );
}
