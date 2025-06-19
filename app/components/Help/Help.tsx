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
  weight: ["400"],
  display: "swap",
});

export default function Help() {
  return (
    <section className="w-full py-16 px-6 bg-[#fafafa] -mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="w-full md:w-1/2 text-gray-900">
          <h1
            className={`text-4xl font-bold text-gray-900 mb-6 ml-20 ${merriweather.className}`}
          >
            Helping teams in the
            <br />
            world with focus
          </h1>
          <div className="ml-20">
            <CustomButton
              label="Download the theme"
              variant="primary"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-900 ml-40">
          <p
            className={`text-gray-500 text-lg font-light ${poppins.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Morbi egestas Werat viverra id et
            <br />
            aliquet. vulputate egestas sollicitudin.
          </p>
        </div>
      </div>
    </section>
  );
}
