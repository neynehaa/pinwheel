"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";
import { useSwipeable } from "react-swipeable";

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

type CarouselItem = {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
};

export default function CustomerWithCarousel() {
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      name: "Courtney Henry",
      company: "microsoft corp",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      image: "/user-2.png",
    },
    {
      id: 2,
      name: "Ronald Richards",
      company: "meta limited",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      image: "/user-5.png",
    },
    {
      id: 3,
      name: "Bessie Cooper",
      company: "apple inc ltd",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      image: "/user-6.png",
    },
  ];


  const allCards = [...carouselItems, ...carouselItems, ...carouselItems];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const yellowStarsCount = 4;
  const grayStarsCount = 1;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === allCards.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allCards.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
    delta: 10,
  });

  return (
    <section className="w-full py-8 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-[-3] ">

        <div className="w-full md:w-2/3 text-gray-900">
          <h1 className={`text-9xl md:text-4xl font-bold mb-1 pl-9 ${merriweather.className}`}>

            Our customers have nice
            <br />
            things to say about us

          </h1>
        </div>


        <div className="w-full md:w-1/2 text-gray-900 md:pr-10">
          <p
            className={`text-gray-500 text-lg font-extralight ${poppins.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Morbi egestas Werat viverra id
            <br />
            et aliquet. vulputate egestas sollicitudin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto overflow-visible mt-30">
        <div {...swipeHandlers} className="cursor-grab active:cursor-grabbing">
          <div className="relative">
            <div
              className={`flex gap-x-6 transition-transform duration-500 ease-in-out ${isAnimating ? "opacity-90" : "opacity-100"
                }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3
                  }%)`,
              }}
            >
              {allCards.map((item, index) => (
                <div
                  key={`card-${index}`}
                  className="relative bg-white pt-20 pb-8 px-6 md:px-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center flex-shrink-0 w-full md:w-1/3"
                >

                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-orange-400 to-pink-300 p-[2px] shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={112}
                          height={112}
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3
                      className={`font-bold text-lg md:text-xl ${merriweather.className}`}
                    >
                      {item.name}
                    </h3>
                    <p className={`text-gray-500 text-sm md:text-base mb-4 mt-4 ${poppins.className}`}>
                      {item.company}
                    </p>
                    <p
                      className={`text-gray-400 mb-6 ${poppins.className}`}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div className="flex justify-center gap-1">
                    {[...Array(yellowStarsCount)].map((_, i) => (
                      <Image
                        key={`yellow-${i}`}
                        src="/star.png"
                        alt="Yellow star"
                        width={30}
                        height={30}
                        
                      />
                    ))}
                    {[...Array(grayStarsCount)].map((_, i) => (
                      <Image
                        key={`gray-${i}`}
                        src="/gray-star.png"
                        alt="Gray star"
                        width={30}
                        height={30}
                        
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


