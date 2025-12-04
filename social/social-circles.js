import { SocialCore } from "./social-core.js";

export const SocialCircles = {
  create(name) {
    const d = SocialCore.ensure();
    d.circles.push({
      id: Date.now(),
      name,
      members: ["me"],
      posts: []
    });
    SocialCore.save(d);
  },

  addPost(circleId, text) {
    const d = SocialCore.ensure();
    const c = d.circles.find(c => c.id === circleId);
    if (c) {
      c.posts.push({
        id: Date.now(),
        text,
        user: "me"
      });
      SocialCore.save(d);
    }
  },

  list() {
    return SocialCore.ensure().circles;
  }
};
