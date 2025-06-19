'use client'

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Highlights = () => {
  const features = [
    {
      title: "Live Caption",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-1.svg",
    },
    {
      title: "Smart Reply",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-2.svg",
    },
    {
      title: "Sound Amplifier",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-3.svg",
    },
    {
      title: "Gesture Navigation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-4.svg",
    },
    {
      title: "Dark Theme",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-5.svg",
    },
    {
      title: "Privacy Controls",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-6.svg",
    },
    {
      title: "Location Controls",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-7.svg",
    },
    {
      title: "Security Updates",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-8.svg",
    },
    {
      title: "Focus Mode",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-9.svg",
    },
    {
      title: "Family Link",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/feature-icon-10.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-3">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div className="md:max-w-[40%]">
              <div className={merriweather.className}>
                <h1 className="text-4xl font-bold text-gray-900">
                  The Highlighting Part Of
                </h1>
                <h1 className="text-4xl font-bold text-gray-900 mt-3">
                  Our Solution
                </h1>
              </div>
            </div>
            <div>
              <p className={`text-gray-400 text-base font-["Poppins"] mr-20`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Morbi egestas Werat viverra id et aliquet. vulputate
                <br />
                egestas sollicitudin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-19">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 relative min-h-[200px]"
              >
                <div className="h-full flex flex-col">
                  <div className="flex-grow">
                    <h2 className={`${merriweather.className} text-xl font-semibold text-gray-800 mb-2`}>
                      {feature.title}
                    </h2>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="relative w-10 h-10">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        // width={26}
                        // height={26}
                        width={feature.title === "Smart Reply" ? 15 : 26}
                        height={feature.title === "Smart Reply" ? 20 : 26}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
