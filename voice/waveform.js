export class Waveform {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  drawRandom() {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.strokeStyle = "#00ffaa";
    this.ctx.beginPath();

    for (let x = 0; x < width; x += 4) {
      const y = height / 2 + Math.sin(x * 0.05) * (height / 3) * Math.random();
      this.ctx.lineTo(x, y);
    }

    this.ctx.stroke();
  }
}
