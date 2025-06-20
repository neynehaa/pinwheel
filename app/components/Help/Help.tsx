"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";
import CustomButton from "../button/CustomButton";

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

export default function Help() {
  return (
    <section className="w-full py-8 md:py-16 px-4 sm:px-6 bg-[#fafafa]">
      {" "}
      {/* Keep original light color */}
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="rounded-tl-lg rounded-tr-lg rounded-bl-[60px] sm:rounded-bl-[80px] rounded-br-[60px] sm:rounded-br-[80px] p-6 sm:p-9 md:p-12 lg:p-16 xl:p-21"
          style={{
            background: `linear-gradient(to bottom, #fa709a 0%, #fca172 50%, #fdb068 100%)`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug sm:leading-tight ${merriweather.className}`}
              >
                Helping teams in the world with focus
              </h1>
              <CustomButton
                label="Download the theme"
                variant="primary"
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-medium"
                onClick={() => console.log("Button clicked")}
              />
            </div>

            <div
              className={`text-white text-base sm:text-lg md:ml-8 lg:ml-12 ${poppins.className}`}
            >
              <p className="mb-4 sm:mb-0">
                Lorem ipsum dolor sit amet, consectetur
                <br className="hidden sm:block" />
                adipiscing elit. Morbi egestas Werat viverra id et
                <br className="hidden sm:block" />
                aliquet. vulputate egestas sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
