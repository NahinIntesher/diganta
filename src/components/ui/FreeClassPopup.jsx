// FreeClassPopup.jsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Award } from "lucide-react";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import Link from "next/link";

const FreeClassPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const scheduleData = [
    {
      grade: "৬ষ্ঠ - ৮ম শ্রেণী",
      date: "২৮ মে - ২৫ মে",
      icon: FaChalkboardTeacher,
    },
    {
      grade: "৯ম - ১০ম শ্রেণী",
      date: "২৬ মে - ২৮ মে",
      icon: FaGraduationCap,
    },
    {
      grade: "১১শ - ১২শ শ্রেণী",
      date: "২৯ মে - ৩১ মে",
      icon: Calendar,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Top decorative header */}
            <div className="bg-gradient-to-r from-cyan-700 to-cyan-500 h-16 flex items-center justify-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Award className="text-white mr-2 inline-block" size={28} />
                <h2 className="text-2xl font-bold text-white inline-block">
                  ফ্রি ক্লাস সময়সূচী
                </h2>
              </motion.div>
            </div>

            {/* Close button */}
            <button
              className="absolute top-3 right-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1"
              onClick={() => setIsOpen(false)}
            >
              <X className="text-black" size={20} />
            </button>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 text-center mb-6 font-medium">
                আমাদের বিশেষ ফ্রি ক্লাসগুলিতে অংশ নিন এবং আপনার শিক্ষাকে নতুন
                উচ্চতায় নিয়ে যান
              </p>

              <div className="space-y-5">
                {scheduleData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-cyan-50 rounded-lg border border-cyan-100"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.02, backgroundColor: "#e0f7fa" }}
                  >
                    <div className="bg-cyan-100 p-3 rounded-full">
                      <item.icon className="text-cyan-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.grade}
                      </h3>
                      <div className="flex items-center text-cyan-600">
                        <FaCalendarAlt className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                * সিটগুলি সীমিত। আজই যোগাযোগ করে আপনার স্থান নিশ্চিত করুন।
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FreeClassPopup;
