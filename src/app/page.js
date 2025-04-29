"use client";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaBook,
  FaUniversity,
  FaPhone,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import {
  Award,
  BookOpen,
  ChevronRight,
  MessageSquare,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation components
const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const x = direction === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

const ScaleIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Utility function to get link based on item name// Enhanced Animation Components
const TextWave = ({ children, delay = 0 }) => {
  const letters = String(children).split("");

  return (
    <span className="flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + i * 0.05,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, rotate: -5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      whileHover={{
        y: -10,
        rotate: [0, 2, -2, 0],
        transition: { duration: 0.8 },
      }}
      transition={{
        delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const GlowingIcon = ({ icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
        transition: { duration: 0.3 },
      }}
      transition={{
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
      }}
      className="bg-purple-100 p-4 rounded-full"
    >
      <Icon className="text-purple-600 text-2xl" />
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <motion.section
        style={{ scale, opacity }}
        className="relative bg-gradient-to-br from-purple-900 to-purple-700 h-screen flex items-center justify-center text-center px-6"
      >
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533327325824-76bc4e62d560?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="max-w-4xl relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <TextWave delay={0.2}>Diganta Coaching Center</TextWave>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-bold text-purple-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TextWave delay={0.7}>
              Beyond the horizon, on the path of possibilities
            </TextWave>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="#courses"
              className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              আমাদের কোর্স
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-purple-700 transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ফ্রি কাউন্সেলিং
            </motion.a>
          </motion.div>
        </div>

        {/* Floating scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-purple-300 rounded-full flex justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="w-1 h-3 bg-purple-300 rounded-full mt-3"
              animate={{
                y: [0, 6],
                opacity: [1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section with Floating Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              আমাদের <span className="text-purple-600">বিশেষ সুবিধা</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              নতুন প্রজন্মের জন্য আধুনিক ও ফলপ্রসূ শিক্ষা নিশ্চিত করতেই দিগন্ত
              কোচিং সেন্টার
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard delay={0.3}>
              <div className="bg-purple-50 p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="flex justify-center mb-6">
                  <GlowingIcon icon={FaChalkboardTeacher} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  অভিজ্ঞ শিক্ষক
                </h3>
                <p className="text-gray-600">
                  বিষয়ভিত্তিক দক্ষ ও স্নেহশীল শিক্ষক টিম দ্বারা গাইডেন্স
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.5}>
              <div className="bg-purple-50 p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="flex justify-center mb-6">
                  <GlowingIcon icon={FaUsers} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  ছোট ব্যাচ
                </h3>
                <p className="text-gray-600">
                  প্রত্যেক শিক্ষার্থীকে আলাদা করে মনোযোগ দেওয়া হয়
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.7}>
              <div className="bg-purple-50 p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="flex justify-center mb-6">
                  <GlowingIcon icon={BookOpen} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  নিয়মিত মূল্যায়ন
                </h3>
                <p className="text-gray-600">
                  দুর্বলতা খুঁজে বের করে নির্দিষ্ট সমাধান প্রদান
                </p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Courses Section with Staggered Animation */}
      <section className="py-20 bg-purple-50" id="courses">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              আমাদের <span className="text-purple-600">কোর্স সমূহ</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "৬ষ্ঠ - ৮ম", icon: FaUniversity },
              { title: "৯ম - ১০ম", icon: FaBook },
              { title: "এসএসসি প্রস্তুতি", icon: FaGraduationCap },
              { title: "বিশেষ কেয়ার ব্যাচ", icon: MessageSquare },
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-purple-100 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <course.icon className="text-purple-600 text-xl" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                </div>
                <p className="text-gray-600">
                  {course.title} এর জন্য সম্পূর্ণ গাইডলাইন ও প্র্যাকটিস
                  ম্যাটেরিয়াল
                </p>
                <motion.a
                  href="#"
                  className="inline-block mt-4 text-purple-600 font-medium"
                  whileHover={{ x: 5 }}
                >
                  বিস্তারিত জানুন
                  <ChevronRight className="inline ml-1" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Contact Banner */}
      <motion.section
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="bg-purple-600 text-white p-4 rounded-full shadow-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPhone className="text-2xl" />
        </motion.div>
      </motion.section>
    </div>
  );
}
