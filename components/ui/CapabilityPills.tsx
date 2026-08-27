"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function CapabilityPills({
  items,
  className,
  onDark = false,
}: {
  items: readonly string[];
  className?: string;
  onDark?: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={cn("flex flex-wrap gap-2 md:gap-3", className)}>
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reducedMotion ? 0 : 0.8 + index * 0.1,
            duration: 0.4,
          }}
          className={cn(
            "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider backdrop-blur-sm md:text-sm",
            onDark
              ? "border border-white/25 bg-white/10 text-white/90"
              : "border border-border bg-foreground/5 text-foreground"
          )}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
