
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-TVS8C1BZCY';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: Gtag.EventNames, { event_category, event_label, value }: Gtag.EventParams) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  })
}