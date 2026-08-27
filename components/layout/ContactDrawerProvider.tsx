"use client";

import { QuickContactForm } from "@/components/contact/QuickContactForm";
import { siteContent } from "@/lib/data/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type ContactDrawerContextType = {
  openContact: () => void;
  openContactWithNeed: (need: string) => void;
  closeContact: () => void;
};

const ContactDrawerContext = createContext<ContactDrawerContextType | null>(null);

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) {
    throw new Error("useContactDrawer must be used within ContactDrawerProvider");
  }
  return ctx;
}

export function ContactDrawerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [defaultNeed, setDefaultNeed] = useState<string | undefined>();
  const [showPrompt, setShowPrompt] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const openContact = useCallback(() => {
    setDefaultNeed(undefined);
    setOpen(true);
  }, []);

  const openContactWithNeed = useCallback((need: string) => {
    setDefaultNeed(need);
    setOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setOpen(false);
    setDefaultNeed(undefined);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (sessionStorage.getItem("sparsh-contact-prompt") === "dismissed") return;

    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.45) {
        setShowPrompt(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dismissPrompt = () => {
    setShowPrompt(false);
    sessionStorage.setItem("sparsh-contact-prompt", "dismissed");
  };

  return (
    <ContactDrawerContext.Provider value={{ openContact, openContactWithNeed, closeContact }}>
      {children}

      <AnimatePresence>
        {showPrompt && !open && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="fixed bottom-24 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
          >
            <div className="gradient-border rounded-2xl">
              <div className="relative rounded-2xl border border-border bg-elevated/95 p-4 shadow-2xl backdrop-blur-xl">
                <button
                  type="button"
                  onClick={dismissPrompt}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="pr-8 text-sm font-medium">{siteContent.contactPrompt.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {siteContent.contactPrompt.subtext}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    dismissPrompt();
                    openContact();
                  }}
                  className="mt-3 w-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                >
                  {siteContent.contactPrompt.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showPrompt && !open && (
        <div className="fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8">
          <motion.button
            type="button"
            onClick={openContact}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className={cn(
              "relative flex items-center gap-2 rounded-full",
              "bg-gradient-to-r from-accent-blue to-accent-purple px-5 py-3.5 text-sm font-medium text-white",
              "shadow-[0_8px_32px_rgba(59,130,246,0.45)] transition-transform hover:scale-105"
            )}
            aria-label="Open contact form"
          >
            {!reducedMotion && (
              <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full bg-accent-blue/25" />
            )}
            <Mail className="relative h-4 w-4" />
            <span className="relative">{siteContent.navCta}</span>
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeContact}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
              aria-label="Close contact form"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-drawer-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-x-4 bottom-4 z-[80] max-h-[85dvh] overflow-y-auto rounded-3xl border border-border bg-elevated p-6 shadow-2xl md:inset-x-auto md:bottom-auto md:left-1/2 md:top-1/2 md:w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 md:p-8"
            >
              <button
                type="button"
                onClick={closeContact}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground/5"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-blue">
                Get a quote
              </p>
              <h2 id="contact-drawer-title" className="mt-2 font-display text-2xl font-bold md:text-3xl">
                {siteContent.contactDrawerHeadline}
              </h2>
              <p className="mt-2 text-sm text-muted">{siteContent.contactDrawerSubtext}</p>

              <QuickContactForm
                key={defaultNeed ?? "default"}
                className="mt-6"
                defaultNeed={defaultNeed}
                onSent={closeContact}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ContactDrawerContext.Provider>
  );
}
