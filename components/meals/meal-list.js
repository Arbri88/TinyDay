import { Meals } from "../../js/meals.js";

export function renderMealList() {
  const box = document.getElementById("mealList");
  const list = Meals.list();

  box.innerHTML = list
    .map(m => `<div class="meal">${m.name} — ${m.description}</div>`)
    .join("");
}
