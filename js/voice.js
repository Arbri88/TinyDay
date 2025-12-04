import { TinyState } from "./state.js";
import { uid, save } from "./utils.js";

export const addVoiceEntry = (text, emotion) => {
  TinyState.voice.push({
    id: uid(),
    timestamp: Date.now(),
    text,
    emotion
  });
  save("voice", TinyState.voice);
};

export const Voice = {
  add(text, emotion) {
    addVoiceEntry(text, emotion);
  },
  list() {
    return TinyState.voice;
  }
};
