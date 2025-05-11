"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../public/images/digantaLogo.svg";

const navItems = [
  "হোম",
  "আমাদের কোর্সসমূহ",
  "আমাদের সেবা",
  "আমাদের সম্পর্কে",
  "যোগাযোগ করুন",
];

const getLink = (item) => {
  const links = {
    হোম: "/",
    "আমাদের কোর্সসমূহ": "/our-courses",
    "আমাদের সেবা": "/our-services",
    "আমাদের সম্পর্কে": "/about-us",
    "যোগাযোগ করুন": "/contact-us",
  };
  return links[item] || "/";
};

// Function to determine the active item based on pathname
const getActiveItemFromPath = (pathname) => {
  const reversedLinks = {};
  for (const [key, value] of Object.entries({
    হোম: "/",
    "আমাদের কোর্সসমূহ": "/our-courses",
    "আমাদের সেবা": "/our-services",
    "আমাদের সম্পর্কে": "/about-us",
    "যোগাযোগ করুন": "/contact-us",
  })) {
    reversedLinks[value] = key;
  }

  // Exact path match
  if (reversedLinks[pathname]) {
    return reversedLinks[pathname];
  }

  // For nested routes, find the closest parent path
  // E.g., "/our-courses/course-1" should highlight "আমাদের কোর্সসমূহ"
  for (const [path, item] of Object.entries(reversedLinks)) {
    if (path !== "/" && pathname.startsWith(path)) {
      return item;
    }
  }

  // Default to হোম if no match
  return "হোম";
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("হোম");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set active item based on current path when component mounts or path changes
    setActiveItem(getActiveItemFromPath(pathname));

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <nav
      className={`transition-all duration-300 sticky top-0 z-50 w-full 
      ${
        scrolled
          ? "bg-cyan-50 bg-opacity-95 backdrop-blur-md shadow-lg py-3"
          : "bg-cyan-50 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative group flex items-center ">
          <Link
            href="/"
            className="group flex items-center font-extrabold transition-all duration-300"
            onClick={() => handleItemClick("হোম")}
          >
            <div className="flex items-center">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={logo}
                  alt="দিগন্ত Logo"
                  className="h-10 w-auto transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="ml-2 flex flex-col">
                <p className="text-2xl font-bold text-cyan-600 tracking-tight">
                  দিগন্ত
                </p>
                <span className="text-xs text-gray-500 font-light -mt-1">
                  দিগন্ত পেরিয়ে সম্ভাবনার পথে
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={getLink(item)}
                  className={`px-3 py-2 rounded-md mx-1 flex items-center text-md transition-all duration-300 hover:bg-cyan-50 
                  ${
                    activeItem === item
                      ? "text-cyan-600 font-semibold bg-cyan-100"
                      : "text-gray-700 hover:text-cyan-600"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                  {/* Active indicator dot */}
                  {activeItem === item && (
                    <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 inline-block"></span>
                  )}
                </Link>
                {/* Hover indicator line */}
                <span
                  className={`absolute left-0 right-0 bottom-0 mx-auto h-0.5 bg-cyan-500 rounded-full
                  transition-all duration-300 ease-out
                  ${activeItem === item ? "w-3/4" : "w-0 group-hover:w-1/2"}`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Action button */}
          <Link
            href="/login"
            className="ml-4 px-5 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white 
            rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 
            hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            লগইন
          </Link>
          <Link
            href="/login"
            className="ml-4 px-5 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white 
            rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 
            hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            রেজিস্টার
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full
          bg-cyan-100 text-cyan-700 hover:bg-cyan-200 focus:outline-none 
          transition-all duration-300 hover:shadow-md"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Fixed Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[100px] left-0 right-0 bg-white text-cyan-900 shadow-lg z-40">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex flex-col space-y-1 mb-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={getLink(item)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 
                    ${
                      activeItem === item
                        ? "bg-cyan-100 text-cyan-600 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span>{item}</span>
                    {activeItem === item && (
                      <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile action buttons */}
            <div className="flex items-center justify-between space-x-2 py-3 border-t border-gray-100">
              <Link
                href="/login"
                className="flex-1 text-center px-4 py-2.5 bg-cyan-600 text-white
                rounded-lg font-medium text-sm shadow-sm hover:bg-cyan-700
                transition-all duration-200"
              >
                লগ ইন
              </Link>
              <Link
                href="/signup"
                className="flex-1 text-center px-4 py-2.5 bg-gray-100 text-gray-800 
                rounded-lg font-medium text-sm hover:bg-gray-200 
                transition-all duration-200"
              >
                রেজিস্টার
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
