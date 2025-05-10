import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage({ activeTab }) {
  return (
    <div>
      {activeTab === "schedule" && (
        <motion.div
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <>
            <h1 className="text-6xl sm:text-7xl font-bold text-blue-800 mb-4">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-2">
              খুঁজে পাওয়া যায়নি
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              আপনি যে বিষয়টি খুঁজছেন তা হয় অস্তিত্ব নেই অথবা সরিয়ে ফেলা
              হয়েছে।
            </p>
            <Link href="/our-courses">
              <div className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition text-sm sm:text-base shadow">
                হোম পৃষ্ঠায় ফিরে যান
              </div>
            </Link>
          </>
        </motion.div>
      )}
    </div>
  );
}
