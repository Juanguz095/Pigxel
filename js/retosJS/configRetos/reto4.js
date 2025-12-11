const configReto = {
  id: "4",
  dificultad: "FACIL",

  tests: [
    ["pollo", "o"],
    ["maiz", "x"],
    ["banana", "n"]
  ],

  esperados: [
    true,
    false,
    true
  ],

  solucionOficial(palabra, letra) {
    return palabra.includes(letra);
  }
};

function toggleSolucion() {
  const sol = document.getElementById("solucionOficialPanel");
  sol.textContent =
`// Solución oficial
function resolver(args) {
  const [palabra, letra] = args;
  return palabra.includes(letra);
}`;
  sol.style.display = sol.style.display === "block" ? "none" : "block";
}

function ejecutar() {
  ejecutarReto(configReto);
}
