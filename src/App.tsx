import React from 'react';
import useFetchMeal from './fetcher/useFetchMeal';
import MealCard from './components/MealCard/MealCard';
import LoadingSpinner from './components/Loader/loader';
import './App.scss';

const App: React.FC = () => {
  const { meal, loading, error, fetchMeal } = useFetchMeal();

  return (
    <div className="app">
      <header className="appHeader">
        <h1>Random Meal Genrator</h1>
        <p>Get delicious recipes </p>
      </header>
      
      <main className="appMain">
        {loading && <LoadingSpinner />}
        {error && <div className="errorMessage">{error}</div>}
        {meal && <MealCard meal={meal} fetchMeal={fetchMeal} />}
      </main>
      
      <footer className="appFooter">
        <p>2025 meal finder</p>
      </footer>
    </div>
  );
};

export default App;