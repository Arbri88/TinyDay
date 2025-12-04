import { Habits } from "../../js/habits.js";
import { renderHabits } from "./habits-list.js";

export function setupHabitForm() {
  const input = document.getElementById("habitInput");
  const btn = document.getElementById("habitAdd");

  btn.onclick = () => {
    if (!input.value.trim()) return;
    Habits.add(input.value);
    input.value = "";
    renderHabits();
  };
}
