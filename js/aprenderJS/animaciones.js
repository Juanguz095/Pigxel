/* Renderers */
const renderers = {
  hovers: renderHovers,
  transitions: renderTransiciones,
  keyframes: renderKeyframes,
  librerias: renderLibrerias,
};
const renderersCSS = {
  tipografia: renderTipografia,
  pseudoelementos: renderPseudoelementos,
  boxmodel: renderBoxmodel,
  selectores: renderSelectores,
};
const renderersJS = {
  variables: renderVariables,
  funciones:renderFunciones,
  clases:renderClases,
  capturaEventos:renderCapturaEventos

};
const renderersSVG = {
  svg: renderSVG,
};
const renderersMEDIA = {
  audio: renderAudio,
  video: renderVideo
};
/* funciones para cargar subtemas */
function cargarAnimaciones(sub, data, panel) {
  if (!renderers[sub]) {
    panel.innerHTML = `<p style="color:red;">⚠ No existe el subtema "${sub}"</p>`;
    return false;
  }
  renderers[sub](data, panel); 
  return true;
}

function cargarCSS(sub, data, panel) {
  if (!renderersCSS[sub]) return false;
  renderersCSS[sub](data, panel);
  return true;
}

function cargarJS(sub, data, panel) {
  if (!renderersJS[sub]) return false;
  renderersJS[sub](data, panel);
  return true;
}

function cargarSVG(sub, data, panel) {
  if (!renderersSVG[sub]) return false;
  renderersSVG[sub](data, panel);
  return true;
}
function cargarMEDIA(sub, data, panel) {
  if (!renderersMEDIA[sub]) return false;
  renderersMEDIA[sub](data, panel);
  return true;
}
/* los ejemplos en si */
function renderHovers(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- Subtema 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <button class="color-hover">Color</button>
    </div>
    <button onclick="toggleCodigo(1)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-1" class="codigo oculto">${data.codigo}</div>

    <!-- Subtema 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <button class="scale-hover">Escala</button>
    </div>
    <button onclick="toggleCodigo(2)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-2" class="codigo oculto">${data.codigo2}</div>

    <!-- Subtema 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <button class="shadow-hover">Sombra</button>
    </div>
    <button onclick="toggleCodigo(3)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-3" class="codigo oculto">${data.codigo3}</div>

    <!-- Subtema 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <button class="border-anim">Borde animado</button>
    </div>
    <button onclick="toggleCodigo(4)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderTransiciones(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- EJEMPLO 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <button class="trans-color">Color suave</button>
    </div>
    <button onclick="toggleCodigo('t1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-t1" class="codigo oculto">${data.codigo}</div>

    <!-- EJEMPLO 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <button class="trans-scale">Escala suave</button>
    </div>
    <button onclick="toggleCodigo('t2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-t2" class="codigo oculto">${data.codigo2}</div>

    <!-- EJEMPLO 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <button class="trans-opacity">Opacidad suave</button>
    </div>
    <button onclick="toggleCodigo('t3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-t3" class="codigo oculto">${data.codigo3}</div>

    <!-- EJEMPLO 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <button class="trans-js" onclick="this.classList.toggle('active')">
        Activar transición
      </button>
    </div>
    <button onclick="toggleCodigo('t4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-t4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderKeyframes(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- EJEMPLO 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <button class="fade-in">Fade in</button>
    </div>
    <button onclick="toggleCodigo('k1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-k1" class="codigo oculto">${data.codigo}</div>

    <!-- EJEMPLO 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <button class="bounce">Rebote</button>
    </div>
    <button onclick="toggleCodigo('k2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-k2" class="codigo oculto">${data.codigo2}</div>

    <!-- EJEMPLO 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <button class="spin">Giro infinito</button>
    </div>
    <button onclick="toggleCodigo('k3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-k3" class="codigo oculto">${data.codigo3}</div>

    <!-- EJEMPLO 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <button class="complex-anim">Animación avanzada</button>
    </div>
    <button onclick="toggleCodigo('k4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-k4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderLibrerias(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- GSAP - EJEMPLO 1 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <div class="gsap-box demo-caja">Mover GSAP</div>
    </div>
    <button onclick="toggleCodigo('lib1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-lib1" class="codigo oculto">${data.codigo2}</div>

    <!-- GSAP - EJEMPLO 2 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <div class="gsap-tl demo-caja">Timeline</div>
    </div>
    <button onclick="toggleCodigo('lib2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-lib2" class="codigo oculto">${data.codigo3}</div>

    <!-- GSAP - EJEMPLO 3 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <div class="gsap-bounce demo-caja">Bounce</div>
    </div>
    <button onclick="toggleCodigo('lib3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-lib3" class="codigo oculto">${data.codigo4}</div>

    <!-- ANIME.JS - EJEMPLO 1 -->
    <p>${data.texto5}</p>
    <div class="demo-area">
      <div class="anime-scale demo-caja">Escala Anime.js</div>
    </div>
    <button onclick="toggleCodigo('lib4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-lib4" class="codigo oculto">${data.codigo5}</div>

    <!-- ANIME.JS - EJEMPLO 2 -->
    <p>${data.texto6}</p>
    <div class="demo-area">
      <div class="anime-move demo-caja">Mover + Rotar</div>
    </div>
    <button onclick="toggleCodigo('lib5')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-lib5" class="codigo oculto">${data.codigo6}</div>

    <!-- ANIME.JS - EJEMPLO 3 -->
    <p>${data.texto7}</p>
    <div class="demo-area">
      <div class="anime-loop demo-caja">Loop Anime</div>
    </div>
    <button onclick="toggleCodigo('lib6')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-lib6" class="codigo oculto">${data.codigo7}</div>
  `;

  /* ============================
     ACTIVAR ANIMACIONES EN VIVO
     ============================ */

  // GSAP 1
  if (window.gsap) {
    gsap.to(".gsap-box", { x: 150, duration: 1.5, ease: "power2.out",repeat: -1 });

    // GSAP timeline
    const tl = gsap.timeline();
    tl.to(".gsap-tl", { x: 150, duration: 1,repeat: -1 })
      .to(".gsap-tl", { y: 80, duration: 1,repeat: -1 })
      .to(".gsap-tl", { rotation: 360, duration: 1,repeat: -1 });

    // GSAP bounce
    gsap.to(".gsap-bounce", {
      y: -30,
      duration: 1.2,
      ease: "elastic.out(5, 0.9)",
      repeat: -1,   // ⬅ INFINITO
      
    });
  }

  // Anime.js ejemplos
  if (window.anime) {
    anime({
      targets: '.anime-scale',
      scale: [1, 1.9],
      duration: 800,
      easing: 'easeOutExpo',
      direction: 'alternate',
      loop: true
    });

    anime({
      targets: '.anime-move',
      translateX: 160,
      rotate: 360,
      duration: 1500,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });

    anime({
      targets: '.anime-loop',
      rotate: [0, 360],
      duration: 2000,
      easing: 'linear',
      direction: 'alternate',
      loop: true
    });
  }
}
function renderBoxmodel(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- Subtema 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <div class="caja">Caja con padding, border y margin</div>
    </div>
    <button onclick="toggleCodigo(1)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-1" class="codigo oculto">${data.codigo}</div>

    <!-- Subtema 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <div class="caja" style="box-sizing:border-box;width:200px;padding:30px;background:#9bf7ff;">
        border-box aplicado
      </div>
    </div>
    <button onclick="toggleCodigo(2)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-2" class="codigo oculto">${data.codigo2}</div>

    <!-- Subtema 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <div class="circulo"></div>
    </div>
    <button onclick="toggleCodigo(3)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-3" class="codigo oculto">${data.codigo3}</div>
  `;
}
function renderPseudoelementos(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- Subtema 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <h3 class="titulo">Título decorado</h3>
    </div>
    <button onclick="toggleCodigo(1)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-1" class="codigo oculto">${data.codigo}</div>

    <!-- Subtema 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <span class="link">Enlace con subrayado animado</span>
    </div>
    <button onclick="toggleCodigo(2)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-2" class="codigo oculto">${data.codigo2}</div>

    <!-- Subtema 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <span class="etiqueta">Etiqueta decorada</span>
    </div>
    <button onclick="toggleCodigo(3)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-3" class="codigo oculto">${data.codigo3}</div>
  `;
}
function renderTipografia(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- Subtema 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <p class="texto">Este es un ejemplo usando line-height y letter-spacing</p>
    </div>
    <button onclick="toggleCodigo(1)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-1" class="codigo oculto">${data.codigo}</div>

    <!-- Subtema 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <p style="font-family:'Poppins',sans-serif;">Fuente importada desde Google Fonts</p>
    </div>
    <button onclick="toggleCodigo(2)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-2" class="codigo oculto">${data.codigo2}</div>

    <!-- Subtema 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <h3 style="font-family:var(--fuente-titulo);">Título con variable</h3>
      <p style="font-family:var(--fuente-texto);">Texto con variable</p>
    </div>
    <button onclick="toggleCodigo(3)" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-3" class="codigo oculto">${data.codigo3}</div>
  `;
}
function renderSelectores(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- BLOQUE 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <p>Ejemplo de selector de etiqueta</p>
      <button class="btn">Botón con clase</button>
      <h3 id="titulo">Título con ID</h3>
    </div>
    <button onclick="toggleCodigo('sel1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-sel1" class="codigo oculto">${data.codigo}</div>

    <!-- BLOQUE 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <ul class="lista">
        <li>Primer ítem</li>
        <li>Segundo ítem</li>
        <li>Tercer ítem</li>
      </ul>
      <input type="text" placeholder="Hover en .btn arriba">
    </div>
    <button onclick="toggleCodigo('sel2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-sel2" class="codigo oculto">${data.codigo2}</div>

    <!-- BLOQUE 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <input type="text" required placeholder="Campo requerido">
      <img src="icon.svg">
      <a href="https://google.com" target="_blank">Enlace externo</a>
    </div>
    <button onclick="toggleCodigo('sel3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-sel3" class="codigo oculto">${data.codigo3}</div>

    <!-- BLOQUE 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <div class="card">
        <h3>Título</h3>
        <p>Párrafo dentro de .card</p>
      </div>

      <h2>Hermano 1</h2>
      <p>Hermano adyacente del h2</p>
      <p>Hermano general</p>
    </div>
    <button onclick="toggleCodigo('sel4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-sel4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderVariables(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- BLOQUE 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <p id="demo-var1">Valor inicial → let edad = 20;</p>
      <button onclick="demoCambiarEdad()" class="btn-demo">Cambiar edad</button>
    </div>
    <button onclick="toggleCodigo('var1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-var1" class="codigo oculto">${data.codigo}</div>

    <!-- BLOQUE 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <p>Tipos básicos:</p>
      <ul>
        <li id="tipo-num">number</li>
        <li id="tipo-str">string</li>
        <li id="tipo-bool">boolean</li>
        <li id="tipo-arr">array</li>
        <li id="tipo-obj">object</li>
      </ul>
      <button onclick="demoTipos()" class="btn-demo">Mostrar valores</button>
    </div>
    <button onclick="toggleCodigo('var2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-var2" class="codigo oculto">${data.codigo2}</div>

    <!-- BLOQUE 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <p><strong>Scope demo:</strong></p>
      <button onclick="demoScope()" class="btn-demo">Probar scope</button>
      <p id="scope-res"></p>
    </div>
    <button onclick="toggleCodigo('var3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-var3" class="codigo oculto">${data.codigo3}</div>

    <!-- BLOQUE 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <p>Buenas prácticas aplicadas:</p>
      <button onclick="demoBuenasPracticas()" class="btn-demo">Mostrar ejemplo</button>
      <p id="bp-res"></p>
    </div>
    <button onclick="toggleCodigo('var4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-var4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderFunciones(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- BLOQUE 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <p><strong>Ejemplo básico:</strong></p>
      <button onclick="demoFuncionBasica()" class="btn-demo">Ejecutar función</button>
      <p id="func-basic-res"></p>
    </div>
    <button onclick="toggleCodigo('func1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-func1" class="codigo oculto">${data.codigo}</div>

    <!-- BLOQUE 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <p><strong>Suma con parámetros:</strong></p>
      <button onclick="demoFuncionParametros()" class="btn-demo">Sumar 5 + 3</button>
      <p id="func-param-res"></p>

      <p style="margin-top:10px;"><strong>Saludo con parámetro por defecto:</strong></p>
      <button onclick="demoFuncionSaludo()" class="btn-demo">Saludar</button>
      <p id="func-saludo-res"></p>
    </div>
    <button onclick="toggleCodigo('func2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-func2" class="codigo oculto">${data.codigo2}</div>

    <!-- BLOQUE 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <p><strong>Tipos de funciones:</strong></p>
      <button onclick="demoTiposFunciones()" class="btn-demo">Ejecutar</button>
      <p id="func-tipos-res"></p>
    </div>
    <button onclick="toggleCodigo('func3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-func3" class="codigo oculto">${data.codigo3}</div>

    <!-- BLOQUE 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <p><strong>Buenas prácticas:</strong></p>
      <button onclick="demoBuenasFunciones()" class="btn-demo">Ver ejemplo</button>
      <p id="func-bp-res"></p>
    </div>
    <button onclick="toggleCodigo('func4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-func4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderClases(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- BLOQUE 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <button onclick="demoClaseBasica()" class="btn-demo">Crear persona</button>
      <p id="clase-basica-res"></p>
    </div>
    <button onclick="toggleCodigo('cls1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-cls1" class="codigo oculto">${data.codigo}</div>

    <!-- BLOQUE 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <button onclick="demoPersonaje()" class="btn-demo">Entrenar personaje</button>
      <p id="clase-personaje-res"></p>
    </div>
    <button onclick="toggleCodigo('cls2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-cls2" class="codigo oculto">${data.codigo2}</div>

    <!-- BLOQUE 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <button onclick="demoHerencia()" class="btn-demo">Probar herencia</button>
      <p id="clase-herencia-res"></p>
    </div>
    <button onclick="toggleCodigo('cls3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-cls3" class="codigo oculto">${data.codigo3}</div>

    <!-- BLOQUE 4 -->
    <p>${data.texto4}</p>
    <div class="demo-area">
      <button onclick="demoClaseBuenasPracticas()" class="btn-demo">Validar usuario</button>
      <p id="clase-bp-res"></p>
    </div>
    <button onclick="toggleCodigo('cls4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-cls4" class="codigo oculto">${data.codigo4}</div>
  `;
}
function renderCapturaEventos(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- BLOQUE 1 -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <button id="btn-evento" class="btn-demo">Haz clic aquí</button>
    </div>
    <button onclick="toggleCodigo('ev1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-ev1" class="codigo oculto">${data.codigo}</div>

    <!-- BLOQUE 2 -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <input id="input-teclas" type="text" placeholder="Escribe algo..." class="input-demo" />
      <p id="tecla-res"></p>
    </div>
    <button onclick="toggleCodigo('ev2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-ev2" class="codigo oculto">${data.codigo2}</div>

    <!-- BLOQUE 3 -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <div id="caja-eventos"
        class="caja-demo"
        style="width:120px;height:120px;background:#ccc;border-radius:10px;">
      </div>
    </div>
    <button onclick="toggleCodigo('ev3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-ev3" class="codigo oculto">${data.codigo3}</div>
  `;

  demoEventoClick();
  demoEventoTeclado();
  demoEventosMouse();
}
function renderSVG(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- SUBTEMA 1: SVG básico -->
    <p>${data.texto}</p>
    <div class="demo-area">
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="40" fill="#84d4ff" stroke="#000" stroke-width="3"></circle>
      </svg>
    </div>
    <button onclick="toggleCodigo('svg1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-svg1" class="codigo oculto">${data.codigo}</div>

    <!-- SUBTEMA 2: SVG con CSS -->
    <p>${data.texto2}</p>
    <div class="demo-area">
      <svg width="150" height="80">
        <rect class="rect-svg-demo" x="10" y="10" width="130" height="60" rx="10"></rect>
      </svg>
    </div>
    <button onclick="toggleCodigo('svg2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-svg2" class="codigo oculto">${data.codigo2}</div>

    <!-- SUBTEMA 3: Paths complejos -->
    <p>${data.texto3}</p>
    <div class="demo-area">
      <svg width="140" height="140">
        <path d="M20 70 Q 60 10, 100 70 T 180 70"
          fill="none"
          stroke="#000"
          stroke-width="4"
          stroke-linecap="round" />
      </svg>
    </div>
    <button onclick="toggleCodigo('svg3')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-svg3" class="codigo oculto">${data.codigo3}</div>

    <!-- SUBTEMA 4: Slider SVG vs Imagen Raster (DEMO PRO) -->
    <p>${data.texto4}</p>

    <div class="demo-area svg-demo-container">
      
      <!-- Imagen raster -->
      <img id="img-raster" src="https://picsum.photos/400/250" class="img-demo" />

      <!-- SVG que aparecerá desde la izquierda -->
      <svg id="svg-demo" width="120" height="120">
        <circle cx="60" cy="60" r="50" fill="#72e0aa" stroke="#000" stroke-width="3"></circle>
      </svg>

      <!-- Slider -->
      <input id="svg-slider" type="range" min="0" max="100" value="0" class="input-demo" />

    </div>

    <button onclick="toggleCodigo('svg4')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-svg4" class="codigo oculto">${data.codigo4}</div>

  `;

  iniciarDemoSVG();
}
function renderAudio(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <!-- SUBTEMA 1: Audio básico -->
    <p>${data.texto}</p>

    <div class="demo-area">
      <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Tu navegador no soporta audio HTML.
      </audio>
    </div>

    <button onclick="toggleCodigo('audio1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-audio1" class="codigo oculto">${data.codigo}</div>

    <!-- SUBTEMA 2: Audio con JavaScript -->
    <p>${data.texto2}</p>

    <div class="demo-area">
      <audio id="audio-demo">
        <source src="audio.mp3">
      </audio>

      <button onclick="document.getElementById('audio-demo').play()">▶ Reproducir</button>
      <button onclick="document.getElementById('audio-demo').pause()">⏸ Pausar</button>
    </div>

    <button onclick="toggleCodigo('audio2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-audio2" class="codigo oculto">${data.codigo2}</div>
  `;
}
function renderVideo(data, panel) {
  panel.innerHTML = `
    <h2>${data.titulo}</h2>

    <p>${data.texto}</p>

    <div class="demo-area">
      <video controls width="300">
        <source src="video.mp4" type="video/mp4">
        Tu navegador no soporta videos HTML.
      </video>
    </div>

    <button onclick="toggleCodigo('video1')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-video1" class="codigo oculto">${data.codigo}</div>

    <p>${data.texto2}</p>

    <div class="demo-area">
      <video id="video-demo" width="300">
        <source src="video.mp4" type="video/mp4">
      </video>

      <div style="margin-top:10px;">
        <button onclick="video.play()">▶ Reproducir</button>
        <button onclick="video.pause()">⏸ Pausar</button>
        <button onclick="video.currentTime = 0">⟲ Reiniciar</button>
        <button onclick="video.playbackRate = 2">⚡ Velocidad x2</button>
      </div>
    </div>

    <button onclick="toggleCodigo('video2')" class="btn-ver-codigo">Ver código</button>
    <div id="codigo-box-video2" class="codigo oculto">${data.codigo2}</div>
  `;

  iniciarDemoVideo();
}


//funciones de los ejemplos de javascript
//variables
function demoCambiarEdad() {
  let edad = 20;
  edad = 21;
  document.getElementById("demo-var1").textContent =
    "Edad modificada → " + edad;
}

function demoTipos() {
  document.getElementById("tipo-num").textContent = "number → 10";
  document.getElementById("tipo-str").textContent = 'string → "Hola"';
  document.getElementById("tipo-bool").textContent = "boolean → true";
  document.getElementById("tipo-arr").textContent = 'array → ["rojo","azul"]';
  document.getElementById("tipo-obj").textContent =
    'object → { nombre: "Alex", edad: 20 }';
}

function demoScope() {
  var z = 30;
  let resultado =
    "var funciona fuera del bloque (z = " + z + ")\n" +
    "let/const generan error (no se pueden mostrar)";

  document.getElementById("scope-res").textContent = resultado;
}

function demoBuenasPracticas() {
  const PI = 3.1416;
  let contador = 0;
  contador++;

  document.getElementById("bp-res").textContent =
    "PI = " + PI + " | contador = " + contador;
}

//funciones
function demoFuncionBasica() {
  function hola() {
    return "¡Hola desde la función!";
  }
  document.getElementById("func-basic-res").innerText = hola();
}

function demoFuncionParametros() {
  function sumar(a, b) {
    return a + b;
  }
  document.getElementById("func-param-res").innerText =
    "Resultado: " + sumar(5, 3);
}

function demoFuncionSaludo() {
  function saludar(nombre = "Visitante") {
    return "Hola, " + nombre + "!";
  }
  document.getElementById("func-saludo-res").innerText = saludar();
}

function demoTiposFunciones() {
  // Función normal
  function normal() {
    return "Función normal";
  }

  // Función flecha
  const flecha = () => "Función flecha";

  // Función dentro de un objeto (método)
  const obj = {
    hablar() {
      return "Método en objeto";
    }
  };

  let resultado =
    normal() + " | " + flecha() + " | " + obj.hablar();

  document.getElementById("func-tipos-res").innerText = resultado;
}

function demoBuenasFunciones() {
  const obtenerUsuario = () => "Alex";

  const crearMensaje = (nombre) => {
    return `Bienvenido, ${nombre}.`;
  };

  const mensaje = crearMensaje(obtenerUsuario());

  document.getElementById("func-bp-res").innerText = mensaje;
}

//clases
function demoClaseBasica() {
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años.";
    }
  }

  let p = new Persona("Alex", 20);
  document.getElementById("clase-basica-res").innerText = p.saludar();
}

let personajeGlobal = null;

function demoPersonaje() {
  class Personaje {
    constructor(nombre) {
      this.nombre = nombre;
      this.energia = 100;
    }
    entrenar() {
      this.energia -= 10;
      return `${this.nombre} entrenó. Energía actual: ${this.energia}`;
    }
  }

  if (!personajeGlobal) personajeGlobal = new Personaje("Goku");

  document.getElementById("clase-personaje-res").innerText =
    personajeGlobal.entrenar();
}

function demoHerencia() {
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    sonido() {
      return "El animal hace un sonido.";
    }
  }

  class Perro extends Animal {
    sonido() {
      return `${this.nombre} dice: ¡Guau!`;
    }
  }

  let perro = new Perro("Rocky");
  document.getElementById("clase-herencia-res").innerText = perro.sonido();
}

function demoClaseBuenasPracticas() {
  class Usuario {
    constructor(nombre, rol) {
      this.nombre = nombre;
      this.rol = rol;
    }
    esAdmin() {
      return this.rol === "admin";
    }
  }

  let u = new Usuario("Alex", "admin");

  document.getElementById("clase-bp-res").innerText =
    u.esAdmin()
      ? "El usuario ES administrador ✔"
      : "El usuario NO es administrador ❌";
}


//captura de eventos
function demoEventoClick() {
  const btn = document.getElementById("btn-evento");

  btn.addEventListener("click", () => {
    btn.textContent = "¡Me hiciste clic!";
    btn.style.background = "#4caf50";
    btn.style.color = "white";
  });
}

function demoEventoTeclado() {
  const input = document.getElementById("input-teclas");
  const res   = document.getElementById("tecla-res");

  input.addEventListener("keyup", (e) => {
    res.textContent = `Última tecla presionada: ${e.key}`;
  });
}

function demoEventosMouse() {
  const caja = document.getElementById("caja-eventos");

  caja.addEventListener("mouseenter", () => {
    caja.style.background = "#2196f3";
  });

  caja.addEventListener("mouseleave", () => {
    caja.style.background = "#ccc";
  });

  caja.addEventListener("click", () => {
    caja.style.background = "#ff9800";
  });
}
//SVG
function iniciarDemoSVG() {
  const img = document.getElementById("img-raster");
  const svg = document.getElementById("svg-demo");
  const slider = document.getElementById("svg-slider");

  if (!img || !svg || !slider) return;

  slider.addEventListener("input", () => {
    const v = slider.value;

    svg.style.left = (-150 + v * 2) + "px";

    svg.style.transform = `translateY(-50%) scale(${1 + v / 70})`;

    img.style.filter = `blur(${v / 15}px)`;
  });
}
//MEDIA
let video;
function iniciarDemoVideo() {
  
  video = document.getElementById("video-demo");  // <--- AQUÍ LO DEFINES

  if (video) {
    video.addEventListener("timeupdate", () => {
      console.log("Tiempo actual:", video.currentTime);
    });
  }
}


//esto es para mostrar el codigo
function toggleCodigo(num) {
  document
    .getElementById("codigo-box-" + num)
    .classList.toggle("oculto");
}