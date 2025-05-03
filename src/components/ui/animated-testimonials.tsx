"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // 1) Start with all zeros so SSR = client initial
  const [rotateValues, setRotateValues] = useState<number[]>(
    () => testimonials.map(() => 0)
  );

  // 2) After mount, generate random rotations
  useEffect(() => {
    const values = testimonials.map(
      () => Math.floor(Math.random() * 21) - 10
    );
    setRotateValues(values);
  }, [testimonials]);

  useEffect(() => {
    if (!autoplay) return;
    const iv = setInterval(handleNext, 6000); // slowed autoplay interval
    return () => clearInterval(iv);
  }, [autoplay]);

  const isActive = (i: number) => i === active;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* image stack */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  translateZ: -100,
                  rotateY: rotateValues[i],
                }}
                animate={{
                  opacity: isActive(i) ? 1 : 0.7,
                  scale: isActive(i) ? 1 : 0.95,
                  translateZ: isActive(i) ? 0 : -100,
                  rotateY: isActive(i) ? 0 : rotateValues[i],
                  zIndex: isActive(i)
                    ? 40
                    : testimonials.length + 2 - i,
                  y: isActive(i) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  translateZ: 100,
                  rotateY: rotateValues[i],
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }} // slower card transition
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={t.src}
                  alt={t.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* text & controls */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }} // slightly slower text transition
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((w, idx) => (
                <motion.span
                  key={idx}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3, // slower word fade-in
                    ease: "easeInOut",
                    delay: 0.03 * idx, // increased delay per word
                  }}
                  className="inline-block"
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
