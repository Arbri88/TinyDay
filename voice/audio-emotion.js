export const AudioEmotion = {
  analyze(waveform) {
    return {
      valence: Math.random(),
      energy: Math.random(),
      tension: Math.random()
    };
  }
};
