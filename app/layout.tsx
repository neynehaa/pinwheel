import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });



export const metadata = {
  title: "Pinwheel",
  icons: [
    { url: "/icon.png", sizes:' 150*150', type: "image/svg"}
  ]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
