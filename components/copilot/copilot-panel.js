import { Copilot } from "../../ai/copilot/copilot-core.js";

export const setupCopilotUI = () => {
  const open = document.querySelector("#openCopilot");
  const panel = document.querySelector("#copilotPanel");
  const input = document.querySelector("#copilotInput");
  const msgs = document.querySelector("#copilotMessages");

  if (!open || !panel || !input || !msgs) return;

  open.onclick = () => panel.classList.toggle("open");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      const userText = input.value.trim();

      msgs.innerHTML += `
        <div class="msg user"><div class="bubble">${userText}</div></div>
      `;
      input.value = "";

      const reply = await Copilot.ask(userText);

      msgs.innerHTML += `
        <div class="msg bot"><div class="bubble">${reply}</div></div>
      `;

      msgs.scrollTop = msgs.scrollHeight;
    }
  });
};
