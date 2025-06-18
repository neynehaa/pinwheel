// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Quick Links data
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Category", href: "/category" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Contact", href: "/contact" }
  ];

  // Social media icons (using image files)
  const socialIcons = [
    { name: "Facebook", src: "/icons/facebook.svg", href: "#", width: 20, height: 20 },
    { name: "Twitter", src: "/icons/twitter.svg", href: "#", width: 20, height: 20 },
    { name: "Instagram", src: "/icons/instagram.svg", href: "#", width: 20, height: 20 },
    { name: "LinkedIn", src: "/icons/linkedin.svg", href: "#", width: 20, height: 20 }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/icons/pinwheel-logo.png" 
                alt="Pinwheel Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h2 className="text-2xl font-bold text-white">Pinwheel</h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing.
            </p>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white mb-3">Socials</h3>
              <div className="flex space-x-4">
                {socialIcons.map((icon, index) => (
                  <a 
                    key={index} 
                    href={icon.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={icon.name}
                  >
                    <Image 
                      src={icon.src}
                      alt={icon.name}
                      width={icon.width}
                      height={icon.height}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
              <div className="flex items-center mt-4">
                <Image 
                  src="/icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <a 
                  href="mailto:themefisher@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  themefisher@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="h-px bg-gray-700 w-16"></div>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Location & Contact</h3>
            <div className="h-px bg-gray-700 w-16"></div>
            <address className="not-italic text-gray-400 space-y-2">
              <div className="flex items-start">
                <Image 
                  src="/icons/location.svg" 
                  alt="Location"
                  width={16}
                  height={16}
                  className="mr-2 mt-1"
                />
                <p>2IB Thornridge Cir. Syracuse, Connecticut 35624</p>
              </div>
              <div className="flex items-center">
                <Image 
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <p>(704) 555-0127</p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>Designed And Developed by Themefisher | Distributed by Themewagon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;