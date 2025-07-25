"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Tertimonials() {
    const words = ["Students", "Parents", "Professors", "Teachers"];

    const leadersTestimonials = [
        {
          quote:
            "From Rockets in Russia to Real Impact: The Student Journey that Sparked Nexora TLX",
          name: "Mr. Aditya Bargaje",
          designation: "Propulsion Engineer",
          src: "/avatar/child3.png",
          video: "https://www.youtube.com/embed/1hUuB2jBeJU?controls=1&autoplay=0&mute=0&modestbranding=1&rel=0",
        },
        {
          quote:
            "From Dreams to the Cosmos: Yaswini's Russia Space Workshop Experience",
          name: "Yashwini Sharma",
          designation: "Final Year Student, Aerospace Engineering (MIT ADT University, Pune)",
          src: "/avatar/child3.png",
          video: "https://www.youtube.com/embed/yN2JEOV2cjA?controls=1&autoplay=0&mute=0&modestbranding=1&rel=0",
        },
        {
          quote:
            "Voices of Impact: People on Kanika Aggarwal’s Vision for Nexora TLX",
          name: "Mr. Jonathan",
          designation: "Euthopia",
          src: "/avatar/child3.png",
          video: "https://www.youtube.com/embed/HUKD3nqHJ_4?controls=1&autoplay=0&mute=0&modestbranding=1&rel=0",
        },
        {
          quote:
            "This testimonial highlights the real impact Nexora TLX is creating – empowering students, educators, and innovators to bridge the gap between education and industry.",
          name: "Mr. Naeem Tirmizi",
          designation: "National Chairman of Global Excellence Forum and MD Elite Group",
          src: "/avatar/child3.png",
          video: "https://www.youtube.com/embed/eIKyCTHGiAE?controls=1&autoplay=0&mute=0&modestbranding=1&rel=0",
        },
        {
          quote:
            "Why Kanika Aggarwal Inspires Us | Nexora TLX Founder Testimonial",
          name: "Dr. Ruchi Singla",
          designation: "Founder & CEO, RASIntellect Pvt. Ltd.",
          src: "/avatar/child3.png",
          video: "https://www.youtube.com/embed/2BBDp8o-lRo?controls=1&autoplay=0&mute=0&modestbranding=1&rel=0",
        },
    ];
    // {
    //   quote:
    //     "Their interactive AI modules are groundbreaking. This is the future of tech-driven learning in India.",
    //   name: "Dr. Shikha Rao",
    //   designation: "PhD in Satellite Technology",
    //   src: "/avatar/NewUser1.png",
    // },
    // {
    //   quote:
    //     "We're proud to collaborate on a solution that’s not just smart, but socially impactful. True innovation starts here.",
    //   name: "Dr. Ritu Sharma",
    //   designation: "Advisor, Ministry of Education, Govt. of India",
    //   src: "/avatar/new2.png",
    // },
      

  return (
    <section id="testimonials" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto lg:-mt-48">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            What <FlipWords className="text-red-600" words={words} />Say About Us
        </h4>
        
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden -py-16">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
        

        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            What <span className="text-red-600">Leaders</span> in Education & Innovation <span className="text-red-600">Say</span>
        </h4>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <AnimatedTestimonials testimonials={leadersTestimonials} autoplay={false}  />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
    {
      quote:
        "Nexora TLX completely changed how my son sees science. He’s now building small robots at home thanks to their DIY Kits!",
      name: "Mrs. Meena Sharma",
      title: "Parent of Grade 7 Student",
    },
    {
      quote:
        "The mentorship program helped me explore AI and robotics in ways school never did. I even created my first prototype!",
      name: "Riya Patil",
      title: "Student, Grade 10",
    },
    {
      quote:
        "As a physics professor, I was deeply impressed by how Nexora TLX blends theory and hands-on learning. Their kits are not toys—they're tools for real learning.",
      name: "Dr. Anil Deshmukh",
      title: "Professor of Physics, IIT Bombay",
    },
    {
      quote:
        "We saw a visible increase in student engagement during and after Nexora's workshop. Concepts that once seemed abstract now come alive.",
      name: "Mrs. Kavitha Menon",
      title: "STEM Teacher, Delhi Public School",
    },
    {
      quote:
        "The best part of Nexora TLX is how they treat every learner like a future innovator. Their mentors genuinely care.",
      name: "Aarav Khanna",
      title: "Student, Grade 11",
    },
    {
      quote:
        "Our daughter built a working model of a smart irrigation system after just one Nexora workshop. It’s amazing!",
      name: "Rajeev & Pooja Verma",
      title: "Parents of a Grade 8 Student",
    },
    {
      quote:
        "I collaborated with Nexora TLX to integrate their kits into our curriculum. The results were outstanding—hands-on learning increased retention dramatically.",
      name: "Prof. Shalini Dey",
      title: "HOD, STEM Curriculum, Mumbai University",
    },
    {
      quote:
        "I used to think coding was hard. Nexora’s bootcamp made it fun and simple. Now I'm building my own websites!",
      name: "Ishaan Singh",
      title: "Student, Grade 9",
    },
    {
      quote:
        "Thanks to Nexora TLX, my child spends less time on video games and more on building circuits and experimenting. It’s a win-win!",
      name: "Sakshi Mehra",
      title: "Parent",
    },
    {
      quote:
        "Their DIY kits are not just educational—they spark curiosity. I use them in my classroom, and my students love it.",
      name: "Mr. Rakesh Nair",
      title: "Middle School Science Teacher",
    },
  ];
