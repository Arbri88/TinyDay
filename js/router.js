import { $ } from "./utils.js";

export const showPage = (pageId) => {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  $("#" + pageId).classList.remove("hidden");
};
