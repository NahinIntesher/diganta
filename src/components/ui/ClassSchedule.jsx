import React from "react";

export default function ClassSchedule({ activeTab }) {
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
        {
          time: "রাত ৮টা - রাত ৯টা",
          group: "",
          subject: "",
          teacher: "",
          grade: "",
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

  // Function to get color based on group and grade
  const getSubjectColor = (slot) => {
    if (slot.color) {
      return slot.color;
    }

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
      return "text-gray-800";
    }
  };

  return (
    <div className="">
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
                        সকাল ৮ - ৯ টা
                      </th>
                      <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-green-800">
                        সকাল ৯ - ১০ টা
                      </th>
                      <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-medium text-green-800">
                        সকাল ১০ - ১১ টা
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
                            className={`px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm  ${
                              period.noClass ? "text-gray-400" : "text-gray-800"
                            }`}
                          >
                            {period.subject}
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
    </div>
  );
}
