import { Suspense } from "react";
import type { Metadata } from "next";
import ProjectsListingClient from "@/components/ProjectsListingClient";

export const metadata: Metadata = {
  title: "Projects | Sonia's Realty Media",
  description: "Every residential project we currently advise on in Bengaluru, with gallery, floor plans, RERA file and rate history.",
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
