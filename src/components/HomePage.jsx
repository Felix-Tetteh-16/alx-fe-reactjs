import React, { useState, useEffect } from "react";
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
          Delicious <span className="text-orange-600">Recipes</span>
        </h1>
        <p className="mt-4 text-xl text-center text-gray-600">
          Find and share your favorite meals from around the world.
        </p>
      </header>

      {/* Responsive Recipe Grid Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out border border-gray-100"
            >
              {/* Responsive Image Wrapper */}
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-2xl bg-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {recipe.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-3 grow">
                  {recipe.summary}
                </p>

                <button className="mt-5 w-full bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-orange-600 active:scale-95 transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
