'use client';

import Link from "next/link";
import Image from "next/image";
import { Poppins } from 'next/font/google';
import { useState } from "react";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownLinks = [
        { href: "/page1", label: "Career" },
        { href: "/page2", label: "Career Single" },
        { href: "/page3", label: "Integrations" },
        { href: "/page4", label: "Integration Single" },
        { href: "/page5", label: "Pricing" },
        { href: "/page6", label: "Change Logs" },
    ];

    const navbarLink = [
        { href: "/", label: "Home", className: "underline decoration-orange-600 decoration-2 underline-offset-8 transition duration-200" },
        { href: "/about", label: "About", className: "" },
        { href: "/blog", label: "Blog", className: "" },
        { href: "/features", label: "Features", className: "" },
        { href: "/works", label: "Works", className: "" },
    ];

    return (
        <header className={`mt-3 relative z-20 px-6 py-4 flex justify-between items-center ${poppins.className}`}>


            <div className=" z-[-10] w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] absolute top-0 right-0">
  <Image
    src="/circle.svg"
    alt="Half Circle"
    fill
    className="object-contain rounded-full translate-x-[33%] -translate-y-1/4 rotate-[66deg]"
  />
</div>



            <div className="flex items-center z-10">
                <Image src="/logo.svg" alt="Pinwheel Logo" width={150} height={150} />
            </div>


            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden z-20 text-2xl text-black"
            >
                ☰
            </button>


            <nav className="hidden md:flex items-center space-x-8 ml-8 z-10">
                {navbarLink.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`hover:text-orange-600 ${item.className}`}
                    >
                        {item.label}
                    </Link>
                ))}


                <div className="relative group">
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 text-gray-900 hover:text-orange-600 focus:outline-none"
                    >
                        Pages
                        <svg
                            className="-mr-1 size-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="absolute left-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg border border-orange-500 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            {dropdownLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Link href="/contact" className="hover:text-orange-600">Contact</Link>
            </nav>


            <Link
                href="/signup"
                className="hidden md:inline-block ml-4 bg-white rounded-full px-5 py-2 hover:bg-blue-50 z-10"
            >
                Sign up now
            </Link>


            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-t z-30 flex flex-col items-start px-6 py-4 md:hidden shadow-lg">
                    {navbarLink.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="py-2 text-gray-800 hover:text-orange-600 w-full border-b"
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
                                className="block pl-4 py-1 text-gray-600 hover:text-orange-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="py-2 text-gray-800 hover:text-orange-600 w-full border-b"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/signup"
                        className="mt-2 bg-white-600 text-white rounded-full px-5 py-2 font-semibold hover:700 text-sm w-full text-center outline-none focus:outline-none"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign up now
                    </Link>

                </div>
            )}
        </header>
    );
}
