import type { Metadata } from "next";

import "./globals.css";



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
