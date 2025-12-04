export const WhisperDirect = {
  async transcribe(blob) {
    const key = window.TinyState.ai.apiKey;
    const form = new FormData();
    form.append("file", blob, "audio.webm");
    form.append("model", "gpt-4o-mini-tts");

    const r = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}` },
      body: form
    });
    const j = await r.json();
    return j.text || "";
  }
};
