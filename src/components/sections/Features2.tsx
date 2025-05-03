"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import createGlobe from "cobe";
import { FlipWords } from "@/components/ui/flip-words";
// import { ThreeDMarquee } from "@/components/ui/3d-marquee";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconStretching,
  IconBrain,
  IconBrandYoutubeFilled,
  IconPlaneDeparture,
  IconSquareRoundedCheckFilled,
  IconCrystalBall,
} from "@tabler/icons-react";

import { trackEvent } from "@/lib/mixpanel";

export function Features2() {
    const words = ["TLX", "Transform", "Learning", "Explore"];

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
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
      </div>
    </section>
  );
}


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

  const SkeletonOne = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg flex-col space-y-2 overflow-hidden"
        >
            <div className="relative w-full h-full">
                <Image
                    src="/workshop/img1.png"
                    alt="header"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                />
            </div>
        </motion.div>
    );
  };

  const SkeletonTwo = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg flex-col space-y-2 overflow-hidden"
        >
            <div className="relative w-full h-full">
                <Image
                    src="/blogPics/12.png"
                    alt="header"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                />
            </div>
        </motion.div>
    );
  };

  const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg flex-col space-y-2 overflow-hidden"
        >
            <div className="relative w-full h-full">
                <Image
                    src="/futureReady.png"
                    alt="header"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                />
            </div>
        </motion.div>
    );
  };

  const SkeletonFour = () => {
    const first = {
      initial: {
        x: 20,
        rotate: -5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    const second = {
      initial: {
        x: -20,
        rotate: 5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <img
            src="/avatar/child1.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 object-cover"
          />
          <p className="sm:text-sm text-xs text-center font-medium text-neutral-500 mt-0">
            Built a plant-watering robot. Mom calls me a genius now.
          </p>
          <p className="border border-fuchsia-500-500 bg-fuchsia-100 dark:bg-fuchsia-900/20 text-fuchsia-600 text-xs rounded-full px-2 py-0.5 mt-2">
            Junior Inventor
          </p>
        </motion.div>
        <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
          <img
            src="/avatar/child3.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 object-cover"
          />
          <p className="sm:text-sm text-xs text-center font-medium text-neutral-500 mt-0">
            Thought coding was boring—then I made a drone flip!
          </p>
          <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-2">
          Ex-Bored Teen
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <img
            src="/avatar/child2.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 object-cover"
          />
          <p className="sm:text-sm text-xs text-center font-medium text-neutral-500 mt-2">
            I Made an AI. Now I feel like I&apos;m Iron Man.
          </p>
          <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-2">
          Future Data Scientist
          </p>
        </motion.div>
      </motion.div>
    );
  };

  const SkeletonFive = () => {
    const variants = {
      initial: {
        x: 0,
      },
      animate: {
        x: 10,
        rotate: 5,
        transition: {
          duration: 0.2,
        },
      },
    };
    const variantsSecond = {
      initial: {
        x: 0,
      },
      animate: {
        x: -10,
        rotate: -5,
        transition: {
          duration: 0.2,
        },
      },
    };
   
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <motion.div
          variants={variants}
          className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
        >
          <img
            src="/avatar/NewUser1.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 object-cover"
          />
          <p className="text-xs text-neutral-500">
          There are many exciting technologies out there—AI, robotics, drones, and more—that can change how you learn, build, and think.
          </p>
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-[80%] ml-auto bg-white dark:bg-black"
        >
          <p className="text-xs text-neutral-500">At NexoraTLX, we help you master them.</p>
          <img
            src="/bglessLogo.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-8 w-8"
          />
        </motion.div>
      </motion.div>
    );
  };

  const SkeletonSix = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    const handleClick = () => {
          trackEvent("Clicked YouTube Video", {
            source: "SkeletonSix - Features",
            destination: "https://www.youtube.com/watch?v=w7exoN1dDEk",
          });
        };

    return (
        <a
            href="https://www.youtube.com/watch?v=w7exoN1dDEk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg flex-col space-y-2 overflow-hidden relative group/image"
            onClick={handleClick}
        >
            <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
                    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
                    <Image
                        src="/aboutToYt.png"
                        alt="header"
                        width={1920}
                        height={1080}
                        className="h-full w-full object-cover rounded-xl group-hover/image:blur-md transition-all duration-200"
                    />
                </div>
            </div>
        </a>
    );
  };

  const SkeletonSeven = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg flex-col space-y-2 overflow-hidden"
        >
            <div className="relative w-full h-full">
                <Globe className="absolute top-0 left-0 w-1/2 h-1/2 object-cover" />
            {/* <Meteors number={60} /> */}
                <Image
                    src="/tunnel.png"
                    alt="mentorship"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover rounded-xl group-hover/image:blur-md transition-all duration-200"
                />
            </div>
        </motion.div>
    );
};

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "Holistic Learning Approach",
      description: "An approach integrating arts with science for a well-rounded education.",
      header: <SkeletonOne />,
      icon: <IconSquareRoundedCheckFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hands On Learning",
      description: "We offer practical projects that enhance problem solving and innovation.",
      header: <SkeletonTwo />,
      icon: <IconStretching className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Future-Ready Skills",
      description: "Equipping students with skills for tomorrow’s industries",
      header: <SkeletonThree />,
      icon: <IconCrystalBall className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Curiosity",
      description:
        "See what happens when young minds explore STEAM with hands-on learning, mentorship, and imagination.",
      header: <SkeletonFour />,
      icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spark of Innovation",
      description: "Join India's youth in building a smarter, bolder, tech-powered future.",
      header: <SkeletonFive />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Know more about us on YouTube",
      description: "Learn more about our workshops, DIY Kits, Internships, Curriculums.",
      header: <SkeletonSix />,
      icon: <IconBrandYoutubeFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Get Mentorship from Industry Experience Trainers",
      description: "Learn from Aerospace Engineers, AI specialists, and industry leaders. We have a team of experts who are passionate about teaching and mentoring students.",
      header: <SkeletonSeven />,
      icon: <IconPlaneDeparture className="h-4 w-4 text-neutral-500" />,
    },
  ];

  //

  