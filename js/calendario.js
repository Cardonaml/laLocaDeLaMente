$(function () {
  $("#calendario").datepicker();
});

//web storage
function iniciar() {
  var boton = document.getElementById("agendar");
  boton.addEventListener("click", nuevoTurno, false);
}
function nuevoTurno() {
  var nombre = document.querySelector("#nombre").value;
  var telefono = document.querySelector("#telefono").value;
  var mail = document.querySelector("#mail").value;
  var opciones = document.querySelector("#opciones").value;
  var fecha = document.querySelector("#calendario").value;
  var hora = document.querySelector("#hora").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("mail", mail);
  localStorage.setItem("opciones", opciones);
  localStorage.setItem("fecha", fecha);
  localStorage.setItem("hora", hora);
  mostrarTurno();
}

function mostrarTurno() {
  var datosResultado = document.querySelector("#datosResultado");

  var nombre = localStorage.getItem("nombre");
  var telefono = localStorage.getItem("telefono");
  var mail = localStorage.getItem("mail");
  var opciones = localStorage.getItem("opciones");
  var fecha = localStorage.getItem("fecha");
  var hora = localStorage.getItem("hora");

  datosResultado.innerHTML =
    "<p>Nombre: " +
    nombre +
    "<br>" +
    "Telefono:" +
    telefono +
    "<br>" +
    "mail: " +
    mail +
    "<br>" +
    "Tipo: " +
    opciones +
    "<br>" +
    "Fecha: " +
    fecha +
    "<br>" +
    "Hora: " +
    hora +
    "</p>";

  // limpiar storage
  localStorage.clear();
}
window.addEventListener("load", iniciar);
