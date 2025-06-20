"use client";

import React, { useState } from "react";
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

const Prevention = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const habitItems = [
    {
      title: "Habit building essential chose habit",
      icon: "/drop.svg",
    },
    {
      title: "Get an overview of habit calendars",
      icon: "/brain.svg",
    },
    {
      title: "Start building with Habitify platform",
      icon: "/timer.svg",
    },
  ];

  const images = [
    "/sells-by-country.png",
    "/collaboration.png",
    "/sells-by-country.png",
  ];

  return (
    <section className="py-8 md:py-16 bg-[#fafafa] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
            <h1
              className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${merriweather.className}`}
            >
              Prevent failure from
              <br />
              impacting your
              <br />
              reputation
            </h1>
            <p
              className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 ${poppins.className}`}
            >
              Our platform helps you build secure onboarding
              <br className="hidden sm:block" />
              authentication experiences that retain and engage
              <br className="hidden sm:block" />
              your users. We build the infrastructure, you can.
            </p>

            <div
              className={`max-w-md space-y-3 sm:space-y-4 mb-6 ${poppins.className}`}
            >
              {habitItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex items-start gap-3 ${
                    selectedIndex === index
                      ? "bg-[#fcbca0] scale-[1.03]"
                      : "hover:bg-[#f9f9f9]"
                  } px-4 py-4 rounded-lg cursor-pointer transition-all duration-200 max-w-sm`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={15}
                    height={15}
                  />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="w-full flex justify-center">
              <Image
                src={images[selectedIndex]}
                alt="Preview"
                width={1700}
                height={1500}
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;
