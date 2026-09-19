import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "../components/footer";
import SiteHeader from "../components/SiteHeader";
import CookieConsentBanner from "../components/CookieConsentBanner";
import { EMAIL, PHONE_TEL, SOCIALS } from "@/lib/content";

const SITE_URL = "https://www.soniasrealtymedia.com";
const SITE_NAME = "Sonia's Realty Media";
const DEFAULT_TITLE = "Sonia's Realty Media | Residential Real Estate Advisory in Bengaluru";
const DEFAULT_DESCRIPTION =
  "RERA-registered residential advisory in Bengaluru with 34 live projects across 17 micro-markets — Brigade, Prestige, Sobha, Godrej and more. Free property search, home loan help and site visits; six years, 108 homes handed over.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "real estate Bengaluru",
    "property search Bengaluru",
    "residential projects Bengaluru",
    "Brigade Valencia",
    "Prestige properties Bengaluru",
    "Sobha Neopolis",
    "Godrej Tiara",
    "luxury apartments Bengaluru",
    "RERA registered channel partner",
    "NRI property advisory Bengaluru",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og-cover.jpg"],
  },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/og-cover.jpg`,
  telephone: PHONE_TEL,
  email: EMAIL,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prestige Jindal City",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560073",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Bengaluru" },
  sameAs: SOCIALS.map((s) => s.url),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-lora antialiased"
      >
  {/* Site Header */}
  <SiteHeader />

  {/* Page Content */}
  <main>{children}</main>

  {/* Footer */}
  <Footer />

  {/* Cookie Consent */}
  <CookieConsentBanner />
      </body>
    </html>
  );
}
