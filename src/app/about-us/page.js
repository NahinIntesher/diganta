"use client";
import React from "react";
import Link from "next/link";
import {
  FaUsers,
  FaBullseye,
  FaLightbulb,
  FaChalkboardTeacher,
  FaBook,
  FaGraduationCap,
  FaHandshake,
  FaClipboardCheck,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  // Custom animations for highlight elements
  const highlightAnim = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Card hover animation
  const cardHover = {
    rest: {
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      y: -8,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  };

  return (
    <div className="py-28 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white  to-cyan-50 overflow-hidden">
      {/* Header Section with decorative elements */}
      <motion.div
        className="text-center mb-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-1 bg-amber-500 rounded-full opacity-70"></div>
        <div className="absolute -top-12 left-1/4 w-3 h-3 bg-amber-500 rounded-full opacity-30"></div>
        <div className="absolute -top-20 right-1/3 w-5 h-5 bg-cyan-500 rounded-full opacity-20"></div>

        <motion.span
          variants={highlightAnim}
          className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4"
        >
          পরিচিতি
        </motion.span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          দিগন্ত <span className="text-amber-500">কোচিং</span> সেন্টার
        </h1>

        <div className="flex justify-center mb-8">
          <div className="h-1 w-40 bg-cyan-600 rounded"></div>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto text-xl md:text-2xl font-medium italic">
          <FaQuoteLeft
            className="inline-block text-amber-500 opacity-40 mr-2 mb-1"
            size={16}
          />
          দিগন্ত পেরিয়ে সম্ভাবনার পথে
          <FaQuoteRight
            className="inline-block text-amber-500 opacity-40 ml-2 mb-1"
            size={16}
          />
        </p>
        <p className="text-gray-500 mt-2">একটি প্রতিষ্ঠিত শিক্ষা প্রতিষ্ঠান</p>
      </motion.div>

      {/* Introduction Section with polished layout */}
      <motion.div
        className="max-w-4xl mx-auto space-y-8 text-center mb-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        {/* Decorative dots */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col space-y-4 opacity-20">
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-gray-700 text-lg leading-relaxed"
        >
          মাতুয়াইল এলাকায় উচ্চমানের শিক্ষার আলো ছড়িয়ে দিচ্ছে দিগন্ত কোচিং
          সেন্টার। আমরা অসংখ্য শিক্ষার্থীকে বিভিন্ন প্রতিযোগিতামূলক পরীক্ষায়
          সাফল্য অর্জনের জন্য নিবেদিতভাবে প্রস্তুত করছি।
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-gray-700 text-lg leading-relaxed"
        >
          আমাদের বিশেষত্ব হলো অভিজ্ঞ শিক্ষকমণ্ডলী দ্বারা ছোট ব্যাচে শিক্ষাদান,
          যেখানে প্রতিটি শিক্ষার্থীকে ব্যক্তিগত মনোযোগ দেওয়া হয়। নিয়মিত মডেল
          টেস্ট ও বিস্তারিত মূল্যায়নের মাধ্যমে আমরা শিক্ষার্থীদের দুর্বলতা
          চিহ্নিত করে তা কাটিয়ে উঠতে সহায়তা করি।
        </motion.p>
      </motion.div>

      {/* Features Section with updated cards */}
      <motion.div
        className="py-16 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4">
            কেনো আমাদের বেছে নেবেন
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            আমাদের <span className="text-cyan-600">বিশেষত্ব</span>
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-cyan-600 rounded"></div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          {/* Feature Card 1: Redesigned */}
          <motion.div
            variants={fadeInUp}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="rounded-xl overflow-hidden bg-white shadow-md relative z-10"
          >
            <div className="h-3 bg-cyan-600"></div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-md">
                  <FaChalkboardTeacher className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-500 mb-5 text-center">
                শিক্ষণ পদ্ধতি
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>অভিজ্ঞ শিক্ষকদের দ্বারা ছোট ব্যাচ সিস্টেম</span>
                </li>
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>বিষয়ভিত্তিক বিশেষজ্ঞ শিক্ষকদের ক্লাস</span>
                </li>
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>সাপ্তাহিক পরীক্ষা ও মূল্যায়ন</span>
                </li>
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>ব্যক্তিগত গাইডেন্স ও পরামর্শ</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Feature Card 2: Redesigned */}
          <motion.div
            variants={fadeInUp}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="rounded-xl overflow-hidden bg-white shadow-md relative z-10"
          >
            <div className="h-3 bg-cyan-600"></div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-md">
                  <FaBullseye className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-500 mb-5 text-center">
                আমাদের লক্ষ্য
              </h3>
              <p className="text-gray-700 leading-relaxed">
                প্রতিটি শিক্ষার্থীর মেধা ও সৃজনশীলতার পূর্ণ বিকাশ ঘটানো এবং
                তাদেরকে জাতীয় ও আন্তর্জাতিক পর্যায়ের প্রতিযোগিতামূলক পরীক্ষার
                জন্য সর্বোত্তমভাবে প্রস্তুত করা
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-center">
                  <div className="px-4 py-1 bg-cyan-50 text-cyan-600 text-sm font-medium rounded-full">
                    উৎকর্ষতার প্রতি অঙ্গীকারবদ্ধ
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 3: Redesigned */}
          <motion.div
            variants={fadeInUp}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="rounded-xl overflow-hidden bg-white shadow-md relative z-10"
          >
            <div className="h-3 bg-cyan-600"></div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-md">
                  <FaGraduationCap className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-500 mb-5 text-center">
                সুবিধাদি
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>আধুনিক ও আরামদায়ক শ্রেণিকক্ষ</span>
                </li>
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>ত্রৈমাসিক অভিভাবক সমাবেশ</span>
                </li>
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>ডিজিটাল সাপ্তাহিক প্রগ্রেস রিপোর্ট</span>
                </li>
                <li className="flex items-start">
                  <FaStar
                    className="text-cyan-500 mr-3 mt-1 flex-shrink-0"
                    size={14}
                  />
                  <span>শিক্ষার্থীদের জন্য কোর্স মেটেরিয়াল</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission and Vision Section with elegant style */}
      <motion.div
        className="py-20 mb-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-cyan-50 opacity-60 -skew-y-3 transform origin-bottom-right"></div>

        <div className="relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4">
              মিশন এবং ভিশন
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              আমাদের <span className="text-cyan-600">লক্ষ্য</span> ও উদ্দেশ্য
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-cyan-600 rounded"></div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
            {/* Vision - Redesigned */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-50 rounded-bl-full opacity-50"></div>
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg">
                  <FaLightbulb className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-500 mb-6 text-center">
                আমাদের দর্শন
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থীর মধ্যে অনন্য প্রতিভা রয়েছে।
                আমাদের দর্শন হল এই প্রতিভাকে শনাক্ত করে তার সর্বোচ্চ বিকাশ ঘটানো
                এবং শিক্ষার্থীদেরকে আগামীর নেতৃত্বের জন্য উপযুক্ত করে গড়ে তোলা।
              </p>
            </motion.div>

            {/* Mission - Redesigned */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-50 rounded-bl-full opacity-50"></div>
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg">
                  <FaUsers className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-500 mb-6 text-center">
                আমাদের লক্ষ্য
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                আমাদের লক্ষ্য হলো শিক্ষার্থীদের একাডেমিক দক্ষতা, আত্মবিশ্বাস ও
                বাস্তব জীবন দক্ষতা গড়ে তোলা। আমরা প্রতিটি শিক্ষার্থীকে তার
                সর্বোচ্চ সম্ভাবনা অনুযায়ী বিকশিত হতে সাহায্য করি যাতে তারা
                জীবনের সকল চ্যালেঞ্জ মোকাবেলা করতে সক্ষম হয়।
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section - Completely Redesigned */}
      <motion.div
        className="max-w-6xl mx-auto mt-24 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4">
            আমরা যেভাবে কাজ করি
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            আমাদের <span className="text-cyan-600">মূল্যবোধ</span>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-cyan-600 rounded"></div>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600">
            আমাদের প্রতিষ্ঠানের মূল্যবোধগুলো আমাদের সকল কার্যক্রম পরিচালনায়
            দিকনির্দেশনা দেয়
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value Card 1 - Redesigned */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="h-2 bg-cyan-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="mr-4 p-3 rounded-full bg-cyan-100">
                  <FaLightbulb className="text-xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-500">উদ্ভাবন</h3>
              </div>
              <p className="text-gray-600">
                আমরা নতুন শিক্ষণ পদ্ধতি ও সমাধান খুঁজি যা শিক্ষার্থীদের চাহিদা
                পূরণ করে এবং তাদের শেখার অভিজ্ঞতা উন্নত করে।
              </p>
            </div>
          </motion.div>

          {/* Value Card 2 - Redesigned */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="h-2 bg-cyan-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="mr-4 p-3 rounded-full bg-cyan-100">
                  <FaClipboardCheck className="text-xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-500">দক্ষতা</h3>
              </div>
              <p className="text-gray-600">
                আমরা সর্বোচ্চ মানের শিক্ষাদান ও সহায়তা প্রদানে প্রতিশ্রুতিবদ্ধ।
                আমাদের লক্ষ্য হল শিক্ষার্থীদের উৎকর্ষতার দিকে নিয়ে যাওয়া।
              </p>
            </div>
          </motion.div>

          {/* Value Card 3 - Redesigned */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="h-2 bg-cyan-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="mr-4 p-3 rounded-full bg-cyan-100">
                  <FaHandshake className="text-xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-500">
                  বিশ্বাসযোগ্যতা
                </h3>
              </div>
              <p className="text-gray-600">
                আমরা সততা এবং স্বচ্ছতার সাথে কাজ করি, শিক্ষার্থী ও অভিভাবকদের
                সাথে দীর্ঘমেয়াদী বিশ্বাসযোগ্য সম্পর্ক গড়ে তুলি।
              </p>
            </div>
          </motion.div>

          {/* Value Card 4 - Redesigned */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="h-2 bg-cyan-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="mr-4 p-3 rounded-full bg-cyan-100">
                  <FaUsers className="text-xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-500">সহযোগিতা</h3>
              </div>
              <p className="text-gray-600">
                আমরা বিশ্বাস করি শিক্ষার্থী, শিক্ষক ও অভিভাবকদের মধ্যে সক্রিয়
                সহযোগিতা শিক্ষার্থীর সাফল্যের চাবিকাঠি। একসাথে কাজ করে আমরা অনেক
                বেশি অর্জন করতে পারি।
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to action - New Addition */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto mt-24 mb-10 bg-gradient-to-r from-cyan-700 to-cyan-800 rounded-2xl overflow-hidden shadow-xl relative"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-1/2 -translate-x-1/2 opacity-10"></div>

        <div className="p-12 md:p-16 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            আজই আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-amber-50 mb-10 max-w-2xl mx-auto">
            আমরা আপনার শিক্ষার্থীর সম্ভাবনাময় ভবিষ্যত নির্মাণে সর্বোচ্চ
            সহযোগিতা দিতে প্রস্তুত। আমাদের সাথে যোগাযোগ করে আপনার শিক্ষার্থীর
            জন্য সঠিক পরিকল্পনা করুন।
          </p>
          <Link
            className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 inline-flex items-center"
            href="/contact-us"
          >
            যোগাযোগ করুন
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
