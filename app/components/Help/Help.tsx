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
    // <section className="w-full py-20 px-4 sm:px-6 bg-white">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="flex flex-col items-center gap-12">
    //       {/* Text Content */}
    //       <div className="w-full space-y-6">
    //         {/* Flex container for paragraph and heading */}
    //         <div className="flex flex-col md:flex-row justify-between gap-6">
    //           {/* Paragraph on the left */}
    //           <p className={`text-gray-600 text-lg md:w-1/2 ${poppins.className}`}>
                
    //             Helping teams in the world with focus
    //           </p>

    //           {/* Heading on the right */}
    //           <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 md:w-1/2 text-right ${poppins.className}`}>
                
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
    //           </h1>
    //         </div>

    //         {/* Button */}
    //         <CustomButton 
    //           label="Download The Theme" 
    //           variant="primary"
    //           className="hover:scale-105 transition-transform" 
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>


     <section className="w-full py-16 px-6 bg-gray-50 -mt-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
    {/* Left column - Heading */}
    <div className="w-full md:w-1/2 text-gray-900">
      <h1 className={`text-4xl font-bold text-gray-900 mb-6 ml-20 ${merriweather.className}`}>
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
    
    {/* Right column - Lorem ipsum text */}
    <div className="w-full md:w-1/2 text-gray-900 ml-40">
      <p className={`text-gray-500 text-lg font-light ${poppins.className}`}>
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
