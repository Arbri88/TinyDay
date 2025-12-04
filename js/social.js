import { TinyState } from "./state.js";
import { uid, save } from "./utils.js";

export const addPost = (content, type="update") => {
  TinyState.social.push({
    id: uid(),
    type,
    content,
    date: new Date().toISOString()
  });
  save("social", TinyState.social);
};

export const renderFeed = () => {
  const feed = document.querySelector("#socialFeed");
  if (!feed) return;
  feed.innerHTML = [...TinyState.social]
    .slice()
    .reverse()
    .map(p => `
      <div class="social-post">
        <div class="post-type">${p.type}</div>
        <div class="post-content">${p.content}</div>
      </div>
    `).join("");
};

export const Social = {
  add(content, type) {
    addPost(content, type);
  },
  list() {
    return TinyState.social;
  }
};
