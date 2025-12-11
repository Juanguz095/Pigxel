const configReto = {
  id: "reto1",
  dificultad: "MEDIO",

  tests: [
    ["car", "ball", "doll#arm"],
    ["#broken", "train", "rusty"]
  ],

  esperados: [
    ["car", "ball"],
    ["train", "rusty"]
  ],

  solucionOficial(lista) {
    return lista.filter(g => !g.includes("#"));
  }
};

function toggleSolucion() {
  const sol = document.getElementById("solucionOficialPanel");
  sol.style.display = sol.style.display === "none" ? "block" : "none";
}

function ejecutar() {
  ejecutarReto(configReto);
}
