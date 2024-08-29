import { useState, useEffect } from "react";
import axios from "axios";
import {
  PageTitle,
  SearchInput,
  GridContainer,
  RecipeCard,
  RecipeImage,
  RecipeInfo,
  RecipeName,
  NutritionInfo,
} from "StyledList";
import { ApiResponse, Recipe } from "./type";

function App() {
  const API_ID = import.meta.env.VITE_APP_ID;
  const API_KEY = import.meta.env.VITE_APP_KEY;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(20);

  const loadMoreRecipes = () => {
    setFrom(to);
    setTo(to + 20);
  };

  useEffect(() => {
    async function fetchRecipes() {
      if (!searchQuery) return;
      try {
        const result = await axios.get<ApiResponse>(
          "https://api.edamam.com/api/recipes/v2",
          {
            params: {
              type: "public",
              q: searchQuery,
              app_id: API_ID,
              app_key: API_KEY,
              imageSize: "REGULAR",
              from,
              to,
            },
          }
        );
        if (result.data && result.data.hits) {
          setRecipes(result.data.hits.map((hit) => hit.recipe));
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      }
    }

    fetchRecipes();
  }, [searchQuery, from, to]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <PageTitle>Recipes</PageTitle>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a food! ex) salad, coke ..."
      />

      <GridContainer>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index}>
            <RecipeImage src={recipe.image} alt={recipe.label} />
            <RecipeInfo>
              <RecipeName>{recipe.label}</RecipeName>
              <NutritionInfo>
                Calories: {recipe.calories.toFixed(0)} kcal
              </NutritionInfo>
              <NutritionInfo>
                Ingredients: {recipe.ingredients.length}
              </NutritionInfo>
              <NutritionInfo>Source: {recipe.source}</NutritionInfo>
            </RecipeInfo>
          </RecipeCard>
        ))}
      </GridContainer>
      <button onClick={loadMoreRecipes}>Load More Recipes</button>
    </>
  );
}

export default App;
