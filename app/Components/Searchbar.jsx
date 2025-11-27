"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-4 mt-6"
    >
      <div className="w-full bg-[#D3D3D3] rounded-2xl flex items-center gap-3 px-5 py-3">

        {/* Icon */}
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="ابحث هنا..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-600"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-[#3A3A3A] hover:bg-[#2E2E2E] text-white px-4 py-1.5 rounded-xl text-sm transition cursor-pointer"
        >
            بحث
        </button>
      </div>
    </form>
  );
}
