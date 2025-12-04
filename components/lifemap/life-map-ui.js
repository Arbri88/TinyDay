import { LifeMap } from "../../js/life-map.js";

export function setupLifeMapUI() {
  const dreams = document.getElementById("lifeDreams");
  const btn = document.getElementById("lifeSave");

  btn.onclick = () => {
    LifeMap.setDreams(dreams.value);
  };

  dreams.value = LifeMap.getDreams();
}
