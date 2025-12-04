import { Copilot } from "../../ai/copilot/copilot-core.js";

function addMessage(container, role, text) {
  const div = document.createElement("div");
  div.className = `copilot-${role}`;
  div.textContent = text;
  container.appendChild(div);
}

export function setupCopilotUI() {
  const openBtn = document.getElementById("openCopilot");
  const panel = document.getElementById("copilotPanel");
  const messages = document.getElementById("copilotMessages");
  const input = document.getElementById("copilotInput");

  if (!openBtn || !panel || !messages || !input) return;

  panel.style.display = "none";

  openBtn.onclick = () => {
    panel.style.display = panel.style.display === "none" ? "block" : "none";
    if (panel.style.display === "block") input.focus();
  };

  async function sendPrompt() {
    const prompt = input.value.trim();
    if (!prompt) return;
    addMessage(messages, "user", prompt);
    input.value = "";
    const reply = await Copilot.ask(prompt);
    addMessage(messages, "assistant", reply || "No response.");
  }

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      sendPrompt();
    }
  });
}
