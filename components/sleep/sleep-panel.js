import { logSleep, renderSleep } from "../../js/sleep.js";

export const SleepPanel = {
  render() {
    return `
      <div id="sleepPage" class="page hidden">
        <h1>Sleep</h1>

        <input id="sleepHours" type="number" placeholder="Hours slept">
        <select id="sleepQuality">
          <option value="1">Quality 1</option>
          <option value="2">Quality 2</option>
          <option value="3">Quality 3</option>
          <option value="4">Quality 4</option>
          <option value="5">Quality 5</option>
        </select>

        <button id="logSleepBtn">Log sleep</button>

        <h2>Sleep History</h2>
        <div id="sleepList"></div>
      </div>
    `;
  },

  init() {
    document.querySelector("#logSleepBtn").onclick = () => {
      const hours = document.querySelector("#sleepHours").value;
      const quality = document.querySelector("#sleepQuality").value;
      logSleep(hours, quality);
      renderSleep();
    };

    renderSleep();
  }
};
