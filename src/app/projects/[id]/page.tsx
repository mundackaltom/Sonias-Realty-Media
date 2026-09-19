import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug, isVerified } from "@/lib/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);
  if (!project) return {};
  const title = `${project.title}, ${project.location} — ${project.config}`;
  const description = `${project.description} ${project.status} by ${project.builder} in ${project.location}, Bengaluru. Starting ${project.price}.`;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${title} | Sonia's Realty Media`,
      description,
      url: `/projects/${project.id}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Sonia's Realty Media`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectBySlug(id);
  if (!project) notFound();

  const verified = isVerified(project);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: project.title,
    description: project.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    ...(verified ? { offers: { "@type": "Offer", price: project.price, priceCurrency: "INR" } } : {}),
  };

  // Defense in depth: a literal "</script>" (or "<!--") inside a future data
  // value could otherwise break out of this tag when interpreted as HTML.
  // (application/ld+json isn't parsed as executable script, so this is
  // exempt from the script-src CSP directive — no nonce needed here.)
  const jsonLdHtml = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml }} />
      <ProjectDetailClient project={project} />
    </div>
  );
}
