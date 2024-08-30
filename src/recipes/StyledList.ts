import styled from "styled-components";

export const ListWrap = styled.div`
  position: relative;
  margin-top: 80px;
  padding: 50px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
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

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreButton = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f4f4f6;
  color: #1f2023;

  &:hover {
    background-color: #49555f;
    color: #fff;
  }

  margin-top: 20px;
`;

export const NoticeBox = styled.div`
  font-size: 18px;
  width: 90%;
  padding: 30px;
  color: #1f2023;
  background-color: ${({ theme }) => theme.color.buttonTertiary};
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 10px 0 #92949945;
`;
