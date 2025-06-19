// "use client";

// import React from "react";
// import { Poppins } from "next/font/google";
// import { Merriweather } from "next/font/google";
// import CustomButton from "../button/CustomButton";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
//   display: "swap",
// });

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["400"],
//   display: "swap",
// });

// export default function Help() {
//   return (
//     <section className="w-full py-16 px-6 bg-[#fafafa] -mt-1">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
    
//     {/* Left Column */}
//     <div className="w-full md:w-1/2 text-gray-900 mt-16">
//       <h1
//         className={`text-4xl font-bold text-gray-900 mb-6 ml-20 ${merriweather.className}`}
//       >
//         Helping teams in the
//         <br />
//         world with focus
//       </h1>
//       <div className="ml-20">
//         <CustomButton
//           label="Download the theme"
//           variant="primary"
//           onClick={() => console.log("Button clicked")}
//         />
//       </div>
//     </div>

//     {/* Right Column */}
//     <div className="w-full md:w-1/2 text-gray-900 ml-40 mt-16">
//       <p
//         className={`text-gray-500 text-lg font-light ${poppins.className}`}
//       >
//         Lorem ipsum dolor sit amet, consectetur
//         <br />
//         adipiscing elit. Morbi egestas Werat viverra id et
//         <br />
//         aliquet. vulputate egestas sollicitudin.
//       </p>
//     </div>
    
//   </div>
// </section>

//   );
// }


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
    <section className="w-full py-16 px-6 -mt-1">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#fa828b] via-[#fb9b76] to-[#fdc557] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Heading and Button */}
            <div className="space-y-8">
              <h1 className={`text-4xl md:text-5xl font-bold text-white leading-tight ${merriweather.className}`}>
                Helping teams in the world with focus
              </h1>
              <CustomButton
                label="Download the theme"
                variant="primary"
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 text-base font-medium"
                onClick={() => console.log("Button clicked")}
              />
            </div>

            {/* Right Column - Text Content */}
            <div className={`text-white/90 text-lg leading-relaxed ${poppins.className}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet.
                vulputate egestas sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}