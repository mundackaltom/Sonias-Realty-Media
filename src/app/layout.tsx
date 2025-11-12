import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SRM",
  description: "Your trusted partner in real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${inter.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow mt-12">
          <div className="container mx-auto p-4 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sonia's Realty Media · All rights reserved
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-sm">
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/projects" className="hover:text-blue-600">Projects</a>
              <a href="/media" className="hover:text-blue-600">Media</a>
              <a href="/contact" className="hover:text-blue-600">Contact us</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
