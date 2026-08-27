import { siteContent } from "@/lib/data/content";

const footerLinks = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Retainer", href: "#retainer" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: siteContent.social.linkedin },
  { label: "Instagram", href: siteContent.social.instagram },
  { label: "Behance", href: siteContent.social.behance },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide px-5 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-bold">{siteContent.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {siteContent.title}. Based in {siteContent.location}.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              AI reel editor & short-form video specialist in Bengaluru, India. Instagram Reels, YouTube Shorts, and monthly editing packages at sparshedits.com
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Navigate</p>
            <nav className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Connect</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`mailto:${siteContent.email}`}
                className="text-sm text-foreground/80 transition-colors hover:text-accent-blue"
              >
                {siteContent.email}
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          {siteContent.footer}
        </div>
      </div>
    </footer>
  );
}
