export const analyzeEmotion = (text) => {
  text = text.toLowerCase();

  if (text.includes("tired") || text.includes("stressed")) return "tired";
  if (text.includes("happy") || text.includes("good")) return "positive";
  if (text.includes("sad") || text.includes("down")) return "negative";

  return "neutral";
};
