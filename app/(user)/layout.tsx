import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
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

const lexend_giga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ["latin"],
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
        className={`${lexend_giga.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
