import { addPost, renderFeed } from "../../js/social.js";

export const SocialPanel = {
  render() {
    return `
      <div id="socialPage" class="page hidden">
        <h1>Social Mode</h1>

        <textarea id="postText" placeholder="Share something tiny..."></textarea>
        <button id="postBtn">Post</button>

        <h2>Feed</h2>
        <div id="socialFeed"></div>
      </div>
    `;
  },

  init() {
    document.querySelector("#postBtn").onclick = () => {
      const t = document.querySelector("#postText").value;
      if (t.trim()) addPost(t.trim(), "update");
      renderFeed();
    };

    renderFeed();
  }
};
