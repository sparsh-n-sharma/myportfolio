"use client";

import { Footer } from "@/components/layout/Footer";
import { ContactDrawerProvider } from "@/components/layout/ContactDrawerProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ProjectModal } from "@/components/ProjectModal";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocalSeoSection } from "@/components/sections/LocalSeoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { RetainerSection } from "@/components/sections/RetainerSection";
import { ShowreelSection } from "@/components/sections/ShowreelSection";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { motion } from "framer-motion";
import { useSyncExternalStore, useState } from "react";

function subscribeNoop() {
  return () => {};
}

function hasSeenIntro(): boolean {
  return sessionStorage.getItem("sparsh-loaded") === "true";
}

export function PortfolioShell() {
  const reducedMotion = usePrefersReducedMotion();
  const hasLoadedBefore = useSyncExternalStore(
    subscribeNoop,
    hasSeenIntro,
    () => false
  );
  const skipIntro = hasLoadedBefore || reducedMotion;
  const [loading, setLoading] = useState(!skipIntro);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const showLoading = loading && !skipIntro;

  return (
    <ContactDrawerProvider>
      {showLoading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <ScrollProgress />

      <motion.div
        className="overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <HeroSection />

        <div className="relative">
          <div className="content-veil pointer-events-none absolute inset-0 z-0" aria-hidden />
          <main className="relative z-10">
            <ShowreelSection />
            <RetainerSection />
            <ProjectsSection onProjectSelect={setSelectedProject} />
            <BeforeAfterSection />
            <AudienceSection />
            <LocalSeoSection />
            <AboutSection />
            <FaqSection />
            <ContactSection />
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </motion.div>

      <ProjectModal
        slug={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </ContactDrawerProvider>
  );
}
