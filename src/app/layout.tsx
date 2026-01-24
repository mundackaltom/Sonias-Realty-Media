import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Sonia's Realty Media | Premium Real Estate in Bengaluru",
  description: "Discover your dream home with Sonia's Realty Media. Explore premium residential projects in Bengaluru including Brigade Valencia, Prestige Properties, and more. Expert real estate consultation and property search services.",
  keywords: ["real estate Bengaluru", "property search", "residential projects", "Brigade Valencia", "Prestige Properties", "luxury apartments", "real estate consultation"],
  authors: [{ name: "Sonia's Realty Media" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Sonia's Realty Media | Premium Real Estate in Bengaluru",
    description: "Your trusted partner in finding premium residential properties in Bengaluru",
    type: "website",
    locale: "en_IN",
    siteName: "Sonia's Realty Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonia's Realty Media | Premium Real Estate in Bengaluru",
    description: "Your trusted partner in finding premium residential properties in Bengaluru",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="font-jost antialiased"
      >
  {/* Page Content */}
  <main>{children}</main>

  {/* Footer */}
  <Footer />
      </body>
    </html>
  );
}
