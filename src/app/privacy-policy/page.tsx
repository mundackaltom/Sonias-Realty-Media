import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Sonia's Realty Media",
  description: "How Sonia's Realty Media collects, uses and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(32px,3.6vw,48px)]">
          <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
            Legal
          </div>
          <h1 className="m-0 mb-3 font-playfair text-[clamp(34px,5.6vw,64px)] font-bold leading-[1.02] tracking-[-0.035em]">
            Privacy Policy
          </h1>
          <p className="m-0 font-lora text-base text-[var(--muted-3)]">Last updated: September 2026</p>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="mx-auto max-w-[860px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="flex flex-col gap-10 font-lora text-[15.5px] leading-[1.75] text-[var(--muted-4)]">
            <p className="m-0">
              Sonia&#8217;s Realty Media (&#8220;we&#8221;, &#8220;us&#8221;) operates this website to help you discover residential projects in Bengaluru and to provide real estate, home loan and investment advisory services. This policy explains what personal information we collect, why we collect it, and the choices you have.
            </p>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Information We Collect</h2>
              <p className="mb-3">
                <strong className="text-[var(--ink)]">Information you provide directly</strong> &mdash; when you submit an enquiry, request a brochure, or contact us through the site, we collect your name, email address, phone number and the message you send us.
              </p>
              <p className="m-0">
                <strong className="text-[var(--ink)]">Information collected automatically</strong> &mdash; our contact form records the IP address a submission comes from, solely to detect spam and prevent abuse. If you consent to analytics or marketing cookies (see below), we will also collect standard web-analytics data such as pages visited and device/browser type.
              </p>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Cookies</h2>
              <p className="mb-4">
                We use three categories of cookies. You choose which of the optional categories to allow when you first visit the site, and you can change your choice at any time from the{" "}
                <span className="font-medium text-[var(--ink)]">Cookie Preferences</span> link in the footer.
              </p>
              <div className="flex flex-col gap-3">
                <div className="border border-[var(--hairline)] p-4">
                  <p className="mb-1 font-archivo text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">Necessary &mdash; always active</p>
                  <p className="m-0 text-sm">Required for the site to work correctly, such as remembering your cookie preference itself. These cannot be switched off.</p>
                </div>
                <div className="border border-[var(--hairline)] p-4">
                  <p className="mb-1 font-archivo text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">Analytics &mdash; only with your consent</p>
                  <p className="m-0 text-sm">Helps us understand how visitors use the site (for example, Google Analytics), so we can improve it. This only runs if you opt in.</p>
                </div>
                <div className="border border-[var(--hairline)] p-4">
                  <p className="mb-1 font-archivo text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">Marketing &mdash; only with your consent</p>
                  <p className="m-0 text-sm">Used to measure the performance of our advertising and show more relevant ads (for example, Google Ads or Meta). This only runs if you opt in.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">How We Use Your Information</h2>
              <ul className="m-0 list-disc space-y-2 pl-5">
                <li>To respond to your enquiries and property requests</li>
                <li>To send brochures and project information you request</li>
                <li>To provide real estate, home loan, investment and asset management consultation</li>
                <li>Where you&#8217;ve consented, to understand site usage and measure the effectiveness of our marketing</li>
              </ul>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Third-Party Service Providers</h2>
              <p className="m-0">
                We use Resend to deliver email notifications when you submit an enquiry. Your name, email, phone number and message are passed to Resend solely to send that email. We do not sell your personal information to anyone.
              </p>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Data Retention</h2>
              <p className="m-0">
                We retain enquiry information for as long as needed to respond to you and maintain our business records, after which it is deleted or anonymized.
              </p>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Your Rights</h2>
              <p className="m-0">
                Under India&#8217;s Digital Personal Data Protection Act, 2023, you can ask us to access, correct or delete the personal information we hold about you. To exercise these rights, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Changes to This Policy</h2>
              <p className="m-0">
                We may update this policy from time to time. Material changes will be reflected by updating the date at the top of this page.
              </p>
            </div>

            <div>
              <h2 className="m-0 mb-3 font-playfair text-2xl font-bold text-[var(--ink)]">Contact Us</h2>
              <p className="m-0">
                For any privacy questions or requests, reach us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-[var(--gold-text)] underline underline-offset-2">
                  {EMAIL}
                </a>{" "}
                or{" "}
                <a href={`tel:${PHONE_TEL}`} className="text-[var(--gold-text)] underline underline-offset-2 [font-feature-settings:'tnum']">
                  {PHONE_DISPLAY}
                </a>
                , or see our{" "}
                <Link href="/contact" className="text-[var(--gold-text)] underline underline-offset-2">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
