// Google Analytics 4 configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log page views
export const pageview = (url: URL) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Log specific events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Property-specific events
export const trackPropertyView = (propertyId: string, propertyName: string) => {
  event('view_property', 'properties', `${propertyId}-${propertyName}`);
};

export const trackBrochureDownload = (propertyId: string, propertyName: string) => {
  event('download_brochure', 'properties', `${propertyId}-${propertyName}`);
};

export const trackVideoView = (propertyId: string, propertyName: string) => {
  event('view_video', 'properties', `${propertyId}-${propertyName}`);
};

export const trackContactFormSubmission = (source: string) => {
  event('form_submission', 'contact', source);
};

export const trackSearch = (searchTerm: string) => {
  event('search', 'search', searchTerm);
};