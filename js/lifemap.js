import { TinyState } from "./state.js";
import { save } from "./utils.js";

export const updateLifeMap = (years, goals) => {
  TinyState.lifeMap = { years, goals };
  save("lifeMap", TinyState.lifeMap);
};

export const LifeMap = {
  setDreams(text) {
    TinyState.lifeMap.dreams = text;
    save("lifeMap", TinyState.lifeMap);
  },
  getDreams() {
    return TinyState.lifeMap.dreams || "";
  }
};
