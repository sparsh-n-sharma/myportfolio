"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function FloatingShape({
  className,
  color = "blue",
  size = "md",
  delay = 0,
  mouseX = 0,
  mouseY = 0,
}: {
  className?: string;
  color?: "blue" | "purple" | "orange";
  size?: "sm" | "md" | "lg";
  delay?: number;
  mouseX?: number;
  mouseY?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();

  const colors = {
    blue: "from-accent-blue/30 to-accent-blue/5",
    purple: "from-accent-purple/30 to-accent-purple/5",
    orange: "from-accent-orange/30 to-accent-orange/5",
  };

  const sizes = {
    sm: "h-24 w-24 md:h-32 md:w-32",
    md: "h-40 w-40 md:h-56 md:w-56",
    lg: "h-56 w-56 md:h-72 md:w-72",
  };

  if (reducedMotion) return null;

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute rounded-full bg-gradient-to-br blur-3xl",
        colors[color],
        sizes[size],
        className
      )}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        x: mouseX * 0.02,
        y: mouseY * 0.02,
      }}
    />
  );
}
