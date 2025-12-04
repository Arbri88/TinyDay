import { renderHabitItem } from "./habit-item.js";
import { Habits } from "../../js/habits.js";

export function renderHabits() {
  const box = document.getElementById("habitsBox");
  const list = Habits.list();

  box.innerHTML = list.map(h => renderHabitItem(h)).join("");

  box.querySelectorAll(".habit-toggle").forEach(btn => {
    const id = btn.parentElement.dataset.id;
    btn.onclick = () => {
      Habits.toggle(id);
      renderHabits();
    };
  });
}
