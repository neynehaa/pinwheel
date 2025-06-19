import Image from 'next/image';
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const socials = [
  { src: '/fb.svg', alt: 'Facebook' },
  { src: '/icons/twitter.png', alt: 'Twitter' },
  { src: '/link.svg', alt: 'LinkedIn' },
  { src: '/skype.svg', alt: 'Skype' },
];

const quickLinks = ['About', 'Category', 'Testimonial', 'Contact'];

const Footer = () => {
  return (
    <footer className={`mt-80 bg-gray-200 text-gray-700 pt-16 pb-16 px-6 ${poppins.className}`}>


      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
         
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/logo.svg" 
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
            />
            <span className="text-3xl font-bold text-black"></span>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus,
            sed condimentum volutpat.
          </p>
        </div>

         
        <div>
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <p className="mb-4">themefisher@gmail.com</p>
          <div className="flex gap-4">
            {socials.map(({ src, alt }, idx) => (
              <div
                key={idx}
                className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center"
              >
                <Image src={src} alt={alt} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((text, idx) => (
              <li key={idx} className="text-gray-700">
                {text}
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Location & Contact</h3>
          <p>2118 Thornridge Cir. Syracuse,</p>
          <p>Connecticut 35624</p>
          <p>(704) 555-0127</p>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-500 mt-12 border-t pt-4">
        Designed And Developed by Themefisher | Distributed by ThemeWagon
      </div>
    </footer>
  );
};

export default Footer;
