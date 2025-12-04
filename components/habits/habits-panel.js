import { addHabit, toggleHabit, renderHabits } from "../../js/habits.js";

export const HabitsPanel = {
  render() {
    return `
      <div id="habitsPage" class="page hidden">
        <h1>Habits</h1>
        <input id="newHabitInput" placeholder="New tiny habit...">
        <button id="addHabitBtn">Add</button>
        <div id="habitList"></div>
      </div>
    `;
  },

  init() {
    document.querySelector("#addHabitBtn").onclick = () => {
      const v = document.querySelector("#newHabitInput").value;
      if (!v.trim()) return;
      addHabit(v.trim());
      renderHabits();
    };

    document.querySelector("#habitList").onclick = (e) => {
      if (e.target.dataset.id) {
        toggleHabit(e.target.dataset.id);
        renderHabits();
      }
    };

    renderHabits();
  }
};
