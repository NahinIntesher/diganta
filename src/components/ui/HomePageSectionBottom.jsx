import React from "react";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FaUniversity, FaBook, FaUsers } from "react-icons/fa";
import { Star, MessageSquare } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import FreeClassAnnouncement from "./FreeClassAnnouncement";

export default function HomePageSectionBottom() {
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

  return (
    <div>
      {/* Free Class Schedule Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              আমাদের <span className="text-cyan-600">ফ্রি ক্লাস</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              দিগন্ত কোচিং সেন্টারের বিনামূল্যে ক্লাস সূচি
            </p>
          </FadeIn>

          {/* Free Class Announcement */}
          <FadeIn delay={0.3}>
            <FreeClassAnnouncement month="মে" />
          </FadeIn>

          
        </div>
      </section>

      {/* Team/Instructors Section */}
      <section className="py-20 bg-cyan-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">
              আমাদের <span className="text-cyan-200">দক্ষ শিক্ষক মণ্ডলী</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-cyan-100 text-center mb-12 max-w-3xl mx-auto">
              শিক্ষার্থীদের সাফল্যের পেছনের অনুপ্রেরণা
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "মোঃ হাসিবুল ইসলাম (শান্ত)",
                image: "/images/shantoBig.jpg",
                role: "মার্কেটিং বিভাগ, ব্যবসায় শিক্ষা অনুষদ",
                university: "ঢাকা বিশ্ববিদ্যালয়",
                experience: "৬ বছরের অভিজ্ঞতা",
                description:
                  "ঢাকা বিশ্ববিদ্যালয় থেকে গণিতে স্নাতক ও স্নাতকোত্তর। বিভিন্ন প্রতিষ্ঠানে শিক্ষকতার অভিজ্ঞতা।",
              },
              {
                name: "এফরান হোসেন রিয়াজ",
                image: "/images/reazBig.jpg",
                role: "ইলেক্ট্রিক্যাল এন্ড ইলেক্ট্রনিক্স ইঞ্জিনিয়ারিং (EEE)",
                university: "ইউনিভার্সিটি অফ স্কলার্স",
                experience: "৬ বছরের অভিজ্ঞতা",
                description:
                  "ইউনিভার্সিটি অফ স্কলার্স এ অধ্যয়নরত। বিভিন্ন শ্রেণির ছাত্রদের শিক্ষকতার অভিজ্ঞতা।",
              },
            ].map((teacher, index) => (
              <ScaleIn key={index} delay={index * 0.2}>
                <div className="bg-cyan-700 p-6 rounded-xl hover:bg-cyan-600 transition-colors">
                  <div className="w-32 h-32 bg-cyan-200 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-center mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-cyan-200 text-center mb-2">
                    {teacher.role}
                  </p>
                  <p className="text-amber-300 font-bold text-center mb-2">
                    {teacher.university}
                  </p>
                  <div className="flex justify-center items-center mb-4">
                    <span className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full">
                      {teacher.experience}
                    </span>
                  </div>
                  <p className="text-cyan-100 text-center text-sm">
                    {teacher.description}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-cyan-100 mb-6 max-w-3xl mx-auto">
                আমাদের টিমে রয়েছেন আরও অনেক অভিজ্ঞ শিক্ষক। বিষয়ভিত্তিক শ্রেষ্ঠ
                শিক্ষকদের দ্বারা শিক্ষার্থীদের সর্বোচ্চ সেবা প্রদানই আমাদের
                লক্ষ্য।
              </p>
              <Link
                href="/our-courses#teachers"
                className="bg-white text-cyan-700 font-semibold py-3 px-8 rounded-lg text-lg inline-block hover:bg-cyan-100 transition-colors"
              >
                সবাইকে দেখুন
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              আমাদের <span className="text-amber-500">সুবিধাসমূহ</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              শিক্ষার্থীদের শেখার পরিবেশ উন্নত করতে দিগন্ত কোচিং সেন্টারের বিশেষ
              সুবিধা
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "পরিষ্কার পরিচ্ছন্ন ক্লাসরুম",
                description: "আরামদায়ক এবং পরিষ্কার পরিচ্ছন্ন ক্লাসরুম",
                icon: FaUniversity,
              },
              {
                title: "অনলাইন শিক্ষা",
                description:
                  "প্রজেক্টর ও স্মার্টবোর্ডের মাধ্যমে আধুনিক টেকনোলজি ব্যবহার করে শিক্ষাদান",
                icon: FaChalkboardTeacher,
              },
              {
                title: "রিসোর্স সরবরাহ",
                description:
                  "বিভিন্ন বিষয়ে রেফারেন্স বই ও প্র্যাকটিস ম্যাটেরিয়াল সমৃদ্ধ রিসোর্স সরবরাহ করা",
                icon: FaBook,
              },
              {
                title: "সেমিনার আয়োজন",
                description:
                  "বিশেষ বিষয়ে সেমিনার, ওয়ার্কশপ ও প্রেজেন্টেশনের আয়োজন",
                icon: FaUsers,
              },
              {
                title: "এক্সাম সিস্টেম",
                description:
                  "নিয়মিত পরীক্ষা ও মূল্যায়ন এবং সাথে সাথে ফলাফল প্রদান",
                icon: Star,
              },
              {
                title: "কাউন্সেলিং",
                description:
                  "শিক্ষার্থী ও অভিভাবকদের জন্য নিয়মিত কাউন্সেলিং সেশন",
                icon: MessageSquare,
              },
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-cyan-100 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0 mr-5">
                  <facility.icon className="text-cyan-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl text-cyan-900 font-semibold mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-700 to-cyan-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  আপডেট পেতে যোগাযোগে থাকুন
                </h2>
                <p className="text-lg text-cyan-100 mb-8">
                  নতুন ব্যাচ, ফ্রি ক্লাস, সেমিনার এবং বিশেষ অফার সম্পর্কে আপডেট
                  পেতে আমাদের সাথে যোগাযোগে থাকুন।
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-cyan-300 text-xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">ঠিকানা</h3>
                      <p className="text-cyan-100">
                        মদিনা চত্বর জামে মসজিদ সংলগ্ন, মুসলিম নগর, মাতুয়াইল,
                        ডেমরা, ঢাকা - ১৩৬২
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="text-cyan-300 text-xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">ফোন</h3>
                      <p className="text-cyan-100">০১৮৬১৫৭৫০২৪, ০১৮১৫৮০৮২৯১</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaRegClock className="text-cyan-300 text-xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">কোচিং টাইম</h3>
                      <p className="text-cyan-100">
                        বিকাল ৪টা - রাত ৯টা (সপ্তাহে ৭ দিন)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            <div className="transform transition-all duration-700 translate-x-0">
              <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 p-6 rounded-3xl shadow-xl border border-cyan-200 max-w-xl mx-auto relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-blue-400"></div>
                <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-cyan-200 opacity-50"></div>
                <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-cyan-200 opacity-50"></div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-blue-100 relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    সরাসরি যোগাযোগ করতে{" "}
                    <span className="text-green-600 font-bold">WhatsApp</span> এ
                    মেসেজ দিন অথবা{" "}
                    <span className="text-amber-600 font-bold">কল করুন</span>
                  </h3>

                  <div className="flex flex-wrap gap-4 justify-center mt-4">
                    <Link
                      href="https://wa.me/8801815808291?text=হ্যালো!%20আমি%20আপনাদের%20কোর্স%20সম্পর্কে%20জানতে%20চাই।"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp এ চ্যাট করুন"
                      className="bg-green-50 hover:bg-green-100 text-green-700 px-5 py-3 rounded-xl flex items-center gap-2 transition-all hover:shadow-md border border-green-200"
                    >
                      <FaWhatsapp className="text-2xl" />
                      <span className="font-bold">WhatsApp এ মেসেজ দিন</span>
                    </Link>

                    <Link
                      href="tel:+8801861575024"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="কল করুন"
                      className="bg-amber-50 hover:bg-amber-100 text-amber-700 px-5 py-3 rounded-xl flex items-center gap-2 transition-all hover:shadow-md border border-amber-200"
                    >
                      <FaPhone className="text-xl" />
                      <span className="font-bold">কল করুন</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials (Blank for Now) */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              অভিভাবক ও{" "}
              <span className="text-amber-500">শিক্ষার্থীদের মতামত</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              আমাদের কোচিং সেন্টার সম্পর্কে অভিভাবক ও শিক্ষার্থীদের মূল্যবান
              মতামত আপনাদের সাথে শেয়ার করব খুব শীঘ্রই
            </p>
          </FadeIn>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              আপনি হতে পারেন প্রথম!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              আমাদের কোচিং সেন্টার শুরু হতে চলেছে, আপনার সন্তান যদি আমাদের প্রথম
              ব্যাচের শিক্ষার্থী হয়, তাহলে বিশেষ ছাড় ও সুবিধা পাবেন।
            </p>
            <motion.a
              href="/contact-us"
              className="bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-block hover:bg-cyan-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              আজই যোগাযোগ করুন
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
