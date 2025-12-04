import { SocialCore } from "./social-core.js";

export const SocialFriends = {
  add(name) {
    const d = SocialCore.ensure();
    d.friends.push({
      id: Date.now(),
      name,
      added: new Date().toISOString()
    });
    SocialCore.save(d);
  },

  list() {
    return SocialCore.ensure().friends;
  }
};
