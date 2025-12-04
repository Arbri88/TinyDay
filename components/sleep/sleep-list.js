import { Sleep } from "../../js/sleep.js";

export function renderSleepList() {
  const box = document.getElementById("sleepList");
  const list = Sleep.list();

  box.innerHTML = list
    .map(s => `<div>${s.hours}h — quality ${s.score}</div>`)
    .join("");
}
