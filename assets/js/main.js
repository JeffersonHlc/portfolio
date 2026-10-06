// Optional enhancement: content and navigation also work without JavaScript.
const yearElement = document.querySelector("[data-current-year]");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
