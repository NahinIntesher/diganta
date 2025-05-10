"use client";
import Link from "next/link";
import { useState } from "react";

export default function EducationCenter() {
  const [activeTab, setActiveTab] = useState("schedule");

  // Weekly schedule data from the images
  const weeklySchedule = [
    {
      day: "শনিবার",
      slots: [
        {
          time: "বিকাল ৪টা - বিকাল ৫টা",
          subject: "পৌরনীতি",
          group: "মানবিক",
          color: "text-orange-500",
          grade: "১০ম",
        },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          group: "ব্যবসায় শিক্ষা",
          color: "text-teal-500",
          subject: "হিসাববিজ্ঞান",
          teacher: "শান্ত",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          group: "বিজ্ঞান",
          color: "text-indigo-500",
          subject: "রসায়ন",
          teacher: "ফয়সাল",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          group: "বিজ্ঞান",
          color: "text-blue-500",
          subject: "পদার্থবিজ্ঞান",
          teacher: "নাহিন",
          grade: "১০ম",
        },
        {
          time: "রাত ৮টা - রাত ৯টা",
          group: "ব্যবসায় শিক্ষা",
          color: "text-yellow-500",
          subject: "ব্যবসায় উদ্যোগ",
          teacher: "শুভ",
          grade: "১০ম",
        },
      ],
    },
    {
      day: "রবিবার",
      slots: [
        {
          time: "বিকাল ৪টা - বিকাল ৫টা",
          group: "মানবিক",
          color: "text-pink-500",
          subject: "ভূগোল",
          teacher: "",
          grade: "৯ম",
        },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          group: "ব্যবসায় শিক্ষা",
          color: "text-teal-500",
          subject: "ব্যবসায় উদ্যোগ",
          teacher: "শান্ত",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          group: "বিজ্ঞান",
          color: "text-indigo-500",
          subject: "পদার্থবিজ্ঞান",
          teacher: "নাহিন",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          group: "বিজ্ঞান",
          color: "text-blue-500",
          subject: "উচ্চতর গণিত",
          teacher: "রিয়াজ",
          grade: "১০ম",
        },
        {
          time: "রাত ৮টা - রাত ৯টা",
          group: "ব্যবসায় শিক্ষা ও মানবিক",
          color: "text-orange-500",
          subject: "সাধারণ বিজ্ঞান",
          teacher: "রিয়াজ",
          grade: "১০ম",
        },
      ],
    },
    {
      day: "সোমবার",
      slots: [
        {
          time: "বিকাল ৪টা - বিকাল ৫টা",
          color: "text-pink-500",
          group: "মানবিক",
          subject: "অর্থনীতি",
          teacher: "",
          grade: "৯ম",
        },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          color: "text-teal-500",
          group: "ব্যবসায় শিক্ষা",
          subject: "ফিন্যান্স ও ব্যাংকিং",
          teacher: "শান্ত",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          color: "text-indigo-500",
          group: "বিজ্ঞান",
          subject: "উচ্চতর গণিত",
          teacher: "রিয়াজ",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          color: "text-blue-500",
          group: "বিজ্ঞান",
          subject: "জীববিজ্ঞান",
          teacher: "রানা",
          grade: "১০ম",
        },
        {
          time: "রাত ৮টা - রাত ৯টা",
          color: "text-yellow-500",
          group: "ব্যবসায় শিক্ষা",
          subject: "ফিন্যান্স ও ব্যাংকিং",
          teacher: "শুভ",
          grade: "১০ম",
        },
      ],
    },
    {
      day: "মঙ্গলবার",
      slots: [
        {
          time: "বিকাল ৪টা - সন্ধ্যা ৫টা",
          group: "",
          subject: "",
          teacher: "",
          grade: "",
        },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          color: "text-pink-500",
          group: "মানবিক",
          subject: "পৌরনীতি",
          teacher: "",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          color: "text-blue-500",
          group: "বিজ্ঞান",
          subject: "রসায়ন",
          teacher: "রানা",
          grade: "১০ম",
        },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          color: "text-orange-500",
          group: "ব্যবসায় শিক্ষা ও মানবিক",
          subject: "সাধারণ বিজ্ঞান",
          teacher: "নাহিন",
          grade: "১০ম",
        },
        {
          time: "রাত ৮টা - রাত ৯টা",
          color: "text-indigo-500",
          group: "বিজ্ঞান",
          subject: "জীববিজ্ঞান",
          teacher: "ফয়সাল",
          grade: "৯ম",
        },
      ],
    },
    {
      day: "বুধবার",
      slots: [
        {
          time: "বিকাল ৪টা - সন্ধ্যা ৫টা",
          group: "",
          subject: "",
          teacher: "",
          grade: "",
        },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          color: "text-orange-500",
          group: "মানবিক",
          subject: "অর্থনীতি",
          teacher: "",
          grade: "১০ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          color: "text-pink-500",
          group: "মানবিক",
          subject: "অর্থনীতি",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          color: "text-indigo-500",
          group: "বিজ্ঞান ও ব্যবসায় শিক্ষা",
          subject: "সাধারণ গণিত",
          teacher: "রিয়াজ",
          grade: "৯ম",
        },
        {
          time: "রাত ৮টা - রাত ৯টা",
          color: "text-yellow-500",
          group: "ব্যবসায় শিক্ষা",
          subject: "হিসাববিজ্ঞান",
          teacher: "শুভ",
          grade: "১০ম",
        },
      ],
    },
    {
      day: "বৃহস্পতিবার",
      slots: [
        {
          time: "বিকাল ৪টা - সন্ধ্যা ৫টা",
          group: "",
          subject: "",
          teacher: "",
          grade: "",
        },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          color: "text-orange-500",
          group: "মানবিক",
          subject: "ভূগোল",
          teacher: "",
          grade: "১০ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          color: "text-teal-500",
          group: "ব্যবসায় শিক্ষা",
          subject: "সাধারণ বিজ্ঞান",
          teacher: "রিয়াজ",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          color: "text-indigo-500",
          group: "বিজ্ঞান ও ব্যবসায় শিক্ষা",
          subject: "সাধারণ গণিত",
          teacher: "নাহিন",
          grade: "১০ম",
        },
      ],
    },
    {
      day: "শুক্রবার",
      slots: [
        {
          time: "সকাল ৮টা - ১১টা",
          color: "text-pink-500",
          group: "মানবিক",
          subject: "ইংরেজি",
          teacher: "",
          grade: "৯ম/১০ম মানবিক",
        },
        {
          time: "বিকাল ৪টা - সন্ধ্যা ৬টা",
          color: "text-yellow-500",
          group: "ব্যবসায় শিক্ষা",
          subject: "ব্যবসায় শিক্ষা",
          teacher: "শুভ",
          grade: "১০ম",
          note: "Imp Sub",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৮টা",
          color: "text-teal-500",
          group: "ব্যবসায় শিক্ষা",
          subject: "ব্যবসায় শিক্ষা",
          teacher: "শান্ত",
          grade: "৯ম",
          note: "Imp Sub",
        },
        {
          time: "সন্ধ্যা ৮টা - রাত ৯টা",
          color: "text-blue-500",
          group: "বিজ্ঞান",
          subject: "বিজ্ঞান",
          teacher: "ফয়সাল",
          grade: "১০ম",
          note: "Imp Sub",
        },
        {
          time: "রাত ৯টা - রাত ১০টা",
          color: "text-indigo-500",
          group: "বিজ্ঞান",
          subject: "বিজ্ঞান",
          teacher: "রানা",
          grade: "৯ম",
          note: "Imp Sub",
        },
      ],
    },
  ];

  // Morning class schedule data from Image 2
  const morningClasses = [
    {
      day: "শনিবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "শুভ" },
        { time: "৯ - ১০ AM", subject: "শুভ" },
        { time: "১০ - ১১ AM", subject: "শুভ" },
      ],
    },
    {
      day: "রবিবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "রিয়াজ" },
        { time: "৯ - ১০ AM", subject: "রিয়াজ" },
        { time: "১০ - ১১ AM", subject: "রিয়াজ" },
      ],
    },
    {
      day: "সোমবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "নাহিন" },
        { time: "৯ - ১০ AM", subject: "নাহিন" },
        { time: "১০ - ১১ AM", subject: "নাহিন" },
      ],
    },
    {
      day: "মঙ্গলবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "ফয়সাল" },
        { time: "৯ - ১০ AM", subject: "ফয়সাল" },
        { time: "১০ - ১১ AM", subject: "ফয়সাল" },
      ],
    },
    {
      day: "বুধবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "ক্লাস নেই", noClass: true },
        { time: "৯ - ১০ AM", subject: "ক্লাস নেই", noClass: true },
        { time: "১০ - ১১ AM", subject: "ক্লাস নেই", noClass: true },
      ],
    },
    {
      day: "বৃহস্পতিবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "নাহিন" },
        { time: "৯ - ১০ AM", subject: "নাহিন" },
        { time: "১০ - ১১ AM", subject: "নাহিন" },
      ],
    },
    {
      day: "শুক্রবার",
      periods: [
        { time: "৮ - ৯ AM", subject: "রিয়াজ" },
        { time: "৯ - ১০ AM", subject: "রিয়াজ" },
        { time: "১০ - ১১ AM", subject: "রিয়াজ" },
      ],
    },
  ];

  // Fee structure data from the imagess
  const feeStructure = {
    juniorClasses: [
      { level: "ক্লাস ৬–৭ (সকল বিষয়)", fee: "২,০০০ টাকা" },
      { level: "ক্লাস ৮ (সকল বিষয়)", fee: "২,২০০ টাকা" },
    ],
    ssc: {
      title: "এসএসসি (৯ম - ১০ম শ্রেণি)",
      individual: [
        { subjects: "১ বিষয়", fee: "১,০০০ টাকা" },
        { subjects: "২ বিষয়", fee: "১,৭০০ টাকা" },
        { subjects: "৩ বিষয়", fee: "২,০০০ টাকা" },
      ],
      fullPackage: [
        { group: "বিজ্ঞান", fee: "৩,০০০ টাকা" },
        { group: "বাণিজ্য", fee: "২,৫০০ টাকা" },
        { group: "মানবিক", fee: "২,৫০০ টাকা" },
      ],
    },
    hsc: {
      title: "এইচএসসি (১১শ - ১২শ শ্রেণি)",
      individual: [
        { subjects: "১ বিষয়", fee: "১,২০০ টাকা" },
        { subjects: "২ বিষয়", fee: "২০০০ টাকা" },
      ],
      fullPackage: [
        { group: "বিজ্ঞান", fee: "৩,৫০০ টাকা" },
        { group: "বাণিজ্য", fee: "৩,০০০ টাকা" },
        { group: "মানবিক", fee: "২,৫০০ টাকা" },
      ],
    },
  };

  // Function to get color based on group and grade
  const getSubjectColor = (slot) => {
    // If a color is already specified, use it
    if (slot.color) {
      return slot.color;
    }

    // Otherwise, determine based on group and grade
    if (slot.group === "বিজ্ঞান" && slot.grade === "৯ম") {
      return "text-indigo-500";
    } else if (slot.group === "বিজ্ঞান" && slot.grade === "১০ম") {
      return "text-blue-500";
    } else if (slot.group === "ব্যবসায় শিক্ষা" && slot.grade === "৯ম") {
      return "text-teal-500";
    } else if (slot.group === "ব্যবসায় শিক্ষা" && slot.grade === "১০ম") {
      return "text-yellow-500";
    } else if (slot.group === "মানবিক" && slot.grade === "৯ম") {
      return "text-pink-500";
    } else if (slot.group === "মানবিক" && slot.grade === "১০ম") {
      return "text-orange-500";
    } else {
      return "text-gray-800"; // Default color
    }
  };

  return (
    <div className="min-h-screen py-6 md:py-12 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-2">
            শিক্ষা কেন্দ্র
          </h1>
          <div className="h-1 w-20 sm:w-24 bg-cyan-600 mx-auto"></div>
          <p className="mt-3 md:mt-4 text-gray-600 text-sm sm:text-lg">
            আপনার সাফল্যের যাত্রায় আমরা সঙ্গী
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6 md:mb-8 px-2">
          <div className="inline-flex rounded-lg bg-gray-100 p-1 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-200 ${
                activeTab === "schedule"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              ব্যাচ সময়সূচী
            </button>
            <button
              onClick={() => setActiveTab("fees")}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-200 ${
                activeTab === "fees"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              কোর্স ফি
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden mx-2 sm:mx-0">
          {/* Schedule Section */}
          {activeTab === "schedule" && (
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-800 mb-6 sm:mb-8">
                ব্যাচ সময়সূচী
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {/* Morning Batch */}
                <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all hover:shadow-md duration-300 border border-green-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 text-green-600 shadow-sm">
                        <span className="text-lg sm:text-xl">☀️</span>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                          সকাল ব্যাচ (৬ষ্ঠ - ৮ম শ্রেণি)
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          সকাল ৮টা - ১১টা ক্লাস (১ ঘণ্টা করে তিনটি ব্যাচ)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-green-800">
                            দিন
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-green-800">
                            ৮-৯ AM
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-green-800">
                            ৯-১০ AM
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-green-800">
                            ১০-১১ AM
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {morningClasses.map((day, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-green-50/30" : "bg-white"
                            }
                          >
                            <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
                              {day.day}
                            </td>
                            {day.periods.map((period, idx) => (
                              <td
                                key={idx}
                                className={`px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-800"
                                > 
                                period.subject
                             </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Afternoon/Evening Batch */}
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all hover:shadow-md duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 text-blue-600 shadow-sm">
                        <span className="text-lg sm:text-xl">🌙</span>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                          বিকাল ও সন্ধ্যা ব্যাচ (৯ম - ১০ম শ্রেণি)
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          বিষয়ভিত্তিক ক্লাস সময়সূচী
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap">
                            বার/সময়
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap">
                            বিকাল ৪টা - বিকাল ৫টা
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap">
                            বিকাল ৫টা - সন্ধ্যা ৬টা
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap">
                            সন্ধ্যা ৬টা - সন্ধ্যা ৭টা
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap">
                            সন্ধ্যা ৭টা - রাত ৮টা
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap">
                            রাত ৮টা - রাত ৯টা
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {weeklySchedule.map((day, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-blue-50/30" : "bg-white"
                            }
                          >
                            <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
                              {day.day}
                            </td>
                            {day.slots.map((slot, idx) => (
                              <td
                                key={idx}
                                className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm"
                              >
                                {slot.subject ? (
                                  <span
                                    className={`inline-block ${getSubjectColor(
                                      slot
                                    )}`}
                                  >
                                    {slot.subject}
                                    <p className="text-xxs xs:text-xs text-gray-500">
                                      ({slot.grade} {slot.group})
                                    </p>
                                    {slot.note && (
                                      <p className="text-xxs xs:text-xs text-green-600">
                                        ({slot.note})
                                      </p>
                                    )}
                                    {slot.teacher && (
                                      <p className="text-xxs xs:text-xs text-gray-500">
                                        ({slot.teacher} স্যার)
                                      </p>
                                    )}
                                  </span>
                                ) : (
                                  <span className="text-gray-400 text-xs">
                                    ক্লাস নেই
                                  </span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fees Section */}
          {activeTab === "fees" && (
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-800 mb-6 sm:mb-8">
                কোর্স ফি
              </h2>

              {/* Junior Classes */}
              <div className="mb-6 sm:mb-8 bg-green-100 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all hover:shadow-md duration-300 border border-green-100">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-3 sm:mb-4 border-b pb-2">
                  জুনিয়র ক্লাস
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {feeStructure.juniorClasses.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="p-4 sm:p-6">
                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                          <span className="text-xs sm:text-sm text-gray-700">
                            {item.level}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SSC Classes */}
              <div className="mb-6 sm:mb-8 bg-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all hover:shadow-md duration-300 border border-purple-100">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-3 sm:mb-4 border-b pb-2">
                  {feeStructure.ssc.title}
                </h3>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-medium text-sm sm:text-base text-cyan-700 mb-2 sm:mb-3">
                    বিষয়ভিত্তিক ফি
                  </h4>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm p-4 sm:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      {feeStructure.ssc.individual.map((item, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center ${
                            index !== feeStructure.ssc.individual.length - 1
                              ? "border-b pb-2"
                              : ""
                          }`}
                        >
                          <span className="text-xs sm:text-sm text-gray-700">
                            {item.subjects}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm sm:text-base text-cyan-700 mb-2 sm:mb-3">
                    পূর্ণাঙ্গ প্যাকেজ
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {feeStructure.ssc.fullPackage.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="bg-cyan-700 text-white p-2 sm:p-3 text-center">
                          <h3 className="font-semibold text-sm sm:text-base">
                            {item.group}
                          </h3>
                        </div>
                        <div className="p-3 sm:p-4 text-center">
                          <span className="font-bold text-sm sm:text-base text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HSC Classes */}
              <div className="mb-6 sm:mb-8 bg-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all hover:shadow-md duration-300 border border-blue-100">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-3 sm:mb-4 border-b pb-2">
                  {feeStructure.hsc.title}
                </h3>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-medium text-sm sm:text-base text-cyan-700 mb-2 sm:mb-3">
                    বিষয়ভিত্তিক ফি
                  </h4>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm p-4 sm:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      {feeStructure.hsc.individual.map((item, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center ${
                            index !== feeStructure.hsc.individual.length - 1
                              ? "border-b pb-2"
                              : ""
                          }`}
                        >
                          <span className="text-xs sm:text-sm text-gray-700">
                            {item.subjects}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm sm:text-base text-cyan-700 mb-2 sm:mb-3">
                    পূর্ণাঙ্গ প্যাকেজ
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {feeStructure.hsc.fullPackage.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="bg-cyan-700 text-white p-2 sm:p-3 text-center">
                          <h3 className="font-semibold text-sm sm:text-base">
                            {item.group}
                          </h3>
                        </div>
                        <div className="p-3 sm:p-4 text-center">
                          <span className="font-bold text-sm sm:text-base text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-10 p-3 sm:p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-1 sm:p-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <p className="text-amber-800 text-xs sm:text-sm">
                      ভর্তির জন্য যোগাযোগ করুন অথবা সরাসরি আমাদের কেন্দ্রে আসুন
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white p-4 sm:p-6 rounded-b-xl md:rounded-b-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  যোগাযোগ করুন
                </h3>
                <p className="text-xs sm:text-sm">
                  আমাদের সাথে যোগাযোগ করতে নিচের লিঙ্কে ক্লিক করুন
                </p>
              </div>
              <Link
                href="/contact-us"
                className="bg-white text-cyan-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                যোগাযোগ
              </Link>
            </div>
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm">
                আমাদের সাথে যোগাযোগ করতে পারেন: <br />
                ফোন: +8801234567890 <br />
                ইমেইল: info.diganta.coachingcenter@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
