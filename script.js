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
  const params = new URLSearchParams(window.location.search);

  const opholdInput = document.querySelector("#eventophold");
  const ophold = params.get("eventophold");
  opholdInput.textContent = ophold;

  const navnInput = document.querySelector("#navn");
  const navn = params.get("navn");
  navnInput.textContent = navn;

  const telefonInput = document.querySelector("#telefonnummer");
  const telefon = params.get("telefonnummer");
  telefonInput.textContent = telefon;

  const voksneInput = document.querySelector("#antalvoksne");
  const voksne = params.get("antalvoksne");
  voksneInput.textContent = voksne;

  const boernInput = document.querySelector("#antalboern");
  const boern = params.get("antalboern");
  boernInput.textContent = boern;

  const datoInput = document.querySelector("#dato");
  const dato = params.get("dato");
  datoInput.textContent = dato;
}
