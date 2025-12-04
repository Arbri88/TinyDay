import { updateLifeMap } from "../../js/lifemap.js";

export const LifeMapPanel = {
  render() {
    return `
      <div id="lifeMapPage" class="page hidden">
        <h1>Life Map</h1>

        <textarea id="lifeYears" placeholder="Your next 5–10 years..."></textarea>
        <textarea id="lifeGoals" placeholder="Your goals..."></textarea>

        <button id="saveLifeMap">Save</button>
      </div>
    `;
  },

  init() {
    document.querySelector("#saveLifeMap").onclick = () => {
      const y = document.querySelector("#lifeYears").value;
      const g = document.querySelector("#lifeGoals").value;
      updateLifeMap(y, g);
    };
  }
};
