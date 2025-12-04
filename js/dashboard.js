import { TinyState } from "./state.js";

export const renderDashboard = () => {
  const c = document.querySelector("#dashboard");
  if (!c) return;
  c.innerHTML = `
    <h2>Today</h2>
    <p>Habits: ${TinyState.habits.length}</p>
    <p>Journal entries: ${TinyState.journal.length}</p>
    <p>Meals planned: ${TinyState.meals.length}</p>
    <p>Sleep logs: ${TinyState.sleep.length}</p>
  `;
};
