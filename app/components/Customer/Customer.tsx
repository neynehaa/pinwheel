"use client";

import React from "react";
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

export default function Customer() {
    return (
        <section className="w-full py-16 px-6 bg-gray-50 -mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ml-13">
                <div className="w-full md:w-1/2 text-gray-900 space-y-4">
                    <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${merriweather.className}`}>
                        Our customers have nice
                        <br />
                        things to say about us
                    </h1>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-gray-900 space-y-4 text-right">
                <p className={`text-gray-600 text-1xl font-light ${poppins.className}`}>



                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    adipiscing elit. Morbi egestas Werat viverra id <br />
                    et aliquet. vulputate egestas sollicitudin .
                </p>
            </div>




        </section>

    )
}