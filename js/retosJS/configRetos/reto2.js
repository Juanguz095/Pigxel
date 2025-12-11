const configReto = {
  id: "2",
  dificultad: "MEDIO",

  tests: [
    ["carro", "peluche", "caja", "cuerda"],
    ["mesa", "lámpara", "gato"],
    ["c", "cosa", "cine", "perro"]
  ],

  esperados: [
    3,  
    0,
    3
  ],

  solucionOficial(lista) {
    return lista.filter(x => x.startsWith("c")).length;
  }
};

function toggleSolucion() {
  const sol = document.getElementById("solucionOficialPanel");
  if (!sol) return;

  sol.textContent =
`// Solución oficial
function resolver(lista) {
  return lista.filter(x => x.startsWith("c")).length;
}`;
  
  sol.style.display = sol.style.display === "block" ? "none" : "block";
}

function ejecutar() {
  ejecutarReto(configReto);
}
