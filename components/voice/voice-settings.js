export function setupVoiceSettings() {
  const mode = document.getElementById("voiceMode");
  mode.onchange = () => {
    window.TinyState.ai.mode = mode.value;
  };
}
