import { SocialCircles } from "../../social/social-circles.js";

export function setupCirclesUI() {
  const box = document.getElementById("circlesList");
  const btn = document.getElementById("createCircle");
  const input = document.getElementById("circleName");

  btn.onclick = () => {
    SocialCircles.create(input.value);
    input.value = "";
    render();
  };

  function render() {
    const list = SocialCircles.list();
    box.innerHTML = list.map(c => `<div>${c.name}</div>`).join("");
  }

  render();
}
