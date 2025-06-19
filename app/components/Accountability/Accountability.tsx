"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";
import CustomButton from "../button/CustomButton";
import styles from "./Accountability.module.css";

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

export default function Accountability() {
  return (
    <section className="w-full py-16 px-6 bg-[#fafafa] -mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ml-17">
        <div className="w-full md:w-1/2 text-gray-900 space-y-4">
          <h1
            className={`text-4xl font-bold text-gray-900 mb-6 ${merriweather.className}`}
          >
            Accountability that <br /> works for you
          </h1>

          <p className={`text-gray-600 text-base ${poppins.className} -mt-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit. Morbi egestas Werat viverra id et aliquet.
            <br />
            vulputate egestas sollicitudin .
          </p>

          <div className="mt-4 text-[#224586]">
            <CustomButton
              label="Know about us"
              variant="primary"
              onClick={() => console.log("Know about us clicked")}
            />
          </div>
        </div>

        <div className="relative w-full md:w-[70%] flex justify-center mr-21">
          <Image
            src="/video.png"
            alt="video"
            width={1700}
            height={1700}
            className="object-contain"
          />

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.pulseAnimation}`}
          >
            <svg
              xmlns="/play.png"
              className="w-18 h-18 text-white bg-[#ff7300] rounded-full p-3 shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
