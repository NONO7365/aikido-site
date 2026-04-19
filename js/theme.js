const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const html = document.documentElement;

// Au chargement : lire la préférence sauvegardée
if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
  icon.textContent = "🌙";
}

// Au clic : basculer
toggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  icon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
