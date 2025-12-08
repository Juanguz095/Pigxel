function usuarioEstaLogueado() {
  return localStorage.getItem("usuarioLogueado") === "true";
}

function obtenerPuntos() {
  return Number(localStorage.getItem("puntos")) || 0;
}

function guardarPuntos(valor) {
  localStorage.setItem("puntos", valor);
}

function puntosPorNivel(nivel) {
  switch (nivel) {
    case "FACIL": return 5;
    case "MEDIO": return 10;
    case "DIFICIL": return 20;
    default: return 0;
  }
}

function actualizarHeaderPuntos() {
  const puntosUI = document.querySelector(".header-puntos, #header-puntos");
  if (puntosUI) puntosUI.textContent = `PUNTOS: ${obtenerPuntos()}`;
}
