"use client";

import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/lib/seo";
import { motion } from "framer-motion";

export function FaqSection() {
  return (
    <SectionTransition variant="contact" id="faq" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow="FAQ"
          title="Best AI Reel Editor in Bengaluru — FAQ"
          description="Answers about hiring Sparsh Edits for AI reels, Instagram Reels, YouTube Shorts, and monthly video editing in Bangalore and India."
        />

        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <details className="group rounded-2xl border border-border bg-elevated/50 p-5 open:bg-elevated">
                <summary className="cursor-pointer list-none font-display text-base font-bold leading-snug md:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
