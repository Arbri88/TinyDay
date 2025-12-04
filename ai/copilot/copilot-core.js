import { CopilotModes } from "./copilot-modes.js";
import { CopilotMemory } from "./copilot-memory.js";
import { CopilotRAG } from "./copilot-rag.js";
import { PersonalityMemory } from "../personality/personality-memory.js";

export const Copilot = {
  history: [],
  async init() {
    await CopilotMemory.init();
  },

  async ask(prompt) {
    const context = await CopilotRAG.retrieveRelevantContext(prompt);
    const personality = PersonalityMemory.getProfile();

    const finalPrompt = `
You are TinyDay Copilot — a personal wellbeing AI.

USER PERSONALITY PROFILE:
${personality}

USER CONTEXT:
${context}

USER MESSAGE:
${prompt}

INSTRUCTIONS:
- Personalize responses.
- Short, helpful, emotional intelligence.
- 1–3 actionable steps unless asked otherwise.
`;

    return await CopilotModes.run(finalPrompt);
  }
};
