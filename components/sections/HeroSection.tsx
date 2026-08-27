"use client";

import { heroCapabilities } from "@/lib/data/capabilities";
import { siteContent } from "@/lib/data/content";
import { media } from "@/lib/data/media";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContactDrawer } from "@/components/layout/ContactDrawerProvider";
import { FloatingShape } from "@/components/motion/FloatingShape";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { Button } from "@/components/ui/Button";
import { CapabilityPills } from "@/components/ui/CapabilityPills";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function HeroSection() {
  const { openContact } = useContactDrawer();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isMobile || reducedMotion) return;
    const handler = (e: MouseEvent) => {
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [isMobile, reducedMotion]);

  return (
    <SectionTransition variant="hero" id="hero" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        poster={media.showreelPoster}
      >
        <source src={media.heroBackgroundVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />

      {!isMobile && (
        <>
          <FloatingShape
            color="blue"
            size="lg"
            className="left-[10%] top-[20%]"
            mouseX={mouse.x}
            mouseY={mouse.y}
          />
          <FloatingShape
            color="purple"
            size="md"
            delay={1}
            className="right-[15%] top-[30%]"
            mouseX={mouse.x}
            mouseY={mouse.y}
          />
          <FloatingShape
            color="orange"
            size="sm"
            delay={2}
            className="bottom-[25%] left-[20%]"
            mouseX={mouse.x}
            mouseY={mouse.y}
          />
        </>
      )}

      <div className="container-wide relative flex min-h-screen flex-col justify-end px-5 pb-16 pt-32 text-white md:px-8 md:pb-24 lg:px-12 lg:pb-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mb-4 font-mono text-xs tracking-widest text-white/50"
          >
            00:00:00 — INTRO
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              {!reducedMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {siteContent.availability}
          </motion.div>

          <div className="font-display font-extrabold leading-none tracking-tight text-white" aria-hidden="true">
            <span className="block whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[12rem]">
              <LetterReveal text={siteContent.firstName} />
            </span>
            <span className="mt-1 block whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[12rem]">
              <LetterReveal text={siteContent.lastName} delay={0.2} />
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 text-xl font-medium text-white/90 md:text-2xl lg:text-3xl"
          >
            {siteContent.name} — {siteContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.5 }}
            className="mt-2 text-sm font-medium text-accent-blue/90 md:text-base"
          >
            {siteContent.seoSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-2 text-sm text-white/60 md:text-base"
          >
            {siteContent.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 max-w-xl text-base text-white/75 md:text-lg lg:text-xl"
          >
            {siteContent.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton>
              <Button variant="play" onClick={() => scrollToSection("showreel")}>
                Play Showreel
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
              >
                View Work
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="ghost"
                onClick={openContact}
                className="border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
              >
                Send project details
              </Button>
            </MagneticButton>
          </motion.div>

          <CapabilityPills items={heroCapabilities} onDark className="mt-10" />
        </div>
      </div>
    </SectionTransition>
  );
}
