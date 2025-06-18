import Navbar from "./components/navbar/navbar";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Prevention from "./components/Prevention/Prevention";
import Accept from "./components/Accept/Accept";
import Accountability from "./components/Accountability/Accountability";
import Customer from "./components/Customer/Customer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Prevention />
      <Accept />
      <Accountability />
      <Customer />

      </>


    
  );
}
