"use client";

import { siteContent } from "@/lib/data/content";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useContactDrawer } from "@/components/layout/ContactDrawerProvider";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "projects" },
  { label: "Services", href: "services" },
  { label: "Retainer", href: "retainer" },
  { label: "FAQ", href: "faq" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const { openContact } = useContactDrawer();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    scrollToSection(href);
    setOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className={cn(
              "font-display text-lg font-extrabold tracking-tight md:text-xl",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            {siteContent.name.split(" ")[0]}
            <span className="text-accent-blue">.</span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-muted hover:text-foreground"
                    : "text-white/75 hover:text-white"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle overHero={!scrolled} />
            <Button onClick={openContact} showArrow>
              {siteContent.navCta}
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
              scrolled ? "border-border" : "border-white/25 text-white"
            )}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-5 pt-24">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="min-h-[44px] border-b border-border py-4 text-left text-2xl font-display font-bold"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-8 flex items-center gap-4">
                <ThemeToggle />
                <Button onClick={openContact} className="flex-1">
                  {siteContent.navCta}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
