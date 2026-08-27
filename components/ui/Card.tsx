import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-elevated shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
