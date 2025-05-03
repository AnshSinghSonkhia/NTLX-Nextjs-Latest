"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function HomeNavbar() {
  const navItems = [
    {
      name: "Programs",
      link: "/#programs",
    },
    {
        name: "Features",
        link: "/#about",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    {
        name: "About",
        link: "/about",
      },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full -mt-4">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary" onClick={() => window.location.href = '/#testimonials'}>Testimonials</NavbarButton> */}
            <NavbarButton variant="black" onClick={() => window.location.href = '/#contact'}>Talk to us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
                {/* <NavbarButton
                    variant="black"
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.location.href = '/#programs';
                    }}
                    className="w-full"
                >
                    Explore Programs
                </NavbarButton> */}
              <NavbarButton
                variant="secondary"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '/#testimonials';
                }}
                className="w-full"
              >
                Testimonials
              </NavbarButton>
              <NavbarButton
                variant="black"
                onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/#contact';
                }}
                className="w-full"
              >
                Talk to us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}