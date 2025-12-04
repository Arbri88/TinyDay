export function setupThemeSwitcher() {
  const select = document.getElementById("themeSelect");

  select.onchange = () => {
    const theme = select.value;
    document.body.dataset.theme = theme;
    localStorage.setItem("tiny_theme", theme);
  };

  const saved = localStorage.getItem("tiny_theme");
  if (saved) {
    document.body.dataset.theme = saved;
    select.value = saved;
  }
}
