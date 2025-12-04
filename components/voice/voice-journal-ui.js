import { VoiceRecorder } from "../../voice/recorder.js";
import { LocalSTT } from "../../voice/stt-local.js";
import { WhisperDirect } from "../../voice/stt-whisper-direct.js";
import { WhisperProxy } from "../../voice/stt-whisper-proxy.js";
import { AudioEmotion } from "../../voice/audio-emotion.js";
import { AudioTopics } from "../../voice/audio-topics.js";
import { VoiceStorage } from "../../voice/voice-storage.js";

export function setupVoiceJournalUI() {
  const btn = document.getElementById("recordVoice");
  const out = document.getElementById("voiceOutput");

  const rec = new VoiceRecorder();

  btn.onclick = async () => {
    btn.textContent = "Recording…";
    await rec.start();

    setTimeout(async () => {
      const blob = await rec.stop();
      btn.textContent = "Processing…";

      let transcript = "";
      const mode = window.TinyState.ai.mode;

      if (mode === "local") transcript = await LocalSTT.listen();
      else if (mode === "proxy") transcript = await WhisperProxy.transcribe(blob);
      else transcript = await WhisperDirect.transcribe(blob);

      const emotion = AudioEmotion.analyze();
      const topics = AudioTopics.extract(transcript);

      const entry = {
        id: Date.now(),
        date: new Date().toISOString(),
        transcript,
        emotion,
        topics
      };

      VoiceStorage.add(entry);

      out.textContent = transcript;
      btn.textContent = "Record again";
    }, 3000);
  };
}
