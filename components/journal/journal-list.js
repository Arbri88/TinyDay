import { Journal } from "../../js/journal.js";

export function renderJournalList() {
  const box = document.getElementById("journalList");
  const list = Journal.list();

  box.innerHTML = list
    .map(
      e => `
    <div class="journal-entry">
      <div class="d">${e.date}</div>
      <div class="g">+ ${e.goodThing}</div>
      <div class="b">- ${e.stressor}</div>
      <div class="c">→ ${e.changeTomorrow}</div>
      <div class="m">Mood: ${e.mood}</div>
    </div>`
    )
    .join("");
}
