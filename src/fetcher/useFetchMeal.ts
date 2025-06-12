import { useState, useEffect } from 'react';
import { Meal } from '../types/Meal';
import { fetchRandomMeal } from '../utils/api';

const useFetchMeal = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMeal = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRandomMeal();
      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals[0]);
      } else {
        throw new Error('No meals found');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch meal';
      setError(errorMessage);
      console.error('Fetch error:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return { meal, loading, error, fetchMeal };
};

export default useFetchMeal;