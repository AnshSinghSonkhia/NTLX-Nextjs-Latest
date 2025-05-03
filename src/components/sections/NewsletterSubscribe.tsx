"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import React, { useState } from "react";
import { toast } from "sonner";
import { BackgroundBeams } from "../ui/background-beams";

import { trackEvent } from "@/lib/mixpanel";

const NewsletterSection = () => {

    const placeholders = [
        "yourname@youremail.com",
        "johndoe@youremail.com",
        "ansh@youremail.com",
        "kanika@youremail.com",
      ];

    const [emailInput, setEmailInput] = useState("");
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    
     
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmailInput(value);
    
        // trackEvent("Email Input Changed", {
        //   inputValue: value,
        //   section: "NewsletterSection",
        // });
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidEmail(emailInput)) {
            toast.error("⚠️ Please enter a valid email address.");
            return;
        }

        trackEvent("Newsletter Form Submitted", {
            inputValue: emailInput,
            placeholderUsed: placeholders[currentPlaceholderIndex],
            section: "NewsletterSection",
        });

        try {
            const res = await fetch(
              process.env.NEXT_PUBLIC_NEWSLETTER_API_URL || "",
              {
                method: "POST",
                body: new URLSearchParams({ email: emailInput }),
              }
            );
        
            if (res.ok) {
              toast.success("🎉 Successfully subscribed!");
              setEmailInput("");
            } else {
              toast.error("❌ Failed to subscribe. Try again later.");
            }
          } catch (err) {
            console.error("Newsletter Error:", err);
            toast.error("🚨 Network error. Please try again.");
          }
    };

return (
    <section className="bg-[#e50914] py-16 px-5 relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center gap-10">
        
        {/* Top Text Block */}
        <div className="w-full text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
            Join the largest <br /> STEAM Education Revolution
          </h2>
        </div>
  
        {/* Bottom Email Input Block */}
        <div className="w-full">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
  
      </div>
      <BackgroundBeams />
      <BackgroundBeams />
      <BackgroundBeams />
      <BackgroundBeams />
      <BackgroundBeams />
      <BackgroundBeams />
    </section>
);
  
};

export default NewsletterSection;
