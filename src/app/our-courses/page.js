"use client";
import React from "react";
import {
  FaUsers,
  FaBullseye,
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaFlask,
  FaCalculator,
  FaGlobeAmericas,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import EducationCenter from "@/components/ui/EducationCenter";

export default function AboutUs() {
  const courses = [
    {
      title: "৬ষ্ঠ শ্রেণি থেকে অষ্টম শ্রেণি",
      icon: <FaUsers className="text-4xl text-cyan-600" />,
      description: "মাধ্যমিক স্তরের জন্য কোর্স",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "অন্যান্য সকল বিষয়"],
      features: [
        "ছাত্র-শিক্ষক অনুপাত ১:১০",
        "বেসিক ক্লিয়ারেন্স ক্লাস",
        "অতিরিক্ত প্র্যাকটিস সেশন",
      ],
    },
    {
      title: "এসএসসি প্রস্তুতি",
      icon: <FaGraduationCap className="text-4xl text-cyan-600" />,
      description: "ক্লাস ৯-১০ এর জন্য সম্পূর্ণ কোর্স",
      subjects: [
        "পদার্থবিজ্ঞান",
        "রসায়ন",
        "জীববিজ্ঞান",
        "উচ্চতর গণিত",
        "সাধারন গণিত",
        "হিসাববিজ্ঞান",
        "ফিন্যান্স ও ব্যাংকিং",
        "ব্যবসায় শিক্ষা",
        "সাধারন বিজ্ঞান",
        "অর্থনীতি",
        "পৌরনীতি ও নাগরিকত্ব",
        "ভূগোল",
        "ইংরেজি",
      ],
      features: [
        "সাপ্তাহিক মডেল টেস্ট",
        "বিষয়ভিত্তিক বিশেষ ক্লাস",
        "গাইড লাইন বই সহ",
      ],
    },
    {
      title: "এইচএসসি প্রস্তুতি",
      icon: <FaBook className="text-4xl text-cyan-600" />,
      description: "ক্লাস ১১-১২ এর জন্য বিশেষায়িত কোর্স",
      subjects: [
        "পদার্থবিজ্ঞান",
        "রসায়ন",
        "জীববিজ্ঞান",
        "উচ্চতর গণিত",
        "সাধারন গণিত",
        "হিসাববিজ্ঞান",
        "ফিন্যান্স ও ব্যাংকিং",
        "ব্যবসায় শিক্ষা",
        "সাধারন বিজ্ঞান",
        "অর্থনীতি",
        "ভূগোল",
        "পৌরনীতি ও নাগরিকত্ব",
        "ইংরেজি",
      ],
      features: [
        "বোর্ড পরীক্ষার সিলেবাস অনুসরণ",
        "প্র্যাকটিক্যাল ল্যাব সুবিধা",
        "নিয়মিত অ্যাসাইনমেন্ট",
      ],
    },
    {
      title: "মেডিকেল ভর্তি প্রস্তুতি (upcoming)",
      icon: <FaFlask className="text-4xl text-cyan-600" />,
      description: "মেডিকেল কলেজ ভর্তি পরীক্ষার জন্য কোর্স",
      subjects: [
        "পদার্থবিজ্ঞান",
        "রসায়ন",
        "জীববিজ্ঞান",
        "ইংরেজি",
        "সাধারণ জ্ঞান",
      ],
      features: [
        "এমসিকিউ সলভিং টেকনিক",
        "নিয়মিত মডেল টেস্ট",
        "স্পেশাল মক টেস্ট সিরিজ",
      ],
    },
    {
      title: "বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি (upcoming)",
      icon: <FaGlobeAmericas className="text-4xl text-cyan-600" />,
      description: "বিভিন্ন বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার কোর্স",
      subjects: ["গণিত", "ইংরেজি", "সাধারণ জ্ঞান", "বাংলা", "মানসিক দক্ষতা"],
      features: [
        "বিশ্ববিদ্যালয় ভিত্তিক প্রস্তুতি",
        "পূর্ববর্তী বছরের প্রশ্ন ব্যাংক",
        "টাইম ম্যানেজমেন্ট ট্রেনিং",
      ],
    },
    {
      title: "ইঞ্জিনিয়ারিং প্রস্তুতি (upcoming)",
      icon: <FaLaptopCode className="text-4xl text-cyan-600" />,
      description: "বুয়েট ও প্রাইভেট বিশ্ববিদ্যালয় ভর্তি কোর্স",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "গণিত", "ইংরেজি"],
      features: [
        "বুয়েট প্যাটার্ন অনুসরণ",
        "স্পেশাল প্রোবলেম সলভিং ক্লাস",
        "ফিজিক্স ও ম্যাথ ওয়ার্কশপ",
      ],
    },
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-cyan-50">
      {/* Courses Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-24 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-1 bg-amber-500 rounded-full opacity-70"></div>
            <div className="absolute -top-12 left-1/4 w-3 h-3 bg-amber-500 rounded-full opacity-30"></div>
            <div className="absolute -top-20 right-1/3 w-5 h-5 bg-cyan-500 rounded-full opacity-20"></div>

            {/* Highlight Text (optional heading or badge) */}
            <motion.span className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4">
              কোর্স তালিকা
            </motion.span>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              আমাদের <span className="text-amber-500">কোর্স</span> সমূহ
            </h2>

            {/* Decorative line */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-40 bg-cyan-600 rounded"></div>
            </div>

            {/* Optional description */}
            <p className="text-gray-500 text-lg sm:text-xl italic">
              শিক্ষার্থীদের সাফল্যের জন্য সাজানো হয়েছে প্রতিটি কোর্স
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-cyan-500 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-cyan-100 p-4 rounded-full">
                      {course.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-800 mb-2 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {course.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      বিষয়সমূহ:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.subjects.map((subject, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                          <span className="text-gray-600">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      বিশেষ সুবিধা:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-500 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-6xl mx-auto px-6">
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

            {/* Optional label */}
            <motion.span
              variants={highlightAnim}
              className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4"
            >
              শিক্ষক প্যানেল
            </motion.span>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              আমাদের <span className="text-amber-500">শিক্ষকরা</span>
            </h2>

            <div className="flex justify-center mb-6">
              <div className="h-1 w-40 bg-cyan-600 rounded"></div>
            </div>

            <p className="text-gray-500 text-base sm:text-lg italic">
              অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ শিক্ষার্থীদের আলোকিত ভবিষ্যতের
              জন্য কাজ করছেন
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "মোঃ হাসিবুল ইসলাম (শান্ত)",
                subject: "মার্কেটিং বিভাগ, ব্যবসায় শিক্ষা অনুষদ",
                qualification: "ঢাকা বিশ্ববিদ্যালয়",
                image: "/images/shanto.jpg",
                bio: "৬ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "এফরান হোসেন রিয়াজ",
                subject: "ইলেক্ট্রিক্যাল এন্ড ইলেক্ট্রনিক্স ইঞ্জিনিয়ারিং (EEE)",
                qualification: "ইউনিভার্সিটি অফ স্কলার্স",
                image: "/images/riaz.jpg",
                bio: "৬ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "ফয়সাল আহমেদ",
                subject: "কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং (CSE)",
                qualification: "ইস্ট ওয়েস্ট ইউনিভার্সিটি",
                image: "/images/faisal.jpg",
                bio: "৫ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "সাজেদুল হক শুভ",
                subject: "একাউন্টিং বিভাগ, ব্যবসায় শিক্ষা অনুষদ",
                qualification: "ঢাকা বিশ্ববিদ্যালয়",
                image: "/images/shuvo.jpg",
                bio: "২ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "সাদাত হোসেন রানা",
                subject: "রসায়ন বিভাগ, বিজ্ঞান অনুষদ",
                qualification: "ঢাকা বিশ্ববিদ্যালয়",
                image: "/images/teacherx.jpg",
                bio: "৩ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "নাহিন ইনতিশার",
                subject: "কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং (CSE)",
                qualification: "ইউনাইটেড ইন্টারন্যাশনাল ইউনিভার্সিটি",
                image: "/images/nahin.jpg",
                bio: "১ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "সাবরিনা আকতার রিমি",
                subject: "ভাষাবিজ্ঞান বিভাগ, কলা অনুষদ",
                qualification: "ঢাকা বিশ্ববিদ্যালয়",
                image: "/images/teachery.jpg",
                bio: "১ বছর শিক্ষকতার অভিজ্ঞতা",
              },
              {
                name: "আয়েশা খাতুন",
                subject: "পালি এন্ড বুদ্ধিস্ট স্টাডিজ, কলা অনুষদ",
                qualification: "ঢাকা বিশ্ববিদ্যালয়",
                image: "/images/teachery.jpg",
                bio: "১ বছর শিক্ষকতার অভিজ্ঞতা",
              },
            ].map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border-cyan-500 overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black">
                    {teacher.name}
                  </h3>
                  <p className="text-black text-sm mt-2 ">{teacher.subject}</p>
                  <p className="text-cyan-500 text-md font-extrabold  mt-2">
                    {teacher.qualification}
                  </p>
                  <p className="text-gray-600 mt-3 text-xs">{teacher.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch and Class Schedule */}
      <EducationCenter />
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
