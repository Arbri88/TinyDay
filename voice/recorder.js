export class VoiceRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.chunks = [];
    this.stream = null;
  }

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(this.stream);

    this.chunks = [];
    this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);

    return new Promise(resolve => {
      this.mediaRecorder.onstart = resolve;
      this.mediaRecorder.start();
    });
  }

  stop() {
    return new Promise(resolve => {
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: "audio/webm" });
        resolve(blob);
      };
      this.mediaRecorder.stop();
      this.stream.getTracks().forEach(t => t.stop());
    });
  }
}
