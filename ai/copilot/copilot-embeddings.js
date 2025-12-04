export const CopilotEmbeddings = {
  db: [],

  async embed(text) {
    const key = window.TinyState.ai.apiKey;
    const r = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: text
      })
    });
    const j = await r.json();
    return j.data[0].embedding;
  },

  add(text, vector) {
    this.db.push({ text, vector });
  },

  search(query, limit = 6) {
    return this.db
      .map(doc => ({
        text: doc.text,
        score: cosineSimilarity(query, doc.vector)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }
};

function cosineSimilarity(a, b) {
  let d = 0, a2 = 0, b2 = 0;
  for (let i = 0; i < a.length; i++) {
    d += a[i] * b[i];
    a2 += a[i] * a[i];
    b2 += b[i] * b[i];
  }
  return d / (Math.sqrt(a2) * Math.sqrt(b2));
}
