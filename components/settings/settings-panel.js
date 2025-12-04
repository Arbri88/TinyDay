import { updateSettings } from "../../js/settings.js";
import { initTheme, setTheme } from "../../js/theme-switcher.js";

export const SettingsPanel = {
  render() {
    return `
      <div id="settingsPage" class="page hidden">
        <h1>Settings</h1>

        <h3>AI Mode</h3>
        <select id="aiModeSel">
          <option value="cloud">Cloud</option>
          <option value="local">Local</option>
          <option value="proxy">Proxy</option>
        </select>

        <input id="apiKeyInput" placeholder="API Key">
        <input id="proxyURLInput" placeholder="Proxy URL">

        <button id="saveAISettings">Save</button>

        <h3>Theme</h3>
        <select id="themeSel">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="pastel">Pastel</option>
          <option value="neon">Neon</option>
          <option value="glass">Glass</option>
        </select>
      </div>
    `;
  },

  init() {
    const savedAI = localStorage.getItem("tiny_ai_config");
    if (savedAI) {
      const conf = JSON.parse(savedAI);
      document.querySelector("#aiModeSel").value = conf.mode || "cloud";
      document.querySelector("#apiKeyInput").value = conf.apiKey || "";
      document.querySelector("#proxyURLInput").value = conf.proxyURL || "";
    }

    document.querySelector("#saveAISettings").onclick = () => {
      const mode = document.querySelector("#aiModeSel").value;
      const key = document.querySelector("#apiKeyInput").value;
      const proxy = document.querySelector("#proxyURLInput").value;
      updateSettings({ mode, apiKey: key, proxyURL: proxy });
      localStorage.setItem("tiny_ai_config", JSON.stringify(window.TinyState.ai));
    };

    const themeSel = document.querySelector("#themeSel");
    themeSel.value = localStorage.getItem("theme") || "dark";
    themeSel.onchange = (e) => {
      const theme = e.target.value;
      setTheme(theme);
    };

    initTheme();
  }
};
