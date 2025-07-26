"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";

export function Programs() {    
    const words = ["Inspire", "Drive Results", "Build Futures", "Create Impact", "Unlock Potential", "Transform Lives", "Fuel Creativity", "Empower Minds", "Ignite Passion", "Shape Tomorrow", "Shape Leaders"];

  return (
    <section id="programs" className="relative z-20 py-0 lg:py-24 max-w-7xl mx-auto -my-10 lg:-mt-60">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            {/* Our <span className="text-red-600">Programs</span> */}
            Our Programs<FlipWords className="text-red-600" words={words} />
        </h4>
        
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-xl h-96 max-w-sm mx-auto cursor-pointer bg-cover bg-center transition-transform duration-500 transform hover:scale-[1.02]"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/8197544/pexels-photo-8197544.jpeg?auto=compress&cs=tinysrgb&h=384')" }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 z-0" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h2 className="text-white text-2xl font-bold mb-2">Workshops</h2>
                <p className="text-white text-sm">
                Learn interactively with live hands-on sessions led by experts.
                </p>
            </div>
            </div>

            {/* Card2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-xl h-96 max-w-sm mx-auto cursor-pointer bg-cover bg-center transition-transform duration-500 transform hover:scale-[1.02]"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/4690299/pexels-photo-4690299.jpeg?auto=compress&cs=tinysrgb&h=384')" }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 z-0" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h2 className="text-white text-2xl font-bold mb-2">DIY Kits</h2>
                <p className="text-white text-sm">
                    Build and create with our DIY kits, designed to spark creativity and hands-on learning.
                </p>
            </div>
            </div>

            {/* Card3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-xl h-96 max-w-sm mx-auto cursor-pointer bg-cover bg-center transition-transform duration-500 transform hover:scale-[1.02]"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/8423014/pexels-photo-8423014.jpeg?auto=compress&cs=tinysrgb&h=384')" }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 z-0" />

            {/* Content */}
            <a
                id="courses"
                href="/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 p-6 h-full flex flex-col justify-end"
            >
                <h2 className="text-white text-2xl font-bold mb-2">Courses</h2>
                <p className="text-white text-sm">
                    Explore our comprehensive courses designed to enhance your skills and knowledge.
                </p>
            </a>
            </div>

            {/* Card4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-xl h-96 max-w-sm mx-auto cursor-pointer bg-cover bg-center transition-transform duration-500 transform hover:scale-[1.02]"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/8199141/pexels-photo-8199141.jpeg?auto=compress&cs=tinysrgb&h=384')" }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 z-0" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h2 className="text-white text-2xl font-bold mb-2">Mentorship</h2>
                <p className="text-white text-sm">
                    Connect with industry experts for personalized guidance and support.
                </p>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}