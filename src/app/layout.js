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
      <StoreProvider>
        <body className={`${inter.className} bg-gray-200`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
