import { SocialPosts } from "../../social/social-posts.js";
import { SocialReactions } from "../../social/social-reactions.js";

export function renderSocialUI() {
  const feed = document.getElementById("socialFeed");
  const posts = SocialPosts.list();

  feed.innerHTML = posts
    .map(
      p => `
      <div class="social-post">
        <div class="post-type">${p.type}</div>
        <div class="post-content">${p.content}</div>
        <div class="post-date">${p.date}</div>
        <div class="post-reactions" data-id="${p.id}">
          <button class="react" data-emoji="👍">👍</button>
          <button class="react" data-emoji="💜">💜</button>
          <button class="react" data-emoji="👏">👏</button>
          <button class="react" data-emoji="🔥">🔥</button>
          <button class="react" data-emoji="🌱">🌱</button>
        </div>
      </div>
    `
    )
    .join("");

  feed.querySelectorAll(".react").forEach(btn => {
    btn.onclick = () => {
      const emoji = btn.dataset.emoji;
      const postId = btn.parentElement.dataset.id;
      SocialReactions.react(postId, emoji);
    };
  });
}
