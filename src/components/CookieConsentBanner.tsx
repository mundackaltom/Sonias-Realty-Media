"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  OPEN_PREFERENCES_EVENT,
  getConsent,
  getServerConsent,
  setConsent,
  subscribeConsent,
} from "@/lib/consent";

export default function CookieConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsent
  );
  const [manuallyOpen, setManuallyOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(consent.analytics);
  const [marketing, setMarketing] = useState(consent.marketing);

  useEffect(() => {
    const openForEditing = () => {
      const latest = getConsent();
      setAnalytics(latest.analytics);
      setMarketing(latest.marketing);
      setCustomizing(true);
      setManuallyOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openForEditing);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openForEditing);
  }, []);

  const save = (choice: { analytics: boolean; marketing: boolean }) => {
    setConsent(choice);
    setManuallyOpen(false);
    setCustomizing(false);
  };

  const visible = !consent.decided || manuallyOpen;
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] bg-[#292F36] text-white shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        {!customizing ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="font-jost text-sm sm:text-base text-white/80 leading-relaxed flex-1">
              We use cookies that are necessary for this site to work. With
              your permission, we&apos;d also like to use analytics and
              advertising cookies to understand site usage and show more
              relevant ads. See our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#CDA274] hover:text-[#B8956A] underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="font-jost text-sm px-4 py-2 rounded-md border border-white/30 text-white/90 hover:bg-white/10 transition"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: false, marketing: false })}
                className="font-jost text-sm px-4 py-2 rounded-md border border-white/30 text-white/90 hover:bg-white/10 transition"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: true, marketing: true })}
                className="font-jost text-sm px-4 py-2 rounded-md bg-[#CDA274] hover:bg-[#B8956A] text-white font-medium transition"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h3 className="font-dm-serif text-lg text-white">
              Cookie Preferences
            </h3>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-md border border-white/15 p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-jost text-sm font-medium text-white">
                    Necessary
                  </span>
                  <span className="font-jost text-xs text-white/50">
                    Always on
                  </span>
                </div>
                <p className="font-jost text-xs text-white/60 leading-relaxed">
                  Required for the site to function (page navigation, forms).
                  Cannot be switched off.
                </p>
              </div>

              <label className="rounded-md border border-white/15 p-3 cursor-pointer block">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-jost text-sm font-medium text-white">
                    Analytics
                  </span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="h-4 w-4 accent-[#CDA274]"
                  />
                </div>
                <p className="font-jost text-xs text-white/60 leading-relaxed">
                  Helps us understand how visitors use the site (e.g. Google
                  Analytics).
                </p>
              </label>

              <label className="rounded-md border border-white/15 p-3 cursor-pointer block">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-jost text-sm font-medium text-white">
                    Marketing
                  </span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="h-4 w-4 accent-[#CDA274]"
                  />
                </div>
                <p className="font-jost text-xs text-white/60 leading-relaxed">
                  Used to show more relevant ads and measure campaign
                  performance (e.g. Google Ads, Meta).
                </p>
              </label>
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setCustomizing(false)}
                className="font-jost text-sm px-4 py-2 rounded-md border border-white/30 text-white/90 hover:bg-white/10 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => save({ analytics, marketing })}
                className="font-jost text-sm px-4 py-2 rounded-md bg-[#CDA274] hover:bg-[#B8956A] text-white font-medium transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
