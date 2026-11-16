// Interaktiv SVG-side
/* SVG - Find figuren og drop down menuen på kortet */
const figur = document.querySelector(".kort-figur");
const dropdowns = document.querySelectorAll(".interaktiv details");

/* SVG - Registrer når en dropdown åbnes */
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (dropdown.open) {
      /* SVG - Hent positionen fra HTML */
      const x = dropdown.dataset.x;
      const y = dropdown.dataset.y;

      /* SVG - Flyt figuren på kortet */
      figur.style.left = x + "%";
      figur.style.top = y + "%";
    }
  });
});

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
