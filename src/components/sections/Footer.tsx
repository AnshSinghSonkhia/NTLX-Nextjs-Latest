"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import ElasticLine from "@/fancy/components/physics/elastic-line"
import Image from "next/image";

// Update FooterItemProps to include optional target
interface FooterItemProps {
  text: string;
  link: string;
  target?: string;
}

const FooterItem = ({ text, link, target }: FooterItemProps) => {
  return (
    <li>
      <Link href={link} target={target} className="duration-200 hover:text-red-600">
        {text}
      </Link>
    </li>
  )
}

// Update FooterBlockItemProps accordingly
interface FooterBlockItemProps {
  title: string;
  items: FooterItemProps[];
}

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <FooterItem key={index} {...item} />
        ))}
      </ul>
    </div>
  )
}

// The footerBlocks array
const footerBlocks = [
  {
    id: 1,
    title: "Courses",
    items: [
      { text: "Web development", link: "#" },
      { text: "Robotics", link: "#" },
      { text: "UI/UX Designing", link: "#" },
      { text: "Drone Programming", link: "#" },
      { text: "AI Programming", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Company",
    items: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "#contact" },
      { text: "Career", link: "#" },
      { text: "Programs", link: "#programs" },
      { text: "Workshops", link: "#programs" },
      { text: "DIY Kits", link: "#programs" },
    ],
  },
  {
    id: 3,
    title: "Social",
    items: [
      { text: "Twitter X", link: "#" },
      { text: "LinkedIn", link: "https://www.linkedin.com/company/nexora-tlx/", target: "_blank" },
      { text: "Facebook", link: "#" },
      { text: "YouTube", link: "https://www.youtube.com/channel/UCFcwNbXBGith5nL1MNantEA", target: "_blank" },
      { text: "Instagram", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    items: [
      { text: "Blog", link: "/blog" },
      { text: "Privacy Policy", link: "/privacy-policy" },
      { text: "Terms & Conditions", link: "/privacy-policy" },
      { text: "FAQ", link: "#faq" },
      { text: "Support", link: "#contact" },
    ],
  },
]

const FooterBlock = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-400 relative mx-auto -mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
            <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16">
                <div className="border-t border-t-gray-700 py-10 md:py-16 lg:py-20 flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-16 w-full">
                    {/* Left Logo and Text Section */}
                    <div className="w-full lg:w-1/4 space-y-6 text-center lg:text-left">
                        <Link href="#">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <Image
                                    src="/bglessLogo.png"
                                    alt="Nexora TLX Logo"
                                    width={40}
                                    height={40}
                                    className="h-10 object-contain"
                                />
                                <h1 className="text-base font-bold md:text-2xl text-white">Nexora TLX</h1>
                            </div>
                        </Link>
                        <p className="max-w-md text-gray-400 mt-4 mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                            A Flagship Venture by Terraluxe - Shaping The Future of STEAM Education
                        </p>
                    </div>

                    {/* Footer Navigation Links */}
                    <nav className="w-full flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                        {footerBlocks.map((footerBlock) => (
                            <FooterBlockItem key={footerBlock.id} title={footerBlock.title} items={footerBlock.items} />
                        ))}
                    </nav>
                </div>

                {/* Elastic Animated Line */}
                <ElasticLine
                    releaseThreshold={50}
                    strokeWidth={1}
                    className="-mt-4 md:-mt-20 lg:-mt-28"
                    animateInTransition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        delay: 0.15,
                    }}
                />
            </div>

            {/* Bottom Copyright */}
            <div className="py-4 mt-0.5 md:-mt-14">
                <div className="max-w-3xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex justify-center text-center">
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                        © 2025 Nexora TLX (A Flagship Venture by Terraluxe) | Copyrights and all rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterBlock
