import { Copilot } from "../ai/copilot/copilot-core.js";
import { setupCopilotUI } from "../components/copilot/copilot-panel.js";
import { PersonalityEngine } from "../ai/personality/personality-engine.js";

window.TinyState = {
  ai: {
    mode: "cloud",
    apiKey: "",
    proxyURL: ""
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  PersonalityEngine.init();
  await Copilot.init();
  setupCopilotUI();
});
