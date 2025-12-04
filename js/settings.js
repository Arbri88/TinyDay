import { TinyState } from "./state.js";
import { save } from "./utils.js";

export const updateSettings = (newSettings) => {
  TinyState.ai = { ...TinyState.ai, ...newSettings };
  save("tiny_ai_config", TinyState.ai);
};
