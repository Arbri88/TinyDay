import { Journal } from "../../js/journal.js";

export function setupJournalForm() {
  const good = document.getElementById("journalGood");
  const bad = document.getElementById("journalBad");
  const change = document.getElementById("journalChange");
  const mood = document.getElementById("journalMood");
  const btn = document.getElementById("journalSave");

  btn.onclick = () => {
    Journal.add({
      goodThing: good.value,
      stressor: bad.value,
      changeTomorrow: change.value,
      mood: parseInt(mood.value)
    });

    good.value = bad.value = change.value = "";
    mood.value = 3;
  };
}
