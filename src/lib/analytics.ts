import ReactGA from 'react-ga4';

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-EYPE2WBGNL';

// Initialize Google Analytics
export const initializeGA = () => {
  // Only initialize if we have consent
  if (typeof window !== 'undefined') {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      testMode: false, // Set to false to send real data to GA4
      gtagOptions: {
        debug_mode: import.meta.env.DEV,
        send_page_view: true,
      },
    });
    
    console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
    console.log('Test mode:', false);
    console.log('Debug mode:', import.meta.env.DEV);
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (hasAnalyticsConsent()) {
    // Use ReactGA
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    });
    
    // Also use native gtag as fallback
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: path,
      });
    }
    
    console.log('Page view tracked:', path, title);
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (hasAnalyticsConsent()) {
    // Use ReactGA
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
    
    // Also use native gtag as fallback
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    
    console.log('Event tracked:', { action, category, label, value });
  }
};

// Specific event tracking functions
export const trackContactFormSubmission = (formData?: any) => {
  trackEvent('form_submit', 'Contact', 'Contact Form Submission', 1);
};

export const trackBookMeetingClick = (location?: string) => {
  trackEvent('cta_click', 'Engagement', `Book Meeting - ${location || 'Unknown'}`, 1);
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('page_view', 'Services', `Service Page - ${serviceName}`, 1);
};

export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'Engagement', `${ctaName} - ${location}`, 1);
};

// Cookie consent management
export const setAnalyticsConsent = (consent: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('analytics_consent', consent.toString());
    
    if (consent) {
      // Initialize GA if consent is given
      initializeGA();
    }
  }
};

export const hasAnalyticsConsent = (): boolean => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('analytics_consent');
    return consent === 'true';
  }
  return false;
};

export const getAnalyticsConsentStatus = (): 'granted' | 'denied' | 'unknown' => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('analytics_consent');
    if (consent === 'true') return 'granted';
    if (consent === 'false') return 'denied';
  }
  return 'unknown';
};

// Clear analytics data (for privacy compliance)
export const clearAnalyticsData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('analytics_consent');
    // Clear any GA cookies if needed
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }
};

// Debug function for development
export const debugAnalytics = () => {
  if (import.meta.env.DEV) {
    console.log('Analytics Debug Info:', {
      consentStatus: getAnalyticsConsentStatus(),
      hasConsent: hasAnalyticsConsent(),
      measurementId: GA_MEASUREMENT_ID,
      environment: import.meta.env.MODE,
    });
  }
};
