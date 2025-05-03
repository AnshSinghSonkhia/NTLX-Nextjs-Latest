// src/components/providers/MixpanelProvider.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { initMixpanel, trackEvent } from "@/lib/mixpanel";

export default function MixpanelProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    if (pathname) {
      trackEvent("Page Viewed", { pathname });
    }
  }, [pathname]);

  return <>{children}</>;
}
