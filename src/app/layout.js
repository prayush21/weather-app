"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Weather App",
//   description: "gives the latest updates in weather",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <StoreProvider>
        <body className={`${inter.className} bg-gray-200`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
