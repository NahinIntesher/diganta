"use client";
import React, { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, Loader } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use URLSearchParams to encode data for URL parameters
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("email", formData.email);
      params.append("message", formData.message);

      const url = `https://script.google.com/macros/s/AKfycbwJXtm8YW-qBGEEpWC2pzEWq8C9gGvihRGN62Bnp23fBhLV3DQG5WHXn19cbpZeESMa/exec?${params.toString()}`;

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      iframe.onload = () => {
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);

        setSubmitStatus({
          type: "success",
          message: "ধন্যবাদ! আপনার মেসেজ পাঠানো হয়েছে।",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      };

      // Set iframe src to trigger the request
      iframe.src = url;
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "দুঃখিত, একটি সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।",
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="text-cyan-600" size={22} />,
      title: "ফোন",
      content: ["০১৮৬১৫৭৫০২৪", "০১৮১৫৮০৮২৯১"],
    },
    {
      id: 2,
      icon: <MapPin className="text-cyan-600" size={22} />,
      title: "ঠিকানা",
      content: [
        "মদিনা চত্বর জামে মসজিদ সংলগ্ন, মুসলিম নগর,",
        "মাতুয়াইল, ডেমরা, ঢাকা - ১৩৬২",
      ],
    },
    {
      id: 3,
      icon: <Mail className="text-cyan-600" size={22} />,
      title: "ইমেইল",
      content: ["info.diganta.cochingcenter@gmail.com"],
    },
    {
      id: 4,
      icon: <Clock className="text-cyan-600" size={22} />,
      title: "সময়সূচী",
      content: ["বিকাল ৪:০০ - রাত ১০:০০"],
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-cyan-50 to-white min-h-screen">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6"
        >
          আমাদের সাথে যোগাযোগ করুন
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-cyan-700 mx-auto text-lg"
        >
          যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সবসময়
          আপনাকে সাহায্য করতে প্রস্তুত।
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-6 "
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`bg-white p-6 rounded-xl shadow-md flex items-start border-l-4 border-cyan-500 border transition-all duration-300`}
            >
              <div className="bg-cyan-50 p-3 rounded-full mr-5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-2">
                  {item.title}
                </h3>
                {item.content.map((line, idx) => (
                  <p key={idx} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Map Preview */}
          <a
            href="https://maps.app.goo.gl/JKxakQrEXtyXsfe16"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-cyan-500 p-4 rounded-xl shadow-md mt-8 overflow-hidden block cursor-pointer"
          >
            <div className="h-64 bg-cyan-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-cyan-800">
                <MapPin size={32} className="mx-auto mb-3" />
                <p className="font-medium">মাতুয়াইল, ডেমরা, ঢাকা - ১৩৬২</p>
                <p className="text-sm text-cyan-600 mt-2">
                  ম্যাপ দেখতে ক্লিক করুন
                </p>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-3 bg-gradient-to-br from-white via-cyan-50 to-white p-8 md:p-10 rounded-3xl shadow-lg border border-cyan-500"
        >
          <h3 className="text-3xl font-bold text-cyan-800 mb-2 tracking-tight">
            আমাদের মেসেজ দিন
          </h3>
          <p className="text-gray-600 mb-8 text-base">
            আপনার প্রশ্ন বা মতামত আমাদের জানান
          </p>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-900 border border-green-300"
                  : "bg-red-100 text-red-900 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2 uppercase">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-cyan-50 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2 uppercase">
                  ইমেইল ঠিকানা *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-cyan-50 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2 uppercase">
                মেসেজ *
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-cyan-50 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                placeholder="আপনার মেসেজ লিখুন"
              ></textarea>
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center shadow-lg ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:shadow-2xl hover:ring-2 hover:ring-cyan-400"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader className="animate-spin mr-2 h-5 w-5" />
                    পাঠানো হচ্ছে...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    পাঠান
                  </span>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
