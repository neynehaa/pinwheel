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
      title: "Habit building essential chose habit ",
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
    

    <section className="py-16 bg-gray-50">
  <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

     
    <div className="w-full lg:w-1/2 lg:pl-21">
      <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${merriweather.className}`}>
        Prevent failure from
        <br /> 
        impacting your
        <br /> 
        reputation
      </h1>
      <p className={`text-lg text-gray-600 mb-8 ${poppins.className}`}>
        Our platform helps you build secure onboarding<br />
        authentication experiences that retain and engage<br />
        your users. We build the infrastructure, you can.
      </p>

      <div className={`space-y-4 mb-6 ${poppins.className}`}>
        {habitItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <Image src={item.icon} alt={item.title} width={15} height={15} />
            <span className="text-gray-700">{item.title}</span>
          </div>
        ))}
      </div>
    </div>

   
    <div className="w-full lg:w-1/2 lg:-ml-6">
      <div className="relative h-[400px] w-full ">
        <Image
          src="/sells-by-country.png"
          alt="Sells"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Prevention;
