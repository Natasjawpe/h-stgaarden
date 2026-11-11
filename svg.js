// Find manden
const figur = document.querySelector(".figur");

// Find alle accordions
const accordions = document.querySelectorAll(".accordions details");

// Gennemgå alle accordions
accordions.forEach((accordion) => {
  // Lyt efter når en accordion åbnes
  accordion.addEventListener("toggle", () => {
    // Tjek om accordion er åben
    if (accordion.open) {
      // Hent koordinater fra HTML
      const x = Number(accordion.dataset.x);
      const y = Number(accordion.dataset.y);

      // Flyt manden
      figur.style.left = x * 0.65 + "%";
      figur.style.top = y + "%";
    }
  });
});
