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
const booking = document.querySelector(".booking");

if (booking) {
  const navnInput = document.querySelector("#navn");
  const params = new URLSearchParams(window.location.search);
  const navn = params.get("navn");
  navnInput.textContent = navn;

  const telefonInput = document.querySelector("#telefonnummer");
  const params = new URLSearchParams(window.location.search);
  const telefon = params.get("telefonnummer");
  telefonInput.textContent = telefonnummer;

  const voksneInput = document.querySelector("#antalvoksne");
  const params = new URLSearchParams(window.location.search);
  const antalvoksne = params.get("antalvoksne");
  voksneInputInput.textContent = antalvoksne;

  const boernInput = document.querySelector("#antalboern");
  const params = new URLSearchParams(window.location.search);
  const boern = params.get("antalboern");
  boernInput.textContent = antalboern;

  const datoInput = document.querySelector("#dato");
  const params = new URLSearchParams(window.location.search);
  const dato = params.get("dato");
  datoInput.textContent = dato;
}
