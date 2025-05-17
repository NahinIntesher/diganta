"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  AtSign,
  FileText,
} from "lucide-react";

import { motion } from "framer-motion";
import DetailSubmittingForm from "@/components/ui/DetailSubmittingForm";
export default function ContactUs() {
  const [hovered, setHovered] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="text-cyan-600" size={22} />,
      title: "ফোন",
      content: ["০১৮৬১৫৭৫০২৪", "০১৮১৫৮০৮২৯১"],
    },
    {
      id: 2,
      icon: <MapPin className="text-cyan-600" size={22} />,
      title: "ঠিকানা",
      content: [
        "মুসলিম নগর (মদিনা চত্ত্বর জামে মসজিদ সংলগ্ন),",
        "মাতুয়াইল, ডেমরা, ঢাকা - ১৩৬২",
      ],
    },
    {
      id: 3,
      icon: <Mail className="text-cyan-600" size={22} />,
      title: "ইমেইল",
      content: ["info.diganta.coachingcenter@gmail.com"],
    },
  ];

  return (
    <div className="py-20 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-white  to-cyan-50 min-h-screen">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20 mt-10 max-w-4xl mx-auto relative px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-1 bg-amber-500 rounded-full opacity-70"></div>
        <div className="absolute -top-12 left-1/4 w-3 h-3 bg-amber-500 rounded-full opacity-30"></div>
        <div className="absolute -top-20 right-1/3 w-5 h-5 bg-cyan-500 rounded-full opacity-20"></div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-700 to-cyan-900 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          আমাদের সাথে যোগাযোগ করুন
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-cyan-700 mx-auto text-lg" variants={fadeInUp}>
          যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সবসময়
          আপনাকে সাহায্য করতে প্রস্তুত।
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Info Cards */}
        <div
          className="lg:col-span-2 space-y-6"
          style={{
            opacity: 0,
            transform: "translateX(-30px)",
            animation: "slideInLeft 0.8s ease-out 0.6s forwards",
          }}
        >
          {contactInfo.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`bg-white p-6 rounded-xl shadow-md flex items-start border-l-4 border-cyan-500 transition-all duration-300 ${hovered === item.id
                  ? "shadow-lg shadow-cyan-100 border-cyan-600 transform -translate-y-1"
                  : ""
                }`}
            >
              <div
                className={`p-3 rounded-full mr-5 transition-all duration-300 ${hovered === item.id ? "bg-cyan-100" : "bg-cyan-50"
                  }`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-2">
                  {item.title}
                </h3>
                {item.content.map((line, idx) => (
                  <p key={idx} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Map Preview */}
          <a
            href="https://maps.app.goo.gl/JKxakQrEXtyXsfe16"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-cyan-200 p-4 rounded-xl shadow-md mt-8 overflow-hidden block cursor-pointer hover:shadow-lg hover:border-cyan-500 transition-all group"
            style={{
              background: `linear-gradient(135deg, #f0fdff 0%, #ffffff 100%)`,
            }}
          >
            <div className="h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-50 opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10 text-center text-teal-800 p-4">
                <MapPin
                  size={32}
                  className="mx-auto mb-3 text-teal-600 group-hover:text-teal-700 transition-colors"
                />
                <p className="font-medium mb-2">
                  মুসলিম নগর (মদিনা চত্ত্বর জামে মসজিদ সংলগ্ন),
                </p>
                <p className="font-medium mb-2">
                   মাতুয়াইল, ডেমরা, ঢাকা - ১৩৬২
                </p>
                <div className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded-full transform group-hover:scale-105 transition-transform">
                  <p className="text-sm font-medium">ম্যাপ দেখতে ক্লিক করুন</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div
          className="lg:col-span-3 bg-gradient-to-br from-white via-cyan-50 to-white p-8 md:p-10 rounded-3xl shadow-xl border border-cyan-200"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            animation: "slideUp 0.8s ease-out 0.8s forwards",
            boxShadow: "0 10px 30px -5px rgba(0, 166, 204, 0.1)",
          }}
        >
          <div className="relative mb-8 pb-4 border-b border-cyan-100">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-900 bg-clip-text text-transparent mb-2 tracking-tight">
              আমাদের মেসেজ দিন
            </h3>
            <p className="text-gray-600 text-base">
              আপনার প্রশ্ন বা মতামত আমাদের জানান
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"></div>
          </div>

          {submitStatus && (
            <div
              style={{
                opacity: 0,
                animation: "fadeIn 0.5s ease-out forwards",
              }}
              className={`mb-6 p-4 rounded-xl flex items-start ${submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
                }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle
                  className="mr-3 flex-shrink-0 mt-0.5 text-green-600"
                  size={20}
                />
              ) : (
                <AlertCircle
                  className="mr-3 flex-shrink-0 mt-0.5 text-red-600"
                  size={20}
                />
              )}
              <span>{submitStatus.message}</span>
            </div>
          )}

          <DetailSubmittingForm />
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
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
