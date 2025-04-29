"use client";
import "../../app/globals.css";
import React, { useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  const inputRef = useRef(null);

  const clearSearch = () => {
    setSearchQuery("");
    inputRef.current.focus();
  };

  return (
    <div className="px-2 flex justify-end">
      <div className="relative flex items-center w-full md:w-64">
        <div className="absolute left-3 text-cyan-500">
          <FaSearch />
        </div>

        <input
          ref={inputRef}
          type="text"
          placeholder="কিছু খুঁজুন..."
          className="w-full pl-10 pr-10 py-2 text-xs rounded-lg border border-cyan-500 bg-white text-gray-700 focus:outline-none focus:border-cyan-500 shadow-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 text-gray-500 hover:text-cyan-500 transition-colors duration-300"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
