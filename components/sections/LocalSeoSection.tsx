"use client";

import { localServiceBlocks } from "@/lib/data/seoContent";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export function LocalSeoSection() {
  return (
    <SectionTransition
      variant="about"
      id="services"
      className="section-padding border-t border-border"
      aria-label="Video editing services in Bengaluru India"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Services"
          title="AI Reel & Short-Form Video Editor — Bengaluru, India"
          description="Sparsh Edits (Sparsh Sharma) — professional Instagram Reels, YouTube Shorts, and AI-assisted video editing for brands, creators, restaurants, and agencies in Bangalore and across India."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {localServiceBlocks.map((block, i) => (
            <motion.article
              key={block.id}
              id={block.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-elevated/40 p-6 md:p-8"
            >
              <h3 className="font-display text-lg font-bold leading-snug md:text-xl">
                {block.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {block.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
