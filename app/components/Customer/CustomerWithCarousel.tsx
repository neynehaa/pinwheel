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
      image: "/user-5.png",
    },
    {
      id: 2,
      name: "Ronald Richards",
      company: "meta limited",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      image: "/user-2.png",
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
    <section className="w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8">
          <div className="w-full lg:w-2/3">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold pl-0 sm:pl-4 ${merriweather.className}`}
            >
              Our customers have nice things to say about us
            </h1>
          </div>
          <div className="w-full lg:w-1/2">
            <p
              className={`text-gray-500 text-base sm:text-lg font-extralight ${poppins.className}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas Werat viverra id et aliquet. vulputate egestas
              sollicitudin.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto overflow-visible mt-27 md:mt-32">
        <div {...swipeHandlers} className="cursor-grab active:cursor-grabbing">
          <div className="relative">
            <div
              className={`flex transition-transform duration-500 ease-in-out gap-4 md:gap-6`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
              }}
            >
              {allCards.map((item, index) => (
                <div
                  key={`card-${index}`}
                  className="relative bg-[#fefefe] pt-16 pb-6 px-4 sm:pt-20 sm:pb-8 sm:px-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center flex-shrink-0 w-full sm:w-2/3 md:w-1/3 border border-gray-100 min-h-[360px] sm:min-h-[400px]"
                >
                  <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 p-[2px] shadow-md">
                      <div className="w-full h-full rounded-full ">
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

                  <div className="mt-8 sm:mt-10">
                    <h3
                      className={`font-bold text-lg sm:text-xl md:text-2xl ${merriweather.className}`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-gray-500 text-sm sm:text-base md:text-lg mt-1 sm:mt-2 mb-2 sm:mb-3 ${poppins.className}`}
                    >
                      {item.company}
                    </p>
                    <p
                      className={`text-gray-400 text-base sm:text-lg ${poppins.className}`}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div className="flex justify-center gap-1 mt-4 sm:mt-6">
                    {[...Array(yellowStarsCount)].map((_, i) => (
                      <Image
                        key={`yellow-${i}`}
                        src="/star.png"
                        alt="Yellow star"
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    ))}
                    {[...Array(grayStarsCount)].map((_, i) => (
                      <Image
                        key={`gray-${i}`}
                        src="/gray-star.png"
                        alt="Gray star"
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
                  i === currentIndex % carouselItems.length
                    ? "bg-orange-500"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
