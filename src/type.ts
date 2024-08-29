export interface Recipe {
  label?: string;
  image?: string;
  calories?: string;
  carbs?: string;
  fat?: string;
  protein?: string;
  sodium?: string;
  sugar?: string;
}

export interface Hit {
  recipe: Recipe;
}

export interface ApiResponse {
  hits: Hit[];
}

export interface Food {
  name: string;
  calories: number;
}

export interface ApiResponse {
  results: Food[];
}
