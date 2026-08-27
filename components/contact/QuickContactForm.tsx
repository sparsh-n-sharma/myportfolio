"use client";

import { siteContent } from "@/lib/data/content";
import { contentTypeOptions, needOptions } from "@/lib/data/formOptions";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

function matchNeedOption(need?: string): string {
  if (!need) return needOptions[0];
  if (need.includes("30")) return "30+ reels/month";
  if (need.includes("20")) return "20 reels/month";
  if (need.includes("10")) return "10 reels/month";
  return needOptions[0];
}

export function QuickContactForm({
  className,
  defaultNeed,
  onSent,
}: {
  className?: string;
  defaultNeed?: string;
  onSent?: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState(() => matchNeedOption(defaultNeed));
  const [contentType, setContentType] = useState<string>(contentTypeOptions[0]);
  const [footageLink, setFootageLink] = useState("");
  const [message, setMessage] = useState(() =>
    defaultNeed ? `Interested in: ${defaultNeed}\n\n` : ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Editing inquiry${name ? ` from ${name}` : ""} — ${need}`
    );
    const body = encodeURIComponent(
      [
        name && `Name: ${name}`,
        email && `Email: ${email}`,
        `What I need: ${need}`,
        `Content type: ${contentType}`,
        footageLink && `Footage link: ${footageLink}`,
        "",
        message || "I'd like to discuss an editing project with you.",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${siteContent.email}?subject=${subject}&body=${body}`;
    onSent?.();
  };

  const inputClass =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent-blue/50";

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-need" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            What do you need?
          </label>
          <select
            id="contact-need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className={inputClass}
          >
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-content-type" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            What type of content?
          </label>
          <select
            id="contact-content-type"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className={inputClass}
          >
            {contentTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-footage" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Link to raw footage <span className="normal-case text-muted">(optional)</span>
        </label>
        <input
          id="contact-footage"
          type="url"
          value={footageLink}
          onChange={(e) => setFootageLink(e.target.value)}
          placeholder="Google Drive, Dropbox, or WeTransfer link"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Brief
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="How many reels per month, timeline, style references..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-blue/20 transition-all hover:scale-[1.02]"
      >
        Send project details
        <ArrowUpRight className="h-4 w-4" />
      </button>

      <p className="text-center text-xs text-muted">
        Opens your email app addressed to{" "}
        <span className="text-foreground">{siteContent.email}</span>
      </p>
    </form>
  );
}
