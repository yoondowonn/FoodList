import { useState, useEffect } from "react";
import { fetchRecipes } from "./api";
import { Recipe } from "./type";
import {
  PageTitle,
  SearchInput,
  ResultsContainer,
  ResultCard,
  FoodImage,
  FoodDetails,
  FoodName,
  NutritionInfo,
} from "./StyledList";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchRecipes(searchQuery)
        .then((data) => {
          setRecipes(data.hits.map((hit) => hit.recipe));
        })
        .catch(console.error);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <PageTitle>FOODIST</PageTitle>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a food..."
      />
      <ResultsContainer>
        {recipes.map((recipe, index) => (
          <ResultCard key={index}>
            <FoodImage src={recipe.image} alt={recipe.label} />
            <FoodDetails>
              <FoodName>{recipe.label}</FoodName>
              <NutritionInfo>Calories: {recipe.calories}kcal</NutritionInfo>
              <NutritionInfo>Carbs: {recipe.carbs}g</NutritionInfo>
              <NutritionInfo>Fat: {recipe.fat}g</NutritionInfo>
              <NutritionInfo>Protein: {recipe.protein}g</NutritionInfo>
              <NutritionInfo>Sodium: {recipe.sodium}mg</NutritionInfo>
              <NutritionInfo>Sugar: {recipe.sugar}g</NutritionInfo>
            </FoodDetails>
          </ResultCard>
        ))}
      </ResultsContainer>
    </div>
  );
}

export default App;
