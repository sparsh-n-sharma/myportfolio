"use client";

import { useContactDrawer } from "@/components/layout/ContactDrawerProvider";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/lib/data/content";
import { formatInr, retainerPackages } from "@/lib/data/retainer";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export function RetainerSection() {
  const { openContactWithNeed } = useContactDrawer();
  const { retainer } = siteContent;

  return (
    <SectionTransition variant="projects" id="retainer" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow={retainer.eyebrow}
          timelinePhase="EDIT"
          title={retainer.headline}
          description={retainer.subheadline}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-border bg-elevated/50 p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-accent-blue">You send</p>
            <ul className="mt-4 space-y-3">
              {retainer.workflowYouSend.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm md:text-base"
                >
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                  {i < retainer.workflowYouSend.length - 1 && (
                    <ArrowRight className="ml-auto h-4 w-4 text-muted" aria-hidden />
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="my-6 h-px bg-border" />

            <p className="text-xs font-medium uppercase tracking-wider text-accent-purple">I deliver</p>
            <ul className="mt-4 space-y-3">
              {retainer.workflowIDeliver.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm md:text-base"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent-blue" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {retainerPackages.map((pkg) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-3xl border p-6 md:p-8",
                  pkg.featured
                    ? "border-accent-blue/40 bg-gradient-to-br from-accent-blue/10 via-elevated to-accent-purple/10"
                    : "border-border bg-elevated/50"
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold md:text-2xl">{pkg.name}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {pkg.reelsPerMonth} reels / month · {pkg.turnaround}
                    </p>
                  </div>
                  <p className="font-display text-2xl font-extrabold md:text-3xl">
                    {formatInr(pkg.priceInr)}
                    <span className="text-sm font-normal text-muted">/mo</span>
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="h-3.5 w-3.5 shrink-0 text-accent-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full"
                  onClick={() =>
                    openContactWithNeed(`${pkg.reelsPerMonth} reels/month — ${pkg.name} plan`)
                  }
                >
                  Get a quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {retainer.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-foreground/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted md:text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
