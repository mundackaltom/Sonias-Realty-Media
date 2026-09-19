import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Sonia's Realty Media for property search, home loan help or a site visit in Bengaluru. Replies within one working day, free to buyers.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Sonia's Realty Media", url: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
