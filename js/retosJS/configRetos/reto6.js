const configReto = {
  id: "6",
  dificultad: "DIFICIL",

  tests: [
    [1, 4, 3, 2, 10, 7],
    [5, 7, 9],
    [0, 2, 4, 6]
  ],

  esperados: [
    16, 
    0,  
    12  
  ],

  solucionOficial(lista) {
    return lista.reduce((acc, n) => (n % 2 === 0 ? acc + n : acc), 0);
  }
};

function toggleSolucion() {
  const sol = document.getElementById("solucionOficialPanel");
  if (!sol) return;

  sol.textContent =
`// Solución oficial (reduce)
function resolver(lista) {
  return lista.reduce((acc, n) => (n % 2 === 0 ? acc + n : acc), 0);
}`;
  sol.style.display = sol.style.display === "block" ? "none" : "block";
}

function ejecutar() {
  if (typeof ejecutarReto !== "function") {
    console.error("No se encontró ejecutarReto(config). Asegúrate de cargar retoBase.js primero.");
    return;
  }
  ejecutarReto(configReto);
}
