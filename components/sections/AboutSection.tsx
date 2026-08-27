"use client";

import { siteContent } from "@/lib/data/content";
import { media } from "@/lib/data/media";
import Image from "next/image";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";

export function AboutSection() {
  const isMobile = useIsMobile();
  const { about } = siteContent;

  return (
    <SectionTransition variant="about" id="about" className="section-padding overflow-hidden">
      <div className="container-wide">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          description={siteContent.aboutIntro}
        />

        <div className="relative grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-5">
            <ParallaxLayer offset={isMobile ? 0 : 40}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-blue/10 via-elevated to-accent-purple/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={media.aboutImage}
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={media.aboutVideo} type="video/mp4" />
                </video>
              </div>
            </ParallaxLayer>
            <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 overflow-hidden rounded-2xl border border-border lg:block">
              <Image
                src={media.workspaceImage}
                alt="Creative workspace"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pl-8"
          >
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {siteContent.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {siteContent.bioExtended}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Based in Bengaluru", "Monthly retainers", "Fast turnaround"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-foreground/5 px-4 py-2 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative mt-12">
              <div
                className="absolute bottom-0 left-[3px] top-2 w-px -translate-x-1/2 bg-border"
                aria-hidden
              />
              {siteContent.experience.map((item) => (
                <div key={item.company} className="relative pl-8 pb-10 last:pb-0">
                  <div
                    className="absolute left-[3px] top-[0.4rem] z-10 size-2 -translate-x-1/2 rounded-full bg-accent-blue ring-[3px] ring-background"
                    aria-hidden
                  />
                  <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-blue">
                    {item.year}
                  </p>
                  <h4 className="mt-1 font-display text-xl font-bold">{item.role}</h4>
                  <p className="text-sm text-muted">{item.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch lg:gap-6">
          {siteContent.creativeCapabilities.map((cap) => (
            <Card key={cap.title} className="flex h-full flex-col p-6">
              <h4 className="font-display text-lg font-bold leading-snug">{cap.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cap.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-elevated/50 p-8 md:p-10">
          <h3 className="font-display text-2xl font-bold md:text-3xl">What I can create</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
            Deliverables clients actually hire for — not software ratings.
          </p>
          <div className="mt-8">
            <ServicesGrid />
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
