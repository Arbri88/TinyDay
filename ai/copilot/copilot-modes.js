export const CopilotModes = {
  async run(prompt) {
    const mode = window.TinyState.ai.mode;
    if (mode === "local") return this.runLocal(prompt);
    if (mode === "proxy") return this.runProxy(prompt);
    return this.runCloud(prompt);
  },

  async runCloud(prompt) {
    const key = window.TinyState.ai.apiKey;
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: prompt }]
      })
    });
    const j = await r.json();
    return j?.choices?.[0]?.message?.content;
  },

  async runProxy(prompt) {
    const url = window.TinyState.ai.proxyURL + "/copilot";
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const j = await r.json();
    return j.reply;
  },

  async runLocal(prompt) {
    return window.localLLM?.generate(prompt) || "Local model unavailable.";
  }
};
