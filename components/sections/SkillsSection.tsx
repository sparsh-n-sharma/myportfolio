"use client";

import { skillCapabilities } from "@/lib/data/capabilities";
import { skills } from "@/lib/data/skills";
import { motion } from "framer-motion";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function SkillsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <SectionTransition variant="skills" id="skills" className="section-padding">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Expertise"
          title="Tools & capabilities"
          description="Seven years of craft across the full motion design pipeline."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: reducedMotion ? 1 : 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.08 }}
                className="flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span className="text-sm font-medium uppercase tracking-wider md:text-base">
                  {skill.name}
                </span>
                <StarRating rating={skill.rating} />
              </motion.div>
            ))}
          </div>

          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-muted">
              Capabilities
            </p>
            <div className="flex flex-wrap gap-3">
              {skillCapabilities.map((cap, i) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.06 }}
                  className={`rounded-2xl border border-white/5 bg-elevated px-5 py-3 text-sm font-medium ${
                    i % 3 === 1 ? "lg:translate-y-3" : i % 3 === 2 ? "lg:-translate-y-2" : ""
                  }`}
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
