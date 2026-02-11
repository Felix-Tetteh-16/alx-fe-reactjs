import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Navigation Bar / Back Button */}
      <nav className="max-w-6xl mx-auto p-4 md:p-8">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span className="font-medium">Back to Recipes</span>
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Hero Section: Image and Title */}
          <div className="relative h-64 md:h-96 w-full">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {recipe.title}
                </h1>
                <p className="text-orange-200 text-lg font-medium">
                  Chef's Choice
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Summary Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {recipe.summary}
              </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Ingredients Card */}
              <section className="lg:col-span-1">
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🛒</span> Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients?.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <span className="text-orange-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Instructions Section */}
              <section className="lg:col-span-2">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">👨‍🍳</span> Preparation Steps
                </h2>
                <div className="space-y-6">
                  {/* Splitting instructions by period to create visual steps */}
                  {recipe.instructions
                    ?.split(".")
                    .filter((step) => step.trim())
                    .map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <span className="shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 leading-relaxed pt-1">
                          {step.trim()}.
                        </p>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
