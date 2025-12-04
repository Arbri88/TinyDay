import { VoiceStorage } from "../../voice/voice-storage.js";

export function renderVoiceDashboard() {
  const box = document.getElementById("voiceDashboard");
  const list = VoiceStorage.load();

  box.innerHTML = list
    .map(
      e => `
    <div class="voice-entry">
      <div>${e.date}</div>
      <div>${e.transcript}</div>
      <div>Emotion: ${JSON.stringify(e.emotion)}</div>
      <div>Topics: ${e.topics.join(", ")}</div>
    </div>`
    )
    .join("");
}
