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
  "Customer Service with 79 language"
];

export default function Accept() {
  return (
    <section className="w-full py-16 px-6 bg-[#fafafa]">
      <div className="-mt-17 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pl-16">

        <div className="w-full w:md-1/2">
          <Image
            src="/collaboration.png"
            alt="Acceptance Illustration"
            width={1000}
            height={900}
            layout="responsive"
            className="object-contain"
          />
        </div>

        <div className="w-full w:md-1/2 text-gray-900">
          <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${merriweather.className}`}>
            Accept payments any
            <br />
            country in this whole
            <br />
            universe
          </h1>

          <p className={`text-gray-600 text-base ${poppins.className}`}>
            Donec sollicitudin molestie malesda. Donec
            <br />
            sollitudin molestie malesuada. Mauris pellentesque
            <br />nec, egestas non nisi. Cras ultricies ligula sed

          </p>
          <ul className={`text-gray-900 text-base ${poppins.className} space-y-2 mt-6`}>
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <img src="/checkmark-circle.svg" alt="icon" className="w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>




        </div>

      </div>
    </section>
  );
}
