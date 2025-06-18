import Navbar from "./components/navbar/navbar";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Prevention from "./components/Prevention/Prevention";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Prevention />

      </>


    
  );
}
