import Navbar from "./components/navbar/navbar";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "./components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />


    </>
  );
}
