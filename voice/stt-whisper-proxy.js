export const WhisperProxy = {
  async transcribe(blob) {
    const url = window.TinyState.ai.proxyURL + "/whisper";
    const form = new FormData();
    form.append("file", blob, "audio.webm");

    const r = await fetch(url, {
      method: "POST",
      body: form
    });
    const j = await r.json();
    return j.text;
  }
};
