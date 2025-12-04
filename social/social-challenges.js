import { SocialCore } from "./social-core.js";

export const SocialChallenges = {
  predefined: [
    "7-day gratitude",
    "Drink water daily",
    "Walk 5000 steps",
    "Message a friend daily",
    "Tiny Social Warmth"
  ],

  join(name) {
    const d = SocialCore.ensure();
    if (!d.challenges) d.challenges = [];
    d.challenges.push({
      id: Date.now(),
      name,
      progress: 0
    });
    SocialCore.save(d);
  },

  progress(name) {
    const d = SocialCore.ensure();
    const c = d.challenges.find(x => x.name === name);
    if (c) {
      c.progress++;
      SocialCore.save(d);
    }
  },

  list() {
    return SocialCore.ensure().challenges || [];
  }
};
