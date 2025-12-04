export const VoiceStorage = {
  key: "tiny_voice_entries",

  load() {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  },

  save(list) {
    localStorage.setItem(this.key, JSON.stringify(list));
  },

  add(entry) {
    const list = this.load();
    list.push(entry);
    this.save(list);
  }
};
