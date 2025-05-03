"use client"

import React, { useState } from 'react';
import { motion } from "motion/react";

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'Who is NexoraTLX for?',
            answer: '<a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">NexoraTLX</a> is ideal for students, self-learners, and educators looking for a hands-on, digital-first curriculum in science, technology, engineering, arts, and mathematics (STEAM).',
            open: false
        },
        {
            question: 'What makes NexoraTLX different from other learning platforms?',
            answer: '<a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">NexoraTLX</a> combines interactive modules, real-world projects, and AI-powered experiences to make learning engaging, personalized, and future-ready.',
            open: false
        },
        {
            question: 'Is this platform free?',
            answer: 'We offer both free and premium modules. You can start learning for free and upgrade to unlock advanced features and <a href="#courses" title="" class="text-blue-600 transition-all duration-200 hover:underline">certifications</a>.',
            open: false
        },
        {
            question: 'Can educators or schools use Nexora in classrooms?',
            answer: 'Absolutely! Nexora TLX is also designed for institutional use. Educators can assign modules and track student progress.',
            open: false
        },
        {
            question: 'Will I get a certificate after completion?',
            answer: 'Yes, premium users get downloadable certificates after completing each module or track.',
            open: false
        }
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