"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBookOpen,
  FaUserGraduate,
  FaChartLine,
  FaLaptop,
  FaChalkboardTeacher,
  FaUserFriends,
  FaAward,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={serviceVariants}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white border-t-4 border-cyan-600 rounded-lg p-8 shadow-lg flex flex-col justify-between transition-all duration-300 h-full"
    >
      <div>
        <div className="mb-6 flex items-center">
          <div className="bg-cyan-50 p-4 rounded-full text-cyan-600 mr-4">
            {<service.icon size={28} />}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
        </div>
        <ul className="text-gray-700 space-y-3 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-cyan-600 mr-2 mt-1">•</span>
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-gray-600 text-sm mb-4 italic border-l-2 border-cyan-200 pl-3">
          {service.description}
        </p>
        <motion.div
          className="mt-4 text-cyan-600 font-medium flex items-center cursor-pointer"
          animate={{ x: isHovered ? 5 : 0 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function OurServices() {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white to-cyan-50">
      {/* Header with decorative elements */}
      <div className="text-center mb-20 max-w-4xl mx-auto relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-2 bg-cyan-500 rounded-full opacity-50 mb-2" />

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
        >
          আমাদের <span className="text-cyan-600">সেবাসমূহ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mx-auto text-lg leading-relaxed"
        >
          দিগন্ত কোচিং সেন্টার একাডেমিক, ভর্তি, উন্নয়ন ও অনলাইন শিক্ষার
          সমন্বয়ে শিক্ষার্থীদের পূর্ণতা অর্জনে সহায়তা করে। আমরা বিশ্বাস করি,
          সঠিক পরিকল্পনা ও অনুশীলনই সাফল্যের মূল চাবিকাঠি।
        </motion.p>

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-1 bg-cyan-500 rounded-full opacity-70" />
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>

      {/* Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-32 text-center bg-cyan-700 text-white p-12 rounded-2xl max-w-5xl mx-auto shadow-xl relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20" />

        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          আপনার সফলতার যাত্রা আজই শুরু করুন!
        </h2>
        <p className="text-cyan-100 mb-8 max-w-xl mx-auto">
          আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী আপনার সাফল্যের যাত্রায় সঙ্গী হতে প্রস্তুত।
          আজই যোগাযোগ করুন এবং আপনার লক্ষ্য অর্জনের পথে এগিয়ে যান।
        </p>
        <Link
          className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 inline-flex items-center"
          href="/contact-us"
        >
          যোগাযোগ করুন
          <FaArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </section>
  );
}

const services = [
  {
    icon: FaBookOpen,
    title: "একাডেমিক ক্লাস",
    features: [
      "ক্লাস ৬-১২ এর জন্য বিষয়ভিত্তিক ক্লাস",
      "বিশেষ টপিক ও দুর্বল অধ্যায়ের উপর ক্লাস",
      "নিয়মিত মডেল টেস্ট ও বিশ্লেষণ",
      "ব্যক্তিগত সমস্যা সমাধান সেশন",
      "প্রতিদিনের হোমওয়ার্ক এবং ফলোআপ",
      "সাপ্তাহিক অভিভাবক রিপোর্ট",
      "লাইভ ও রেকর্ডেড ক্লাস সাপোর্ট",
    ],
    description:
      "শিক্ষার্থীদের প্রতিটি অধ্যায় ভালোভাবে আয়ত্ত করানোর জন্য প্রতিদিনের পরিকল্পনা অনুযায়ী ক্লাস নেয়া হয়।",
  },
  {
    icon: FaAward,
    title: "পুরস্কার ও অনুপ্রেরণা",
    features: [
      "মেধাবী শিক্ষার্থীদের সম্মাননা",
      "সেরা শিক্ষার্থীদের পুরস্কার প্রদান",
      "মাইলস্টোন অর্জনের জন্য রিওয়ার্ড সিস্টেম",
      "সাপ্তাহিক ও মাসিক টপ পারফর্মার রিওয়ার্ড",
      "উৎসাহমূলক কর্মশালা ও সেমিনার",
      "সফলতার গল্প শেয়ার সেশন",
      "নিজস্ব ক্রেস্ট এবং সার্টিফিকেট প্রদান",
    ],
    description:
      "ছাত্রছাত্রীদের সাফল্যের প্রতি ভালোবাসা জাগাতে আমরা পুরস্কার ও অনুপ্রেরণা দিয়ে থাকি।",
  },
  {
    icon: FaChartLine,
    title: "বিশেষ উন্নয়ন কোর্স",
    features: [
      "দুর্বল শিক্ষার্থীদের জন্য উন্নয়নমূলক প্রোগ্রাম",
      "আত্মবিশ্বাস গড়ে তোলার স্পেশাল কোর্স",
      "রিসিটেশন ও সমস্যা সমাধান ক্লাস",
      "ভয় কাটানোর জন্য মানসিক কাউন্সেলিং",
      "ভিন্ন ধারার অনুশীলন প্রশ্ন",
      "ইন্ডিভিজুয়াল সাপোর্ট প্ল্যান (ISP)",
      "প্রগ্রেস রিপোর্ট প্রদান",
    ],
    description:
      "বিশেষ কোর্সের মাধ্যমে আমরা শিক্ষার্থীদের দুর্বলতা কাটিয়ে সাফল্যের দিকে এগিয়ে নিয়ে যাই।",
  },
  {
    icon: FaLaptop,
    title: "অনলাইন শিক্ষাসেবা",
    features: [
      "লাইভ ক্লাস ও রেকর্ডেড ভিডিও লেকচার",
      "মোবাইল ও ডেস্কটপ থেকে অ্যাক্সেস",
      "২৪ ঘণ্টা টিচার সাপোর্ট",
      "ডিজিটাল নোট ও এক্সট্রা রিসোর্স",
      "অ্যাসাইনমেন্ট ও সাবমিশন ট্র্যাকিং",
      "রেগুলার অনলাইন মডেল টেস্ট",
      "প্রকৃত সময় অনুযায়ী টাইমলাইন ফলোআপ",
    ],
    description:
      "বাসায় থেকেই প্রফেশনাল গাইডলাইনের সাথে পড়ার সুযোগ পাবে শিক্ষার্থীরা।",
  },
  {
    icon: FaUserFriends,
    title: "ক্যারিয়ার কাউন্সেলিং",
    features: [
      "ব্যক্তিগত ক্যারিয়ার পরিকল্পনা",
      "ক্লাসভিত্তিক ভবিষ্যৎ পরিকল্পনার সেশন",
      "ভর্তি কোর্স চয়ন করার গাইডলাইন",
      "ভবিষ্যৎ চাকরি ও স্কিল রিকোয়্যারমেন্ট বিশ্লেষণ",
      "বৃত্তি ও উচ্চশিক্ষা পরামর্শ",
      "মক ইন্টারভিউ এবং রিজিউমে প্রস্তুতি",
      "মেন্টরশিপ প্রোগ্রাম",
    ],
    description:
      "শিক্ষার্থীরা যাতে তাদের ক্যারিয়ার সঠিক পথে গড়তে পারে, তার জন্য আলাদা মেন্টরশিপ সাপোর্ট দেয়া হয়।",
  },
  {
    icon: FaHeadset,
    title: "ফিডব্যাক ও সাপোর্ট সেন্টার",
    features: [
      "২৪/৭ শিক্ষার্থী সাপোর্ট হটলাইন",
      "প্রতিদিনের প্রশ্ন উত্তর সেশন",
      "অনলাইন চ্যাট সাপোর্ট সার্ভিস",
      "ব্যক্তিগত সমস্যা সমাধান টিম",
      "টেকনিক্যাল সহায়তা",
      "পরীক্ষা/রেজাল্ট সংক্রান্ত সাপোর্ট",
      "পরিবারের সাথে নিয়মিত যোগাযোগ ব্যবস্থা",
    ],
    description:
      "শিক্ষার্থীদের যে কোনো একাডেমিক বা টেকনিক্যাল সমস্যা সমাধানে আমাদের টিম সদা প্রস্তুত।",
  },
  {
    icon: FaChalkboardTeacher,
    title: "স্কিল ডেভেলপমেন্ট কোর্স (upcoming)",
    features: [
      "পাবলিক স্পিকিং ও কমিউনিকেশন স্কিল",
      "লিডারশিপ ও টিমওয়ার্ক ট্রেনিং",
      "ক্রিটিক্যাল থিঙ্কিং ও সমস্যা সমাধান দক্ষতা",
      "টাইম ম্যানেজমেন্ট ও স্ট্রেস ম্যানেজমেন্ট",
      "প্রেজেন্টেশন স্কিল উন্নয়ন",
      "রিসার্চ এবং রিপোর্ট লেখার কোর্স",
      "ইংরেজি দক্ষতা উন্নয়ন",
    ],
    description:
      "শুধু পড়াশোনা নয়, বাস্তব জীবনের জন্য প্রয়োজনীয় স্কিলও গড়ে তোলা হয়।",
  },
  {
    icon: FaUserGraduate,
    title: "ভর্তি প্রস্তুতি (upcoming)",
    features: [
      "মেডিকেল ও ইঞ্জিনিয়ারিং ভর্তি কোচিং",
      "বিশ্ববিদ্যালয় ভর্তি টার্গেট কোর্স",
      "প্রথম পত্র/দ্বিতীয় পত্র আলাদা প্রস্তুতি",
      "পুরো সিলেবাসের উপর অনুশীলন",
      "স্পট টেস্ট ও সিমুলেশন পরীক্ষা",
      "ভর্তি পরামর্শ ও ক্যারিয়ার গাইডলাইন",
      "পূর্ববর্তী প্রশ্নব্যাংক বিশ্লেষণ",
    ],
    description:
      "ভর্তি পরীক্ষায় শতভাগ সফলতার জন্য আমরা টার্গেট নির্ভর প্রস্তুতি দেই।",
  },
];
