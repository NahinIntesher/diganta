import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { Award, MessageSquare, Star } from "lucide-react";
import { FaPhone, FaBook, FaRegClock, FaUsers } from "react-icons/fa";

export default function HomePageSectionMiddle() {
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

  return (
    <div>
      {/* Vision and Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              আমাদের <span className="text-cyan-600">লক্ষ্য ও উদ্দেশ্য</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              দিগন্ত কোচিং সেন্টারের ভবিষ্যৎ পরিকল্পনা এবং শিক্ষাগত লক্ষ্য
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <SlideIn direction="left">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  আমাদের দর্শন
                </h3>
                <p className="text-gray-600 mb-4">
                  শিক্ষার মাধ্যমে প্রতিটি শিক্ষার্থীর সম্ভাবনাকে পূর্ণরূপে
                  বিকশিত করা এবং তাদের মধ্যে আত্মবিশ্বাস, সৃজনশীলতা ও
                  যুক্তিপূর্ণ চিন্তার বীজ রোপণ করা।
                </p>
                <p className="text-gray-600">
                  আমরা বিশ্বাস করি শিক্ষা শুধু বইয়ের জ্ঞান নয়, বরং জীবনের সকল
                  দিক বিকাশের মাধ্যম।
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  আমাদের লক্ষ্য
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Award className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      প্রতিটি শিক্ষার্থীর ব্যক্তিগত প্রয়োজন অনুযায়ী শিক্ষাদান
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      আধুনিক শিক্ষা পদ্ধতির মাধ্যমে শিক্ষার্থীদের সর্বাঙ্গীণ
                      বিকাশ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      দেশের শিক্ষা ব্যবস্থায় ইতিবাচক পরিবর্তন আনতে অবদান রাখা
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      অভিভাবক, শিক্ষার্থী এবং শিক্ষকদের মধ্যে দৃঢ় যোগাযোগ
                      স্থাপন
                    </span>
                  </li>
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Special Teaching Approach Section */}
      <section className="py-20 bg-cyan-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">
              আমাদের <span className="text-cyan-200">শিক্ষাদান পদ্ধতি</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-cyan-100 text-center mb-12 max-w-3xl mx-auto">
              দিগন্ত কোচিং সেন্টারের অনন্য শিক্ষাদান কৌশল
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ব্যক্তিগত মনোযোগ",
                description:
                  "প্রতিটি শিক্ষার্থীর সাথে আলাদাভাবে কাজ করে তাদের দুর্বলতা চিহ্নিত করে সমাধান প্রদান",
                icon: MessageSquare,
              },
              {
                title: "ইন্টারেক্টিভ শিক্ষাদান",
                description:
                  "শুধু বক্তৃতা নয়, আলোচনা এবং প্রশ্নোত্তরের মাধ্যমে শিক্ষার্থীদের সক্রিয় অংশগ্রহণ নিশ্চিত করা",
                icon: FaUsers,
              },
              {
                title: "নিয়মিত মূল্যায়ন",
                description:
                  "সাপ্তাহিক ও মাসিক মূল্যায়নের মাধ্যমে শিক্ষার্থীদের অগ্রগতি পর্যবেক্ষণ",
                icon: Star,
              },
            ].map((item, index) => (
              <ScaleIn key={index} delay={index * 0.2}>
                <div className="bg-cyan-700 p-6 rounded-xl hover:bg-cyan-600 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="bg-cyan-200 p-4 rounded-full">
                      <item.icon className="text-cyan-700 text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cyan-100 text-center">
                    {item.description}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              ভর্তি <span className="text-cyan-600">প্রক্রিয়া</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              দিগন্ত কোচিং সেন্টারে ভর্তির সহজ পদ্ধতি
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200 -translate-x-1/2 z-0"></div>

            {[
              {
                title: "যোগাযোগ করুন",
                description:
                  "আমাদের হটলাইন নম্বরে কল করুন অথবা হোয়াটসঅ্যাপ করুন",
                icon: FaPhone,
              },
              {
                title: "ফ্রি কাউন্সেলিং সেশন",
                description:
                  "আপনার সন্তানের প্রয়োজন অনুযায়ী সঠিক কোর্স নির্বাচনে পরামর্শ নিন",
                icon: MessageSquare,
              },
              {
                title: "ভর্তি ফরম পূরণ",
                description:
                  "প্রয়োজনীয় তথ্য দিয়ে অনলাইন বা সরাসরি ভর্তি ফরম পূরণ করুন",
                icon: FaBook,
              },
              {
                title: "ক্লাস শুরু",
                description: "সময়সূচী অনুযায়ী আপনার সন্তানের ক্লাস শুরু করুন",
                icon: FaRegClock,
              },
            ].map((step, index) => (
              <div key={index} className="relative z-10 mb-12 md:mb-0">
                <motion.div
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-6">
                    {index % 2 === 0 ? (
                      <div className="bg-cyan-50 p-6 rounded-xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    ) : (
                      <div className="md:hidden bg-cyan-50 p-6 rounded-xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex-shrink-0 bg-cyan-500 text-white p-4 rounded-full shadow-lg relative">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-30"></div>
                    <step.icon className="text-2xl" />
                  </div>

                  <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-6">
                    {index % 2 === 1 ? (
                      <div className="bg-cyan-50 p-6 rounded-xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    ) : (
                      <div className="md:hidden bg-cyan-50 p-6 rounded-xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/contact-us"
              className="bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-block hover:bg-cyan-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              আজই ভর্তি হোন
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              সাধারণ <span className="text-cyan-600">জিজ্ঞাসা</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              দিগন্ত কোচিং সেন্টার সম্পর্কে জানতে চাওয়া প্রশ্ন ও উত্তর
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question:
                  "দিগন্ত কোচিং সেন্টারে কোন কোন শ্রেণীর শিক্ষার্থীদের জন্য কোর্স আছে?",
                answer:
                  "অষ্টম শ্রেণী থেকে দ্বাদশ শ্রেণী পর্যন্ত সকল শিক্ষার্থীদের জন্য আমাদের বিশেষ কোর্স রয়েছে। এছাড়াও বিশেষ কেয়ার ব্যাচের মাধ্যমে আমরা দুর্বল শিক্ষার্থীদের জন্য বিশেষ সহায়তা প্রদান করি।",
              },
              {
                question: "একটি ব্যাচে সর্বোচ্চ কতজন শিক্ষার্থী থাকে?",
                answer:
                  "আমরা বিশ্বাস করি যে ছোট ব্যাচে শিক্ষাদান বেশি কার্যকর। তাই আমাদের প্রতিটি ব্যাচে সর্বোচ্চ ২০ জন শিক্ষার্থী রাখা হয়, যাতে প্রতিটি শিক্ষার্থীকে ব্যক্তিগত মনোযোগ দেওয়া সম্ভব হয়।",
              },
              {
                question: "কোর্স ফি কত?",
                answer:
                  "কোর্স ফি শ্রেণী ও বিষয় অনুযায়ী ভিন্ন হয়। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন বা আমাদের অফিসে আসুন।",
              },
              {
                question: "অনলাইন ক্লাসের ব্যবস্থা আছে কি?",
                answer:
                  "হ্যাঁ, আমাদের অনলাইন ক্লাসের ব্যবস্থা রয়েছে। বিশেষ করে যারা দূরে থাকেন বা অন্য কোন কারণে সরাসরি ক্লাসে আসতে পারেন না, তাদের জন্য আমাদের অনলাইন ক্লাসের সুবিধা রয়েছে।",
              },
              {
                question: "ভর্তির জন্য কী কী ডকুমেন্ট প্রয়োজন?",
                answer:
                  "ভর্তির জন্য শিক্ষার্থীর সর্বশেষ পরীক্ষার মার্কশিটের ফটোকপি, ২ কপি পাসপোর্ট সাইজ ছবি এবং জন্ম নিবন্ধন বা আইডি কার্ডের ফটোকপি প্রয়োজন।",
              },
              {
                question: "কোচিং সেন্টারে কি নিয়মিত পরীক্ষা নেওয়া হয়?",
                answer:
                  "হ্যাঁ, আমরা নিয়মিত সাপ্তাহিক পরীক্ষা এবং মাসিক মূল্যায়ন পরীক্ষার আয়োজন করি। এছাড়াও প্রতি মাসে অভিভাবক সভার মাধ্যমে শিক্ষার্থীদের অগ্রগতি সম্পর্কে তাদের অবহিত করা হয়।",
              },
            ].map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 p-1 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      ?
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-8">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-cyan-100 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                আরও প্রশ্ন আছে?
              </h3>
              <p className="text-gray-600 mb-6">
                আমাদের টিমের সাথে যোগাযোগ করুন। আমরা সবসময় আপনাকে সাহায্য করতে
                প্রস্তুত।
              </p>
              <motion.a
                href="/contact-us"
                className="bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-block hover:bg-cyan-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                যোগাযোগ করুন
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
