import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FreeClassAnnouncement({ month }) {
  const FloatingCard = ({ children, delay = 0 }) => {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0, rotate: -5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        whileHover={{
          y: -10,
          rotate: [0, 2, -2, 0],
          transition: { duration: 0.8 },
        }}
        transition={{
          delay,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-12 text-center">
      <p className="text-cyan-600 font-semibold mb-2">বিশেষ ঘোষণা</p>
      <p className="text-2xl font-bold text-gray-800 mb-3">
        <FaQuoteLeft
          className="inline-block text-amber-500 opacity-40 mr-2 mb-1"
          size={16}
        />
        <span className="text-amber-500 font-bold">{month}</span>
        <FaQuoteRight
          className="inline-block text-amber-500 opacity-40 ml-2 mb-1"
          size={16}
        />{" "}
        মাসে ফ্রি ক্লাস!
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto">
        কিছু সময় পর পরই আমাদের বিশেষ ফ্রি ক্লাস থাকতে পারে। আপডেট পেতে আমাদের
        সাথে যোগাযোগে থাকুন অথবা ফেসবুকে ফলো করুন।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[
          {
            grade: "৬ষ্ঠ - ৮ম শ্রেণীর ফ্রি ক্লাস",
            date: "২০২৫-০৫-২৪/২০২৫-০৫-২৫", // ISO format for calendar
            displayDate: "২৪ মে - ২৫ মে",
            icon: FaChalkboardTeacher,
          },
          {
            grade: "৯ম - ১০ম শ্রেণীর ফ্রি ক্লাস",
            date: "২০২৫-০৫-২৬/২০২৫-০৫-২৮",
            displayDate: "২৬ মে - ২৮ মে",
            icon: FaGraduationCap,
          },
          {
            grade: "১১দশ - ১২দশ শ্রেণীর ফ্রি ক্লাস",
            date: "২০২৫-০৫-২৯/২০২৫-০৫-৩১",
            displayDate: "২৯ মে - ৩১ মে",
            icon: FaUniversity,
          },
        ].map((schedule, index) => {
          const [startDate, endDate] = schedule.date
            .split("/")
            .map((d) => d.replace(/-/g, ""));
          const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            schedule.grade
          )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
            "অ্যাডমিশন/ভর্তি কার্যক্রমের সময়সূচী। বিস্তারিত জানতে যোগাযোগ করুন।"
          )}&sf=true&output=xml`;

          return (
            <FloatingCard key={index} delay={index * 0.2}>
              <div className="bg-cyan-50 p-8 rounded-xl shadow-md border border-cyan-100 text-center">
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="bg-cyan-600 p-4 rounded-full text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <schedule.icon className="text-2xl" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {schedule.grade}
                </h3>
                <div className="flex items-center justify-center text-cyan-600 mb-4">
                  <FaRegClock className="mr-2" />
                  <span className="font-semibold">{schedule.displayDate}</span>
                </div>
                <motion.a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-block hover:bg-amber-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ক্যালেন্ডারে মার্ক করে রাখুন
                </motion.a>
              </div>
            </FloatingCard>
          );
        })}
      </div>
    </div>
  );
}
