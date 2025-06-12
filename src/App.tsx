import React from 'react';
import useFetchMeal from './hooks/useFetchMeal';
import MealCard from './components/MealCard/MealCard';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.scss';

const App: React.FC = () => {
  const { meal, loading, error, fetchMeal } = useFetchMeal();

  return (
    <div className="app">
      <header className="appHeader">
        <h1>Random Meal Generator</h1>
        <p>Discover delicious recipes from around the world!</p>
      </header>
      
      <main className="appMain">
        {loading && <LoadingSpinner />}
        {error && <div className="errorMessage">{error}</div>}
        {meal && <MealCard meal={meal} fetchMeal={fetchMeal} />}
      </main>
      
      <footer className="appFooter">
        <p>Powered by TheMealDB API</p>
      </footer>
    </div>
  );
};

export default App;