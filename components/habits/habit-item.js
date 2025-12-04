export function renderHabitItem(h) {
  return `
    <div class="habit-item" data-id="${h.id}">
      <div class="habit-title">${h.title}</div>
      <button class="habit-toggle">${h.completed ? "✓" : "○"}</button>
    </div>
  `;
}
