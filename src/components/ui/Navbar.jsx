"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../../../public/images/digantaLogo.svg";

const navItems = [
  "হোম",
  "আমাদের কোর্সসমূহ",
  "কোর্স ফি",
  "আমাদের শিক্ষকরা",
  "আমাদের সেবা",
  "আমাদের সম্পর্কে",
  "যোগাযোগ করুন",
];

const getLink = (item) =>
  ({
    হোম: "/",
    "আমাদের কোর্সসমূহ": "/our-courses",
    "কোর্স ফি": "/course-fee",
    "আমাদের শিক্ষকরা": "/our-teachers",
    "আমাদের সেবা": "/our-services",
    "আমাদের সম্পর্কে": "/about-us",
    "যোগাযোগ করুন": "/contact-us",
  }[item] || "/");

const getActiveItemFromPath = (pathname) => {
  const reversedLinks = {
    "/": "হোম",
    "/our-courses": "আমাদের কোর্সসমূহ",
    "/course-fee": "কোর্স ফি",
    "/our-teachers": "আমাদের শিক্ষকরা",
    "/our-services": "আমাদের সেবা",
    "/about-us": "আমাদের সম্পর্কে",
    "/contact-us": "যোগাযোগ করুন",
  };
  if (reversedLinks[pathname]) return reversedLinks[pathname];
  for (const path in reversedLinks) {
    if (path !== "/" && pathname.startsWith(path)) {
      return reversedLinks[path];
    }
  }
  return "হোম";
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("হোম");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveItem(getActiveItemFromPath(pathname));
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      className={`transition-all duration-300 sticky top-0 z-50 w-full ${
        scrolled
          ? "bg-cyan-50 bg-opacity-95 backdrop-blur-md shadow-md py-3"
          : "bg-cyan-50 py-4"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src={logo}
              alt="দিগন্ত Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-2 flex flex-col">
            <span className="text-2xl font-bold text-cyan-600 tracking-tight">
              দিগন্ত
            </span>
            <span className="text-xs text-gray-500 font-light -mt-1">
              দিগন্ত পেরিয়ে সম্ভাবনার পথে
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={getLink(item)}
                  className={`px-3 py-2 rounded-md mx-1 transition-all text-sm ${
                    activeItem === item
                      ? "bg-cyan-100 text-cyan-600 font-semibold"
                      : "hover:text-cyan-600 text-gray-700"
                  }`}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {/* <Link
            href="/login"
            className="ml-4 px-5 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-[2px] active:translate-y-0"
          >
            লগ ইন
          </Link> */}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center transition-all hover:bg-cyan-200"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 z-40">
          <div className="max-w-screen-xl mx-auto px-4 py-3">
            <ul className="flex flex-col space-y-1 mb-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={getLink(item)}
                    className={`block px-4 py-2.5 rounded-md ${
                      activeItem === item
                        ? "bg-cyan-100 text-cyan-600 font-medium"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                    onClick={() => {
                      setActiveItem(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <Link
              href="/login"
              className="block w-full text-center px-4 py-2.5 bg-cyan-600 text-white rounded-lg font-medium text-sm hover:bg-cyan-700 transition-all"
              onClick={() => setIsOpen(false)}
            >
              লগ ইন
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
}
