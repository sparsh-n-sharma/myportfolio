"use client";

import { services } from "@/lib/data/services";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function ServicesGrid() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reducedMotion ? 0 : i * 0.08 }}
          className="rounded-2xl border border-border bg-background p-5 md:p-6"
        >
          <h4 className="font-display text-lg font-bold">{service.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
