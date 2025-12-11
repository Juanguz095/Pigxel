const configReto = {
  id: "5",
  dificultad: "MEDIO",

  // <-- aquí SOLO van las entradas que recibirá resolver(lista)
  tests: [
    [3, 5, 3, 2, 8, 5, 9],
    [1, 1, 2, 3, 3, 4],
    [10, 20, 30],
    [7, 7, 7, 7]
  ],

  esperados: [
    [2,8,9],
    [2,4],
    [10,20,30],
    []
  ],

  solucionOficial(lista) {
    const conteo = {};
    for (const n of lista) {
      conteo[n] = (conteo[n] || 0) + 1;
    }
    return lista.filter(n => conteo[n] === 1);
  }
};

function toggleSolucion() {
  const sol = document.getElementById("solucionOficialPanel");
  sol.textContent =
`// Solución oficial
function resolver(lista) {
  const conteo = {};
  for (const n of lista) {
    conteo[n] = (conteo[n] || 0) + 1;
  }
  return lista.filter(n => conteo[n] === 1);
}`;
  sol.style.display = sol.style.display === "block" ? "none" : "block";
}

function ejecutar() {
  ejecutarReto(configReto);
}
// Lista que debes procesar 👇
const numeros = [3, 5, 3, 2, 8, 5, 9];

function resolver(lista) {
  // si 'lista' viene como [input, expected] (o envoltura), sacar el primer elemento
  if (Array.isArray(lista) && Array.isArray(lista[0]) && typeof lista[0][0] !== 'undefined') {
    lista = lista[0];
  }

  const conteo = {};
  for (const n of lista) {
    conteo[n] = (conteo[n] || 0) + 1;
  }
  return lista.filter(n => conteo[n] === 1);
}
