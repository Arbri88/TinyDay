import { addMeal, renderMeals } from "../../js/meals.js";

export const MealsPanel = {
  render() {
    return `
      <div id="mealsPage" class="page hidden">
        <h1>Dinner Planning</h1>

        <input id="mealName" placeholder="Meal name">
        <input id="mealTime" placeholder="Time in minutes" type="number">
        <button id="saveMeal">Save</button>

        <h2>Meals</h2>
        <div id="mealList"></div>
      </div>
    `;
  },

  init() {
    document.querySelector("#saveMeal").onclick = () => {
      const name = document.querySelector("#mealName").value;
      const time = document.querySelector("#mealTime").value;
      if (!name || !time) return;
      addMeal(name, time);
      renderMeals();
    };

    renderMeals();
  }
};
