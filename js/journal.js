import { TinyState } from "./state.js";
import { uid, $, save } from "./utils.js";

export const addJournalEntry = (good, bad, change, mood) => {
  const entry = {
    id: uid(),
    date: new Date().toISOString().slice(0, 10),
    good,
    goodThing: good,
    bad,
    stressor: bad,
    change,
    changeTomorrow: change,
    mood: parseInt(mood)
  };

  TinyState.journal.push(entry);
  save("journal", TinyState.journal);
};

export const renderJournal = () => {
  $("#journalList").innerHTML = TinyState.journal
    .map(e => `
      <div class="journal-entry">
        <div class="d">${e.date}</div>
        <div class="g">😊 ${e.goodThing || e.good}</div>
        <div class="b">⚡ ${e.stressor || e.bad}</div>
        <div class="c">🔄 ${e.changeTomorrow || e.change}</div>
        <div class="m">Mood: ${e.mood}/5</div>
      </div>
    `).join("");
};

export const Journal = {
  add(data) {
    addJournalEntry(data.goodThing, data.stressor, data.changeTomorrow, data.mood);
  },
  list() {
    return TinyState.journal;
  }
};
