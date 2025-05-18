import React from "react";
import { useState, useEffect } from "react";
import {
  Send,
  Loader,
  AlertCircle,
  User,
  AtSign,
  Phone,
  FileText,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function DetailSubmittingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [formTouched, setFormTouched] = useState(false);

  // Reset status message after 6 seconds
  useEffect(() => {
    let timer;
    if (submitStatus) {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "নাম আবশ্যক";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "ইমেইল আবশ্যক";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "সঠিক ইমেইল ঠিকানা দিন";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "ফোন নম্বর আবশ্যক";
    } else if (formData.phone.trim()) {
      const phoneRegex = /^[0-9+\s-]{10,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "সঠিক ফোন নম্বর দিন";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "মেসেজ আবশ্যক";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "বিস্তারিত মেসেজ দিন";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormTouched(true);

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });

      const url = `https://script.google.com/macros/s/AKfycbyWqU1DsfPviV7tc6Kc83tT3L_ksmA2i_b-cAR5upaL9YA06w9WGlbKSX1IQevmI3bC/exec?${params.toString()}`;

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      iframe.onload = () => {
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);

        setSubmitStatus({
          type: "success",
          message:
            "ধন্যবাদ! আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setFormTouched(false);
        setIsSubmitting(false);
      };

      iframe.src = url;
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "দুঃখিত, একটি সমস্যা হয়েছে। পরে আবার চেষ্টা করুন অথবা সরাসরি আমাদের সাথে যোগাযোগ করুন।",
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

    if (formTouched) {
      validateField(name, value);
    }
  };

  const validateField = (fieldName, value) => {
    let fieldError = null;

    switch (fieldName) {
      case "name":
        if (!value.trim()) fieldError = "নাম আবশ্যক";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          fieldError = "ইমেইল আবশ্যক";
        } else if (!emailRegex.test(value)) {
          fieldError = "সঠিক ইমেইল ঠিকানা দিন";
        }
        break;
      case "phone":
        const phoneRegex = /^[0-9+\s-]{10,15}$/;
        if (!value.trim()) {
          fieldError = "ফোন নাম্বার আবশ্যক";
        } else if (!phoneRegex.test(value)) {
          fieldError = "সঠিক ফোন নাম্বার দিন";
        }
        break;
      case "message":
        if (!value.trim()) {
          fieldError = "মেসেজ আবশ্যক";
        } else if (value.trim().length < 5) {
          fieldError = "বিস্তারিত মেসেজ দিন";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: fieldError,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedField(null);
    validateField(name, value);
    setFormTouched(true);
  };

  // Icons for form fields
  const getFieldIcon = (fieldName) => {
    switch (fieldName) {
      case "name":
        return <User size={18} className="text-cyan-600" />;
      case "email":
        return <AtSign size={18} className="text-cyan-600" />;
      case "phone":
        return <Phone size={18} className="text-cyan-600" />;
      case "subject":
        return <FileText size={18} className="text-cyan-600" />;
      case "message":
        return <MessageSquare size={18} className="text-cyan-600" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {submitStatus && (
        <div
          style={{
            opacity: 0,
            animation: "fadeIn 0.5s ease-out forwards",
          }}
          className={`mb-6 p-4 rounded-xl flex items-start ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle
              className="mr-3 flex-shrink-0 mt-0.5 text-green-600"
              size={20}
            />
          ) : (
            <AlertCircle
              className="mr-3 flex-shrink-0 mt-0.5 text-red-600"
              size={20}
            />
          )}
          <span>{submitStatus.message}</span>
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2 uppercase"
            >
              আপনার নাম <span className="text-red-500">*</span>
            </label>
            <div
              className={`relative rounded-lg overflow-hidden ${
                errors.name
                  ? "ring-2 ring-red-200"
                  : focusedField === "name"
                  ? "ring-2 ring-cyan-300"
                  : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getFieldIcon("name")}
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={handleBlur}
                className={`w-full p-3 pl-10 border ${
                  errors.name
                    ? "border-red-300 focus:ring-red-200 bg-red-50"
                    : "border-gray-200 focus:ring-cyan-300 focus:bg-cyan-50"
                } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700 placeholder-gray-400`}
                placeholder="আপনার নাম লিখুন"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </div>
            {errors.name && (
              <p
                id="name-error"
                className="mt-1.5 text-sm text-red-600 flex items-center"
              >
                <AlertCircle size={14} className="mr-1.5" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2 uppercase"
            >
              ইমেইল ঠিকানা <span className="text-red-500">*</span>
            </label>
            <div
              className={`relative rounded-lg overflow-hidden ${
                errors.email
                  ? "ring-2 ring-red-200"
                  : focusedField === "email"
                  ? "ring-2 ring-cyan-300"
                  : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getFieldIcon("email")}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={handleBlur}
                className={`w-full p-3 pl-10 border ${
                  errors.email
                    ? "border-red-300 focus:ring-red-200 bg-red-50"
                    : "border-gray-200 focus:ring-cyan-300 focus:bg-cyan-50"
                } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700 placeholder-gray-400`}
                placeholder="আপনার ইমেইল লিখুন"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <p
                id="email-error"
                className="mt-1.5 text-sm text-red-600 flex items-center"
              >
                <AlertCircle size={14} className="mr-1.5" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-semibold mb-2 uppercase"
            >
              ফোন নম্বর <span className="text-red-500">*</span>
            </label>
            <div
              className={`relative rounded-lg overflow-hidden ${
                errors.phone
                  ? "ring-2 ring-red-200"
                  : focusedField === "phone"
                  ? "ring-2 ring-cyan-300"
                  : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getFieldIcon("phone")}
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={handleBlur}
                className={`w-full p-3 pl-10 border ${
                  errors.phone
                    ? "border-red-300 focus:ring-red-200 bg-red-50"
                    : "border-gray-200 focus:ring-cyan-300 focus:bg-cyan-50"
                } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700 placeholder-gray-400`}
                placeholder="01XXXXXXXXX"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </div>
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1.5 text-sm text-red-600 flex items-center"
              >
                <AlertCircle size={14} className="mr-1.5" />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-semibold mb-2 uppercase"
            >
              বিষয়
            </label>
            <div
              className={`relative rounded-lg overflow-hidden ${
                focusedField === "subject" ? "ring-2 ring-cyan-300" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getFieldIcon("subject")}
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={handleBlur}
                className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:bg-cyan-50 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                placeholder="আপনার মেসেজের বিষয় লিখুন"
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-semibold mb-2 uppercase"
          >
            মেসেজ <span className="text-red-500">*</span>
          </label>
          <div
            className={`relative rounded-lg overflow-hidden ${
              errors.message
                ? "ring-2 ring-red-200"
                : focusedField === "message"
                ? "ring-2 ring-cyan-300"
                : ""
            }`}
          >
            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
              {getFieldIcon("message")}
            </div>
            <textarea
              rows="5"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={handleBlur}
              className={`w-full p-4 pl-10 border ${
                errors.message
                  ? "border-red-300 focus:ring-red-200 bg-red-50"
                  : "border-gray-200 focus:ring-cyan-300 focus:bg-cyan-50"
              } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700 placeholder-gray-400`}
              placeholder="আপনার মেসেজ বিস্তারিতভাবে লিখুন"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
          </div>
          {errors.message && (
            <p
              id="message-error"
              className="mt-1.5 text-sm text-red-600 flex items-center"
            >
              <AlertCircle size={14} className="mr-1.5" />
              {errors.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3.5 px-8 rounded-full transition-all flex items-center justify-center shadow-lg ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-xl hover:shadow-cyan-100 transform hover:-translate-y-1"
            }`}
            style={{
              boxShadow: "0 4px 14px rgba(0, 120, 150, 0.2)",
            }}
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
          </button>
        </div>
      </form>
    </div>
  );
}
