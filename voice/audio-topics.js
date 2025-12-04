export const AudioTopics = {
  extract(transcript) {
    return transcript
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 3)
      .slice(0, 5);
  }
};
