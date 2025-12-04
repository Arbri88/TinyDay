import { addVoiceEntry } from "../../js/voice.js";
import { analyzeEmotion } from "../../js/emotion-analysis.js";

export const VoicePanel = {
  render() {
    return `
      <div id="voicePage" class="page hidden">
        <h1>AI Voice Journal</h1>

        <textarea id="voiceText" placeholder="Paste transcript or type..."></textarea>
        <button id="analyzeVoice">Analyze</button>

        <h2>Emotion</h2>
        <div id="voiceOutput"></div>

        <h2>History</h2>
        <div id="voiceDashboard"></div>
      </div>
    `;
  },

  init() {
    document.querySelector("#analyzeVoice").onclick = () => {
      const t = document.querySelector("#voiceText").value.trim();
      const e = analyzeEmotion(t);
      addVoiceEntry(t, e);

      document.querySelector("#voiceOutput").textContent =
        `Emotion: ${e}`;
      this.renderHistory();
    };

    this.renderHistory();
  },

  renderHistory() {
    const c = document.querySelector("#voiceDashboard");
    c.innerHTML = window.TinyState.voice
      .map(v => `
        <div class="voice-entry">
          <div>${new Date(v.timestamp).toLocaleString()}</div>
          <div>${v.text}</div>
          <div>Emotion: ${v.emotion}</div>
        </div>
      `)
      .join("");
  }
};
