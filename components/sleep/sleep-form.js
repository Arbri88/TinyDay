import { Sleep } from "../../js/sleep.js";
import { renderSleepList } from "./sleep-list.js";

export function setupSleepForm() {
  const hrs = document.getElementById("sleepHours");
  const score = document.getElementById("sleepScore");
  const btn = document.getElementById("sleepAdd");

  btn.onclick = () => {
    Sleep.add({
      hours: parseFloat(hrs.value),
      score: parseInt(score.value)
    });

    hrs.value = 7;
    score.value = 3;

    renderSleepList();
  };
}
