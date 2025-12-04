import { SocialChallenges } from "../../social/social-challenges.js";

export function setupChallengesUI() {
  const box = document.getElementById("challengeList");
  const joinBox = document.getElementById("joinChallenge");

  box.innerHTML = SocialChallenges.predefined
    .map(n => `<div class="challenge">${n}</div>`)
    .join("");

  box.querySelectorAll(".challenge").forEach(ch => {
    ch.onclick = () => {
      SocialChallenges.join(ch.textContent);
      renderUserChallenges();
    };
  });

  function renderUserChallenges() {
    const list = SocialChallenges.list();
    joinBox.innerHTML = list
      .map(c => `<div>${c.name}: ${c.progress}</div>`)
      .join("");
  }

  renderUserChallenges();
}
