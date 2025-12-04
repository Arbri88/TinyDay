import { TinyState } from "./state.js";
import { uid, save } from "./utils.js";

export const logSleep = (hours, quality) => {
  TinyState.sleep.push({
    id: uid(),
    date: new Date().toISOString().slice(0,10),
    hours: parseFloat(hours),
    quality: parseInt(quality),
    score: parseInt(quality)
  });
  save("sleep", TinyState.sleep);
};

export const renderSleep = () => {
  const c = document.querySelector("#sleepList");
  if (!c) return;
  c.innerHTML = TinyState.sleep
    .map(s => `
      <div>${s.date || ""} · ${s.hours}h · Quality ${s.quality || s.score}/5</div>
    `).join("");
};

export const Sleep = {
  add(data) {
    logSleep(data.hours, data.score);
  },
  list() {
    return TinyState.sleep;
  }
};
