export const SocialCore = {
  load() {
    return JSON.parse(localStorage.getItem("tiny_social") || "{}");
  },

  save(data) {
    localStorage.setItem("tiny_social", JSON.stringify(data));
  },

  ensure() {
    const d = this.load();
    if (!d.friends) d.friends = [];
    if (!d.posts) d.posts = [];
    if (!d.reactions) d.reactions = [];
    if (!d.circles) d.circles = [];
    this.save(d);
    return d;
  }
};
