"use client";

import { getProjectBySlug } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { FadeUp } from "@/components/motion/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";

interface ProjectModalProps {
  slug: string | null;
  onClose: () => void;
}

export function ProjectModal({ slug, onClose }: ProjectModalProps) {
  const project = slug ? getProjectBySlug(slug) : null;
  const isMobile = useIsMobile();
  const isDemo = project?.contentType === "demo";

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={cn(
              "relative z-10 w-full overflow-y-auto bg-background",
              isMobile
                ? "max-h-[100dvh] rounded-t-3xl"
                : "h-[100dvh] max-w-5xl rounded-none md:rounded-3xl"
            )}
            initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95 }}
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="sticky top-4 z-20 ml-auto mr-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-sm transition-colors hover:bg-black/80"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative -mt-11 aspect-video w-full overflow-hidden md:rounded-t-3xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                poster={project.heroImage}
              >
                <source src={project.heroVideo} type="video/mp4" />
              </video>
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                style={{ backgroundColor: `${project.accentColor}10` }}
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <p className="mb-2 font-mono text-xs text-white/70">{project.timelineCode}</p>
                <Badge className="mb-3">{project.category}</Badge>
                <h2 id="modal-title" className="font-display text-3xl font-extrabold md:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg text-muted">{project.categoryLabel}</p>
              </div>
            </div>

            <div className="space-y-12 p-6 md:p-10">
              <FadeUp>
                <section>
                  {isDemo && (
                    <span className="mb-4 inline-block rounded-full border border-accent-orange/30 bg-accent-orange/10 px-3 py-1 text-xs font-medium text-accent-orange">
                      Sample edit — not client work
                    </span>
                  )}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-muted">Role</p>
                      <p className="font-medium">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Year</p>
                      <p className="font-medium">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Tools</p>
                      <p className="font-medium">{project.tools.join(", ")}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                    {project.description}
                  </p>
                </section>
              </FadeUp>

              {!isDemo && project.process && project.process.length > 0 && (
                <FadeUp delay={0.1}>
                  <section>
                    <h3 className="font-display text-2xl font-bold md:text-3xl">Process</h3>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {project.process.map((step) => (
                        <div
                          key={step.title}
                          className="rounded-2xl border border-white/5 bg-elevated p-5"
                        >
                          <h4 className="font-display font-bold">{step.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </FadeUp>
              )}

              {!isDemo && project.results && project.results.length > 0 && (
                <FadeUp delay={0.15}>
                  <section>
                    <h3 className="font-display text-2xl font-bold md:text-3xl">Results</h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {project.results.map((result) => (
                        <div
                          key={result.label}
                          className="rounded-2xl border border-white/5 p-6 text-center"
                          style={{ borderColor: `${project.accentColor}30` }}
                        >
                          <p
                            className="font-display text-3xl font-extrabold md:text-4xl"
                            style={{ color: project.accentColor }}
                          >
                            {result.value}
                          </p>
                          <p className="mt-2 text-sm text-muted">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </FadeUp>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
