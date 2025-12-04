export const SocialEmulator = {
  mode: "static", // static or realtime

  init() {
    console.log("Social emulator active, mode:", this.mode);
  },

  onUpdate(callback) {
    // Only for realtime mode
    if (this.mode === "realtime") {
      setInterval(() => callback(), 2000);
    }
  }
};
