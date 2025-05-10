"use client";
import Link from "next/link";
import { useState } from "react";
import ClassSchedule from "./ClassSchedule";
import FeeSection from "./FeeSection";
import NotFoundPage from "./NotFound";
import { motion } from "framer-motion";

export default function EducationCenter() {
  const [activeTab, setActiveTab] = useState("schedule");

  return (
    <div className="min-h-screen py-6 md:py-12 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20 relative px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-1 bg-amber-500 rounded-full opacity-70"></div>
          <div className="absolute -top-12 left-1/4 w-3 h-3 bg-amber-500 rounded-full opacity-30"></div>
          <div className="absolute -top-20 right-1/3 w-5 h-5 bg-cyan-500 rounded-full opacity-20"></div>

          {/* Section Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-2">
            শিক্ষা কেন্দ্র
          </h1>

          {/* Underline Decoration */}
          <div className="h-1 w-20 sm:w-24 bg-cyan-600 mx-auto mb-3"></div>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-lg">
            আপনার সাফল্যের যাত্রায় আমরা সঙ্গী
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-4 md:mb-8 px-2 w-full">
          <div className="inline-flex rounded-lg bg-gray-100 p-1 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`whitespace-nowrap px-3 py-2 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-md font-medium text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "schedule"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              ব্যাচ সময়সূচী
            </button>
            <button
              onClick={() => setActiveTab("fees")}
              className={`whitespace-nowrap px-3 py-2 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-md font-medium text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "fees"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              কোর্স ফি
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden mx-2 sm:mx-0">
          {/* Class Schedule Section */}
          {/* <ClassSchedule activeTab={activeTab} /> */}

          <NotFoundPage activeTab={activeTab} />

          {/* Fee Section */}
          <FeeSection activeTab={activeTab} />

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white p-4 sm:p-6 rounded-b-xl md:rounded-b-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  যোগাযোগ করুন
                </h3>
                <p className="text-xs sm:text-sm">
                  আমাদের সাথে যোগাযোগ করতে নিচের লিঙ্কে ক্লিক করুন
                </p>
              </div>
              <Link
                href="/contact-us"
                className="bg-white text-cyan-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                যোগাযোগ
              </Link>
            </div>
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm">
                আমাদের সাথে যোগাযোগ করতে পারেন: <br />
                ফোন: +8801234567890 <br />
                ইমেইল: info.diganta.coachingcenter@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const highlightAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
