const configReto = {
  id: "3",
  dificultad: "DIFICIL",

  tests: [
    [
      { nombre: "A", peso: 1, fragil: 1, prioridad: 3 },
      { nombre: "B", peso: 10, fragil: 1, prioridad: 5 },
      { nombre: "C", peso: 2, fragil: 0, prioridad: 4 }
    ],

    [
      { nombre: "Drone", peso: 2, fragil: 1, prioridad: 5 },
      { nombre: "Botella", peso: 0.5, fragil: 1, prioridad: 1 },
      { nombre: "Tablet", peso: 0.9, fragil: 1, prioridad: 3 }
    ],

    [
      { nombre: "X", peso: 4, fragil: 1, prioridad: 5 },
      { nombre: "Y", peso: 3, fragil: 1, prioridad: 5 },
      { nombre: "Z", peso: 3.5, fragil: 1, prioridad: 3 }
    ]
  ],

  esperados: [
    ["A"],
    ["Drone", "Tablet"],
    ["Y", "X", "Z"]
  ],

  solucionOficial(lista) {
    return lista
      .filter(r => r.peso < 5 && r.fragil === 1 && r.prioridad >= 3)
      .sort((a, b) =>
        b.prioridad - a.prioridad || a.peso - b.peso
      )
      .map(r => r.nombre);
  }
};

function toggleSolucion() {
  const sol = document.getElementById("solucionOficialPanel");
  if (!sol) return;

  sol.textContent =
`// Solución oficial
function resolver(lista) {
  return lista
    .filter(r => r.peso < 5 && r.fragil === 1 && r.prioridad >= 3)
    .sort((a, b) => b.prioridad - a.prioridad || a.peso - b.peso)
    .map(r => r.nombre);
}`;

  sol.style.display = sol.style.display === "block" ? "none" : "block";
}

function ejecutar() {
  ejecutarReto(configReto);
}
