import { TinyState } from "./state.js";
import { $, uid, save } from "./utils.js";

export const addHabit = (text) => {
  const habit = { id: uid(), text, title: text, done: false, completed: false };
  TinyState.habits.push(habit);
  save("habits", TinyState.habits);
};

export const toggleHabit = (id) => {
  const h = TinyState.habits.find(x => x.id === id);
  if (h) {
    h.done = !h.done;
    h.completed = h.done;
    save("habits", TinyState.habits);
  }
};

export const renderHabits = () => {
  $("#habitList").innerHTML = TinyState.habits
    .map(h => `
      <div class="habit-item">
        <span>${h.text || h.title}</span>
        <button class="habit-toggle" data-id="${h.id}">
          ${h.done || h.completed ? "Undo" : "Done"}
        </button>
      </div>
    `).join("");
};

export const Habits = {
  add(title) {
    addHabit(title);
  },
  toggle(id) {
    toggleHabit(id);
  },
  list() {
    return TinyState.habits;
  }
};
