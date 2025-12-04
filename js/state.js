import { load } from "./utils.js";

export const TinyState = {
  habits: load("habits", []),
  journal: load("journal", []),
  meals: load("meals", []),
  sleep: load("sleep", []),
  lifeMap: load("lifeMap", {}),
  social: load("social", []),
  voice: load("voice", []),
  ui: {
    theme: load("theme", "dark"),
    page: "dashboard"
  },
  ai: Object.assign({
    mode: "cloud",
    apiKey: "",
    proxyURL: "",
    personality: {}
  }, load("tiny_ai_config", {}))
};

if (typeof window !== "undefined") {
  window.TinyState = TinyState;
}
