// === Système d'animation des techniques ===
// Démarre uniquement via bouton ▶ ou survol desktop
// Compatible mobile, tablette, desktop

const techs = {
  ikkyo: { total: 4, timer: null, playing: false },
  nikyo: { total: 3, timer: null, playing: false },
  sankyo: { total: 2, timer: null, playing: false },
  yonkyo: { total: 2, timer: null, playing: false },
  gokyo: { total: 2, timer: null, playing: false },
  irimi: { total: 3, timer: null, playing: false },
  kote: { total: 2, timer: null, playing: false },
  shiho: { total: 2, timer: null, playing: false },
  kaiten: { total: 2, timer: null, playing: false },
  jotsuki: { total: 3, timer: null, playing: false },
  shomen: { total: 3, timer: null, playing: false },
  tanto: { total: 3, timer: null, playing: false },
};

const cursors = {};
Object.keys(techs).forEach((k) => (cursors[k] = 0));

function showStep(name, n) {
  if (!techs[name]) return;
  const t = techs[name];
  n = ((n % t.total) + t.total) % t.total;
  cursors[name] = n;
  document
    .querySelectorAll(".steps-" + name + " .step-panel")
    .forEach((p, i) => p.classList.toggle("active", i === n));
  document
    .querySelectorAll(".dots-" + name + " .dot")
    .forEach((d, i) => d.classList.toggle("active", i === n));
  const lbl = document.querySelector(".step-lbl-" + name);
  if (lbl) lbl.textContent = "Étape " + (n + 1) + " / " + t.total;
}

function next(name) {
  showStep(name, cursors[name] + 1);
}
function prev(name) {
  showStep(name, cursors[name] - 1);
}

function startAnim(name) {
  if (!techs[name]) return;
  const t = techs[name];
  if (t.timer) return;
  t.playing = true;
  const btn = document.querySelector(".play-" + name);
  if (btn) btn.textContent = "⏸";
  t.timer = setInterval(() => next(name), 2300);
}

function stopAnim(name) {
  if (!techs[name]) return;
  const t = techs[name];
  clearInterval(t.timer);
  t.timer = null;
  t.playing = false;
  const btn = document.querySelector(".play-" + name);
  if (btn) btn.textContent = "▶";
}

function togglePlay(name) {
  if (!techs[name]) return;
  techs[name].playing ? stopAnim(name) : startAnim(name);
}

// Survol desktop uniquement (pointer: fine = souris)
const hasMousePointer = window.matchMedia("(pointer: fine)").matches;
if (hasMousePointer) {
  document.querySelectorAll(".tech-card").forEach((card) => {
    const name = card.dataset.tech;
    if (!name || !techs[name]) return;
    card.addEventListener("mouseenter", () => startAnim(name));
    card.addEventListener("mouseleave", () => stopAnim(name));
  });
}

// Menu burger
const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
if (burgerBtn && burgerMenu) {
  burgerBtn.addEventListener("click", () =>
    burgerMenu.classList.toggle("hidden"),
  );
  document.addEventListener("click", (e) => {
    if (!burgerBtn.contains(e.target) && !burgerMenu.contains(e.target))
      burgerMenu.classList.add("hidden");
  });
}

console.log(
  "Aikido animations prêtes —",
  Object.keys(techs).length,
  "techniques chargées",
);
