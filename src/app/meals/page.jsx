import React from "react";
import MealsSearchInput from "./meals-components/MealsSearchInput";

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  // Fetching meals from the API
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data.meals || []);
      return data.meals;
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  };

  // Fetching meals 
  const meals = await fetchMeals();

  return (
    <div>
      {/* Search Input */}
      <div>
        <MealsSearchInput />
      </div>

      {/* Meals List */}
      <div className="grid grid-cols gap-4">
        {meals.map((meal) => {
          return (
            <div
              key={meal.idMeal}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {meal?.strMeal}
              </h2>
              <img
                src={meal?.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">{meal?.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
