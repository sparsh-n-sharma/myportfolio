"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export type SectionVariant =
  | "hero"
  | "showreel"
  | "projects"
  | "about"
  | "skills"
  | "clients"
  | "contact";

const variants = {
  hero: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  showreel: {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.6 },
    visible: {
      clipPath: "inset(0 0 0 0)",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  projects: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  },
  about: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  },
  skills: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.08 } },
  },
  clients: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  },
  contact: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
};

export function SectionTransition({
  variant,
  children,
  className,
  id,
}: {
  variant: SectionVariant;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const reducedMotion = usePrefersReducedMotion();

  const motionVariants = reducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : variants[variant];

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={motionVariants}
    >
      {children}
    </motion.section>
  );
}

export function ProjectCardMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", stiffness: 100, damping: 15 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ClientCardMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.85 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", stiffness: 120, damping: 14 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
