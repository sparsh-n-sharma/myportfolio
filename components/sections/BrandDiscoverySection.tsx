"use client";

import { brandAliases, discoveryTopics, searchableTerms } from "@/lib/data/brandIndex";
import { siteContent } from "@/lib/data/content";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export function BrandDiscoverySection() {
  return (
    <SectionTransition
      variant="about"
      id="discover"
      className="section-padding border-t border-border"
      aria-label={`About ${siteContent.name} and ${siteContent.brand}`}
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Discover"
          title={`${siteContent.name} · ${siteContent.brand}`}
          description={`Everything you need to find ${siteContent.name} — video editor, AI reel creator, and motion designer in Bengaluru, India. Official website: ${siteContent.domain}`}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {discoveryTopics.map((topic, i) => (
            <motion.article
              key={topic.id}
              id={topic.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-border bg-elevated/40 p-5 md:p-6"
            >
              <h3 className="font-display text-base font-bold md:text-lg">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{topic.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-elevated/30 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold">
            Also known as — {siteContent.name}
          </h3>
          <p className="mt-2 text-sm text-muted">
            Search any of these terms to find {siteContent.brand} at {siteContent.domain}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {brandAliases.map((alias) => (
              <span
                key={alias}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted"
              >
                {alias}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-elevated/30 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold">Services & searches</h3>
          <p className="mt-2 text-sm text-muted">
            {siteContent.name} ({siteContent.brand}) — AI reels, short-form video, and motion
            graphics in Bengaluru and India
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {searchableTerms.map((term) => (
              <span
                key={term}
                className="rounded-full bg-foreground/5 px-3 py-1.5 text-xs text-muted"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
