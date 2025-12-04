import { PersonalityTraits } from "./personality-traits.js";
import { PersonalityAnalysis } from "./personality-analysis.js";

export const PersonalityEngine = {
  init() {
    const saved = localStorage.getItem("tiny_personality");
    if (saved) Object.assign(PersonalityTraits, JSON.parse(saved));
  },

  save() {
    localStorage.setItem("tiny_personality", JSON.stringify(PersonalityTraits));
  },

  updateFromJournal(e) {
    this.apply(PersonalityAnalysis.analyzeJournal(e));
  },
  updateFromHabits(h) {
    this.apply(PersonalityAnalysis.analyzeHabits(h));
  },
  updateFromSleep(s) {
    this.apply(PersonalityAnalysis.analyzeSleep(s));
  },
  updateFromVoice(v) {
    this.apply(PersonalityAnalysis.analyzeVoice(v));
  },

  apply(d) {
    for (const k in d) {
      PersonalityTraits[k] = Math.max(0, Math.min(1, PersonalityTraits[k] + d[k]));
    }
    this.save();
  }
};
