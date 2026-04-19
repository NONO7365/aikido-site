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

// Validation formulaire contact
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

    // Simulation d'envoi (pas de backend pour l'instant)
    document.getElementById("confirmation").classList.remove("hidden");
    btnEnvoyer.disabled = true;
    btnEnvoyer.textContent = "Message envoyé ✓";
    btnEnvoyer.classList.replace("bg-red-600", "bg-gray-400");
  });
}
