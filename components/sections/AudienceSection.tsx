"use client";

import { SectionTransition } from "@/components/motion/SectionTransition";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { audienceSegments } from "@/lib/data/audience";
import { siteContent } from "@/lib/data/content";
import { motion } from "framer-motion";

export function AudienceSection() {
  const { audience } = siteContent;

  return (
    <SectionTransition variant="clients" id="audience" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow={audience.eyebrow}
          title={audience.headline}
          description={audience.description}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {audienceSegments.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="flex h-full flex-col p-6">
                <h3 className="font-display text-lg font-bold">{segment.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {segment.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {segment.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
