function mostrarSubtemas(cat, e) {
    
    document.querySelectorAll(".categoria").forEach(c => c.classList.remove("activa"));
    e.target.classList.add("activa");

    const panel = document.getElementById("subtemas");
    panel.innerHTML = "";

    const subtemas = contenidoData[cat].subtemas;

    Object.keys(subtemas).forEach(key => {
      const btn = document.createElement("button");
      btn.innerText = subtemas[key].titulo;
      btn.onclick = () => cargarContenido(cat, key, btn);
      panel.appendChild(btn);
    });
  }