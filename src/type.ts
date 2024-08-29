export interface Ingredient {
  text: string;
  weight: number;
}

export interface Recipe {
  label: string;
  image: string;
  calories: number;
  ingredients: Ingredient[];
  source: string;
}

export interface Hit {
  recipe: Recipe;
}

export interface ApiResponse {
  hits: Hit[];
}
