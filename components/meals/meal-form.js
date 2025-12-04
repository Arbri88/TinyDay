import { Meals } from "../../js/meals.js";
import { renderMealList } from "./meal-list.js";

export function setupMealForm() {
  const name = document.getElementById("mealName");
  const desc = document.getElementById("mealDesc");
  const btn = document.getElementById("mealAdd");

  btn.onclick = () => {
    Meals.add({
      name: name.value,
      description: desc.value
    });
    name.value = desc.value = "";
    renderMealList();
  };
}
