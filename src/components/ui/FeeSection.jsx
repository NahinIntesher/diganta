import React from "react";

export default function FeeSection({ activeTab}) {
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
      title: "এইচএসসি (একাদশ - দ্বাদশ শ্রেণি)",
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

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
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
    </div>
  );
}
