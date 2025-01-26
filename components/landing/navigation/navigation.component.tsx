"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const pathname = usePathname();

  const navClassName =
    scrollY > 50
      ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/50 backdrop-blur-sm"
      : "fixed top-0 left-0 right-0 z-50 transition-all";

  return (
    <nav className={`${navClassName}`}>
      <div className="px-4 sm:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/nav-logo.svg"
            alt="SynergySphere"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 justify-center items-center">
          <Link
            href="/product"
            className="text-gray-600 font-medium text-base hover:text-blue-600"
          >
            Product
          </Link>
          <Link
            href="/features"
            className="text-gray-600 font-medium text-base hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 font-medium text-base hover:text-blue-600"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-gray-600 font-medium text-base hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/sign-in"
            className="text-gray-600 font-medium text-base hover:text-blue-600"
          >
            Log in
          </Link>
          <Button variant="outline" className="ml-4" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/product"
                  className="text-gray-600 font-medium text-base hover:text-blue-600"
                >
                  Product
                </Link>
                <Link
                  href="/features"
                  className="text-gray-600 font-medium text-base hover:text-blue-600"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 font-medium text-base hover:text-blue-600"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 font-medium text-base hover:text-blue-600"
                >
                  About
                </Link>
                <Link
                  href="/login"
                  className="text-gray-600 font-medium text-base hover:text-blue-600"
                >
                  Log in
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
