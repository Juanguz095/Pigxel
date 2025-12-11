function mostrarModal(id) {
  const modal = document.getElementById("modal-exito");
  modal.style.display = "flex";

  const btnSig = document.getElementById("btn-siguiente-reto");
  
  if (btnSig) {
    btnSig.style.display = "block";
    btnSig.onclick = () => irAlSiguienteReto(id);
  }
}


function cerrarModal() {
  document.getElementById("modal-exito").style.display = "none";
}

function mostrarPista(id) {
  const pista = document.getElementById(id);

  if (pista.style.display === "block") {
    pista.style.display = "none";
  } else {
    pista.style.display = "block";
    pista.classList.remove("aparecer");
    void pista.offsetWidth;
    pista.classList.add("aparecer");
  }
}

function ejecutarReto(config) {
  const { tests, esperados, dificultad, id, solucionOficial } = config;

  const codigo = editor.getValue();
  const divResultado = document.getElementById("resultado");
  divResultado.textContent = "";

  try {
    eval(codigo);

    let salida = "";
    let todosBien = true;

    tests.forEach((test, i) => {
      const usuario = resolver([...test]);
      const ok = JSON.stringify(usuario) === JSON.stringify(esperados[i]);

      if (!ok) todosBien = false;

      salida += 
`► Test ${i+1}
Entrada: ${JSON.stringify(test)}
Tu salida: ${JSON.stringify(usuario)}
Esperado: ${JSON.stringify(esperados[i])}
Estado: ${ok ? "✔ APROBADO" : "✘ FALLÓ"}

`;
    });

    divResultado.textContent = salida;

    if (!todosBien) return;

    // Mostrar modal éxito
    mostrarModal(id);


    // SI NO ESTÁ LOGUEADO → no dar puntos
    if (!usuarioEstaLogueado()) return;

    // Si ya lo completó → no volver a dar puntos
    if (localStorage.getItem("reto" + id) === "completado") return;

    // Sumar puntos
    const nuevos = obtenerPuntos() + puntosPorNivel(dificultad);
    guardarPuntos(nuevos);

    // marcar completado
    localStorage.setItem("reto" + id, "completado");

    actualizarHeaderPuntos();

  } catch (e) {
    divResultado.textContent = "❌ ERROR: " + e;
  }
}
function irAlSiguienteReto(actual) {
  const siguiente = Number(actual) + 1;
  const url = `reto${siguiente}.html`;

  // validar si existe
  fetch(url)
    .then(res => {
      if (res.ok) {
        window.location.href = url;
      } else {
        alert("🎉 ¡Completaste todos los retos disponibles!");
      }
    });
}
