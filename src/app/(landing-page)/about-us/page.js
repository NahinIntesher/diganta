"use client";
import React from "react";

import { FaUsers, FaBullseye, FaLightbulb, FaGlobe } from "react-icons/fa";

import { FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa"; 

import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div className="py-16 px-6 md:px-20 bg-gradient-to-b from-purple-50 to-white">
      {/* Top Heading Section with Bengali */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
          দিগন্ত কোচিং সেন্টার
        </h1>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-24 bg-purple-600 rounded"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          "দিগন্ত পেরিয়ে সম্ভাবনার পথে" - মাতুয়াইলের সেরা শিক্ষাপ্রতিষ্ঠান
        </p>
      </div>
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto space-y-8 text-center mb-20">
        <p className="text-gray-700 text-lg leading-relaxed">
          ২০১০ সাল থেকে মাতুয়াইল এলাকায় শিক্ষার আলো ছড়িয়ে যাচ্ছে দিগন্ত কোচিং
          সেন্টার। আমরা প্রায় ১০০০+ শিক্ষার্থীকে বিভিন্ন প্রতিযোগিতামূলক
          পরীক্ষায় সাফল্য অর্জনে সহায়তা করেছি।
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          আমাদের বিশেষত্ব হলো ছোট ব্যাচে শিক্ষাদান, যেখানে প্রতিটি শিক্ষার্থীকে
          ব্যক্তিগত মনোযোগ দেওয়া হয়। নিয়মিত মডেল টেস্ট ও মূল্যায়নের মাধ্যমে আমরা
          শিক্ষার্থীদের দুর্বলতা চিহ্নিত করে তা কাটিয়ে উঠতে সহায়তা করি।
        </p>
      </div>
      {/* Info Cards Section */}
      <div className="py-12 rounded-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Info 1: Teaching Method */}
          <motion.div
            whileHover={{ y: -10 }}
            className="text-center rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaChalkboardTeacher className="text-4xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">
              শিক্ষণ পদ্ধতি
            </h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• ছোট ব্যাচ সিস্টেম</li>
              <li>• বিষয়ভিত্তিক বিশেষ ক্লাস</li>
              <li>• সাপ্তাহিক মূল্যায়ন</li>
              <li>• ব্যক্তিগত গাইডেন্স</li>
            </ul>
          </motion.div>

          {/* Info 2: Our Mission */}
          <motion.div
            whileHover={{ y: -10 }}
            className="text-center rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaBullseye className="text-4xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">
              আমাদের লক্ষ্য
            </h3>
            <p className="text-gray-600">
              প্রতিটি শিক্ষার্থীর মেধা ও সৃজনশীলতার পূর্ণ বিকাশ ঘটানো এবং
              তাদেরকে জাতীয় পর্যায়ের প্রতিযোগিতামূলক পরীক্ষার জন্য প্রস্তুত করা
            </p>
          </motion.div>

          {/* Info 3: Facilities */}
          <motion.div
            whileHover={{ y: -10 }}
            className="text-center rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaBook className="text-4xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">সুবিধাদি</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• আধুনিক শ্রেণিকক্ষ</li>
              <li>• সমৃদ্ধ লাইব্রেরি</li>
              <li>• নিয়মিত অভিভাবক সমাবেশ</li>
              <li>• সাপ্তাহিক প্রগ্রেস রিপোর্ট</li>
            </ul>
          </motion.div>
        </div>
      </div>
      // Add this section to the AboutUs component
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-purple-800 mb-12"
          >
            আমাদের শিক্ষকমন্ডলী
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
            {[
              {
                name: "হাসিবুল হাসান শান্ত",
                subject: "মার্কেটিং",
                qualification: "অনার্স, ঢাবি",
                image: "/images/shanto.jpg",
              },
              {
                name: "মোঃ শুভ",
                subject: "মার্কেটিং",
                qualification: "অনার্স, ঢাবি",
                image: "/images/shuvo.jpg",
              },
              {
                name: "শিক্ষক",
                subject: "ক্যামেসট্রি",
                qualification: "অনার্স, ঢাবি",
                image: "/images/teacherx.jpg",
              },
              {
                name: "এরফান হোসেন রিয়াজ",
                subject: "ইলেক্ট্রিক্যাল এন্ড ইলেকট্রনিক্স",
                qualification: "বিএস ইইই, ইউনিভার্সিটি অফ স্কলার্স",
                image: "/images/riaz.jpg",
              },
              {
                name: "ফয়সাল আহমেদ",
                subject: "কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং",
                qualification: "বিএস সিএসই, ইস্ট ওয়েস্ট ইউনিভার্সিটি",
                image: "/images/faisal.jpg",
              },
              {
                name: "নাহিন ইনতিশার",
                subject: "কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং",
                qualification:
                  "বিএস সিএসই, ইউনাইটেড ইন্টারন্যাশনাল ইউনিভার্সিটি",
                image: "/images/nahin.jpg",
              },
            ].map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-300 overflow-hidden shadow-lg p-4"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800">
                    {teacher.name}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {teacher.subject}
                  </p>
                  <p className="text-gray-600 mt-2">{teacher.qualification}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Additional Content - Values */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          আমাদের মূল্যবোধ
        </h2>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-16 bg-purple-600 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-purple-600 mb-3">উদ্ভাবন</h3>
            <p className="text-gray-600">
              আমরা নতুন সমাধান এবং পদ্ধতি খুঁজি যা আমাদের গ্রাহকদের চাহিদা পূরণ
              করে।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-purple-600 mb-3">দক্ষতা</h3>
            <p className="text-gray-600">
              আমরা সর্বোচ্চ মানের পণ্য ও সেবা সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              বিশ্বাসযোগ্যতা
            </h3>
            <p className="text-gray-600">
              আমরা সততা এবং স্বচ্ছতার সাথে কাজ করি, গ্রাহকদের সাথে বিশ্বাসযোগ্য
              সম্পর্ক গড়ে তুলি।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-purple-600 mb-3">সহযোগিতা</h3>
            <p className="text-gray-600">
              আমরা বিশ্বাস করি যে একসাথে কাজ করে আমরা আরও বেশি অর্জন করতে পারি।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
