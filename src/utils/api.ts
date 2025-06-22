import { MealsResponse } from '../type/Meal';

export const fetchMealsByLetter = async (letter: string): Promise<MealsResponse> => {
  if (!letter.match(/^[a-zA-Z]$/)) {
    throw new Error('Invalid letter provided');
  }


  
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter.toLowerCase()}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data: MealsResponse = await response.json();
  return data;
};