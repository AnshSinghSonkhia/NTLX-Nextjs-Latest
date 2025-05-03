import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

// Logo Data
const CompanyLogoData: Array<{ src: string; alt: string }> = [
  { src: "/brands/Arduino.svg", alt: "Arduino" },
  { src: "/brands/CBSE.svg", alt: "CBSE" },
  { src: "/brands/ClaudeAi.svg", alt: "Claude AI" },
  { src: "/brands/Coursera.svg", alt: "Coursera" },
  { src: "/brands/edX.svg", alt: "edX" },
  { src: "/brands/ISRO.svg", alt: "ISRO" },
  { src: "/brands/KhanAcademy.svg", alt: "Khan Academy" },
  { src: "/brands/NASA.svg", alt: "NASA" },
  { src: "/brands/Notion.svg", alt: "Notion" },
  { src: "/brands/RaspberryPi.png", alt: "Raspberry Pi" },
  { src: "/brands/SchoolAi.svg", alt: "SchoolAi" },
  { src: "/brands/ScratchFoundation.svg", alt: "Scratch Foundation" },
  { src: "/brands/Tinkercad.svg", alt: "Tinkercad" },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-xl font-semibold text-gray-700 mb-8">
        {/* Trusted by the world&apos;s most innovative companies */}
        Inspired by the World&apos;s Leading Innovators in Tech & Education
      </h2>

      <div className="relative overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
        
        {/* Right Gradient */}
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none" />

        <motion.div
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          className="flex flex-nowrap gap-16 pr-16"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {CompanyLogoData.map(({ src, alt }) => (
                <div key={alt} className="flex items-center justify-center flex-none">
                  <Image
                    src={src}
                    alt={alt}
                    width={120}
                    height={60}
                    className="object-contain h-12 w-auto"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteScrollingLogosAnimation;
