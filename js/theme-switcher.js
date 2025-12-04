export const setTheme = (theme) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `css/themes/${theme}.css`;
  document.head.appendChild(link);
  localStorage.setItem("theme", theme);
};

export const initTheme = () => {
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);
};
