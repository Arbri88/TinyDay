export const LocalSTT = {
  active: false,
  recognizer: null,

  init() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return null;

    this.recognizer = new SR();
    this.recognizer.lang = "en-US";
    this.recognizer.continuous = false;
    this.recognizer.interimResults = false;
  },

  listen() {
    return new Promise(resolve => {
      if (!this.recognizer) return resolve("");

      this.recognizer.onresult = e => {
        const text = e.results[0][0].transcript;
        resolve(text);
      };
      this.recognizer.onerror = () => resolve("");
      this.recognizer.start();
    });
  }
};
