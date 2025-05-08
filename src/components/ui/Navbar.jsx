"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../../public/images/digantaLogo.svg";
import SearchBox from "./SearchBar";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("হোম");
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
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
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <nav
      className={`bg-cyan-100 backdrop-blur-3xl shadow-2xl sticky top-0 z-50 w-full border-b text-black border-gray-400 ${
        scrolled ? "shadow-md py-2 " : "py-2 bg-opacity-90"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="relative group flex flex-">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-extrabold text-cyan-500 transition-all duration-300"
          >
            <Image
              src={logo}
              alt="Digonto Coaching"
              className="h-12 w-25 pb-2 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2 text-gray-700 font-medium mr-4">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                href={getLink(item)}
                className={`px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-cyan-500 ${
                  activeItem === item ? "text-cyan-600" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-[-4px] h-0.5 bg-cyan-500 w-0 group-hover:w-full transition-all duration-300 ease-in-out ${
                    activeItem === item ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-500 focus:outline-none transition-all duration-300 hover:text-cyan-600 transform hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={getLink(item)}
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      activeItem === item
                        ? "bg-cyan-100 text-cyan-600"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
