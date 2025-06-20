import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const socials = [
  { src: "/fb.svg", alt: "Facebook" },
  { src: "/twitter.svg", alt: "Twitter" },
  { src: "/link.svg", alt: "LinkedIn" },
  { src: "/skype.svg", alt: "Skype" },
];

const quickLinks = ["About", "Category", "Testimonial", "Contact"];

const Footer = () => {
  return (
    <footer
      className={`mt-0 bg-[#ebebeb] text-gray-700 pt-16 pb-16 px-6 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-5 ml-6 mt-7">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={150}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-black"></span>
          </div>
          <p className="text-[#9CA3AF] ml-5 text-sm">
            Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo
            tellus, sed condimentum volutpat.
          </p>
        </div>

        <div>
          <h3 className="text-[15px] font-semibold mb-4 ml-5 mt-6 text-[#22222f]">
            Socials
          </h3>
          <p className="mb-4 text-[#9CA3AF] text-sm">themefisher@gmail.com</p>
          <div className="flex gap-4">
            {socials.map(({ src, alt }, idx) => (
              <div
                key={idx}
                className="w-11 h-11 bg-white shadow-md rounded-full flex items-center justify-center mt-6 ml-2"
              >
                <Image src={src} alt={alt} width={22} height={22} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[15px] mt-6 ml-5 text-[222222f] font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((text, idx) => (
              <li key={idx} className="text-[#9CA3AF] ml-5 text-sm">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[15px] mt-6 ml-5 text-[222222f] font-semibold mb-4">
            Location & Contact
          </h3>
          <p className="text-[#9CA3AF] ml-5 text-sm">
            2118 Thornridge Cir. Syracuse,
            <br />
            Connecticut 35624
            <br />
            (704) 555-0127
          </p>
        </div>
      </div>

      <div className="text-center text-[#9CA3AF] ml-5 text-sm mt-15 ">
        Designed And Developed by Themefisher | Distributed by ThemeWagon
      </div>
    </footer>
  );
};

export default Footer;
