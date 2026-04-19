// ─── Thème : dark / light ───────────────────────────────
const html = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

// Appliquer le thème sauvegardé DÈS le chargement
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  html.classList.remove("dark");
} else {
  html.classList.add("dark");
}

// Mettre à jour l'icône selon le thème actuel
function updateIcon() {
  if (icon) icon.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
}
updateIcon();

// Basculer au clic
if (toggle) {
  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light",
    );
    updateIcon();
  });
}

// ─── Formulaire contact ──────────────────────────────────
const btnEnvoyer = document.getElementById("btn-envoyer");
if (btnEnvoyer) {
  btnEnvoyer.addEventListener("click", () => {
    const nom = document.getElementById("nom")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!nom || !email || !message) {
      alert("Merci de remplir au moins votre nom, email et message.");
      return;
    }

    document.getElementById("confirmation").classList.remove("hidden");
    btnEnvoyer.disabled = true;
    btnEnvoyer.textContent = "Message envoyé ✓";
    btnEnvoyer.classList.replace("bg-red-600", "bg-gray-400");
  });
}
