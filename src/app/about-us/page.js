"use client";
import React from "react";
import {
  FaUsers,
  FaBullseye,
  FaLightbulb,
  FaChalkboardTeacher,
  FaBook,
  FaGraduationCap,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Animation variants for consistent effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-24 px-6 md:px-20 bg-gradient-to-b from-cyan-50 to-white">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6">
          দিগন্ত কোচিং সেন্টার
        </h1>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-32 bg-cyan-600 rounded"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-medium">
          "দিগন্ত পেরিয়ে সম্ভাবনার পথে" - একটি প্রতিষ্ঠিত শিক্ষা প্রতিষ্ঠান
        </p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="max-w-4xl mx-auto space-y-8 text-center mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
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

      {/* Features Section */}
      <motion.div
        className="py-16 rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-cyan-800 mb-12 text-center"
        >
          আমাদের বিশেষত্ব
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {/* Feature 1: Teaching Method */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="text-center rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all border-t-4 border-cyan-500"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-cyan-100 p-4 rounded-full">
                <FaChalkboardTeacher className="text-4xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-800 mb-4">
              শিক্ষণ পদ্ধতি
            </h3>
            <ul className="text-gray-600 text-left space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>অভিজ্ঞ শিক্ষকদের দ্বারা ছোট ব্যাচ সিস্টেম</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>বিষয়ভিত্তিক বিশেষজ্ঞ শিক্ষকদের ক্লাস</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>সাপ্তাহিক পরীক্ষা ও মূল্যায়ন</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>ব্যক্তিগত গাইডেন্স ও পরামর্শ</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature 2: Our Mission */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="text-center rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all border-t-4 border-cyan-500"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-cyan-100 p-4 rounded-full">
                <FaBullseye className="text-4xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-800 mb-4">
              আমাদের লক্ষ্য
            </h3>
            <p className="text-gray-600 leading-relaxed">
              প্রতিটি শিক্ষার্থীর মেধা ও সৃজনশীলতার পূর্ণ বিকাশ ঘটানো এবং
              তাদেরকে জাতীয় ও আন্তর্জাতিক পর্যায়ের প্রতিযোগিতামূলক পরীক্ষার
              জন্য সর্বোত্তমভাবে প্রস্তুত করা
            </p>
          </motion.div>

          {/* Feature 3: Facilities */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="text-center rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all border-t-4 border-cyan-500"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-cyan-100 p-4 rounded-full">
                <FaGraduationCap className="text-4xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-800 mb-4">সুবিধাদি</h3>
            <ul className="text-gray-600 text-left space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>আধুনিক ও আরামদায়ক শ্রেণিকক্ষ</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>ত্রৈমাসিক অভিভাবক সমাবেশ</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>ডিজিটাল সাপ্তাহিক প্রগ্রেস রিপোর্ট</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>শিক্ষার্থীদের জন্য কোর্স মেটেরিয়াল</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission and Vision Section */}
      <motion.div
        className="mt-20 py-16 bg-cyan-50 rounded-2xl shadow-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-cyan-800 mb-10 text-center"
        >
          আমাদের লক্ষ্য ও উদ্দেশ্য
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-cyan-100 p-4 rounded-full">
                <FaLightbulb className="text-3xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-700 mb-4 text-center">
              আমাদের দর্শন
            </h3>
            <p className="text-gray-700 leading-relaxed">
              আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থীর মধ্যে অনন্য প্রতিভা রয়েছে।
              আমাদের দর্শন হল এই প্রতিভাকে শনাক্ত করে তার সর্বোচ্চ বিকাশ ঘটানো
              এবং শিক্ষার্থীদেরকে আগামীর নেতৃত্বের জন্য উপযুক্ত করে গড়ে তোলা।
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-cyan-100 p-4 rounded-full">
                <FaUsers className="text-3xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-700 mb-4 text-center">
              আমাদের লক্ষ্য
            </h3>
            <p className="text-gray-700 leading-relaxed">
              আমাদের লক্ষ্য হলো শিক্ষার্থীদের একাডেমিক দক্ষতা, আত্মবিশ্বাস ও
              বাস্তব জীবন দক্ষতা গড়ে তোলা। আমরা প্রতিটি শিক্ষার্থীকে তার
              সর্বোচ্চ সম্ভাবনা অনুযায়ী বিকশিত হতে সাহায্য করি যাতে তারা জীবনের
              সকল চ্যালেঞ্জ মোকাবেলা করতে সক্ষম হয়।
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-cyan-800 mb-6"
        >
          আমাদের মূল্যবোধ
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-cyan-600 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-b-2 border-cyan-500"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-cyan-50 p-3 rounded-full">
                <FaLightbulb className="text-2xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-700 mb-3">উদ্ভাবন</h3>
            <p className="text-gray-600">
              আমরা নতুন শিক্ষণ পদ্ধতি ও সমাধান খুঁজি যা শিক্ষার্থীদের চাহিদা
              পূরণ করে এবং তাদের শেখার অভিজ্ঞতা উন্নত করে।
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-b-2 border-cyan-500"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-cyan-50 p-3 rounded-full">
                <FaClipboardCheck className="text-2xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-700 mb-3">দক্ষতা</h3>
            <p className="text-gray-600">
              আমরা সর্বোচ্চ মানের শিক্ষাদান ও সহায়তা প্রদানে প্রতিশ্রুতিবদ্ধ।
              আমাদের লক্ষ্য হল শিক্ষার্থীদের উৎকর্ষতার দিকে নিয়ে যাওয়া।
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-b-2 border-cyan-500"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-cyan-50 p-3 rounded-full">
                <FaHandshake className="text-2xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-700 mb-3">
              বিশ্বাসযোগ্যতা
            </h3>
            <p className="text-gray-600">
              আমরা সততা এবং স্বচ্ছতার সাথে কাজ করি, শিক্ষার্থী ও অভিভাবকদের সাথে
              দীর্ঘমেয়াদী বিশ্বাসযোগ্য সম্পর্ক গড়ে তুলি।
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-b-2 border-cyan-500"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-cyan-50 p-3 rounded-full">
                <FaUsers className="text-2xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-700 mb-3">সহযোগিতা</h3>
            <p className="text-gray-600">
              আমরা বিশ্বাস করি শিক্ষার্থী, শিক্ষক ও অভিভাবকদের মধ্যে সক্রিয়
              সহযোগিতা শিক্ষার্থীর সাফল্যের চাবিকাঠি। একসাথে কাজ করে আমরা অনেক
              বেশি অর্জন করতে পারি।
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Achievement Section */}
      {/* <motion.div
        className="max-w-5xl mx-auto mt-24 mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-cyan-800 mb-6">আমাদের অর্জন</h2>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-cyan-600 rounded"></div>
        </div>
        <p className="text-lg text-gray-700 mb-10">
          আমরা শিক্ষার্থীদেরকে বিভিন্ন প্রতিযোগিতামূলক পরীক্ষায়
          সাফল্য অর্জন করতে সাহায্য করেছি। আমাদের ৯০% শিক্ষার্থী তাদের পছন্দের
          প্রতিষ্ঠানে ভর্তি হতে সক্ষম হয়েছে।
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-cyan-50 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-cyan-700">৫</h3>
            <p className="text-gray-600">বছরের অভিজ্ঞতা</p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-cyan-700">১০০০+</h3>
            <p className="text-gray-600">সফল শিক্ষার্থী</p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-cyan-700">৪ জন</h3>
            <p className="text-gray-600">অভিজ্ঞ শিক্ষক</p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-cyan-700">৯০%</h3>
            <p className="text-gray-600">সাফল্যের হার</p>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
