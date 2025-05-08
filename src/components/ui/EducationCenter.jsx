"use client";
import Link from "next/link";
import { useState } from "react";
import { Clock, Moon } from "lucide-react";

export default function EducationCenter() {
  const [activeTab, setActiveTab] = useState("schedule");

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
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-cyan-800 mb-8">
                ব্যাচ সময়সূচী
              </h2>

              <div className="space-y-6">
                {/* Afternoon Batch */}
                <div className="bg-cyan-50 rounded-xl p-6 transition-all hover:shadow-md duration-300 border border-cyan-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 shadow-sm">
                        <span className="text-xl">🕓</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-cyan-800">
                          বিকাল ব্যাচ
                        </h3>
                        <p className="text-gray-600">প্রতিদিন ক্লাস</p>
                      </div>
                    </div>
                    <div className="bg-cyan-700 text-white py-2 px-6 rounded-full font-medium shadow-sm hover:bg-cyan-800 transition-colors">
                      ৪:০০ PM - ৭:০০ PM
                    </div>
                  </div>
                </div>

                {/* Evening Batch */}
                <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md duration-300 border border-blue-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 shadow-sm">
                        <span className="text-xl">🌙</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-blue-800">
                          সান্ধ্যকালীন ব্যাচ
                        </h3>
                        <p className="text-gray-600">প্রতিদিন ক্লাস</p>
                      </div>
                    </div>
                    <div className="bg-blue-700 text-white py-2 px-6 rounded-full font-medium shadow-sm hover:bg-blue-800 transition-colors">
                      ৭:৩০ PM - ০৯:৩০ PM
                    </div>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-cyan-700 text-white p-4">
                    <h3 className="text-xl font-semibold text-center">
                      ৬ষ্ঠ - ৮ম শ্রেনি
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">সকল বিষয়</span>
                      <span className="font-bold text-cyan-800 text-xl">
                        ২,৫০০ টাকা/মাস
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-blue-700 text-white p-4">
                    <h3 className="text-xl font-semibold text-center">
                      ৯ম - ১০ম শ্রেনি
                    </h3>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">এক বিষয়</span>
                      <span className="font-bold text-cyan-800">
                        ১,০০০ টাকা/মাস
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">দুই বিষয়</span>
                      <span className="font-bold text-cyan-800">
                        ১,৮০০ টাকা/মাস
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">তিন বিষয়</span>
                      <span className="font-bold text-cyan-800">
                        ২,২০০ টাকা/মাস
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-cyan-700 text-white p-4">
                    <h3 className="text-xl font-semibold text-center">
                      বিজ্ঞান বিভাগ
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">
                        সব বিষয় প্যাকেজ (৯ম-১০ম)
                      </span>
                      <span className="font-bold text-cyan-800 text-xl">
                        ৩,৫০০ টাকা/মাস
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-blue-700 text-white p-4">
                    <h3 className="text-xl font-semibold text-center">
                      ব্যবসায় বিভাগ
                    </h3>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">
                        সব বিষয় প্যাকেজ (৯ম-১০ম)
                      </span>
                      <span className="font-bold text-cyan-800">
                        ৩,০০০ টাকা/মাস
                      </span>
                    </div>
                    {/* <div className="flex justify-between items-center">
                      <span className="text-gray-700">সব বিষয় (১১শ-১২শ)</span>
                      <span className="font-bold text-cyan-800">
                        ৫,০০০ টাকা/মাস
                      </span>
                    </div> */}
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
          <div className="bg-gradient-to-r from-cyan-700 to-blue-700 p-8 text-white text-center rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">আজই ভর্তি হোন</h3>
            <p className="text-lg mb-6">
              আপনার শিক্ষা যাত্রায় আমরা সাহায্য করতে প্রস্তুত
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-cyan-700 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-cyan-100 transition-colors duration-300"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
