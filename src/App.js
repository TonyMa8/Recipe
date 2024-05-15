import React, { useState } from "react";
import logo from "./logo.svg";
//import MealList from "./Components/MealList.js";
require("dotenv").config();

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const api_key = process.env.API_KEY;

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}`)
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((error) => console.error(error));
  }
  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
      </section>

      <button onClick={getMealData}>Get Daily Meal Plan</button>
    </div>
  );
}

export default App;
