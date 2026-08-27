"use client";

import { QuickContactForm } from "@/components/contact/QuickContactForm";
import { siteContent } from "@/lib/data/content";
import { motion } from "framer-motion";
import { Globe, Mail, PenLine, Share2 } from "lucide-react";
import { SectionTransition } from "@/components/motion/SectionTransition";

const socialLinks = [
  { icon: Share2, label: "LinkedIn", href: siteContent.social.linkedin },
  { icon: Globe, label: "Instagram", href: siteContent.social.instagram },
  { icon: PenLine, label: "Behance", href: siteContent.social.behance },
];

export function ContactSection() {
  return (
    <SectionTransition variant="contact" id="contact" className="section-padding border-t border-border">
      <div className="container-wide px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {siteContent.contactHeadline}
          </motion.h2>
          <p className="mx-auto mt-2 font-mono text-xs tracking-widest text-accent-purple">
            EXPORT — READY TO SEND?
          </p>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {siteContent.contactSubtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <a
              href={`mailto:${siteContent.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-blue/20 transition-all hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" />
              {siteContent.email}
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-3 text-sm transition-colors hover:border-accent-purple/40 hover:bg-foreground/10"
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-16 max-w-xl rounded-3xl border border-border bg-elevated p-6 text-left shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-blue">
            Quick inquiry
          </p>
          <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">
            {siteContent.contactDrawerHeadline}
          </h3>
          <QuickContactForm className="mt-6" />
        </motion.div>
      </div>
    </SectionTransition>
  );
}
