import { MealsResponse } from '../types/Meal';

export const fetchRandomMeal = async (): Promise<MealsResponse> => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data: MealsResponse = await response.json();
  return data;
};