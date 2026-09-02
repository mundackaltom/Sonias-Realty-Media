// Cookie consent state, backed by localStorage and read via
// useSyncExternalStore so React state always matches what's on disk (and
// stays in sync across tabs). Later, gate a GA4 or Meta Pixel <Script> with
// `if (hasConsent("analytics")) { ... }`, or call `subscribeConsent` to load
// it the moment the visitor opts in.

export type ConsentCategory = "analytics" | "marketing";

export interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  /** Whether the visitor has made an explicit choice yet. */
  decided: boolean;
}

const STORAGE_KEY = "srm-cookie-consent";
export const CONSENT_EVENT = "srm-consent-changed";
export const OPEN_PREFERENCES_EVENT = "srm-open-cookie-preferences";

const DEFAULT_STATE: ConsentState = {
  analytics: false,
  marketing: false,
  decided: false,
};

// Cached so repeated reads of an unchanged value return the same object
// reference — required for useSyncExternalStore to avoid re-render loops.
let cachedRaw: string | null = null;
let cachedState: ConsentState = DEFAULT_STATE;

function readSnapshot(): ConsentState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return DEFAULT_STATE;
  }
  if (raw === cachedRaw) return cachedState;

  cachedRaw = raw;
  if (!raw) {
    cachedState = DEFAULT_STATE;
    return cachedState;
  }
  try {
    const parsed = JSON.parse(raw);
    cachedState = {
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      decided: !!parsed.decided,
    };
  } catch {
    cachedState = DEFAULT_STATE;
  }
  return cachedState;
}

/** For useSyncExternalStore's getSnapshot. Also safe to call directly. */
export function getConsent(): ConsentState {
  return readSnapshot();
}

/**
 * For useSyncExternalStore's getServerSnapshot. Reports "decided" so the
 * banner is hidden on the server-rendered pass — for a returning visitor
 * (the common case) that avoids a flash of the banner right before it
 * disappears once the real client snapshot loads. First-time visitors still
 * see it pop in after hydration, which is normal cookie-banner behavior.
 */
export function getServerConsent(): ConsentState {
  return { analytics: false, marketing: false, decided: true };
}

/** For useSyncExternalStore's subscribe: fires on local writes and cross-tab changes. */
export function subscribeConsent(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function setConsent(choice: Omit<ConsentState, "decided">): void {
  if (typeof window === "undefined") return;
  const next: ConsentState = { ...choice, decided: true };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function hasConsent(category: ConsentCategory): boolean {
  return getConsent()[category];
}

/** Reopens the cookie preferences UI (used by the footer's "Cookie Preferences" link). */
export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
