export function setupNavigation() {
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.onclick = () => {
      const page = btn.dataset.page;
      document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
      document.getElementById(page).classList.remove("hidden");
    };
  });
}
