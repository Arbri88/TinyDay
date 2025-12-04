import { TinyState } from "./state.js";
import { uid, save } from "./utils.js";

export const addMeal = (name, timeOrDesc) => {
  const meal = { id: uid(), name, time: timeOrDesc, description: timeOrDesc };
  TinyState.meals.push(meal);
  save("meals", TinyState.meals);
};

export const renderMeals = () => {
  const c = document.querySelector("#mealList");
  if (!c) return;
  c.innerHTML = TinyState.meals
    .map(m => `<div class="meal">${m.name} · ${m.description || m.time} ${m.description ? "" : "min"}</div>`)
    .join("");
};

export const Meals = {
  add(data) {
    addMeal(data.name, data.description);
  },
  list() {
    return TinyState.meals;
  }
};
