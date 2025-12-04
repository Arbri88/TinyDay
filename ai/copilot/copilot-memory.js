import { CopilotEmbeddings } from "./copilot-embeddings.js";

export const CopilotMemory = {
  async init() {
    const all = [];

    // Journals
    (window.TinyState.journalEntries || []).forEach(e => {
      all.push(`Journal ${e.date}: good=${e.goodThing} stress=${e.stressor} change=${e.changeTomorrow} mood=${e.mood}`);
    });

    // Habits
    (window.TinyState.habits || []).forEach(h => {
      all.push(`Habit: ${h.title} completed=${h.completed}`);
    });

    // Meals
    (window.TinyState.mealHistory || []).forEach(m => {
      all.push(`Meal: ${m.name} description=${m.description}`);
    });

    // Voice
    (window.TinyState.voiceEntries || []).forEach(v => {
      all.push(`Voice ${v.date}: transcript=${v.transcript} emotion=${JSON.stringify(v.emotion)}`);
    });

    // Build embeddings DB
    for (const item of all) {
      const vec = await CopilotEmbeddings.embed(item);
      CopilotEmbeddings.add(item, vec);
    }
  }
};
