"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { trackEvent } from "@/lib/mixpanel";

// import { Button } from "@/components/ui/button"
// import HeroSection from "@/components/sections/HeroSection";
import { HeroSectionOne } from '../components/sections/HeroSectionOne';
// import { Features } from "@/components/sections/Features";
// import LogoCloud from '@/components/LogoCloud';
import FooterBlock from '../components/sections/Footer';
import NewsletterSubscribe from '../components/sections/NewsletterSubscribe';
import { Tertimonials } from '../components/sections/Testimonials';
import { Programs } from '../components/sections/OurPrograms';
import ContactSection from '../components/sections/ContactSection';
import InfiniteScrollingLogosAnimation from "@/components/sections/Infinite-Scrolling-Logos-Animation";
import Faq from '../components/sections/FAQ';
import { Features2 } from '../components/sections/Features2';


export default function Home() {

    useEffect(() => {
        if (sessionStorage.getItem("sonnerShown")) return;
    
        const showToast = () => {
          toast("👋 Ready to ignite your STEAM journey?", {
            description: "Explore our workshops, DIY kits & mentorship programs now!",
            action: {
              label: "View Courses",
              onClick: () => {
                trackEvent("Sonner CTA Clicked", {
                  location: "Landing Page",
                });
                window.location.href = "/courses";
              },
            },
            duration: 8000,
          });
        };
    
        // Show first toast after 8s
        const initialTimeout = setTimeout(() => {
          showToast();
        }, 16000);
    
        // Then repeat every 60s after that
        const interval = setInterval(() => {
          showToast();
        }, 184000); // every 60s
    
        // Save a flag so this runs once per session
        sessionStorage.setItem("sonnerShown", "true");
    
        // Cleanup on unmount
        return () => {
          clearTimeout(initialTimeout);
          clearInterval(interval);
        };
      }, []);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <HeroSectionOne />
        
        {/* <LogoCloud /> */}
        <InfiniteScrollingLogosAnimation />
        <Features2 />
        {/* <Features /> */}

        <Tertimonials />

        <Programs />

        <ContactSection />
        <Faq />
        <NewsletterSubscribe />
        <FooterBlock />
    </main>
  );
}
