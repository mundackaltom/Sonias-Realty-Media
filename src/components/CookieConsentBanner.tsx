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

  const buttonBase = "border border-white/30 px-4 py-2.5 font-archivo text-[11px] font-medium uppercase tracking-[0.1em] text-white/90 transition-colors hover:bg-white/10";
  const acceptBase = "bg-[var(--gold)] px-4 py-2.5 font-archivo text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]";

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t-2 border-[var(--gold)] bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-[1560px] px-4 py-4 sm:py-5">
        {!customizing ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="flex-1 font-lora text-sm leading-relaxed text-white/80">
              We use cookies that are necessary for this site to work. With your permission, we&#8217;d also like to use analytics and advertising cookies to understand site usage and show more relevant ads. See our{" "}
              <Link href="/privacy-policy" className="text-[var(--gold-warm)] underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button type="button" onClick={() => setCustomizing(true)} className={buttonBase}>
                Customize
              </button>
              <button type="button" onClick={() => save({ analytics: false, marketing: false })} className={buttonBase}>
                Reject non-essential
              </button>
              <button type="button" onClick={() => save({ analytics: true, marketing: true })} className={acceptBase}>
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h3 className="m-0 font-playfair text-lg font-semibold text-white">Cookie Preferences</h3>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="border border-white/[.18] p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-archivo text-[11px] font-semibold uppercase tracking-[0.1em] text-white">Necessary</span>
                  <span className="font-archivo text-[10px] uppercase tracking-[0.1em] text-white/50">Always on</span>
                </div>
                <p className="m-0 font-lora text-xs leading-relaxed text-white/60">
                  Required for the site to function (page navigation, forms). Cannot be switched off.
                </p>
              </div>

              <label className="block cursor-pointer border border-white/[.18] p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-archivo text-[11px] font-semibold uppercase tracking-[0.1em] text-white">Analytics</span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="h-4 w-4 accent-[var(--gold)]"
                  />
                </div>
                <p className="m-0 font-lora text-xs leading-relaxed text-white/60">
                  Helps us understand how visitors use the site (e.g. Google Analytics).
                </p>
              </label>

              <label className="block cursor-pointer border border-white/[.18] p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-archivo text-[11px] font-semibold uppercase tracking-[0.1em] text-white">Marketing</span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="h-4 w-4 accent-[var(--gold)]"
                  />
                </div>
                <p className="m-0 font-lora text-xs leading-relaxed text-white/60">
                  Used to show more relevant ads and measure campaign performance (e.g. Google Ads, Meta).
                </p>
              </label>
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <button type="button" onClick={() => setCustomizing(false)} className={buttonBase}>
                Back
              </button>
              <button type="button" onClick={() => save({ analytics, marketing })} className={acceptBase}>
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
