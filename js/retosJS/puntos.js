
// Obtener puntos del usuario logueado
function obtenerPuntos() {
  return Number(localStorage.getItem("puntos")) || 0;
}

// Guardar puntos
function guardarPuntos(valor) {
  localStorage.setItem("puntos", valor);
}

// Sumar puntos según dificultad
function puntosPorNivel(nivel) {
  switch (nivel) {
    case "FACIL": return 5;
    case "MEDIO": return 10;
    case "DIFICIL": return 20;
    default: return 0;
  }
}

// Actualizar texto en el header
function actualizarHeaderPuntos() {
  const puntos = obtenerPuntos();
  const puntosUI = document.querySelector(".menu-izquierda a");
  if (puntosUI) {
    puntosUI.textContent = `PUNTOS: ${puntos}`;
  }
}

// Marcar reto como completado
function marcarRetoComoCompletado(id) {
  localStorage.setItem("reto_" + id, "completado");
}

// Ver si ya se completó un reto
function retoYaCompletado(id) {
  return localStorage.getItem("reto_" + id) === "completado";
}

// Inicializar puntos siempre que cargue la página
document.addEventListener("DOMContentLoaded", actualizarHeaderPuntos);

