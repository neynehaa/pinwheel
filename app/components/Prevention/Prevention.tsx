import React from 'react';
import Image from 'next/image';
import { Merriweather } from "next/font/google";
import { Poppins } from 'next/font/google';

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

  return (
    <section className="py-8 md:py-16 bg-[#fafafa] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
           
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
            <h1 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${merriweather.className}`}>
              Prevent failure from<br /> 
              impacting your<br /> 
              reputation
            </h1>
            <p className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 ${poppins.className}`}>
              Our platform helps you build secure onboarding<br className="hidden sm:block" />
              authentication experiences that retain and engage<br className="hidden sm:block" />
              your users. We build the infrastructure, you can.
            </p>

            <div className={`space-y-3 sm:space-y-4 mb-6 ${poppins.className}`}>
              {habitItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image src={item.icon} alt={item.title} width={15} height={15} />
                  <span className="text-gray-700 text-sm sm:text-base">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
              <Image
                src="/sells-by-country.png"
                alt="Sells"
                fill
                className="object-cover rounded-lg md:rounded-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;