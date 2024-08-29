import styled from "styled-components";

export const FoodCard = styled.div`
  width: 100%;
  height: 800px;
  background-color: blue;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
`;

export const PageTitle = styled.h1`
  text-align: center;
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

export const ResultCard = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

export const FoodImage = styled.img`
  width: 100px;
  height: auto;
`;

export const FoodDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
  text-align: left;
`;

export const FoodName = styled.h2`
  margin-top: 0;
`;

export const NutritionInfo = styled.p`
  margin: 5px 0;
`;
