export const $ = (sel) => document.querySelector(sel);
export const $$ = (sel) => document.querySelectorAll(sel);

export const save = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const load = (key, fallback) => {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : fallback;
};

export const uid = () => "id_" + Math.random().toString(36).slice(2, 9);
