"use client";

import { clients } from "@/lib/data/clients";
import { ClientCardMotion, SectionTransition } from "@/components/motion/SectionTransition";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ClientsSection() {
  return (
    <SectionTransition variant="clients" id="clients" className="section-padding">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Selected Clients"
          title="Brands I've worked with"
          description="Companies and teams that have trusted me with their brand films, launch videos, and motion content."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:items-stretch lg:gap-6">
          {clients.map((client) => (
            <ClientCardMotion key={client.name} className="h-full">
              <Card className="group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] md:p-6">
                <h4 className="font-display text-xl font-bold leading-snug md:text-2xl">{client.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{client.projectType}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-accent-blue">
                  {client.year}
                </p>
              </Card>
            </ClientCardMotion>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
