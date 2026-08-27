"use client";

import type { Project } from "@/lib/data/projects";
import { projects } from "@/lib/data/projects";
import { siteContent } from "@/lib/data/content";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import {
  ProjectCardMotion,
  SectionTransition,
} from "@/components/motion/SectionTransition";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useCanHover } from "@/lib/hooks/useMediaQuery";

interface ProjectsSectionProps {
  onProjectSelect: (slug: string) => void;
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (slug: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canHover = useCanHover();
  const [active, setActive] = useState(false);
  const isEven = index % 2 === 1;

  const handleEnter = () => {
    if (!canHover) return;
    setActive(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    if (!canHover) return;
    setActive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (!canHover && !active) {
      setActive(true);
      videoRef.current?.play().catch(() => {});
      return;
    }
    onSelect(project.slug);
  };

  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9] md:aspect-[2/1]",
    tall: "aspect-[4/5] md:aspect-[3/4]",
  };

  return (
    <ProjectCardMotion>
      <article
        className={cn(
          "group cursor-pointer",
          "grid gap-6 md:gap-10",
          "md:grid-cols-2 md:items-center",
          isEven && "md:[&>*:first-child]:order-2"
        )}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && onSelect(project.slug)}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} sample`}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-blue/10 via-elevated to-accent-purple/10",
            aspectClasses[project.aspectRatio]
          )}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={project.heroImage}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          >
            <source src={project.cardVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
          <div className="absolute left-4 top-4 font-mono text-xs text-white/80">
            {project.timelineCode}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
            <Play className="h-3 w-3 fill-current" />
            {active ? "View details" : "Preview"}
          </div>
        </div>

        <div className={cn("flex flex-col justify-center", isEven ? "md:pr-8" : "md:pl-8")}>
          <Badge className="mb-4 w-fit">{project.category}</Badge>
          <h3 className="font-display text-3xl font-extrabold leading-snug md:text-4xl lg:text-5xl">
            {String(index + 1).padStart(2, "0")} — {project.title}
          </h3>
          <p className="mt-2 text-lg text-accent-blue">{project.categoryLabel}</p>
          <p className="mt-1 text-sm text-muted">{project.role} · {project.year}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </article>
    </ProjectCardMotion>
  );
}

export function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  const { projects: projectsCopy } = siteContent;

  return (
    <SectionTransition variant="projects" id="projects" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow={projectsCopy.eyebrow}
          timelinePhase="MOTION"
          title={projectsCopy.title}
          description={projectsCopy.description}
        />

        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onSelect={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
