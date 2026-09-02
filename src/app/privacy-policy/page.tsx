import type { Metadata } from "next";
import Link from "next/link";
import BackToTopButton from "../../components/BackToTopButton";

export const metadata: Metadata = {
  title: "Privacy Policy | Sonia's Realty Media",
  description:
    "How Sonia's Realty Media collects, uses and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#F4F0EC] py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="font-jost text-base text-[#4D5053]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto font-jost text-[#4D5053] leading-relaxed space-y-10">
          <p>
            Sonia&apos;s Realty Media (&quot;we&quot;, &quot;us&quot;) operates
            this website to help you discover residential projects in
            Bengaluru and to provide real estate, home loan and investment
            advisory services. This policy explains what personal
            information we collect, why we collect it, and the choices you
            have.
          </p>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Information We Collect
            </h2>
            <p className="mb-3">
              <strong className="text-[#292F36]">
                Information you provide directly
              </strong>{" "}
              — when you submit an enquiry, request a brochure, or contact us
              through the site, we collect your name, email address, phone
              number and the message you send us.
            </p>
            <p>
              <strong className="text-[#292F36]">
                Information collected automatically
              </strong>{" "}
              — our contact form records the IP address a submission comes
              from, solely to detect spam and prevent abuse. If you consent
              to analytics or marketing cookies (see below), we will also
              collect standard web-analytics data such as pages visited and
              device/browser type.
            </p>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Cookies
            </h2>
            <p className="mb-4">
              We use three categories of cookies. You choose which of the
              optional categories to allow when you first visit the site, and
              you can change your choice at any time from the{" "}
              <span className="text-[#292F36] font-medium">
                Cookie Preferences
              </span>{" "}
              link in the footer.
            </p>
            <div className="space-y-3">
              <div className="rounded-md border border-[#292F36]/10 p-4">
                <p className="font-medium text-[#292F36] mb-1">
                  Necessary — always active
                </p>
                <p className="text-sm">
                  Required for the site to work correctly, such as
                  remembering your cookie preference itself. These cannot be
                  switched off.
                </p>
              </div>
              <div className="rounded-md border border-[#292F36]/10 p-4">
                <p className="font-medium text-[#292F36] mb-1">
                  Analytics — only with your consent
                </p>
                <p className="text-sm">
                  Helps us understand how visitors use the site (for example,
                  Google Analytics), so we can improve it. This only runs if
                  you opt in.
                </p>
              </div>
              <div className="rounded-md border border-[#292F36]/10 p-4">
                <p className="font-medium text-[#292F36] mb-1">
                  Marketing — only with your consent
                </p>
                <p className="text-sm">
                  Used to measure the performance of our advertising and show
                  more relevant ads (for example, Google Ads or Meta). This
                  only runs if you opt in.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your enquiries and property requests</li>
              <li>To send brochures and project information you request</li>
              <li>
                To provide real estate, home loan, investment and asset
                management consultation
              </li>
              <li>
                Where you&apos;ve consented, to understand site usage and
                measure the effectiveness of our marketing
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Third-Party Service Providers
            </h2>
            <p>
              We use Resend to deliver email notifications when you submit an
              enquiry. Your name, email, phone number and message are passed
              to Resend solely to send that email. We do not sell your
              personal information to anyone.
            </p>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Data Retention
            </h2>
            <p>
              We retain enquiry information for as long as needed to respond
              to you and maintain our business records, after which it is
              deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Your Rights
            </h2>
            <p>
              Under India&apos;s Digital Personal Data Protection Act, 2023,
              you can ask us to access, correct or delete the personal
              information we hold about you. To exercise these rights, contact
              us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Material changes
              will be reflected by updating the date at the top of this page.
            </p>
          </div>

          <div>
            <h2 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3">
              Contact Us
            </h2>
            <p>
              For any privacy questions or requests, reach us at{" "}
              <a
                href="mailto:soniasrealtymedia@gmail.com"
                className="text-[#CDA274] hover:text-[#B8956A] underline underline-offset-2"
              >
                soniasrealtymedia@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="tel:+919036747821"
                className="text-[#CDA274] hover:text-[#B8956A] underline underline-offset-2"
              >
                +91 90367 47821
              </a>
              , or see our{" "}
              <Link
                href="/contact"
                className="text-[#CDA274] hover:text-[#B8956A] underline underline-offset-2"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
