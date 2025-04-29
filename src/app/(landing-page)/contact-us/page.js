  "use client";
  import React from "react";
  import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaClock,
  } from "react-icons/fa";
  import { motion } from "framer-motion";

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  export default function ContactUs() {
    return (
      <div className="py-16 px-6 md:px-20 bg-purple-50">
        {/* Top Heading Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contactVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-purple-800 mb-4"
          >
            যোগাযোগ করুন
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-purple-600 max-w-2xl mx-auto text-lg"
          >
            যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন
          </motion.p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-800 mb-6">
              মেসেজ পাঠান
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">আপনার নাম</label>
                <input
                  type="text"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">ইমেইল ঠিকানা</label>
                <input
                  type="email"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">মেসেজ</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="আপনার মেসেজ লিখুন"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                পাঠান
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info 1 */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaPhoneAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  ফোন
                </h3>
                <p className="text-gray-700">০১৫২১৭৮১১৬৮</p>
                <p className="text-gray-700">০১৯১২৩৪৫৬৭৮</p>
              </div>
            </motion.div>

            {/* Info 2 */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  ঠিকানা
                </h3>
                <p className="text-gray-700">
                  মসজিদ সংলগ্ন, মুসলিম নগর জিরো পয়েন্ট
                  <br />
                  মাতুয়াইল, ডেমরা, ঢাকা - ১৩৬২
                </p>
              </div>
            </motion.div>

            {/* Info 3 */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  ইমেইল
                </h3>
                <p className="text-gray-700">
                  info.diganta.couchingcenter.edu@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Info 4 */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaClock className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  সময়সূচী
                </h3>
                <p className="text-gray-700">সকাল ৮:০০ - রাত ১০:০০</p>
                <p className="text-gray-700">শুক্রবার বন্ধ</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }
