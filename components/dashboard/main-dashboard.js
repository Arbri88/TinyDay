import { Journal } from "../../js/journal.js";
import { Habits } from "../../js/habits.js";
import { Sleep } from "../../js/sleep.js";

export function renderMainDashboard() {
  const j = Journal.list().slice(-1)[0];
  const h = Habits.list();
  const s = Sleep.list().slice(-1)[0];

  document.getElementById("dashMood").textContent =
    j ? j.mood : "–";

  document.getElementById("dashHabits").textContent =
    h.filter(x => x.completed).length + "/" + h.length;

  document.getElementById("dashSleep").textContent =
    s ? `${s.hours}h` : "–";
}
