const contenidoData = {
    js: {
      subtemas: {
        variables: {
  titulo: "Variables en JavaScript",
  texto: `Las variables permiten almacenar y manipular información dentro de un programa.
Son uno de los fundamentos principales de JavaScript.

1. Tipos de declaración
JavaScript tiene tres formas de declarar variables:

• var → forma antigua, casi no se usa  
• let → variable modificable  
• const → valor constante que no debe cambiar  

En la práctica moderna, se recomienda usar "let" y "const" para escribir
código más claro y seguro.`,
  codigo: `
// Declaración básica
let edad = 20;
const nombre = "Alex";
var ciudad = "Lima"; // No recomendado

// Modificar valores
edad = 21;

// Usar variables
console.log(nombre);
console.log("Edad:", edad);
`,

  texto2: `2. Tipos de datos
Las variables pueden almacenar distintos tipos de información.

Estos son los más comunes:

• number → números  
• string → texto  
• boolean → true / false  
• array → listas  
• object → estructuras más complejas  
• null / undefined → ausencia de valor  

JavaScript detecta el tipo automáticamente (tipado dinámico).`,
  codigo2: `
let numero = 10;        // number
let saludo = "Hola";    // string
let activo = true;      // boolean
let colores = ["rojo", "azul"]; // array
let persona = { nombre: "Alex", edad: 20 }; // object

console.log(colores[1]);       // "azul"
console.log(persona.nombre);   // "Alex"
`,

  texto3: `3. Scope (alcance)
El alcance determina dónde se puede usar una variable.

• let y const → tienen alcance de bloque  
• var → tiene alcance de función  

Comprender el scope evita errores difíciles de encontrar.`,
  codigo3: `
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(z); // Funciona (var)
console.log(x); // ❌ Error: x no está definida
console.log(y); // ❌ Error: y no está definida
`,

  texto4: `4. Buenas prácticas
Estas reglas te ayudarán a escribir código profesional:

• Usa const siempre que sea posible  
• Usa let solo cuando realmente necesites cambiar el valor  
• Evita var (puede causar bugs por su scope)  
• Usa nombres descriptivos  
• No mezcles idiomas en los nombres (todo en español o todo en inglés)

Seguir estas prácticas hará tu código más ordenado y fácil de mantener.`,
  codigo4: `
// Buenas prácticas
const PI = 3.1416;
let contador = 0;

contador++; // Se permite porque usa let

// Nombres claros
const usuarioLogueado = true;
let intentosRestantes = 5;
`
},

        funciones: {
  titulo: "Funciones en JavaScript",
  texto: `Las funciones son bloques de código reutilizables que permiten ejecutar una tarea específica.
Son esenciales para organizar un programa y evitar repetir código.

1. ¿Qué es una función?
Una función es un conjunto de instrucciones que se ejecutan cuando se llama.

Pueden:
• Recibir parámetros  
• Devolver valores  
• Ser declaradas de distintas formas  
`,
  codigo: `
// Función básica
function saludar() {
  console.log("Hola!");
}

saludar(); // Llamada
`,

  texto2: `2. Funciones con parámetros y retorno
Los parámetros permiten enviar información a la función.
El retorno permite que la función devuelva un resultado.

Esto hace que las funciones sean mucho más útiles y reutilizables.`,
  codigo2: `
// Con parámetros
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log("Resultado:", resultado);

// Parámetros opcionales
function saludar(nombre = "Invitado") {
  console.log("Hola " + nombre);
}

saludar("Alex");
saludar(); // Usa el valor por defecto
`,

  texto3: `3. Tipos de funciones
JavaScript permite diferentes formas de declarar funciones:

• Declaradas  
• Expresiones de función  
• Funciones flecha (arrow functions)  
• Funciones anónimas  
• Funciones dentro de objetos (métodos)

Cada una tiene usos ideales dependiendo del contexto.`,
  codigo3: `
// Función declarada
function multiplicar(x, y) {
  return x * y;
}

// Expresión de función
const dividir = function(a, b) {
  return a / b;
};

// Arrow function (forma moderna)
const restar = (x, y) => x - y;

console.log(multiplicar(4, 3));
console.log(dividir(10, 2));
console.log(restar(10, 7));
`,

  texto4: `4. Buenas prácticas
Para escribir funciones claras y profesionales:

• Usa nombres descriptivos  
• No hagas funciones demasiado largas  
• Evita repetir código  
• Usa funciones flecha para funciones cortas  
• Evita variables globales dentro de funciones  
• Mantén una tarea por función (principio de responsabilidad única)

Seguir estas reglas hace tu código más fácil de mantener y entender.`,
  codigo4: `
// Buenas prácticas
const calcularArea = (base, altura) => base * altura;

function mostrarMensaje(msg) {
  console.log("⚡ " + msg);
}

mostrarMensaje("Listo!");
console.log(calcularArea(5, 3));
`
},
clases: {
  titulo: "Clases en JavaScript",
  texto: `Las clases permiten crear estructuras reutilizables llamadas "objetos".
Son la base de la programación orientada a objetos (POO) y permiten organizar mejor
los programas grandes.

1. ¿Qué es una clase?
Una clase es un molde que define cómo será un objeto:
• Sus propiedades  
• Sus métodos  
• Su comportamiento  

A partir de una clase se pueden crear múltiples objetos llamados "instancias".`,
  codigo: `
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
}

let p1 = new Persona("Alex", 20);
p1.saludar();
`,

  texto2: `2. Métodos y estado interno
Los objetos creados desde una clase pueden guardar información interna y modificarla
mediante métodos.

Esto permite crear mini-programas estructurados y reutilizables.`,
  codigo2: `
class Personaje {
  constructor(nombre) {
    this.nombre = nombre;
    this.energia = 100;
  }

  entrenar() {
    this.energia -= 10;
    console.log(this.nombre + " entrenó. Energía: " + this.energia);
  }
}

let goku = new Personaje("Goku");
goku.entrenar();
`,

  texto3: `3. Herencia (extends)
La herencia permite crear clases basadas en otras, reutilizando código y agregando
características nuevas.

Esto es ideal para evitar duplicación y organizar jerarquías.`,
  codigo3: `
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sonido() {
    console.log("El animal hace un sonido");
  }
}

class Perro extends Animal {
  sonido() {
    console.log(this.nombre + " dice: ¡Guau!");
  }
}

let rocky = new Perro("Rocky");
rocky.sonido();
`,

  texto4: `4. Buenas prácticas
Para escribir clases limpias y profesionales:

• Nombres en singular (Usuario, Producto, Tarea)  
• Métodos con verbos (crearPedido, actualizarEstado)  
• No crear clases innecesarias  
• Mantener pocas responsabilidades por clase  
• Usar herencia solo cuando realmente es útil  

Seguir estas prácticas ayuda a mantener proyectos grandes bajo control.`,
  codigo4: `
class Usuario {
  constructor(nombre, rol) {
    this.nombre = nombre;
    this.rol = rol;
  }

  esAdmin() {
    return this.rol === "admin";
  }
}

let u1 = new Usuario("Alex", "admin");
console.log(u1.esAdmin());
`
},
capturaEventos: {
  titulo: "Captura de Eventos",
  texto: "Los eventos permiten detectar cuando el usuario realiza acciones como clics, teclas o movimientos. La forma más común es usar addEventListener.",
  codigo: `document.getElementById("btn").addEventListener("click", function(){
  alert("Hiciste clic en el botón!");
});`,
  
  texto2: "También puedes capturar eventos del teclado para detectar cuando se escribe en un campo.",
  codigo2: `document.addEventListener("keydown", function(event){
  console.log("Tecla presionada:", event.key);
});`,

  texto3: "Los eventos también pueden aplicarse a elementos dinámicos para animaciones, efectos y cambios visuales.",
  codigo3: `const caja = document.getElementById("caja");
caja.addEventListener("mouseover", ()=>{
  caja.style.background = "#8ecae6";
});
caja.addEventListener("mouseout", ()=>{
  caja.style.background = "#ccc";
});`
},


      }
    },

    css: {
      subtemas: {
        selectores: {
  titulo: "Selectores CSS",
  texto: `Los selectores permiten elegir qué elementos serán afectados por tus reglas CSS.
Son la base fundamental de cualquier hoja de estilos.

1. Selectores básicos
Estos son los más usados y simples de entender:

• Selector de etiqueta → aplica a todos los elementos de ese tipo  
• Selector de clase → se usa para reutilizar estilos  
• Selector por ID → se usa solo una vez por página  

Debes evitar abusar del ID, ya que aumenta la especificidad.`,
  codigo: `
/* Selector de etiqueta */
p {
  color: #ff4fa3;
}

/* Selector de clase */
.btn {
  background: #ffe271;
  padding: 10px 16px;
}

/* Selector por ID */
#titulo {
  font-size: 28px;
  font-weight: bold;
}
`,

  texto2: `2. Selectores avanzados
Permiten aplicar estilos a elementos basados en su estado o posición.

Muy usados en interfaces modernas:`,
  codigo2: `
/* :hover */
.btn:hover {
  background: #ffcd4b;
}

/* :first-child */
.lista li:first-child {
  color: #ff4fa3;
}

/* :nth-child() */
.lista li:nth-child(2) {
  font-weight: bold;
}

/* :not() */
input:not([type="text"]) {
  border-color: red;
}
`,

  texto3: `3. Selectores por atributo
Perfectos para formularios, íconos, imágenes o botones específicos.

Permiten seleccionar elementos basado en su atributo o parte del valor.`,
  codigo3: `
/* Iconos de tipo svg */
img[src$=".svg"] {
  width: 40px;
}

/* inputs obligatorios */
input[required] {
  border: 2px solid #ff4fa3;
}

/* enlaces externos */
a[target="_blank"] {
  color: #4ac7ff;
}
`,

  texto4: `4. Selectores combinadores
Sirven para indicar relaciones entre elementos:

• A B → descendiente  
• A > B → hijo directo  
• A + B → hermano siguiente  
• A ~ B → todos los hermanos siguientes`,
  codigo4: `
/* Descendiente */
.card p {
  color: #222;
}

/* Hijo directo */
.card > h3 {
  color: #ff4fa3;
}

/* Hermano adyacente */
h2 + p {
  font-weight: bold;
}

/* Hermano general */
h2 ~ p {
  color: #555;
}
`
},

        tipografia: {
  titulo: "Tipografía",
  texto: `La tipografía define la personalidad visual del sitio.
Aspectos como la fuente, el peso, el interlineado y el espaciado cambian
totalmente cómo se siente una página.

Aquí aprenderás los conceptos esenciales para un texto legible y atractivo.`,
  codigo: `
.texto {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  letter-spacing: 1px;
}
`,

  texto2: `2. Importar Google Fonts

Puedes usar fuentes profesionales con una sola línea.`,
  codigo2: `
/* En tu <head> */
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

/* Y en CSS */
body {
  font-family: 'Poppins', sans-serif;
}
`,

  texto3: `3. Variables tipográficas

Te permiten tener una fuente consistente en toda la UI.`,
  codigo3: `
:root {
  --fuente-titulo: 'Poppins', sans-serif;
  --fuente-texto: 'Inter', sans-serif;
}

h1 {
  font-family: var(--fuente-titulo);
}
p {
  font-family: var(--fuente-texto);
}
`
},
        pseudoelementos: {
  titulo: "Pseudo-elementos (::before y ::after)",
  texto: `Los pseudo-elementos crean contenido virtual que no existe en el HTML.
Sirven para:

• Decoraciones  
• Sombras  
• Subrayados personalizados  
• Cintas y etiquetas  
• Efectos animados  

Son esenciales para interfaces modernas.`,
  codigo: `
.titulo {
  position: relative;
  font-size: 28px;
  padding-left: 20px;
}

.titulo::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 8px;
  height: 80%;
  background: #ff4fa3;
  border-radius: 4px;
}
`,

  texto2: `2. Efecto de texto con ::after

Muy usado para subrayados modernos animados.`,
  codigo2: `
.link {
  position: relative;
  font-weight: bold;
}

.link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 3px;
  background: #4ac7ff;
  transition: width .3s;
}
.link:hover::after {
  width: 100%;
}
`,

  texto3: `3. Decoraciones completas: cintas, etiquetas y más`,
  codigo3: `
.etiqueta {
  position: relative;
  display: inline-block;
  padding: 10px 16px;
  background: #fbff9b;
  border: 3px solid #000;
}

.etiqueta::after {
  content: "★";
  position: absolute;
  right: -18px;
  top: -10px;
  font-size: 20px;
}
`
},


    boxmodel: {
  titulo: "Modelo de Caja (Box Model)",
  texto: `El modelo de caja define cómo se calcula el tamaño total de cualquier elemento HTML.
Está compuesto por:

1. Content → contenido real  
2. Padding → espacio interno  
3. Border → borde  
4. Margin → espacio externo  

Entender esto permite controlar el diseño con precisión.`,
  codigo: `
.caja {
  width: 200px;
  padding: 20px;
  border: 4px solid #000;
  margin: 30px;
  background: #ffd86b;
}
`,

  texto2: `2. box-sizing

Este atributo cambia la forma en que se calcula el tamaño.
Es vital para evitar diseños rotos.

• content-box (por defecto) → padding y border se suman  
• border-box → el tamaño TOTAL incluye padding y border`,
  codigo2: `
/* Recomendado para todo el sitio */
* {
  box-sizing: border-box;
}
`,

  texto3: `3. Border-radius

Sirve para redondear esquinas.  
Puede ser leve, fuerte o incluso 100% para hacer círculos.`,
  codigo3: `
.circulo {
  width: 120px;
  height: 120px;
  background: #8cf0c6;
  border-radius: 50%;
}
`
},

      }
    },

    anim: {
      subtemas: {
        hovers: {
  titulo: "Hovers y microinteracciones",
  texto: `Las microinteracciones mejoran la sensación de vida en tu interfaz.
En este apartado verás 4 tipos de hovers, cada uno separado, con su propia demo y explicación.

1. Cambio de color

Este es el hover más básico y universal.
Sirve para indicar que un elemento es interactivo.

• Fácil de implementar  
• Muy usado en botones y enlaces  
• Mejora la accesibilidad  
`,
  codigo: `
/* Hover 1: Cambio de color */
.color-hover {
  padding: 12px 18px;
  background: #ff77c0;
  border: 3px solid #000;
  transition: background 0.25s;
}
.color-hover:hover {
  background: #ff4fa3;
}
`,

  texto2: `2. Escala y transformaciones

Aquí el elemento crece o rota ligeramente.
Este efecto da más dinamismo a la UI.

Recomendación:
No uses scale superior a 1.15 o parecerá exagerado.`,
  codigo2: `
/* Hover 2: Escala */
.scale-hover {
  padding: 12px 18px;
  background: #ffe271;
  border: 3px solid #000;
  transition: transform 0.25s;
}
.scale-hover:hover {
  transform: scale(1.12) rotate(-2deg);
}
`,

  texto3: `3. Sombras y profundidad
  
Este hover hace que el elemento parezca elevarse.
Ideal para tarjetas, contenedores y componentes destacados.`,
  codigo3: `
/* Hover 3: Sombras */
.shadow-hover {
  padding: 12px 18px;
  background: #b0f7ff;
  border: 3px solid #000;
  transition: transform 0.25s, box-shadow 0.25s;
}
.shadow-hover:hover {
  transform: translateY(-4px);
  box-shadow: 6px 6px 0 #000;
}
`,

  texto4: `4. Hovers avanzados con pseudo-elementos

Con ::after puedes crear efectos más creativos:
• Subrayados animados  
• Barras deslizantes  
• Bordes dinámicos`,
  codigo4: `
/* Hover 4: Borde animado */
.border-anim {
  padding: 12px 18px;
  background: #fff;
  border: 3px solid #000;
  position: relative;
  overflow: hidden;
}
.border-anim::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #000;
  left: -100%;
  bottom: 0;
  transition: left 0.35s;
}
.border-anim:hover::after {
  left: 0;
}
`
},
        transitions: {
        titulo: "Transiciones",
        texto: `Las transiciones son una forma sencilla de crear animaciones suaves sin necesidad de usar @keyframes.
                Se basan en interpolar automáticamente el cambio entre dos estados del elemento: el estado inicial y el estado “final”, 
                usualmente definido por un :hover, una clase añadida o un cambio en el estilo mediante JavaScript.
                Son perfectas para:

                • Microinteracciones rápidas

                • Efectos de foco, hover o active

                • Cambios en componentes (modales, tarjetas, botones)

                • Animaciones que no requieren una línea de tiempo compleja
                
                1. Transición de color

                Este es el tipo más común de transición.
                Se usa para indicar cambios de estado (hover, focus, active).

                • Muy ligera y eficiente  
                • Ideal para botones, links y tarjetas  
                • Genera un feedback visual claro
                
                `,    
        
        codigo: `
/* Transición 1: Cambio de color */
.trans-color {
  padding: 12px 18px;
  background: #ffd56b;
  border: 3px solid #000;
  transition: background-color 0.3s ease;
}
.trans-color:hover {
  background-color: #ffb700;
}
`,      texto2: `2. Transición de tamaño con transform

                Usar transform es la manera más eficiente de alterar tamaño o posición.
                Es animación GPU-friendly, más suave y rápida.

                Recomendación:
                Evita animar width/height directamente, usa transform para mejor rendimiento.`,
                
        codigo2: `
/* Transición 2: Escala suave */
.trans-scale {
  padding: 12px 18px;
  background: #baffc9;
  border: 3px solid #000;
  transition: transform 0.25s ease-out;
}
.trans-scale:hover {
  transform: scale(1.15);
}
`,

        texto3: `3. Transición de opacidad (Aparición suave)

        Perfecto para efectos de aparición y desaparición.
        Muy usado en tooltips, modales, alerts y elementos dinámicos.

        Ventaja:
        La opacidad es una propiedad muy liviana para animar.`, 
                
        codigo3: `
/* Transición 3: Opacidad */
.trans-opacity {
  padding: 12px 18px;
  background: #d4bfff;
  border: 3px solid #000;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}
.trans-opacity:hover {
  opacity: 1;
}
`,
        texto4: `4. Transición activada con JavaScript (añadiendo una clase)

Las transiciones no solo se usan con hover.
También pueden activarse dinámicamente con JavaScript.

Esto permite:
• Menús que se abren  
• Modales que aparecen  
• Tarjetas que se expanden  
• Interacciones controladas por lógica

CSS hace la animación, JS cambia el estado.`,
  codigo4: `
/* Transición 4: Activada con JS */
.trans-js {
  padding: 12px 18px;
  background: #fff;
  border: 3px solid #000;
  transition: transform 0.35s ease;
}
.trans-js.active {
  transform: translateX(20px);
}

/* Ejemplo JS:
document.querySelector('.trans-js')
        .classList.toggle('active');
*/
`
},
        keyframes: {
  titulo: "Animaciones con @keyframes",

  texto: `
Las animaciones con @keyframes son mucho más potentes que las transiciones.
Te permiten definir una línea de tiempo completa, con varios pasos y
cambios progresivos en el estilo.

Mientras que una transición solo anima de A → B, los keyframes pueden animar:

• De A → B → C → D  
• Repetirse infinitamente  
• Rebotar, rotar, oscilar, parpadear  
• Cambiar color, tamaño, posición, opacidad y más  

Se usan cuando necesitas animaciones más complejas, repetitivas o que no
dependen exclusivamente de un hover.

1. Animación de aparición (fade-in)

Este es uno de los usos más comunes.
Sirve para que un elemento aparezca de manera suave y elegante.

Ideal para:
• Tarjetas  
• Secciones que entran cuando cargas la página  
• Textos que deben aparecer gradualmente  
  `,

  codigo: `
/* Keyframe 1: Fade-in */
@keyframes fadeInKey {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  padding: 12px 18px;
  background: #b9ffc8;
  border: 3px solid #000;
  animation: fadeInKey 1s ease forwards;
}
`,

  texto2: `
2. Animación de rebote (bounce)

Esta animación imita un movimiento elástico.
Es útil para llamar la atención sin ser molesto.

Usos recomendados:
• Botones de llamada a la acción
• Indicadores de scroll
• Elementos gamificados
  `,

  codigo2: `
/* Keyframe 2: Rebote */
@keyframes bounceKey {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.bounce {
  padding: 12px 18px;
  background: #ffe8a3;
  border: 3px solid #000;
  animation: bounceKey 0.8s ease-in-out infinite;
}
`,

  texto3: `
3. Animación de giro infinito (spin)

Un clásico indispensable.
Perfecta para loaders, iconos, engranajes o cualquier cosa que gire.

Detalles:
• Es ligera
• No consume muchos recursos
• Funciona bien junto con transform-origin
  `,

  codigo3: `
/* Keyframe 3: Giro infinito */
@keyframes spinKey {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spin {
  padding: 12px 18px;
  background: #d4c3ff;
  border: 3px solid #000;
  animation: spinKey 1.2s linear infinite;
}
`,

  texto4: `
4. Animación compleja con múltiples etapas

Aquí combinamos desplazamiento, opacidad y rotación.
Esto demuestra el verdadero poder de @keyframes.

Usos:
• Entradas de componentes dinámicos
• Efectos estéticos en sitios creativos
• Elementos de net art
  `,

  codigo4: `
/* Keyframe 4: Animación avanzada */
@keyframes complexKey {
  0%   { transform: translateY(20px) rotate(-5deg); opacity: 0; }
  40%  { transform: translateY(-5px) rotate(2deg);  opacity: 1; }
  80%  { transform: translateY(0px) rotate(0deg);   opacity: 1; }
  100% { transform: translateY(2px); }
}

.complex-anim {
  padding: 12px 18px;
  background: #ffc7e2;
  border: 3px solid #000;
  animation: complexKey 1s ease forwards;
}
`
},

        librerias: {
  titulo: "Librerías externas (GSAP, Anime.js)",
  texto: "Las librerías externas permiten crear animaciones avanzadas, fluidas y con un control total sobre cada aspecto del movimiento. Son ideales para proyectos profesionales donde se necesitan animaciones precisas, efectos complejos o secuencias sincronizadas. Las dos más usadas son GSAP y Anime.js.",

  texto2: "GSAP es una librería extremadamente poderosa utilizada por grandes empresas gracias a su precisión y rendimiento. Este ejemplo muestra un movimiento suave hacia la derecha usando GSAP.",
  codigo2: `
gsap.to(".gsap-box", {
  x: 150,
  duration: 1.5,
  ease: "power2.out"
});
`,

  texto3: "GSAP permite crear timelines, secuencias de animación que se ejecutan una detrás de otra de manera profesional.",
  codigo3: `
const tl = gsap.timeline();
tl.to(".gsap-tl", { x: 150, duration: 1 })
  .to(".gsap-tl", { y: 80, duration: 1 })
  .to(".gsap-tl", { rotation: 360, duration: 1 });
`,

  texto4: "Las animaciones con easings avanzados, como elastic o bounce, permiten crear efectos de rebote o elasticidad de manera muy natural.",
  codigo4: `
gsap.to(".gsap-bounce", {
  y: -80,
  duration: 1.2,
  ease: "elastic.out(1, 0.4)"
});
`,

  texto5: "Anime.js es una librería ligera con una sintaxis muy elegante. Este ejemplo aumenta el tamaño suavemente.",
  codigo5: `
anime({
  targets: '.anime-scale',
  scale: [1, 1.3],
  duration: 800,
  easing: 'easeOutExpo'
});
`,

  texto6: "También permite combinar transformaciones como desplazamiento y rotación en una sola animación.",
  codigo6: `
anime({
  targets: '.anime-move',
  translateX: 160,
  rotate: 360,
  duration: 1500,
  easing: 'easeInOutSine'
});
`,

  texto7: "Con Anime.js también se pueden hacer animaciones infinitas como rotaciones continuas.",
  codigo7: `
anime({
  targets: '.anime-loop',
  rotate: [0, 360],
  duration: 2000,
  easing: 'linear',
  loop: true
});
`
}

      }
    },


    svg: {
      subtemas: {
        svg: {
  titulo: "Gráficos SVG (Vectoriales Escalables)",

  texto: `
Los SVG son gráficos vectoriales que pueden escalarse infinitamente sin perder calidad.

A diferencia de las imágenes PNG o JPG:
• No se pixelan  
• Mantienen líneas perfectas al hacer zoom  
• Se pueden animar, modificar con CSS o JavaScript  
• Se integran directamente en el HTML como si fueran etiquetas

Son ideales para:
• Iconos  
• Logos  
• Figuras geométricas  
• Interfaces  
• Mapas, gráficos, visualizaciones  
• Net art y animaciones con precisión absoluta

1. SVG básico: un círculo vectorial

Un SVG simple puede contener figuras como:
• Círculos  
• Rectángulos  
• Líneas  
• Polígonos  
• Paths complejos  
  `,

  codigo: `
<!-- SVG básico -->
<svg width="120" height="120">
  <circle cx="60" cy="60" r="40" 
    fill="#84d4ff" 
    stroke="#000" 
    stroke-width="3" />
</svg>
`,

  texto2: `
2. SVG con estilos y colores desde CSS

Una de las ventajas del SVG es poder darle estilo igual que a cualquier elemento HTML.
Puedes cambiar colores, bordes, incluso animarlos.

Esto permite diseños limpios y escalables sin necesidad de imágenes externas.
  `,

  codigo2: `
/* CSS */
svg .rect {
  fill: #ffcd75;
  stroke: #000;
  stroke-width: 3;
}

svg .rect:hover {
  fill: #ffa31a;
}

/* HTML */
<svg width="150" height="80">
  <rect class="rect" x="10" y="10" width="130" height="60" rx="10" />
</svg>
`,

  texto3: `
3. Paths y formas complejas

El verdadero poder del SVG está en los "paths".
Con ellos puedes dibujar lo que quieras:
• Logos  
• Formas orgánicas  
• Personajes  
• Iconos complejos  
• Letras personalizadas  

Un path se define con coordenadas, pero puedes usar cualquier editor vectorial (Figma, Illustrator, Inkscape) y exportarlo como SVG.
  `,

  codigo3: `
<!-- Path complejo -->
<svg width="140" height="140">
  <path d="M20 70 Q 60 10, 100 70 T 180 70"
    fill="none"
    stroke="#000"
    stroke-width="4"
    stroke-linecap="round" />
</svg>
`,

  texto4: `
4. Diferencia real entre PNG/JPG y SVG al escalar

Para demostrarlo haremos un mini-experimento con JavaScript:

• Tendrás una imagen JPG de fondo  
• Tendrás un SVG encima  
• Habrá un slider para aumentar el tamaño  

A medida que el slider sube:
✓ La imagen JPG se vuelve borrosa  
✓ El SVG se mantiene nítido y perfecto  
✓ El usuario entiende visualmente qué es un gráfico vectorial  

Este ejercicio es excelente para:
• Clases  
• Demos interactivas  
• Presentaciones  
• Tu página o curso de JavaScript/CSS  
  `,

  codigo4: `
<!-- HTML -->
<div class="svg-demo-container">
  <img id="img-raster" src="tu-imagen.jpg" class="img-demo" />
  
  <svg id="svg-demo" width="120" height="120">
    <circle cx="60" cy="60" r="50" 
      fill="#72e0aa" 
      stroke="#000" 
      stroke-width="3" />
  </svg>

  <input id="svg-slider" type="range" min="100" max="400" value="120" />
</div>

<!-- CSS -->
.svg-demo-container {
  position: relative;
  width: 400px;
  margin: 15px auto;
  text-align: center;
}

.img-demo {
  width: 100%;
  transition: filter 0.3s;
}

#svg-demo {
  position: absolute;
  top: 20px;
  left: calc(50% - 60px);
  transition: transform 0.3s;
}

#svg-slider {
  width: 100%;
  margin-top: 15px;
}

/* JavaScript */
const img = document.getElementById("img-raster");
const svg = document.getElementById("svg-demo");
const slider = document.getElementById("svg-slider");

slider.addEventListener("input", () => {
  const size = slider.value;

  // Escalar SVG sin perder calidad
  svg.style.transform = \`scale(\${size / 120})\`;

  // Imagen raster se vuelve borrosa a medida que crece
  img.style.filter = \`blur(\${(size - 120) / 25}px)\`;
});
`
}

      }
    },

    media: {
      subtemas: {
        audio: {
  titulo: "Audio HTML",

  texto: `El elemento audio permite incrustar sonidos, música o efectos en una página web.

El navegador soporta formatos como:
• MP3 (más común)
• WAV (calidad alta, archivos pesados)
• OGG (abierto y ligero)

Ventajas del audio en HTML:
• No necesitas plugins externos  
• Compatible con móviles  
• Se puede controlar con JavaScript  
• Permite reproducir, pausar, avanzar y ajustar volumen  

Controles más usados:
• controls → muestra los botones del reproductor  
• autoplay → inicia solo (algunos navegadores lo bloquean)  
• loop → se repite infinitamente  
• muted → inicia silenciado  
• preload → define cómo cargar el archivo  
  `,

  codigo: `
<!-- AUDIO BÁSICO -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Tu navegador no soporta audio HTML.
</audio>
`,

  texto2: `
2. Control avanzado del audio con JavaScript

Puedes manejar el audio desde código:
• Reproducir
• Pausar
• Cambiar volumen
• Detectar eventos (play, pause, ended)

Esto es útil para:
• Videojuegos en JS  
• Sitios interactivos  
• Páginas educativas  
• Net art sonoro  
  `,

  codigo2: `
// HTML
<audio id="audio-demo">
  <source src="audio.mp3">
</audio>
<button onclick="document.getElementById('audio-demo').play()">Reproducir</button>
<button onclick="document.getElementById('audio-demo').pause()">Pausar</button>

// JS opcional
const audio = document.getElementById("audio-demo");
audio.addEventListener("ended", () => {
  console.log("El audio terminó.");
});
`
},

        video: {
  titulo: "Video HTML",

  texto: `
1. Video HTML: integración de clips y contenido multimedia

El elemento video es ideal para:
• Tutoriales
• Clases grabadas
• Trailers
• Cinemáticas en juegos
• Fondos animados (background-video)
• Proyectos de arte visual

Formatos aceptados:
• MP4 (más compatible)
• WebM (moderno y ligero)
• OGG (alternativa abierta)

Atributos más importantes:
• controls → botones del reproductor  
• autoplay → inicia solo  
• loop → repite infinito  
• muted → necesario para autoplay  
• poster → imagen previa  
• width / height → tamaño del video  
  `,

  codigo: `
<!-- VIDEO BÁSICO -->
<video controls width="300">
  <source src="video.mp4" type="video/mp4">
  Tu navegador no soporta videos HTML.
</video>
`,

  texto2: `
2. Video interactivo con JavaScript

Puedes controlar un video igual que un audio:

• play()
• pause()
• currentTime = 10 (saltar a un segundo específico)
• video.playbackRate = 2 (velocidad ×2)
• agregar botones personalizados
• activar eventos: play, pause, ended, timeupdate

Esto permite crear:
• Reproductores personalizados
• Videoclips interactivos
• Arte audiovisual reactivo
• Sistemas educativos con subtítulos dinámicos
  `,

  codigo2: `
// HTML
<video id="video-demo" width="300">
  <source src="video.mp4">
</video>

<button onclick="video.play()">▶ Reproducir</button>
<button onclick="video.pause()">⏸ Pausar</button>
<button onclick="video.currentTime = 0">⟲ Reiniciar</button>
<button onclick="video.playbackRate = 2">⚡ Velocidad x2</button>

// JS
const video = document.getElementById("video-demo");

video.addEventListener("timeupdate", () => {
  console.log("Tiempo actual:", video.currentTime);
});
`
}

      }
    }
  };