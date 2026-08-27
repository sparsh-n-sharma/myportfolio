"use client";

import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beforeAfterPairs } from "@/lib/data/beforeAfter";
import { siteContent } from "@/lib/data/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

function BeforeAfterSlider({ pair }: { pair: (typeof beforeAfterPairs)[number] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-bold">{pair.label}</p>
          <p className="text-sm text-muted">{pair.category}</p>
        </div>
        <div className="flex gap-4 text-xs font-medium uppercase tracking-wider">
          <span className="text-muted">Raw</span>
          <span className="text-accent-blue">Edited</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-video cursor-ew-resize overflow-hidden rounded-3xl border border-border select-none touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={pair.editedPoster}
        >
          <source src={pair.editedVideo} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover grayscale-[30%] brightness-90"
            poster={pair.rawPoster}
          >
            <source src={pair.rawVideo} type="video/mp4" />
          </video>
          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Raw footage
          </div>
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Sparsh edit
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/70 backdrop-blur-sm">
            <span className="text-xs text-white">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const { beforeAfter } = siteContent;

  return (
    <SectionTransition variant="about" id="before-after" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow={beforeAfter.eyebrow}
          timelinePhase="COLOR"
          title={beforeAfter.headline}
          description={beforeAfter.description}
        />

        <div className={cn("mt-12 grid gap-12", beforeAfterPairs.length > 1 && "lg:grid-cols-2")}>
          {beforeAfterPairs.map((pair, i) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BeforeAfterSlider pair={pair} />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">{beforeAfter.demoNote}</p>
      </div>
    </SectionTransition>
  );
}
