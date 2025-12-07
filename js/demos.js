/* ==========================================================
   SISTEMA DE EJEMPLOS DINÁMICOS PARA LA SECCIÓN ANIMACIONES
   GranjaChanchito — estilo pixel retro 🐷✨
========================================================== */

/* Cada demo contiene:
   - titulo
   - descripcion
   - html: lo que se renderiza como demostración
   - css: estilos de la demo
   - js: (opcional) comportamiento dinámico
*/
const demosAnimacion = {
  keyframes_basico: {
    titulo: "Animación con @keyframes",
    descripcion: "Una animación clásica de mover un cuadrado usando CSS puro.",
    html: `<div class="demo-box anim-mover"></div>`,
    css: `
.demo-box{
  width:60px;
  height:60px;
  background: var(--rosa);
  border:3px solid #000;
  position:relative;
}
@keyframes moverCaja{
  0%{ left:0; }
  50%{ left:120px; }
  100%{ left:0; }
}
.anim-mover{
  animation:moverCaja 2s infinite ease-in-out;
}
`,
    js: `// No requiere JavaScript`
  },

  hover_interactivo: {
    titulo: "Hover Interactivo",
    descripcion: "El elemento crece y cambia de color cuando pasas el mouse.",
    html: `<div class="demo-hover">Pasa el mouse</div>`,
    css: `
.demo-hover{
  width:180px;
  padding:20px;
  background:#f8e7c5;
  border:3px solid #000;
  text-align:center;
  transition:0.25s;
  font-family:"Press Start 2P";
  font-size:10px;
}
.demo-hover:hover{
  transform:scale(1.15);
  background:var(--rosa);
  color:#fff;
}
`,
    js: `// Solo usa efectos CSS`
  },

  js_animado: {
    titulo: "Animación con JavaScript",
    descripcion: "Un círculo que cambia de color y tamaño con JS.",
    html: `<div class="demo-circulo"></div>`,
    css: `
.demo-circulo{
  width:60px;
  height:60px;
  border-radius:50%;
  background:var(--rosa);
  border:3px solid #000;
  transition:0.2s;
}
`,
    js: `
const circulo = document.querySelector(".demo-circulo");
setInterval(()=>{
  const size = 50 + Math.random()*40;
  circulo.style.width = size+"px";
  circulo.style.height = size+"px";
  circulo.style.background = 
    "hsl("+(Math.random()*360)+", 80%, 60%)";
}, 700);
`
  },

  maquina_escribir: {
    titulo: "Máquina de escribir",
    descripcion: "Texto aparece letra por letra como animación retro.",
    html: `<div class="demo-type"></div>`,
    css: `
.demo-type{
  font-family:"Press Start 2P";
  font-size:12px;
  padding:10px;
  border:3px solid #000;
  background:#fff3;
}
`,
    js: `
const texto = "Hola! Soy una animación tipo máquina de escribir 🐷✨";
const cont = document.querySelector(".demo-type");
let i=0;
function escribir(){
  cont.textContent = texto.slice(0,i);
  i++;
  if(i <= texto.length){
    setTimeout(escribir,60);
  }
}
escribir();
`
  }
};

/* ==========================================================
   FUNCIÓN PARA MOSTRAR UNA DEMO
========================================================== */
function mostrarDemoAnimacion(key) {
  const data = demosAnimacion[key];
  const panel = document.getElementById("contenido");

  panel.innerHTML = `
    <h2>${data.titulo}</h2>
    <p>${data.descripcion}</p>

    <!-- CONTENEDOR DE LA DEMO -->
    <div class="demo-contenedor">
      ${data.html}
    </div>

    <h3>Código CSS</h3>
    <div class="codigo">${data.css}</div>

    <h3>Código JS</h3>
    <div class="codigo">${data.js}</div>
  `;

  /* Insertar estilos dinámicamente */
  const styleTag = document.createElement("style");
  styleTag.innerHTML = data.css;
  document.body.appendChild(styleTag);

  /* Ejecutar código JS */
  if(data.js.trim() !== "// No requiere JavaScript"){
    setTimeout(()=>{ eval(data.js); }, 100);
  }
}
