"use client";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import bgImgage from "../../public/images/bg.png";
import FreeClassPopup from "@/components/ui/FreeClassPopup";
import {
  FaWhatsapp,
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
      className="bg-cyan-100 p-4 rounded-full"
    >
      <Icon className="text-cyan-600 text-2xl" />
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="overflow-x-hidden ">
      {/* Hero Section with Parallax Effect */}
      <motion.section
        style={{ scale, opacity }}
        className="relative bg-gradient-to-br from-teal-900 to-teal-800 h-screen flex items-center justify-center text-center px-4 sm:px-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${bgImgage.src})` }}
        />

        <motion.div className="max-w-4xl mx-4 sm:mx-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6"
          >
            দিগন্ত কোচিং সেন্টার
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.2,
              ease: "easeInOut",
            }}
            className="text-xl sm:text-sm md:text-3xl font-bold text-cyan-200 mb-6 sm:mb-8"
          >
            দিগন্ত পেরিয়ে সম্ভাবনার পথে
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.8,
              ease: "easeOut",
            }}
          >
            <motion.a
              href="/our-courses"
              className="bg-white text-cyan-700 font-semibold py-2.5 sm:py-3 px-5 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg hover:bg-gray-100 transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255,255,255,0.3)",
                backgroundColor: "#f8fafc",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              আমাদের কোর্স
            </motion.a>

            <motion.a
              href="/contact-us"
              className="bg-transparent border-2 border-white text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg hover:bg-white hover:text-cyan-200 transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              ফ্রি কাউন্সেলিং
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section with Floating Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              আমাদের <span className="text-cyan-600">বিশেষ সুবিধা</span>
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
              <div className="bg-cyan-50 p-8 rounded-xl shadow-lg border border-cyan-100">
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
              <div className="bg-cyan-50 p-8 rounded-xl shadow-lg border border-cyan-100">
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
              <div className="bg-cyan-50 p-8 rounded-xl shadow-lg border border-cyan-100">
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
      <section className="py-20 bg-cyan-50" id="courses">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              আমাদের <span className="text-cyan-600">কোর্স সমূহ</span>
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
                    className="bg-cyan-100 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <course.icon className="text-cyan-600 text-xl" />
                  </motion.div>
                  <h3 className="text-xl font-semibold ">{course.title}</h3>
                </div>
                <p className="text-amber-500 ">
                  <span className="font-extrabold text-xl">{course.title}</span>
                  <span className="text-gray-600"> এর জন্য সম্পূর্ণ</span>
                </p>
                <p className="text-gray-600 font-semibold">
                  গাইডলাইন ও প্র্যাকটিস ম্যাটেরিয়াল
                </p>
                <motion.a
                  href="/our-courses"
                  className="inline-block mt-4 text-cyan-600 font-medium"
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

      {/* Floating WhatsApp Contact Button */}
      <motion.section
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <a
          href="https://wa.me/8801861575024?text=হ্যালো!%20আমি%20আপনাদের%20কোর্স%20সম্পর্কে%20জানতে%20চাই।"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp এ চ্যাট করুন"
        >
          <motion.div
            className="bg-green-500 text-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className="text-2xl" />
          </motion.div>
        </a>
      </motion.section>
      <FreeClassPopup />
    </div>
  );
}
