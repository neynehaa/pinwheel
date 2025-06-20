"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const features = [
  "Supporting more than 119 country world",
  "Open transaction with more than currencies",
  "Customer Service with 79 language",
];

export default function Accept() {
  return (
    <section className="w-full pt-8 pb-16 px-6 bg-[#fafafa] -mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-3/5 relative flex justify-center mb-5">
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-0 mb-27">
            <Image
              src="/circle.svg"
              alt="Decorative Circle"
              width={155}
              height={155}
              className="object-contain opacity-80 rotate-360"
            />
          </div>

          <Image
            src="/collaboration.png"
            alt="Acceptance Illustration"
            width={1600}
            height={1440}
            className="relative z-10 w-full h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-2/5 text-gray-900 md:pl-12 -mt-10 mb-5">
          <h1
            className={`text-4xl font-bold text-gray-900 mb-6 ${merriweather.className}`}
          >
            Accept payments any
            <br />
            country in this whole
            <br />
            universe
          </h1>

          <p className={`text-gray-600 text-base mb-9 ${poppins.className}`}>
            Donec sollicitudin molestie malesda. Donec
            <br />
            sollitudin molestie malesuada. Mauris pellentesque
            <br />
            nec, egestas non nisi. Cras ultricies ligula sed
          </p>

          <ul
            className={`text-gray-900 text-base ${poppins.className} space-y-3`}
          >
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <img
                  src="/checkmark-circle.svg"
                  alt="icon"
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
