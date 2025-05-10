"use client";
import Link from "next/link";
import { useState } from "react";
import { Clock, Moon } from "lucide-react";

export default function EducationCenter() {
  const [activeTab, setActiveTab] = useState("schedule");

  // Weekly schedule data from the images
  const weeklySchedule = [
    {
      day: "শনিবার",
      slots: [
        { time: "বিকাল ৪টা - বিকাল ৫টা", subject: "পৌরনীতি", grade: "১০ম" },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          subject: "হিসাববিজ্ঞান",
          grade: "৯ম",
        },
        { time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা", subject: "রসায়ন", grade: "৯ম" },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          subject: "পদার্থবিজ্ঞান",
          grade: "১০ম",
        },
        { time: "রাত ৮টা - রাত ৯টা", subject: "ব্যবসায় উদ্যোগ", grade: "১০ম" },
      ],
    },
    {
      day: "রবিবার",
      slots: [
        { time: "বিকাল ৪টা - বিকাল ৫টা", subject: "ভূগোল", grade: "৯ম" },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          subject: "ব্যবসায় উদ্যোগ",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          subject: "পদার্থবিজ্ঞান",
          grade: "৯ম",
        },
        { time: "সন্ধ্যা ৭টা - রাত ৮টা", subject: "উচ্চতর গণিত", grade: "১০ম" },
        { time: "রাত ৮টা - রাত ৯টা", subject: "আধুনিক বিজ্ঞান", grade: "১০ম" },
      ],
    },
    {
      day: "সোমবার",
      slots: [
        { time: "বিকাল ৪টা - বিকাল ৫টা", subject: "অর্থনীতি", grade: "৯ম" },
        {
          time: "বিকাল ৫টা - সন্ধ্যা ৬টা",
          subject: "ফিন্যান্স ও ব্যাংকিং",
          grade: "৯ম",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          subject: "উচ্চতর গণিত",
          grade: "৯ম",
        },
        { time: "সন্ধ্যা ৭টা - রাত ৮টা", subject: "জীববিজ্ঞান", grade: "১০ম" },
        {
          time: "রাত ৮টা - রাত ৯টা",
          subject: "ফিন্যান্স ও ব্যাংকিং",
          grade: "১০ম",
        },
      ],
    },
    {
      day: "মঙ্গলবার",
      slots: [
        { time: "বিকাল ৫টা - সন্ধ্যা ৬টা", subject: "পৌরনীতি", grade: "৯ম" },
        { time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা", subject: "রসায়ন", grade: "১০ম" },
        {
          time: "সন্ধ্যা ৭টা - রাত ৮টা",
          subject: "সাধারণ বিজ্ঞান",
          grade: "১০ম",
        },
        { time: "রাত ৮টা - রাত ৯টা", subject: "জীববিজ্ঞান", grade: "৯ম" },
      ],
    },
    {
      day: "বুধবার",
      slots: [
        { time: "বিকাল ৫টা - সন্ধ্যা ৬টা", subject: "অর্থনীতি", grade: "১০ম" },
        { time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা", subject: "অর্থনীতি", grade: "৯ম" },
        { time: "সন্ধ্যা ৭টা - রাত ৮টা", subject: "সাধারণ গণিত", grade: "৯ম" },
        { time: "রাত ৮টা - রাত ৯টা", subject: "হিসাববিজ্ঞান", grade: "১০ম" },
      ],
    },
    {
      day: "বৃহস্পতিবার",
      slots: [
        { time: "বিকাল ৫টা - সন্ধ্যা ৬টা", subject: "ভূগোল", grade: "১০ম" },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৭টা",
          subject: "সাধারণ বিজ্ঞান",
          grade: "৯ম",
        },
        { time: "সন্ধ্যা ৭টা - রাত ৮টা", subject: "সাধারণ গণিত", grade: "১০ম" },
      ],
    },
    {
      day: "শুক্রবার",
      slots: [
        { time: "সকাল ৮টা - ১১টা", subject: "ইংরেজি", grade: "৯ম/১০ম" },
        {
          time: "বিকাল ৪টা - সন্ধ্যা ৬টা",
          subject: "ব্যবসায় শিক্ষা",
          grade: "১০ম",
          note: "Imp Sub",
        },
        {
          time: "সন্ধ্যা ৬টা - সন্ধ্যা ৮টা",
          subject: "ব্যবসায় শিক্ষা",
          grade: "৯ম",
          note: "Imp Sub",
        },
        {
          time: "সন্ধ্যা ৮টা - রাত ৯টা",
          subject: "বিজ্ঞান",
          grade: "১০ম",
          note: "Imp Sub",
        },
        {
          time: "রাত ৯টা - রাত ১০টা",
          subject: "বিজ্ঞান",
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
        { time: "৮-৯ AM", subject: "শুভ" },
        { time: "৯-১০ AM", subject: "শুভ" },
        { time: "১০-১১ AM", subject: "শুভ" },
      ],
    },
    {
      day: "রবিবার",
      periods: [
        { time: "৮-৯ AM", subject: "রিয়াজ" },
        { time: "৯-১০ AM", subject: "রিয়াজ" },
        { time: "১০-১১ AM", subject: "রিয়াজ" },
      ],
    },
    {
      day: "সোমবার",
      periods: [
        { time: "৮-৯ AM", subject: "নাহিদ" },
        { time: "৯-১০ AM", subject: "নাহিদ" },
        { time: "১০-১১ AM", subject: "নাহিদ" },
      ],
    },
    {
      day: "মঙ্গলবার",
      periods: [
        { time: "৮-৯ AM", subject: "ফয়সাল" },
        { time: "৯-১০ AM", subject: "ফয়সাল" },
        { time: "১০-১১ AM", subject: "ফয়সাল" },
      ],
    },
    {
      day: "বুধবার",
      periods: [
        { time: "৮-৯ AM", subject: "কেউ নেই", noClass: true },
        { time: "৯-১০ AM", subject: "কেউ নেই", noClass: true },
        { time: "১০-১১ AM", subject: "কেউ নেই", noClass: true },
      ],
    },
    {
      day: "বৃহস্পতিবার",
      periods: [
        { time: "৮-৯ AM", subject: "নাহিদ" },
        { time: "৯-১০ AM", subject: "নাহিদ" },
        { time: "১০-১১ AM", subject: "নাহিদ" },
      ],
    },
    {
      day: "শুক্রবার",
      periods: [
        { time: "৮-৯ AM", subject: "রিয়াজ" },
        { time: "৯-১০ AM", subject: "রিয়াজ" },
        { time: "১০-১১ AM", subject: "রিয়াজ" },
      ],
    },
  ];

  // Fee structure data from the images
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
        { subjects: "১ বিষয়", fee: "১,০০০ টাকা" },
        { subjects: "২ বিষয়", fee: "১,৭০০ টাকা" },
        { subjects: "৩ বিষয়", fee: "২,০০০ টাকা" },
      ],
      fullPackage: [
        { group: "বিজ্ঞান", fee: "৩,৫০০ টাকা" },
        { group: "বাণিজ্য", fee: "৩,০০০ টাকা" },
        { group: "মানবিক", fee: "২,৫০০ টাকা" },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-800 mb-2">
            শিক্ষা কেন্দ্র
          </h1>
          <div className="h-1 w-24 bg-cyan-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            আপনার সাফল্যের যাত্রায় আমরা সঙ্গী
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "schedule"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              ব্যাচ সময়সূচী
            </button>
            <button
              onClick={() => setActiveTab("fees")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Schedule Section */}
          {activeTab === "schedule" && (
            <div className="p-6">
              <h2 className="text-3xl font-bold text-center text-cyan-800 mb-8">
                ব্যাচ সময়সূচী
              </h2>

              <div className="space-y-6 mb-10">
                {/* Morning Batch */}
                <div className="bg-green-50 rounded-xl p-6 transition-all hover:shadow-md duration-300 border border-green-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 shadow-sm">
                        <span className="text-xl">☀️</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-green-800">
                          সকাল ব্যাচ (ক্লাস ৬-৮)
                        </h3>
                        <p className="text-gray-600">
                          সকাল ৮টা - ১১টা ক্লাস (১ ঘণ্টা করে তিনটি ব্যাচ)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">
                            দিন
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">
                            ৮-৯ AM
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">
                            ৯-১০ AM
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">
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
                            <td className="px-4 py-3 text-sm font-medium text-gray-800">
                              {day.day}
                            </td>
                            {day.periods.map((period, idx) => (
                              <td
                                key={idx}
                                className={`px-4 py-3 text-sm ${
                                  period.noClass
                                    ? "text-red-500"
                                    : "text-gray-800"
                                }`}
                              >
                                {period.noClass ? (
                                  <span className="flex items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 mr-1"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                    {period.subject}
                                  </span>
                                ) : (
                                  period.subject
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Afternoon/Evening Batch */}
                <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md duration-300 border border-blue-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 shadow-sm">
                        <span className="text-xl">🌙</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-blue-800">
                          বিকাল ও সন্ধ্যা ব্যাচ (ক্লাস ৯-১০)
                        </h3>
                        <p className="text-gray-600">
                          বিষয়ভিত্তিক ক্লাস সময়সূচী
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-blue-800">
                            বার/সময়
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-blue-800">
                            বিকাল ৪টা - বিকাল ৫টা
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-blue-800">
                            বিকাল ৫টা - সন্ধ্যা ৬টা
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-blue-800">
                            সন্ধ্যা ৬টা - সন্ধ্যা ৭টা
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-blue-800">
                            সন্ধ্যা ৭টা - রাত ৮টা
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-blue-800">
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
                            <td className="px-4 py-3 text-sm font-medium text-gray-800">
                              {day.day}
                            </td>
                            {day.slots.map((slot, idx) => (
                              <td key={idx} className="px-4 py-3 text-sm">
                                {slot.subject ? (
                                  <span
                                    className={`inline-block text-sm ${
                                      slot.subject === "রিয়াজ"
                                        ? "text-blue-600"
                                        : slot.subject === "শুভ"
                                        ? "text-orange-600"
                                        : slot.subject === "নাহিদ"
                                        ? "text-blue-800"
                                        : slot.subject === "ফয়সাল"
                                        ? "text-fuchsia-600"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    {slot.subject}
                                    <span className="text-xs ml-1 text-gray-500">
                                      ({slot.grade})
                                    </span>
                                    {slot.note && (
                                      <span className="text-xs ml-1 text-green-600">
                                        {" "}
                                        {slot.note}
                                      </span>
                                    )}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">-</span>
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

              <div className="mt-8 text-center">
                <p className="text-gray-500">* সময়সূচী পরিবর্তন সাপেক্ষে</p>
              </div>
            </div>
          )}

          {/* Fees Section */}
          {activeTab === "fees" && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-cyan-800 mb-8">
                কোর্স ফি
              </h2>

              {/* Junior Classes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4 border-b pb-2">
                  জুনিয়র ক্লাস
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {feeStructure.juniorClasses.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700">{item.level}</span>
                          <span className="font-bold text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SSC Classes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4 border-b pb-2">
                  {feeStructure.ssc.title}
                </h3>

                <div className="mb-6">
                  <h4 className="font-medium text-cyan-700 mb-3">
                    বিষয়ভিত্তিক ফি
                  </h4>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-sm p-6">
                    <div className="space-y-3">
                      {feeStructure.ssc.individual.map((item, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center ${
                            index !== feeStructure.ssc.individual.length - 1
                              ? "border-b pb-2"
                              : ""
                          }`}
                        >
                          <span className="text-gray-700">{item.subjects}</span>
                          <span className="font-bold text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-cyan-700 mb-3">
                    পূর্ণাঙ্গ প্যাকেজ
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {feeStructure.ssc.fullPackage.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="bg-cyan-700 text-white p-3 text-center">
                          <h3 className="font-semibold">{item.group}</h3>
                        </div>
                        <div className="p-4 text-center">
                          <span className="font-bold text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HSC Classes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4 border-b pb-2">
                  {feeStructure.hsc.title}
                </h3>

                <div className="mb-6">
                  <h4 className="font-medium text-cyan-700 mb-3">
                    বিষয়ভিত্তিক ফি
                  </h4>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-sm p-6">
                    <div className="space-y-3">
                      {feeStructure.hsc.individual.map((item, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center ${
                            index !== feeStructure.hsc.individual.length - 1
                              ? "border-b pb-2"
                              : ""
                          }`}
                        >
                          <span className="text-gray-700">{item.subjects}</span>
                          <span className="font-bold text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-cyan-700 mb-3">
                    পূর্ণাঙ্গ প্যাকেজ
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {feeStructure.hsc.fullPackage.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="bg-cyan-700 text-white p-3 text-center">
                          <h3 className="font-semibold">{item.group}</h3>
                        </div>
                        <div className="p-4 text-center">
                          <span className="font-bold text-cyan-800">
                            {item.fee}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-amber-600"
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
                  <div className="ml-3">
                    <p className="text-amber-800">
                      ভর্তির জন্য যোগাযোগ করুন অথবা সরাসরি আমাদের কেন্দ্রে আসুন
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white p-6 rounded-b-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">যোগাযোগ করুন</h3>
                <p className="text-sm">
                  আমাদের সাথে যোগাযোগ করতে নিচের লিঙ্কে ক্লিক করুন
                </p>
              </div>
              <Link
                href="/contact-us"
                className="bg-white text-cyan-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
              >
                যোগাযোগ
              </Link>
            </div>
            <div className="">
              <p className="mt-4 text-sm">
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
