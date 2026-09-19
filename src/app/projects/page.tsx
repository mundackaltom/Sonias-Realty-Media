import { Suspense } from "react";
import type { Metadata } from "next";
import ProjectsListingClient from "@/components/ProjectsListingClient";

export const metadata: Metadata = {
  title: "Residential Projects in Bengaluru",
  description: "Browse every residential project we currently advise on in Bengaluru — Brigade, Prestige, Sobha, Godrej, Century and Purva — with gallery, floor plans, RERA file and rate history.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Residential Projects in Bengaluru | Sonia's Realty Media", url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <Suspense fallback={null}>
        <ProjectsListingClient />
      </Suspense>
    </div>
  );
}
