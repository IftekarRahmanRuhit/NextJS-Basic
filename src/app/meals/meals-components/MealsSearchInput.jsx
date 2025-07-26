"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function mealsSearchInput() {
  // State to hold meals data
//   const [meals, setMeals] = useState([]);

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
    <div>
      <input
        type="text"
        placeholder="Search for meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>
  );
}
