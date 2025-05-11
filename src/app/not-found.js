"use client";

import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            404 - Page Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            যে পৃষ্ঠাটি আপনি খুঁজছেন তা পাওয়া যায়নি। এটি সরানো হয়েছে, নাম
            পরিবর্তন করা হয়েছে, অথবা অস্থায়ীভাবে অপ্রাপ্য।
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring"
          >
            হোম পৃষ্ঠায় ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
