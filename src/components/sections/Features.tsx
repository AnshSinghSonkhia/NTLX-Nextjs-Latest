"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import { FlipWords } from "@/components/ui/flip-words";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

import { trackEvent } from "@/lib/mixpanel";

export function Features() {
    const words = ["TLX", "Transform", "Learning", "Explore"];

  const features = [
    {
      title: "Holistic Learning Approach",
      description: "An approach integrating arts with science for a well-rounded education.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Hands On Learning - Previous Workshops",
      description: "We offer practical projects that enhance problem solving and innovation.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-4 border-b dark:border-neutral-800",
    },
    {
      title: "Know more about us on YouTube",
      description: "Watch our YouTube channel to learn more about us and our workshops, DIY Kits, Internships, Curriculums.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Get Mentorship from Industry Expert Trainers",
      description: "Learn from Aerospace Engineers, AI specialists, and industry leaders. We have a team of experts who are passionate about teaching and mentoring students.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <section id="about" className="relative z-20 pb-10 pt-5 lg:py-40 max-w-7xl mx-auto mt-20 lg:-mt-20">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          We&apos;re Nexora<FlipWords className="text-red-600" words={words} />
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        A Flagship Venture by Terraluxe - Shaping the future of STEAM education.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable card layout
const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>{children}</div>
);

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => (
  <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
    {children}
  </p>
);

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500 font-normal dark:text-neutral-300 my-2">
    {children}
  </p>
);

export const SkeletonOne = () => (
  <div className="relative flex py-8 px-2 gap-10 h-full">
    <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
    <div className="flex flex-1 w-full h-full flex-col space-y-2">
      <Image src="/workshop/img1.png" alt="header" width={800} height={800} className="h-full w-full aspect-square object-cover rounded-sm" />
    </div>
    </div>
    <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent pointer-events-none" />
    <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent pointer-events-none" />
  </div>
);

export const SkeletonThree = () => {
    const handleClick = () => {
      trackEvent("Clicked YouTube Video", {
        source: "SkeletonThree - Features",
        destination: "https://www.youtube.com/watch?v=w7exoN1dDEk",
      });
    };
  
    return (
      <a
        href="https://www.youtube.com/watch?v=w7exoN1dDEk"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex gap-10 h-full group/image"
        onClick={handleClick}
      >
        <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
            <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
            <Image
              src="/heroimage.png"
              alt="header"
              width={800}
              height={800}
              className="h-full w-full aspect-square object-cover rounded-sm group-hover/image:blur-md transition-all duration-200"
            />
          </div>
        </div>
      </a>
    );
  };

export const SkeletonFour = () => (
  <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
    <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
  </div>
);

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => globe.destroy();
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }} />;
};

export const SkeletonTwo = () => {
  const images = [
    "/workshop/sw1.jpg",
    "/workshop/sw2.jpg",
    "/workshop/sw5.jpg",
    "/workshop/sw3.jpg",
    "/workshop/sw4.jpg",
    "/workshop/sw1.jpg",
    "/workshop/sw2.jpg",
    "/workshop/sw5.jpg",
    "/workshop/sw3.jpg",
    "/workshop/sw4.jpg",
    "/workshop/sw1.jpg",
    "/workshop/sw2.jpg",
    "/workshop/sw5.jpg",
    "/workshop/sw3.jpg",
    "/workshop/sw4.jpg",
    "/workshop/sw1.jpg",
    "/workshop/sw2.jpg",
    "/workshop/sw5.jpg",
    "/workshop/sw3.jpg",
    "/workshop/sw4.jpg",
    "/workshop/sw1.jpg",
    "/workshop/sw2.jpg",
    "/workshop/sw5.jpg",
    "/workshop/sw3.jpg",
    "/workshop/sw4.jpg",
    "/workshop/sw1.jpg",
    "/workshop/sw2.jpg",
    "/workshop/sw5.jpg",
    "/workshop/sw3.jpg",
    "/workshop/sw4.jpg",
  ];

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
        <ThreeDMarquee images={images} />
        <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
    </div>    
  );
};

// state to hold client-side random rotations
//   const [rotations, setRotations] = useState<number[]>([]);

//   useEffect(() => {
//     // generate rotations only on client
//     setRotations(images.map(() => Math.random() * 20 - 10));
//   }, []);
{/* <div className="flex flex-row -ml-20">
            {images.map((img, idx) => (
            <motion.div
                key={idx}
                variants={{
                whileHover: { scale: 1.1, zIndex: 100 },
                whileTap: { scale: 1.1, zIndex: 100 },
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                style={{ rotate: `${rotations[idx] ?? 0}deg` }}        >
                <div className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 border-neutral-100">
                <Image src={img} alt="bali" width={160} height={160} className="rounded-lg h-20 md:h-40 object-cover" />
                </div>
            </motion.div>
            ))}
        </div>
        <div className="flex flex-row -ml-20">
            {images.map((img, idx) => (
            <motion.div
                key={idx}
                variants={{
                whileHover: { scale: 1.1, zIndex: 100 },
                whileTap: { scale: 1.1, zIndex: 100 },
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                style={{ rotate: `${rotations[idx] ?? 0}deg` }}        >
                <div className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 border-neutral-100">
                <Image src={img} alt="bali" width={160} height={160} className="rounded-lg h-20 md:h-40 object-cover" />
                </div>
            </motion.div>
            ))}
        </div>
        <div className="flex flex-row -ml-20">
            {images.map((img, idx) => (
            <motion.div
                key={idx}
                variants={{
                whileHover: { scale: 1.1, zIndex: 100 },
                whileTap: { scale: 1.1, zIndex: 100 },
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                style={{ rotate: `${rotations[idx] ?? 0}deg` }}        >
                <div className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 border-neutral-100">
                <Image src={img} alt="bali" width={160} height={160} className="rounded-lg h-20 md:h-40 object-cover" />
                </div>
            </motion.div>
            ))}
        </div> */}