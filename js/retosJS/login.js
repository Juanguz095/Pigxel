document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-login");
  const btnSesion = document.getElementById("btn-usuario");
  const btnCerrar = document.getElementById("cerrar-login");

  const formLogin = document.getElementById("form-login");
  const formRegistro = document.getElementById("form-registro");

  const btnLogin = document.getElementById("btn-login");
  const btnRegistrar = document.getElementById("btn-registrar");

  const irRegistro = document.getElementById("ir-registro");
  const irLogin = document.getElementById("ir-login");

  function cargarSesion() {
    const usuario = localStorage.getItem("usuario");
    const puntos = localStorage.getItem("puntos") || 0;

    const puntosUI = document.querySelector(".header-puntos, #header-puntos");

    if (puntosUI) puntosUI.textContent = `PUNTOS: ${puntos}`;
    btnSesion.textContent = usuario ? usuario + " 🐷" : "INICIAR SESIÓN";
  }

  cargarSesion();

  btnSesion.addEventListener("click", () => modal.style.display = "flex");
  btnCerrar.addEventListener("click", () => modal.style.display = "none");

  irRegistro.addEventListener("click", () => {
    formLogin.style.display = "none";
    formRegistro.style.display = "block";
    document.getElementById("titulo-login").textContent = "Registrarse";
  });

  irLogin.addEventListener("click", () => {
    formLogin.style.display = "block";
    formRegistro.style.display = "none";
    document.getElementById("titulo-login").textContent = "Iniciar Sesión";
  });

  btnRegistrar.addEventListener("click", () => {
    const u = document.getElementById("reg-user").value.trim();
    const p = document.getElementById("reg-pass").value.trim();

    if (!u || !p) return alert("Completa todos los campos");

    localStorage.setItem("usuario", u);
    localStorage.setItem("password", p);
    localStorage.setItem("puntos", 0);

    alert("Cuenta creada 🎉");
    irLogin.click();
  });

  btnLogin.addEventListener("click", () => {
    const u = document.getElementById("login-user").value.trim();
    const p = document.getElementById("login-pass").value.trim();

    if (u === localStorage.getItem("usuario") &&
        p === localStorage.getItem("password")) {

      alert("Sesión iniciada 🐷✨");
      localStorage.setItem("usuarioLogueado", "true");
      modal.style.display = "none";
      cargarSesion();

    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });

});
