import axios from "axios";
import { ApiResponse } from "./type";

const API_URL = "/api/recipes/v2";

export const fetchRecipes = async (query: string): Promise<ApiResponse> => {
  const params = {
    type: "public",
    q: query,
    app_id: import.meta.env.VITE_APP_ID,
    app_key: import.meta.env.VITE_APP_KEY,
  };

  const response = await axios.get<ApiResponse>(API_URL, { params });
  return response.data;
};
