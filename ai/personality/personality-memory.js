import { PersonalityTraits } from "./personality-traits.js";

export const PersonalityMemory = {
  getProfile() {
    return `
Openness: ${PersonalityTraits.openness.toFixed(2)}
Conscientiousness: ${PersonalityTraits.conscientiousness.toFixed(2)}
Extraversion: ${PersonalityTraits.extraversion.toFixed(2)}
Agreeableness: ${PersonalityTraits.agreeableness.toFixed(2)}
Neuroticism: ${PersonalityTraits.neuroticism.toFixed(2)}
`;
  }
};
