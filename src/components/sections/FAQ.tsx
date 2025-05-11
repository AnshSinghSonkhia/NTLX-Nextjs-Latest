"use client"

import React, { useState } from 'react';
import { motion } from "motion/react";

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'Who is NexoraTLX for?',
            answer: '<a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">NexoraTLX</a> is for students, educators, professionals, and innovators across STEAM (Science, Technology, Engineering, Arts, and Mathematics) disciplines who are eager to bridge the gap between academic learning and real-world application. Whether you&apos;re a school or college student exploring your passion, a corporate team seeking upskilling in emerging technologies, or a changemaker working on R&D aligned with global sustainability goals, Nexora TLX provides the tools, mentorship, and innovation ecosystem to help you grow, create, and lead in the industries of the future.',
            open: false
        },
        {
            question: 'What makes NexoraTLX different from other learning platforms?',
            answer: 'What sets <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">Nexora TLX</a> apart from other learning platforms is its unique blend of hands-on, industry-aligned learning, cross-disciplinary innovation, and real-world problem-solving. Unlike traditional platforms that focus solely on content delivery, Nexora TLX integrates Innovation Labs, mentorship from industry experts, and project-based experiences that prepare learners for emerging careers in space tech, biotech, AI, climate tech and many more. Our programs are designed not just to teach, but to ignite curiosity, enable collaboration, and drive solutions that align with global challenges and the UN Sustainable Development Goals.',
            open: true
        },
        {
            question: 'Is this platform free?',
            answer: 'Nexora TLX offers a mix of <a href="#programs" title="" class="text-blue-600 transition-all duration-200 hover:underline">free and paid</a> programs. Many of our resources, events, and community learning opportunities are accessible at no cost to help learners explore and grow. For more advanced experiences—such as specialized courses, Innovation Lab access, certification programs, and mentorship tracks—we offer affordable, value-driven plans to support deeper learning and real-world skill development.',
            open: false
        },
        {
            question: 'What kind of programs does Nexora TLX offer?',
            answer: 'Nexora TLX offers a wide range of programs including workshops, bootcamps, certification courses, internships, innovation challenges, and mentorship series across STEAM fields. These are designed to be hands-on, industry-relevant, and aligned with future technologies.',
            open: false
        },
        {
            question: 'How can schools or colleges partner with Nexora TLX?',
            answer: 'Educational institutions can collaborate with Nexora TLX to establish Innovation Labs, integrate custom learning modules into their curriculum, and provide students with access to global mentorship and cutting-edge projects. Get in touch with our partnerships team to learn more.',
            open: false
        },
        {
            question: 'Can professionals join Nexora TLX too?',
            answer: 'Yes, professionals and corporate teams can enroll in upskilling programs tailored to emerging sectors like AI, robotics, biotech, space technology, and climate innovation. We also offer custom training modules for organizations.',
            open: false
        },
        {
            question: 'What are Innovation Labs?',
            answer: 'Innovation Labs are physical or virtual spaces created by Nexora TLX where learners and professionals collaborate, prototype ideas, conduct R&D, and build real-world solutions. These labs serve as hubs for creativity, experimentation, and entrepreneurial thinking.',
            open: false
        },
        {
            question: 'Are there certificates or credentials?',
            answer: 'Yes, participants receive certificates upon successful completion of eligible programs, which can strengthen academic portfolios or resumes and demonstrate job-ready skills.',
            open: false
        },
    ]);

    const toggleFaq = (index: number) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section id='faq' className="py-10 bg-white ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Frequently Asked{" "}
                        <span className="text-red-600">
                            Questions
                        </span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Ask anything about our products and services. 

                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn&apos;t find the answer you are looking for? <a href="#contact" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
            </div>
        </section>
    );
}

export default Faq;