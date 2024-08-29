import styled from "styled-components";

export const PageTitle = styled.h1`
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;
`;

export const SearchInput = styled.input`
  display: block;
  margin: 0 auto;
  font-size: 16px;
  padding: 10px;
  width: 80%;
`;

export const ResultsContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
`;

export const RecipeCard = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  padding: 10px;
  text-align: center;
`;

export const RecipeName = styled.h3`
  margin: 10px 0;
  color: #333;
`;

export const NutritionInfo = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 0.8rem;
`;
