"use client";
import React from "react";
import { motion } from "framer-motion";
import { Teachers } from "@/components/Teachers";
import EducationCenter from "@/components/ui/EducationCenter";

const page = () => {
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

    return (
    <>    {/* Teachers Section */}
        <section id="teachers" className="py-16 bg-cyan-50">
            <div className="max-w-6xl mx-auto px-6">
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

                    {/* Optional label */}
                    <motion.span
                        variants={highlightAnim}
                        className="inline-block text-sm uppercase tracking-wider text-amber-500 font-bold mb-4"
                    >
                        শিক্ষক প্যানেল
                    </motion.span>

                    {/* Main heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        আমাদের <span className="text-amber-500">শিক্ষকরা</span>
                    </h2>

                    <div className="flex justify-center mb-6">
                        <div className="h-1 w-40 bg-cyan-600 rounded"></div>
                    </div>

                    <p className="text-gray-500 text-base sm:text-lg italic">
                        অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ শিক্ষার্থীদের আলোকিত ভবিষ্যতের
                        জন্য কাজ করছেন
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Teachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl border-cyan-500 overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black">
                                    {teacher.name}
                                </h3>
                                <p className="text-black text-sm mt-2 ">{teacher.subject}</p>
                                <p className="text-cyan-500 text-md font-extrabold  mt-2">
                                    {teacher.qualification}
                                </p>
                                <p className="text-gray-600 mt-3 text-xs">{teacher.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>)
};

export default page;
