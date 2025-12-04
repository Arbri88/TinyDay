import { CopilotEmbeddings } from "./copilot-embeddings.js";

export const CopilotRAG = {
  async retrieveRelevantContext(prompt) {
    const v = await CopilotEmbeddings.embed(prompt);
    const res = CopilotEmbeddings.search(v, 6);
    return res.map(r => r.text).join("\n");
  }
};
