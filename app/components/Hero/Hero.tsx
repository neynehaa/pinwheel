import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";
import CustomButton from "../button/CustomButton";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="relative px-8 py-15 bg-[#fafafa] pt-[88px] w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10 relative">
        <div className="md:w-1/2 space-y-6 -mt-10 ml-6">
          <h1
            className={`mt-30 text-5xl font-bold text-gray-900 leading-tight ${merriweather.className}`}
          >
            Scale design & dev <br />
            operations with <br />
            Avocado Enterprise
          </h1>

          <p className={`mt-8 text-gray-600 text-lg ${poppins.className}`}>
            A fully integrated suite of authentication & authoriz products,
            Stytch's platform removes the headache of.
          </p>
          <div className="mt-10">
            <CustomButton
              label="Download The Theme"
              href="/download"
              variant="primary"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/banner.png"
            alt="Chart preview"
            width={700}
            height={600}
            className="rounded-xl relative z-20"
          />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="w-[800px] h-[800px] absolute top-[50px] right-0">
          <Image
            src="/banner-shape.svg"
            alt="Decorative Circle"
            fill
            className="object-contain rounded-full translate-x-[46%] -translate-y-[40%] rotate-[10deg] opacity-80"
          />
        </div>
      </div>

      <div className="mt-20 absolute bottom-[-10px] left-0 right-2 w-[145px] h-[145px] z-0 transform -translate-x-[30%] ">
        <Image
          src="/feature-shape.svg"
          alt="Bottom left graphic"
          fill
          className="object-contain rotate-90deg"
        />
      </div>
    </section>
  );
}
