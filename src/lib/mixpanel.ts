// lib/mixpanel.ts
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";

if (!MIXPANEL_TOKEN && process.env.NODE_ENV === "production") {
    throw new Error("Mixpanel token is missing!");
  }
  

let isInitialized = false;

export const initMixpanel = () => {
    if (typeof window === "undefined" || isInitialized) return;

    mixpanel.init(MIXPANEL_TOKEN, {
      debug: true,
      persistence: "localStorage",
      track_pageview: false,
    });
  
    isInitialized = true;
};

export const trackEvent = (event: string, props?: Record<string, any>) => {
    initMixpanel();
    mixpanel.track(event, props);
};
  
  export const identifyUser = (userId: string) => {
    initMixpanel();
    mixpanel.identify(userId);
};
  
  export const setUserProperties = (props: Record<string, any>) => {
    initMixpanel();
    mixpanel.people.set(props);
};
