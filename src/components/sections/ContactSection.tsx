"use client";
import React, { useState } from "react";
import { toast } from "sonner";
// import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import {
    IconMail,
    IconMapPin,
    IconPhone,
} from "@tabler/icons-react";


// import { trackEvent } from "@/lib/mixpanel";

const ContactSection = () => {

    const features = [
        {
          title: "+91 7075581575",
          description:
            "Call us - we are available 24/7 to assist you with any queries.",
          icon: <IconPhone />,
        },
        {
          title: "info@terraluxe.in",
          description:
            "Reach out to us via email for prompt assistance and support.",
          icon: <IconMail />,
        },
        {
          title: "Hyderabad, India",
          description:
            "Visit us at our Hyderabad office for personalized assistance.",
          icon: <IconMapPin />,
        },
      ];

    return (
        <section id="contact" className="bg-white py-16 px-5 relative mx-auto mt-0 flex max-w-7xl flex-col items-center justify-center">
            <div className="w-full max-w-4xl flex flex-col items-center gap-0.5">
                
                {/* Top Text Block */}
                {/* <div className="w-full text-center">
                    <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-semibold leading-snug">
                        Contact Us
                    </h2>
                    <p className="text-[#0s0s0s] mt-2">Got questions? Reach Out — we're just a tap away!</p>
                </div> */}

                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight text-black dark:text-white font-bold">
                    Contact <span className="text-red-600">Us</span>
                </h4>
                
                <p className="text-lg lg:text-xl max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    Got questions? Reach Out — we&apos;re just a tap away!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
    
            </div>
        </section>
    );
};

export default ContactSection;

const Feature = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-red-600 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  };