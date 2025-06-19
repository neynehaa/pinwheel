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
    <section className="relative px-8 py-15 bg-gray-50  pt-[88px] w-full h-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10 relative">


        <div className="md:w-1/2 space-y-6 -mt-10 ml-6">
          <h1 className={`text-5xl font-bold text-gray-900 leading-tight ${merriweather.className}`}>
            Scale design & dev <br />
            operations with <br />
            Avocado Enterprise
          </h1>

          <p className={`text-gray-600 text-lg ${poppins.className}`}>
            A fully integrated suite of authentication & authoriz products,
            Stytch's platform removes the headache of.
          </p>

          <CustomButton
            label="Download The Theme"
            href="/download"
            variant="primary"
          />
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
        <div className="w-[800px] h-[800px] absolute top-0 right-0">
          <Image
            src="/shape.svg"
            alt="Decorative Circle"
            fill
            className="object-contain rounded-full translate-x-[33%] -translate-y-[60%] rotate-[120deg] opacity-80"
          />
        </div>
      </div>


      <div className="absolute bottom-[-20px] left-0 right-2 w-[145px] h-[145px] z-0 transform -translate-x-1/2 ">
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

