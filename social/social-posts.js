import { SocialCore } from "./social-core.js";

export const SocialPosts = {
  add(type, content) {
    const d = SocialCore.ensure();
    d.posts.push({
      id: Date.now(),
      type,
      content,
      user: "me",
      date: new Date().toISOString()
    });
    SocialCore.save(d);
  },

  list() {
    return SocialCore.ensure().posts;
  }
};
