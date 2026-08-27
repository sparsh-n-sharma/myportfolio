"use client";

import { useTheme } from "@/lib/ThemeProvider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  className,
  overHero = false,
}: {
  className?: string;
  overHero?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border transition-all",
        overHero
          ? "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
          : "border-border bg-foreground/5 text-foreground hover:border-foreground/20 hover:bg-foreground/10",
        className
      )}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
