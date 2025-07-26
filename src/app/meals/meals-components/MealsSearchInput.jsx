"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function mealsSearchInput() {

  // State to hold search term
  const [search, setSearch] = useState("");
  
  const router = useRouter();

 // pathname is used to get the current path
  const pathName = usePathname();

  useEffect(() => {
   const searchQuery = {search}
   const urlQueryParams = new URLSearchParams(searchQuery)
   const url = `${pathName}?${urlQueryParams}`
   router.push(url);
  }, [search]);

  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      {/* Search Container with Glass Effect */}
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <svg 
            className="w-5 h-5 text-amber-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Main Input */}
        <input
          type="text"
          placeholder="Search for delicious meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-16 py-4 text-lg
                     bg-white/80 backdrop-blur-sm
                     border-2 border-amber-200/50 
                     rounded-2xl shadow-lg
                     placeholder:text-gray-400
                     focus:outline-none 
                     focus:ring-4 focus:ring-amber-500/20 
                     focus:border-amber-500
                     focus:bg-white
                     transition-all duration-300
                     hover:shadow-xl
                     hover:border-amber-300"
        />

        {/* Clear Button (shows when there's text) */}
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center z-10
                       text-gray-400 hover:text-amber-500 
                       transition-colors duration-200"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        )}

        {/* Gradient Border Animation Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 opacity-0 -z-10 blur-xl transition-opacity duration-300 group-focus-within:opacity-20"></div>
      </div>

      {/* Search Status Indicator */}
      {search && (
        <div className="mt-3 flex items-center justify-center text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span>Searching for "{search}"...</span>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 blur-sm"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-30 blur-sm"></div>
    </div>
  );
}
