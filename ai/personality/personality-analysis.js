export const PersonalityAnalysis = {
  analyzeJournal(e) {
    const t = (e.goodThing + " " + e.stressor + " " + e.changeTomorrow).toLowerCase();
    return {
      openness: /idea|dream|imagine/.test(t) ? 0.1 : 0,
      conscientiousness: /plan|organize/.test(t) ? 0.1 : 0,
      extraversion: /talk|friend|social/.test(t) ? 0.1 : 0,
      agreeableness: /help|support/.test(t) ? 0.1 : 0,
      neuroticism: e.mood <= 2 ? 0.1 : 0
    };
  },

  analyzeHabits(list) {
    let c = 0;
    list.forEach(h => {
      c += h.completed ? 0.05 : -0.02;
    });
    return {
      openness: 0,
      conscientiousness: c,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: c < 0 ? 0.05 : 0
    };
  },

  analyzeSleep(s) {
    return {
      openness: 0,
      conscientiousness: s.hours >= 7 ? 0.05 : -0.03,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: s.hours < 6 ? 0.1 : 0
    };
  },

  analyzeVoice(v) {
    const e = v.emotion;
    return {
      openness: e.valence > 0.5 ? 0.02 : 0,
      conscientiousness: 0,
      extraversion: e.energy > 0.6 ? 0.05 : -0.02,
      agreeableness: e.valence > 0.4 ? 0.05 : 0,
      neuroticism: e.tension > 0.5 ? 0.1 : 0
    };
  }
};
