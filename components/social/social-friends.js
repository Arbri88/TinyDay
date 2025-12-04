import { SocialFriends } from "../../social/social-friends.js";

export function setupFriendsUI() {
  const box = document.getElementById("friendsList");
  const btn = document.getElementById("addFriend");
  const input = document.getElementById("friendName");

  btn.onclick = () => {
    SocialFriends.add(input.value);
    input.value = "";
    render();
  };

  function render() {
    const list = SocialFriends.list();
    box.innerHTML = list.map(f => `<div>${f.name}</div>`).join("");
  }

  render();
}
