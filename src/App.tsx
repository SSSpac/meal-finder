import React from 'react';
import useFetchMeals from './fetcher/useFetchMeal';
import MealCard from './components/MealCard/MealCard';
import './App.scss';

const App: React.FC = () => {
  const { 
    meals, 
    loading, 
    selectedLetter,
    setSelectedLetter,
    fetchMeals 
  } = useFetchMeals();

  const alphabet = Array.from({ length: 26 }, (_, i) => 
    String.fromCharCode(97 + i).toUpperCase()
  );

  return (
    <div className="app">
      <header className="appHeader">
        <h1>Meal Finder</h1>
        <p>Find good meals by first letter</p>
      </header>
      
    <main className="appMain">
        <div className="searchContainer">
          <label className="searchLabel">Search by letters:</label>
          <div className="letterGrid">
            {alphabet.map(letter => (
              <button
                key={letter}
                className={`letterButton ${selectedLetter === letter.toLowerCase() ? 'active' : ''}`}
                onClick={() => setSelectedLetter(letter.toLowerCase())}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

       
        <div className="mealsGrid">
          {meals.map(meal => (
            <MealCard 
              key={meal.idMeal} 
              meal={meal} 
              fetchMeals={() => fetchMeals(selectedLetter)} 
            />
          ))}
        </div>
      </main>
      
      <footer className="appFooter">
        <p> 2025 lmtd meal Finder</p>
      </footer>
    </div>
  );
};

export default App;