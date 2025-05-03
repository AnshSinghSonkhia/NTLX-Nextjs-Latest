"use client";

import { useEffect } from "react";
import Link from 'next/link';
import { trackEvent, initMixpanel } from "@/lib/mixpanel";
import { motion } from "motion/react";
import AvatarGroup from '@/components/AvatarGroup';
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
// import { StickyBanner } from "@/components/ui/sticky-banner";

import Image from "next/image";
import { HomeNavbar } from "./Navbar";

export function HeroSectionOne() {
  return (
    // <section className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
    <section className="relative mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-center px-4">

            {/* <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
                <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
                🎉 Nexora TLX Summer Internship Applications are Live!{" "}
                    <a href="#contact" className="transition duration-200 hover:underline">
                        Read announcement
                    </a>
                </p>
            </StickyBanner> */}
      <HomeNavbar />
      {/* <Navbar /> */}
      <Spotlight />
    
      <div className="px-4 py-10 md:py-20">
      
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-[#0A0A0A] md:text-4xl lg:text-7xl ">
          {"Shaping the Future, One Student at a Time"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          {/* With Nexora TLX, students don’t just learn—they build, innovate, and lead. Dive into hands-on STEAM experiences powered by real-world tech, global mentors, and future-ready skills. */}
          Nexora TLX is the premier STEAM education initiative by Terraluxe, dedicated to empowering students through hands-on learning, real-world tech, and global mentorship.
          {/* From robotics and AI to drone programming and design thinking, we’re redefining how the next generation learns, builds, and leads. */}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
                className="w-60 transform rounded-lg bg-[#0A0A0A] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    trackEvent("Clicked Explore Programs Btn", {
                        section: "Hero",
                    });

                    // Scroll to Programs section
                    const target = document.getElementById("programs");
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }}
            >
            Explore Programs
          </button>
          <button
                className="w-60 transform rounded-lg bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer"
                onClick={() => {
                    trackEvent("Clicked Testimonials Btn", {
                        section: "Hero",
                    });

                    // Scroll to Testimonials section
                    const target = document.getElementById("testimonials");
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }}
            >
            Testimonials
          </button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="relative z-10 mt-8 p-0"
        >   
            <AvatarGroup />
        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: 1.2 }}
  className="relative z-10 mt-20 p-0"
>
    
  <div className="w-full overflow-hidden rounded-md">
    <Image
      src="/heroimage.png"
      alt="Nexora students building robots"
      className="aspect-[16/9] h-auto w-full object-cover"
      height={1000}
      width={1000}
    />
  </div>
</motion.div>
      </div>
    </section>
  );
}

const Navbar = () => {
    return (
      <nav className="flex w-full items-center justify-between py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" /> */}
        <Image
            src="/bglessLogo.png"
            alt="Nexora TLX Logo"
            className="h-10 object-contain"
            width={40}
            height={40}
            onClick={() =>
                trackEvent("Clicked Logo", { location: "Navbar - Hero Section" })
              }
        />
          <h1 className="text-base font-bold md:text-2xl">Nexora TLX</h1>
        </div>
  
        {/* Middle: Navigation Links */}
        <div className="hidden gap-8 md:flex">
          {["Courses", "Programs", "Blog", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
              className="text-lg font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
              onClick={() => trackEvent(`Navbar Click - ${item}`, { section: "Hero" })}
            >
              {item}
            </Link>
          ))}
        </div>


        {/* Right: Button */}
        <button
            className="w-20 transform rounded-lg bg-[#0A0A0A] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 md:px-6 md:py-2 md:text-base dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer"
            onClick={() => {
            trackEvent("Clicked Contact Btn", { location: "Navbar - Hero Section" });

            // Scroll to Programs section
            const target = document.getElementById("contact");
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            }}
        >
          Contact
        </button>
      </nav>
    );
  };
  
