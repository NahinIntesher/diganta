"use client";
import React from "react";
import { motion } from "framer-motion";
import EducationCenter from "@/components/ui/EducationCenter";
import { Teachers } from "@/components/Teachers";
import { courses } from "@/components/Courses";

export default function OurCourses() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlightAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  // Function to render subjects based on course structure
  const renderSubjects = (course) => {
    if (course.subjectGroups) {
      // For courses with subject groups (like SSC)
      return (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">বিষয়সমূহ:</h4>
          <div className="space-y-3">
            {Object.entries(course.subjectGroups).map(([key, group]) => (
              <div key={key}>
                <p className="text-sm font-medium text-cyan-700 mb-1 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  {group.title}:
                </p>
                <ul className="grid grid-cols-2 gap-1 pl-4">
                  {group.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-1.5"></span>
                      <span className="text-gray-600">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // For courses with simple subject lists
      return (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">বিষয়সমূহ:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {course.subjects.map((subject, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                <span className="text-gray-600">{subject}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  let courseCardKey = 0;

  return (
    <div className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-cyan-50">
      {/* Courses Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-24 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-1 bg-amber-500 rounded-full opacity-70"></div>
            <div className="absolute -top-12 left-1/4 w-3 h-3 bg-amber-500 rounded-full opacity-30"></div>
            <div className="absolute -top-20 right-1/3 w-5 h-5 bg-cyan-500 rounded-full opacity-20"></div>

            {/* Highlight Text (optional heading or badge) */}
            <motion.span
              variants={highlightAnim}
              className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4"
            >
              কোর্স তালিকা
            </motion.span>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              আমাদের <span className="text-amber-500">কোর্স</span> সমূহ
            </h2>

            {/* Decorative line */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-40 bg-cyan-600 rounded"></div>
            </div>

            {/* Optional description */}
            <p className="text-gray-500 text-lg sm:text-xl italic">
              শিক্ষার্থীদের সাফল্যের জন্য সাজানো হয়েছে প্রতিটি কোর্স
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                id={`course-card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-cyan-500 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-cyan-100 p-4 rounded-full">
                      {course.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-800 mb-2 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {course.description}
                  </p>

                  {/* Render subjects based on course structure */}
                  {renderSubjects(course)}

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      বিশেষ সুবিধা:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-500 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
