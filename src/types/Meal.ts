export interface Meal {
  idMeal: string;
  strMeal: string;
  
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
 
}

export interface MealsResponse {
  meals: Meal[];
}