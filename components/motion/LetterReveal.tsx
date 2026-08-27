"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function LetterReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const letters = text.split("");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline-block whitespace-nowrap", className)} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.04,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
