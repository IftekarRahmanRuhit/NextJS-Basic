import React from "react";
import MealsSearchInput from "./meals-components/MealsSearchInput";

export const metadata = {
  title: "Meals",
  description: "Learning Next JS",
};

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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-4">
            Discover Amazing Meals
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore thousands of delicious recipes from around the world. Find your next favorite dish!
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-12">
          <MealsSearchInput />
        </div>

        {/* Results Status */}
        {query.search && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-100/50">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-gray-700">
                {meals && meals.length > 0 
                  ? `Found ${meals.length} meal${meals.length > 1 ? 's' : ''} for "${query.search}"`
                  : `No meals found for "${query.search}"`
                }
              </span>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!meals || meals.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {query.search ? "No meals found" : "Start your culinary journey"}
              </h3>
              <p className="text-gray-600 mb-6">
                {query.search 
                  ? "Try searching for a different meal or ingredient"
                  : "Search for any meal or ingredient to discover amazing recipes"
                }
              </p>
              {query.search && (
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-sm text-gray-500">Try searching for:</span>
                  {["chicken", "pasta", "beef", "vegetarian", "dessert"].map((suggestion) => (
                    <span key={suggestion} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {suggestion}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Meals Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal, index) => {
              return (
                <div
                  key={meal.idMeal}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-amber-100/50 overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={meal?.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-amber-700 font-semibold text-sm rounded-full shadow-lg">
                        {meal?.strCategory || 'Recipe'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                      {meal?.strMeal}
                    </h2>
                    
                    {/* Area and Category Info */}
                    <div className="flex items-center space-x-4 mb-4">
                      {meal?.strArea && (
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                          </svg>
                          {meal.strArea}
                        </div>
                      )}
                    </div>
                    
                    {/* Instructions Preview */}
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden"
                       style={{
                         display: '-webkit-box',
                         WebkitLineClamp: 3,
                         WebkitBoxOrient: 'vertical'
                       }}>
                      {meal?.strInstructions?.length > 150 
                        ? `${meal.strInstructions.substring(0, 150)}...` 
                        : meal?.strInstructions
                      }
                    </p>
                    
                    {/* Action Button */}
                    <div className="mt-6 pt-4 border-t border-amber-100/50">
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View Full Recipe
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>


    </div>
  );
}