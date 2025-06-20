"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import CustomButton from "../button/CustomButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const navbarLinks = [
  {
    href: "/",
    label: "Home",
    className:
      "underline decoration-orange-600 decoration-2 underline-offset-8 transition duration-200",
  },
  { href: "/about", label: "About", className: "" },
  { href: "/blog", label: "Blog", className: "" },
  { href: "/features", label: "Features", className: "" },
  { href: "/works", label: "Works", className: "" },
];

const dropdownLinks = [
  { href: "/page1", label: "Career" },
  { href: "/page2", label: "Career Single" },
  { href: "/page3", label: "Integrations" },
  { href: "/page4", label: "Integration Single" },
  { href: "/page5", label: "Pricing" },
  { href: "/page6", label: "Change Logs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-70 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-7"
      } ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="-ml-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={90}
            height={44}
            className="w-20 h-auto sm:w-24 md:w-28 lg:w-32"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          {navbarLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-gray-900 hover:text-orange-600 transition-colors ${item.className}`}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-900 hover:text-orange-600 transition-colors">
              Pages
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg border border-orange-500 hidden group-hover:block">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {dropdownLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-gray-900 hover:text-orange-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:inline-block">
          <CustomButton label="Sign Up Now" href="/signup" variant="primary" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 p-2 z-20"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`absolute top-full left-0 w-full bg-white border-t z-30 flex flex-col items-start px-6 py-4 md:hidden shadow-lg transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {navbarLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-gray-800 hover:text-orange-600 w-full border-b transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="py-2 w-full border-b">
            <span className="font-semibold text-gray-700">Pages</span>
            {dropdownLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block pl-4 py-1 text-gray-600 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="py-2 text-gray-800 hover:text-orange-600 w-full border-b transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <div className="w-full mt-4 mb-2" onClick={() => setIsOpen(false)}>
            <CustomButton label="Sign Up Now" href="/signup" variant="mobile" />
          </div>
        </div>
      </div>
    </header>
  );
}