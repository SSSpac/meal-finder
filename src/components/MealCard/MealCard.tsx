import React from 'react';
import { Meal } from '../../type/Meal';
import styles from './MealCard.module.scss';

interface MealCardProps {
  meal: Meal;
  fetchMeals: () => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, fetchMeals }) => {
  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof Meal];
    if (ingredient) {
      const measure = meal[`strMeasure${i}` as keyof Meal] || '';
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  return (
    <div className={styles.mealCard}>
      <div className={styles.mealHeader}>
        <h2>{meal.strMeal}</h2>
        <div className={styles.mealMeta}>
          <span>{meal.strCategory}</span>
          <span>{meal.strArea}</span>
          {meal.strTags && <span>{meal.strTags.split(',').join(', ')}</span>}
        </div>
      </div>
      
      <div className={styles.mealContent}>
        <div className={styles.mealImage}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        
        <div className={styles.mealDetails}>
          <h3>Ingredient</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MealCard;