import { SocialCore } from "./social-core.js";

export const SocialReactions = {
  react(postId, emoji) {
    const d = SocialCore.ensure();
    d.reactions.push({
      id: Date.now(),
      postId,
      emoji,
      user: "me"
    });
    SocialCore.save(d);
  },

  listFor(postId) {
    return SocialCore.ensure().reactions.filter(r => r.postId === postId);
  }
};
