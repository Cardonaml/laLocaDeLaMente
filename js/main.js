// Controles de Video
const media = document.getElementById("media");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (media.paused || media.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    media.play();
  } else {
    media.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

//Barra de desplazamiento

var video = document.getElementById("media");
var pBar = document.getElementById("barra");
video.addEventListener(
  "timeupdate",
  function () {
    var percent = Math.floor((100 / video.duration) * video.currentTime);
    pBar.value = percent;
    pBar.getElementsByTagName("span")[0].innerHTML = percent;
  },
  false
);

//Efecto Máquina de Escribir
var text = document.getElementById("tipeado");
var str = text.innerHTML;

text.innerHTML = "";

var speed = 200;
var i = 0;

function typeWriter() {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, speed);

//CANVAS

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var colors = [
  "rgb(63, 61, 86)",
  "rgb(121, 125, 127)",
  "rgb(0, 191, 166)",
  "rgb(47, 46, 65)",
  "rgb(242, 201, 76)",
];

//Horizonte
ctx.beginPath();
ctx.fillStyle = colors[0];
ctx.moveTo(0, 230);
ctx.lineTo(285, 230);
ctx.stroke();
ctx.closePath();

//piedraIzq
ctx.beginPath();
ctx.fillStyle = colors[0];
ctx.arc(25, 230, 18, Math.PI, 1.5 * Math.PI);
ctx.lineTo(40, 212);
ctx.arc(40, 230, 18, Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//piedraDer
ctx.beginPath();
ctx.fillStyle = colors[0];
ctx.arc(65, 230, 10, Math.PI, 1.5 * Math.PI);
ctx.lineTo(85, 220);
ctx.arc(85, 230, 10, Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//copaMid
ctx.beginPath();
ctx.strokeStyle = colors[0];
ctx.fillStyle = colors[0];
ctx.ellipse(225, 150, 15, 30, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//copaIzq
ctx.beginPath();
ctx.strokeStyle = colors[1];
ctx.fillStyle = colors[1];
ctx.ellipse(185, 80, 40, 70, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//copaDer
ctx.beginPath();
ctx.strokeStyle = colors[1];
ctx.fillStyle = colors[1];
ctx.ellipse(267, 110, 30, 60, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//troncoDer
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(260, 230);
ctx.quadraticCurveTo(280, 120, 265, 80);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//troncoMid
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(220, 230);
ctx.quadraticCurveTo(230, 170, 225, 140);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//troncoIzq
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(180, 230);
ctx.quadraticCurveTo(200, 120, 185, 40);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//ramaIzqCopaizq
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(155, 80);
ctx.lineTo(190, 105);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//ramaDerCopaizq
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(220, 80);
ctx.lineTo(192, 115);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//ramaIzqCopamid
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(226, 160);
ctx.lineTo(215, 150);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//ramaDerCopamid
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(227, 165);
ctx.lineTo(235, 160);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//ramaIzqCopader
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(270, 130);
ctx.lineTo(250, 110);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//ramaDerCopader
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.moveTo(272, 140);
ctx.lineTo(290, 125);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//imagenChica
window.onload = function () {
  var img = document.getElementById("chica");
  ctx.drawImage(img, 60, 110);
};

//barraCartel
ctx.beginPath();
ctx.strokeStyle = colors[0];
ctx.lineCap = "round";
ctx.moveTo(140, 175);
ctx.lineTo(155, 140);
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

//cartel
CanvasRenderingContext2D.prototype.roundRect = function (
  x,
  y,
  width,
  height,
  radius
) {
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  this.beginPath();
  this.moveTo(x + radius, y);
  this.arcTo(x + width, y, x + width, y + height, radius);
  this.arcTo(x + width, y + height, x, y + height, radius);
  this.arcTo(x, y + height, x, y, radius);
  this.arcTo(x, y, x + width, y, radius);
  this.closePath();
  return this;
};

var posX = canvas.width / 2 - 30;
var posY = canvas.height / 2 - 40;

ctx.roundRect(posX, posY, 60, 50, 10);
ctx.fillStyle = colors[0];
ctx.fill();

//caritaFeliz donde se aplica la transformación

ctx.beginPath();
ctx.fillStyle = colors[4];
ctx.lineWidth = 2;
ctx.arc(155, 120, 18, 0, Math.PI * 2, true); // Círculo externo
ctx.moveTo(163, 123);
ctx.arc(155, 123, 8, 0, Math.PI, false); // Boca (contra reloj)

ctx.stroke();
ctx.fill();

window.addEventListener("load", ctx, false);
