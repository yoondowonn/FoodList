import { useState, useEffect } from "react";
import axios from "axios";
import {
  GridContainer,
  RecipeCard,
  RecipeImage,
  RecipeInfo,
  RecipeName,
  NutritionInfo,
  MoreButton,
  ButtonWrap,
  ListWrap,
} from "./StyledList";
import { ApiResponse, Recipe } from "./type";

interface RecipesContainerProps {
  searchQuery: string;
}

const RecipesContainer = ({ searchQuery }: RecipesContainerProps) => {
  const API_ID = import.meta.env.VITE_APP_ID;
  const API_KEY = import.meta.env.VITE_APP_KEY;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
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
          if (from === 0) {
            setRecipes(result.data.hits.map((hit) => hit.recipe));
          } else {
            setRecipes((prevRecipes) => [
              ...prevRecipes,
              ...result.data.hits.map((hit) => hit.recipe),
            ]);
          }
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      }
    }

    fetchRecipes();
  }, [searchQuery, from, to, API_ID, API_KEY]);

  return (
    <ListWrap>
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
      {recipes.length > 0 && (
        <ButtonWrap>
          <MoreButton type="button" onClick={loadMoreRecipes}>
            Load More Recipes
          </MoreButton>
        </ButtonWrap>
      )}
    </ListWrap>
  );
};

export default RecipesContainer;
