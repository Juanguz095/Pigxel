function cargarContenido(cat, sub, btn) {

  document.querySelectorAll(".subtemas button").forEach(b => b.classList.remove("activo"));
  btn.classList.add("activo");

  const data = contenidoData[cat].subtemas[sub];
  const panel = document.getElementById("contenido");

  // ANIMACIONES
  if (cat === "anim") {
    if (cargarAnimaciones(sub, data, panel)) return;
  }

  // CSS
  if (cat === "css") {
    if (cargarCSS(sub, data, panel)) return;
  }

  // JS
  if (cat === "js") {
    if (cargarJS(sub, data, panel)) return;
  }
  //SVG
  if (cat === "svg") {
    if (cargarSVG(sub, data, panel)) return;
  }
  //MEDIA
  if (cat === "media") {
    if (cargarMEDIA(sub, data, panel)) return;
  }

  // Default (si no hay renderer)
  panel.innerHTML = `
    <h2>${data.titulo}</h2>
    <p>${data.texto}</p>
    <pre class="codigo">${data.codigo}</pre>
  `;
}
