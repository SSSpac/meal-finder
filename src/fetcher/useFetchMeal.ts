import { useState, useEffect } from 'react';
import { Meal } from '../type/Meal';
import { fetchMealsByLetter } from '../utils/api';

const useFetchMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string>('a');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMeals = async (letter: string) => {
    try {
      setLoading(true);
      const data = await fetchMealsByLetter(letter);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        throw new Error(`No meals found starting with '${letter}'`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch meals';
      console.error('Fetch error:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals(selectedLetter);
  }, [selectedLetter]);

  return { 
    meals, 
    loading, 
    selectedLetter,
    setSelectedLetter,
    fetchMeals 
  };
};

export default useFetchMeals;