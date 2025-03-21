import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cake Project",
  description: "Cake Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          openSans.variable,
          "antialiased bg-background w-full min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
