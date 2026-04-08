function getThemes() {
  const raw = getComputedStyle(document.documentElement)
  .getPropertyValue("--themes").trim()
  return raw.split("\n").map(row => row.trim().split(" "))}

function getColorNames() {
  return getComputedStyle(document.documentElement)
  .getPropertyValue("--color-names").trim().split(" ");}

function applyTheme(index) {
  const themes = getThemes();
  const names = getColorNames();
  const values = themes[index];
  values.forEach((value, i) => {
    document.documentElement.style.setProperty(`--${names[i]}`, value); });}

document.addEventListener("DOMContentLoaded", () => { applyTheme(CFG_THEME) });