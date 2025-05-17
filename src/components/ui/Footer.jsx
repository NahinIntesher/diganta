"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Digonto Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">দিগন্ত ইনফরমেশন</h2>
          <p className="text-gray-500 text-sm">
            দিগন্ত পেরিয়ে সম্ভাবনার পথে - সেবার মাধ্যমে নতুন দিগন্তের সন্ধান।
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">সেবাসমূহ</h2>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <a href="/our-courses" className="hover:underline">
                ৬ষ্ঠ - ৮ম শ্রেণী
              </a>
            </li>
            <li>
              <a href="/our-courses" className="hover:underline">
                ৯ম - ১০ম শ্রেণী সকল বিভাগ
              </a>
            </li>
            <li>
              <a href="/our-courses" className="hover:underline">
                একাদশ ও দ্বাদশ শ্রেণী শুধু কমার্স বিভাগ
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">রিসোর্স</h2>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>তথ্য কেন্দ্র</li>
            <li>ব্লগ</li>
            <li>কেস স্টাডি</li>
            <li>ফ্রি রিসোর্স</li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">দিগন্ত কোচিং</h2>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <a href="/about-us" className="hover:underline">
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                যোগাযোগ
              </a>
            </li>
            <li>
              <a href="/our-services" className="hover:underline">
                আমাদের সেবা
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} Diganta Coaching Center. All rights
        reserved.
      </div>
    </footer>
  );
}
