"use client";

import { media } from "@/lib/data/media";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <section id="showreel" className="section-padding">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Showreel"
          timelinePhase="RAW"
          title="See the work in motion"
          description="Short-form edits, motion graphics, and social content — a quick highlight reel."
        />

        <div className="gradient-border relative overflow-hidden rounded-3xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={media.showreelPoster}
              className="h-full w-full object-cover"
            >
              <source src={media.showreelVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={togglePlay}
                className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/40"
                aria-label={playing ? "Pause showreel" : "Play showreel"}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent-blue/50"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {!playing && (
                  <span className="ml-1 text-2xl text-white">▶</span>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={toggleMute}
              className={cn(
                "absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full",
                "border border-white/20 bg-black/50 backdrop-blur-sm transition-all hover:bg-black/70"
              )}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX className="h-4 w-4 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
