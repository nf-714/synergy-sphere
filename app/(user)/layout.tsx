import { NavigationBar } from "@/components/home/navigation/navigation.component";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Synergy Sphere - Host your own business/organization events",
  description: "Host your own business/organization events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
        suppressHydrationWarning
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
